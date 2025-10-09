import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import { FaArrowLeft, FaUser, FaUserPlus, FaHeart, FaEye, FaMapMarkerAlt } from "react-icons/fa";
import TopBar from "../components/TopBar";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-bottom: 80px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
`;

const EmptyIcon = styled.div`
  font-size: 64px;
  color: #ddd;
  margin-bottom: 16px;
`;

const EmptyTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const EmptyDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const ExploreButton = styled.button`
  padding: 12px 24px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #26c4a8;
    transform: translateY(-1px);
  }
`;

const UserCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.imageUrl 
    ? `url(${props.imageUrl})` 
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const UserLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #666;
`;

const FollowButton = styled.button`
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #26c4a8;
  }
  
  &.unfollow {
    background: #f5f5f5;
    color: #666;
    
    &:hover {
      background: #e0e0e0;
    }
  }
`;

const UserStats = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #666;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  font-size: 14px;
  color: #666;
`;

export default function Following() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 로그인하지 않은 경우 로그인 페이지로 이동
    if (!user.loading && !user.isLoggedIn) {
      navigate('/login');
    }
  }, [user.loading, user.isLoggedIn, navigate]);

  useEffect(() => {
    // 팔로잉 목록 로드 (현재는 빈 배열로 설정)
    const loadFollowing = async () => {
      try {
        setLoading(true);
        // 실제 구현에서는 API 호출
        await new Promise(resolve => setTimeout(resolve, 1000)); // 로딩 시뮬레이션
        setFollowing([]); // 현재는 빈 배열
        console.log('팔로잉 목록 로드 완료');
      } catch (error) {
        console.error('팔로잉 목록 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user.isLoggedIn && user.uid) {
      loadFollowing();
    } else if (!user.loading) {
      setLoading(false);
    }
  }, [user.isLoggedIn, user.uid, user.loading]);

  const handleUnfollow = (userId) => {
    setFollowing(prev => prev.filter(user => user.id !== userId));
  };

  const getInitials = (name) => {
    if (!name) return '?';
    return name.charAt(0).toUpperCase();
  };

  if (loading) {
    return (
      <Container>
        <TopBar title="팔로잉" />
        <LoadingContainer>
          로딩 중...
        </LoadingContainer>
      </Container>
    );
  }

  if (following.length === 0) {
    return (
      <Container>
        <TopBar title="팔로잉" />
        <Content>
          <EmptyState>
            <EmptyIcon>
              <FaUser />
            </EmptyIcon>
            <EmptyTitle>팔로잉한 사용자가 없어요</EmptyTitle>
            <EmptyDescription>
              관심 있는 사용자를 팔로우하면<br />
              여기서 확인할 수 있습니다
            </EmptyDescription>
            <ExploreButton onClick={() => navigate('/')}>
              사용자 둘러보기
            </ExploreButton>
          </EmptyState>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <TopBar title={`팔로잉 (${following.length})`} />
      <Content>
        {following.map((followedUser) => (
          <UserCard key={followedUser.id}>
            <UserHeader>
              <UserAvatar 
                imageUrl={followedUser.profileImage}
              >
                {!followedUser.profileImage && getInitials(followedUser.nickname)}
              </UserAvatar>
              <UserInfo>
                <UserName>{followedUser.nickname}</UserName>
                <UserLocation>
                  <FaMapMarkerAlt />
                  {followedUser.location || '지역 미설정'}
                </UserLocation>
              </UserInfo>
              <FollowButton 
                className="unfollow"
                onClick={() => handleUnfollow(followedUser.id)}
              >
                팔로잉
              </FollowButton>
            </UserHeader>
            <UserStats>
              <Stat>
                <FaHeart />
                {followedUser.likeCount || 0} 찜
              </Stat>
              <Stat>
                <FaEye />
                {followedUser.viewCount || 0} 조회
              </Stat>
            </UserStats>
          </UserCard>
        ))}
      </Content>
    </Container>
  );
}
