import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../store/UserContext';

/**
 * 사용자 정보를 실시간으로 조회하는 훅
 * - Firebase 사용자 정보를 기준으로 일관된 닉네임 표시
 * - 캐싱을 통한 성능 최적화
 * - 로딩 상태 관리
 */

// 사용자 정보 캐시
const userCache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5분

export const useUserInfo = (userId) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getUserInfo } = useContext(UserContext);

  useEffect(() => {
    if (!userId) {
      setUserInfo(null);
      setLoading(false);
      return;
    }

    const fetchUserInfo = async () => {
      try {
        setLoading(true);
        setError(null);

        // 캐시 확인
        const cached = userCache.get(userId);
        if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
          setUserInfo(cached.data);
          setLoading(false);
          return;
        }

        // Firebase에서 사용자 정보 조회
        const user = await getUserInfo(userId);
        
        if (user) {
          // 캐시에 저장
          userCache.set(userId, {
            data: user,
            timestamp: Date.now()
          });
          
          setUserInfo(user);
        } else {
          setUserInfo(null);
        }
      } catch (err) {
        console.error('사용자 정보 조회 실패:', err);
        setError(err);
        setUserInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [userId, getUserInfo]);

  return { userInfo, loading, error };
};

/**
 * 여러 사용자 정보를 한 번에 조회하는 훅
 */
export const useMultipleUserInfo = (userIds) => {
  const [usersInfo, setUsersInfo] = useState(new Map());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getUserInfo } = useContext(UserContext);

  useEffect(() => {
    if (!userIds || userIds.length === 0) {
      setUsersInfo(new Map());
      setLoading(false);
      return;
    }

    const fetchMultipleUserInfo = async () => {
      try {
        setLoading(true);
        setError(null);

        const newUsersInfo = new Map();
        const uncachedUserIds = [];

        // 캐시된 사용자 정보 먼저 확인
        for (const userId of userIds) {
          const cached = userCache.get(userId);
          if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
            newUsersInfo.set(userId, cached.data);
          } else {
            uncachedUserIds.push(userId);
          }
        }

        // 캐시되지 않은 사용자 정보 조회
        const fetchPromises = uncachedUserIds.map(async (userId) => {
          try {
            const user = await getUserInfo(userId);
            if (user) {
              // 캐시에 저장
              userCache.set(userId, {
                data: user,
                timestamp: Date.now()
              });
              newUsersInfo.set(userId, user);
            }
          } catch (err) {
            console.error(`사용자 ${userId} 정보 조회 실패:`, err);
          }
        });

        await Promise.all(fetchPromises);
        setUsersInfo(newUsersInfo);
      } catch (err) {
        console.error('다중 사용자 정보 조회 실패:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMultipleUserInfo();
  }, [userIds, getUserInfo]);

  return { usersInfo, loading, error };
};

/**
 * 사용자 정보 캐시 상태 확인
 */
export const getUserCacheStats = () => {
  return {
    size: userCache.size,
    entries: Array.from(userCache.entries()).map(([id, data]) => ({
      id,
      nickname: data.data.nickname,
      timestamp: data.timestamp,
      age: Date.now() - data.timestamp
    }))
  };
};

/**
 * 캐시 무효화 함수
 */
export const invalidateUserCache = (userId) => {
  if (userId) {
    userCache.delete(userId);
  } else {
    userCache.clear();
  }
};

// 전역으로 캐시 무효화 함수 노출 (개발자 도구에서 사용 가능)
if (typeof window !== 'undefined') {
  window.invalidateUserCache = invalidateUserCache;
  window.getUserCacheStats = getUserCacheStats;
}
