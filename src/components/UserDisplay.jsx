import React from 'react';
import styled from 'styled-components';
import { FaUser, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { useUserInfo } from '../hooks/useUserInfo';

/**
 * 실시간 사용자 정보를 표시하는 컴포넌트
 * - Firebase 사용자 정보를 기준으로 일관된 닉네임 표시
 * - 로딩 상태 처리
 * - 다양한 크기와 스타일 지원
 */

const UserDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.gap || '8px'};
  ${props => props.onClick && 'cursor: pointer;'}
  
  &:hover {
    ${props => props.onClick && 'opacity: 0.8;'}
  }
`;

const UserAvatar = styled.div`
  width: ${props => props.size || '32px'};
  height: ${props => props.size || '32px'};
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
    const size = parseInt(props.size) || 32;
    return `${size * 0.4}px`;
  }};
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const UserName = styled.div`
  font-size: ${props => props.fontSize || '14px'};
  font-weight: 600;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${props => props.maxWidth || '150px'};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const UserBio = styled.div`
  font-size: ${props => props.fontSize || '12px'};
  color: #666;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${props => props.maxWidth || '150px'};
  margin-top: 2px;
`;

const LoadingSpinner = styled.div`
  width: ${props => props.size || '32px'};
  height: ${props => props.size || '32px'};
  border: 2px solid #f3f3f3;
  border-top: 2px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorDisplay = styled.div`
  font-size: ${props => props.fontSize || '14px'};
  color: #999;
  font-style: italic;
`;

const VerifiedBadge = styled.div`
  color: #4CAF50;
  font-size: ${props => props.size || '12px'};
  display: flex;
  align-items: center;
`;

const UserDisplay = ({
  userId,
  size = '32px',
  showBio = false,
  showVerified = true,
  maxWidth = '150px',
  gap = '8px',
  onClick,
  className,
  fallbackText = '사용자',
  ...props
}) => {
  const { userInfo, loading, error } = useUserInfo(userId);

  // 로딩 상태
  if (loading) {
    return (
      <UserDisplayContainer gap={gap} className={className} {...props}>
        <LoadingSpinner size={size} />
        <UserInfo>
          <UserName fontSize={`${parseInt(size) * 0.4}px`} maxWidth={maxWidth}>
            로딩 중...
          </UserName>
        </UserInfo>
      </UserDisplayContainer>
    );
  }

  // 에러 상태
  if (error || !userInfo) {
    return (
      <UserDisplayContainer gap={gap} className={className} {...props}>
        <UserAvatar size={size}>
          ?
        </UserAvatar>
        <UserInfo>
          <ErrorDisplay fontSize={`${parseInt(size) * 0.4}px`} maxWidth={maxWidth}>
            {fallbackText}
          </ErrorDisplay>
        </UserInfo>
      </UserDisplayContainer>
    );
  }

  // 정상 상태
  const displayName = userInfo.nickname || userInfo.displayName || userInfo.name || fallbackText;
  const displayBio = userInfo.bio || userInfo.description || userInfo.about || '';
  const displayImage = userInfo.profileImage || userInfo.photoURL || userInfo.avatar || '';
  const isVerified = userInfo.isVerified || userInfo.verified || false;

  // 아바타 표시용 이니셜 생성
  const getInitial = (name) => {
    if (!name) return '?';
    return name.charAt(0).toUpperCase();
  };

  return (
    <UserDisplayContainer 
      gap={gap} 
      onClick={onClick}
      className={className}
      {...props}
    >
      <UserAvatar 
        size={size} 
        imageUrl={displayImage}
      >
        {!displayImage && getInitial(displayName)}
      </UserAvatar>
      
      <UserInfo>
        <UserName 
          fontSize={`${parseInt(size) * 0.4}px`}
          maxWidth={maxWidth}
        >
          {displayName}
          {showVerified && isVerified && (
            <VerifiedBadge size={`${parseInt(size) * 0.3}px`}>
              <FaCheckCircle />
            </VerifiedBadge>
          )}
        </UserName>
        
        {showBio && displayBio && (
          <UserBio 
            fontSize={`${parseInt(size) * 0.35}px`}
            maxWidth={maxWidth}
          >
            {displayBio}
          </UserBio>
        )}
      </UserInfo>
    </UserDisplayContainer>
  );
};

export default UserDisplay;




