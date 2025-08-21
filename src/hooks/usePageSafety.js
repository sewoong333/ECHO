import { useState, useEffect, useCallback } from 'react';

// 페이지 안전성을 위한 커스텀 훅
export const usePageSafety = (pageName = 'Page') => {
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // 페이지 초기화
    const initPage = async () => {
      try {
        // 최소 대기 시간으로 로딩 상태 표시
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // React strict mode에서 두 번 실행되는 것 방지
        if (!isReady) {
          setIsReady(true);
        }
        
        setLoading(false);
        setHasError(false);
      } catch (error) {
        console.error(`${pageName} 초기화 실패:`, error);
        setHasError(true);
        setLoading(false);
      }
    };

    initPage();
  }, [pageName, isReady]);

  // 에러 복구 함수
  const handleError = useCallback((error) => {
    console.error(`${pageName} 에러:`, error);
    setHasError(true);
    setRetryCount(prev => prev + 1);
  }, [pageName]);

  // 재시도 함수
  const retry = useCallback(() => {
    setHasError(false);
    setLoading(true);
    setRetryCount(prev => prev + 1);
    
    // 페이지 새로고침 대신 상태 리셋
    setTimeout(() => {
      setIsReady(false);
      setLoading(false);
    }, 500);
  }, []);

  // 안전한 새로고침
  const safeReload = useCallback(() => {
    try {
      window.location.reload();
    } catch (error) {
      console.error('새로고침 실패:', error);
      // 새로고침도 실패하면 홈으로 이동
      window.location.href = '/';
    }
  }, []);

  return {
    isReady,
    hasError,
    loading,
    retryCount,
    handleError,
    retry,
    safeReload
  };
};

// Context 안전 사용 훅
export const useSafeContext = (context, contextName = 'Context') => {
  const [contextError, setContextError] = useState(null);
  const [contextData, setContextData] = useState(null);

  useEffect(() => {
    try {
      if (context) {
        setContextData(context);
        setContextError(null);
      }
    } catch (error) {
      console.warn(`${contextName} 에러:`, error);
      setContextError(error);
      setContextData(null);
    }
  }, [context, contextName]);

  return {
    data: contextData,
    error: contextError,
    isValid: !contextError && contextData !== null
  };
};

// 안전한 라우팅 훅
export const useSafeNavigation = () => {
  const [navigationError, setNavigationError] = useState(null);

  const safeNavigate = useCallback((navigate, path, options = {}) => {
    try {
      if (typeof navigate === 'function') {
        navigate(path, options);
      } else {
        window.location.href = path;
      }
      setNavigationError(null);
    } catch (error) {
      console.error('네비게이션 에러:', error);
      setNavigationError(error);
      // 폴백으로 직접 이동
      window.location.href = path;
    }
  }, []);

  return {
    safeNavigate,
    navigationError
  };
};