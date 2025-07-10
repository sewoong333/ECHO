import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import { UserContext } from "../store/UserContext";
import { ProductContext } from "../store/ProductContext";
import {
  FaUser,
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaShoppingBag,
  FaComments,
  FaCog,
  FaLock,
  FaStore,
  FaCamera,
  FaEdit,
  FaSignOutAlt,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaCheckCircle,
  FaUserFriends,
  FaEye,
  FaAward,
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const ProfileSection = styled.div`
  background: white;
  padding: 24px 20px;
  margin-bottom: 12px;
  position: relative;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
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
  font-size: 24px;
  font-weight: bold;
  border: 3px solid #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const CameraButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #ff7e36;
  border: 2px solid white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  
  &:hover {
    background: #e66d2e;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const Nickname = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const VerifiedBadge = styled.div`
  color: #4CAF50;
  font-size: 16px;
`;

const BusinessBadge = styled.div`
  background: #2196F3;
  color: white;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: bold;
`;

const UserLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 14px;
  margin-bottom: 4px;
`;

const JoinDate = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 14px;
`;

const MannerScoreSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 16px;
  margin-top: 16px;
  color: white;
`;

const MannerScoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const MannerScoreTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const MannerScore = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const MannerScoreDesc = styled.div`
  font-size: 13px;
  opacity: 0.9;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;
`;

const StatItem = styled.div`
  background: white;
  padding: 20px 12px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const StatNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
`;

const MenuSection = styled.div`
  background: white;
  margin-bottom: 12px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #f9f9f9;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const MenuLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MenuIcon = styled.div`
  width: 20px;
  text-align: center;
  color: #666;
`;

const MenuText = styled.div`
  font-size: 16px;
  color: #333;
`;

const MenuBadge = styled.div`
  background: #ff7e36;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  min-width: 20px;
  text-align: center;
`;

const ChevronRight = styled.div`
  color: #ccc;
  font-size: 14px;
`;

const LogoutButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin: 20px;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: #d32f2f;
  }
`;

const EditButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: #ff7e36;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    background: #e66d2e;
  }
`;

export default function MyPage() {
  const { user, logout, userProfile, getUserInfo } = useContext(UserContext);
  const { userProducts, loadUserProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    selling: 0,
    sold: 0,
    buying: 0,
    reviews: 0,
  });

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate('/login');
      return;
    }
    
    initializeData();
  }, [user.isLoggedIn, navigate]);

  const initializeData = async () => {
    try {
      setLoading(true);
      
      // 사용자 상품 로드
      await loadUserProducts();
      
      // 통계 계산 (실제로는 API 호출)
      setStats({
        selling: user.transactionCount || 0,
        sold: Math.floor((user.transactionCount || 0) * 0.7),
        buying: Math.floor((user.transactionCount || 0) * 0.3),
        reviews: user.reviewCount || 0,
      });
      
    } catch (error) {
      console.error('데이터 로드 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    if (window.confirm('정말 로그아웃하시겠습니까?')) {
      try {
        await logout();
        navigate('/login');
      } catch (error) {
        console.error('로그아웃 실패:', error);
        alert('로그아웃에 실패했습니다.');
      }
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    const d = date.toDate ? date.toDate() : new Date(date);
    return d.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
    });
  };

  const getInitials = (name) => {
    if (!name) return '?';
    return name.charAt(0).toUpperCase();
  };

  const menuItems = [
    {
      icon: <FaShoppingBag />,
      text: '판매내역',
      path: '/mypage/sales',
      badge: stats.selling,
    },
    {
      icon: <FaHeart />,
      text: '관심목록',
      path: '/wishlist',
      badge: user.favoriteCount,
    },
    {
      icon: <FaComments />,
      text: '채팅',
      path: '/chat',
      badge: 0,
    },
    {
      icon: <FaUserFriends />,
      text: '팔로잉',
      path: '/following',
      badge: user.following?.length || 0,
    },
    {
      icon: <FaCog />,
      text: '설정',
      path: '/settings',
    },
    {
      icon: <FaLock />,
      text: '개인정보 처리방침',
      path: '/privacy',
    },
    {
      icon: <FaStore />,
      text: '비즈니스 계정',
      path: '/business',
    },
  ];

  if (loading) {
    return (
      <Container>
        <TopBar title="마이페이지" />
        <div style={{ padding: '20px', textAlign: 'center' }}>
          로딩 중...
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <TopBar title="마이페이지" />
      
      <ProfileSection>
        <EditButton onClick={() => navigate('/profile/edit')}>
          <FaEdit /> 수정
        </EditButton>
        
        <ProfileHeader>
          <ProfileImageContainer>
            <ProfileImage 
              imageUrl={user.profileImage}
            >
              {!user.profileImage && getInitials(user.nickname)}
            </ProfileImage>
            <CameraButton onClick={() => navigate('/profile/photo')}>
              <FaCamera />
            </CameraButton>
          </ProfileImageContainer>
          
          <ProfileInfo>
            <ProfileName>
              <Nickname>{user.nickname || '사용자'}</Nickname>
              {user.isVerified && (
                <VerifiedBadge>
                  <FaCheckCircle />
                </VerifiedBadge>
              )}
              {user.isBusiness && (
                <BusinessBadge>비즈니스</BusinessBadge>
              )}
            </ProfileName>
            
            {user.address && (
              <UserLocation>
                <FaMapMarkerAlt />
                {user.region} {user.district}
              </UserLocation>
            )}
            
            <JoinDate>
              <FaCalendar />
              {formatDate(user.createdAt)} 가입
            </JoinDate>
          </ProfileInfo>
        </ProfileHeader>
        
        <MannerScoreSection>
          <MannerScoreHeader>
            <MannerScoreTitle>
              <FaAward />
              매너온도
            </MannerScoreTitle>
            <MannerScore>{user.mannerScore}°C</MannerScore>
          </MannerScoreHeader>
          <MannerScoreDesc>
            {user.mannerScore >= 40 ? '매우 좋은 거래자예요!' :
             user.mannerScore >= 36.5 ? '좋은 거래자예요!' :
             '더 좋은 거래자가 되어보세요!'}
          </MannerScoreDesc>
        </MannerScoreSection>
      </ProfileSection>
      
      <StatsGrid>
        <StatItem onClick={() => navigate('/mypage/sales')}>
          <StatNumber>{stats.selling}</StatNumber>
          <StatLabel>판매중</StatLabel>
        </StatItem>
        <StatItem onClick={() => navigate('/mypage/sold')}>
          <StatNumber>{stats.sold}</StatNumber>
          <StatLabel>판매완료</StatLabel>
        </StatItem>
        <StatItem onClick={() => navigate('/mypage/buying')}>
          <StatNumber>{stats.buying}</StatNumber>
          <StatLabel>구매내역</StatLabel>
        </StatItem>
        <StatItem onClick={() => navigate('/mypage/reviews')}>
          <StatNumber>{stats.reviews}</StatNumber>
          <StatLabel>받은후기</StatLabel>
        </StatItem>
      </StatsGrid>
      
      <MenuSection>
        {menuItems.map((item, index) => (
          <MenuItem 
            key={index}
            onClick={() => navigate(item.path)}
          >
            <MenuLeft>
              <MenuIcon>{item.icon}</MenuIcon>
              <MenuText>{item.text}</MenuText>
            </MenuLeft>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {item.badge > 0 && (
                <MenuBadge>{item.badge}</MenuBadge>
              )}
              <ChevronRight>›</ChevronRight>
            </div>
          </MenuItem>
        ))}
      </MenuSection>
      
      <LogoutButton onClick={handleLogout}>
        <FaSignOutAlt />
        로그아웃
      </LogoutButton>
    </Container>
  );
}