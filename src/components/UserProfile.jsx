import React from 'react';
import styled from 'styled-components';
import { FaUser, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

/**
 * 사용자 프로필 표시 컴포넌트
 * - 일관된 사용자 정보 표시
 * - 표준 필드명 사용
 * - 다양한 크기 지원
 */

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.gap || '12px'};
  ${props => props.onClick && 'cursor: pointer;'}
  
  &:hover {
    ${props => props.onClick && 'opacity: 0.8;'}
  }
`;

const Avatar = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border-radius: 50%;
  background: ${props => {
    if (props.imageUrl) {
      return `url(${props.imageUrl})`;
    }
    return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: ${props => {
    const size = parseInt(props.size) || 40;
    return `${size * 0.4}px`;
  }};
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const ProfileInfo = styled.div`
  flex: 1;
  min-width: 0; /* 텍스트 오버플로우 방지 */
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: ${props => props.showBio ? '4px' : '0'};
`;

const Name = styled.div`
  font-size: ${props => props.fontSize || '16px'};
  font-weight: 600;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${props => props.maxWidth || '200px'};
`;

const VerifiedBadge = styled.div`
  color: #4CAF50;
  font-size: ${props => props.size || '14px'};
  display: flex;
  align-items: center;
`;

const Bio = styled.div`
  font-size: ${props => props.fontSize || '14px'};
  color: #666;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${props => props.maxWidth || '200px'};
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #999;
  margin-top: 2px;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: #666;
`;

const UserProfile = ({
  user,
  size = '40px',
  showBio = true,
  showLocation = false,
  showStats = false,
  showVerified = true,
  maxWidth = '200px',
  gap = '12px',
  onClick,
  className,
  ...props
}) => {
  // 사용자 정보 정규화
  const normalizedUser = {
    id: user?.id || user?.uid,
    nickname: user?.nickname || user?.displayName || user?.name || '사용자',
    profileImage: user?.profileImage || user?.photoURL || user?.avatar || '',
    bio: user?.bio || user?.description || user?.about || '',
    email: user?.email || '',
    isVerified: user?.isVerified || user?.verified || false,
    mannerScore: user?.mannerScore || 100,
    region: user?.region || '',
    district: user?.district || '',
    transactionCount: user?.transactionCount || 0,
    reviewCount: user?.reviewCount || 0,
  };

  // 아바타 표시용 이니셜 생성
  const getInitial = (nickname) => {
    if (!nickname) return '?';
    return nickname.charAt(0).toUpperCase();
  };

  // 폰트 크기 계산
  const getFontSize = (baseSize) => {
    const size = parseInt(baseSize) || 40;
    return `${size * 0.4}px`;
  };

  return (
    <ProfileContainer 
      gap={gap} 
      onClick={onClick}
      className={className}
      {...props}
    >
      <Avatar 
        size={size} 
        imageUrl={normalizedUser.profileImage}
      >
        {!normalizedUser.profileImage && getInitial(normalizedUser.nickname)}
      </Avatar>
      
      <ProfileInfo>
        <NameContainer showBio={showBio}>
          <Name 
            fontSize={getFontSize(size)}
            maxWidth={maxWidth}
          >
            {normalizedUser.nickname}
          </Name>
          {showVerified && normalizedUser.isVerified && (
            <VerifiedBadge size={getFontSize(size)}>
              <FaCheckCircle />
            </VerifiedBadge>
          )}
        </NameContainer>
        
        {showBio && normalizedUser.bio && (
          <Bio 
            fontSize={getFontSize(size)}
            maxWidth={maxWidth}
          >
            {normalizedUser.bio}
          </Bio>
        )}
        
        {showLocation && (normalizedUser.region || normalizedUser.district) && (
          <Location>
            <FaMapMarkerAlt />
            {normalizedUser.region} {normalizedUser.district}
          </Location>
        )}
        
        {showStats && (
          <Stats>
            <StatItem>
              <FaStar />
              {normalizedUser.mannerScore}점
            </StatItem>
            <StatItem>
              거래 {normalizedUser.transactionCount}회
            </StatItem>
            <StatItem>
              후기 {normalizedUser.reviewCount}개
            </StatItem>
          </Stats>
        )}
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default UserProfile;

