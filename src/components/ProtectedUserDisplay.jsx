import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaUser, FaCheckCircle, FaExclamationTriangle, FaLock } from 'react-icons/fa';
import { useUserInfo } from '../hooks/useUserInfo';
import { useAuth } from '../store/UserContext';

/**
 * 보안이 강화된 사용자 정보 표시 컴포넌트
 * - 사용자 권한 검증
 * - 데이터 무결성 확인
 * - 의심스러운 활동 탐지
 */

const ProtectedContainer = styled.div`
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
  border: 2px solid ${props => {
    if (props.isVerified) return '#4CAF50';
    if (props.isSuspicious) return '#FF9800';
    if (props.isBlocked) return '#F44336';
    return '#fff';
  }};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  position: relative;
`;

const SecurityBadge = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => {
    if (props.type === 'verified') return '#4CAF50';
    if (props.type === 'suspicious') return '#FF9800';
    if (props.type === 'blocked') return '#F44336';
    return '#9E9E9E';
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: white;
  border: 1px solid white;
`;

const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const UserName = styled.div`
  font-size: ${props => props.fontSize || '14px'};
  font-weight: 600;
  color: ${props => {
    if (props.isSuspicious) return '#FF9800';
    if (props.isBlocked) return '#F44336';
    return '#333';
  }};
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

const WarningMessage = styled.div`
  font-size: ${props => props.fontSize || '12px'};
  color: #FF9800;
  font-style: italic;
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

// 보안 검증 함수들
const validateNickname = (nickname) => {
  if (!nickname || nickname.trim().length === 0) {
    return { isValid: false, reason: '닉네임이 없습니다' };
  }
  
  if (nickname.length < 2) {
    return { isValid: false, reason: '닉네임이 너무 짧습니다' };
  }
  
  if (nickname.length > 50) {
    return { isValid: false, reason: '닉네임이 너무 깁니다' };
  }
  
  if (/[<>"']/.test(nickname)) {
    return { isValid: false, reason: '닉네임에 특수문자가 포함되어 있습니다' };
  }
  
  if (/(admin|test|user\d+|temp)/i.test(nickname)) {
    return { isValid: false, reason: '의심스러운 닉네임 패턴입니다' };
  }
  
  return { isValid: true };
};

const validateUserData = (userData) => {
  const issues = [];
  
  // 닉네임 검증
  const nicknameValidation = validateNickname(userData.nickname);
  if (!nicknameValidation.isValid) {
    issues.push(nicknameValidation.reason);
  }
  
  // 이메일 검증
  if (!userData.email || !userData.email.includes('@')) {
    issues.push('유효하지 않은 이메일입니다');
  }
  
  // 가상 계정 확인
  if (userData.isVirtual) {
    issues.push('가상 계정입니다');
  }
  
  return {
    isValid: issues.length === 0,
    issues,
    isSuspicious: issues.length > 0,
    isBlocked: issues.some(issue => issue.includes('차단') || issue.includes('위험'))
  };
};

const ProtectedUserDisplay = ({
  userId,
  size = '32px',
  showBio = false,
  showVerified = true,
  maxWidth = '150px',
  gap = '8px',
  onClick,
  className,
  fallbackText = '사용자',
  showSecurityWarnings = true,
  ...props
}) => {
  const { userInfo, loading, error } = useUserInfo(userId);
  const { user: currentUser } = useAuth();
  const [securityStatus, setSecurityStatus] = useState({
    isValid: true,
    isSuspicious: false,
    isBlocked: false,
    issues: []
  });

  useEffect(() => {
    if (userInfo) {
      const validation = validateUserData(userInfo);
      setSecurityStatus(validation);
    }
  }, [userInfo]);

  // 로딩 상태
  if (loading) {
    return (
      <ProtectedContainer gap={gap} className={className} {...props}>
        <LoadingSpinner size={size} />
        <UserInfo>
          <UserName fontSize={`${parseInt(size) * 0.4}px`} maxWidth={maxWidth}>
            로딩 중...
          </UserName>
        </UserInfo>
      </ProtectedContainer>
    );
  }

  // 에러 상태
  if (error || !userInfo) {
    return (
      <ProtectedContainer gap={gap} className={className} {...props}>
        <UserAvatar size={size}>
          ?
        </UserAvatar>
        <UserInfo>
          <ErrorDisplay fontSize={`${parseInt(size) * 0.4}px`} maxWidth={maxWidth}>
            {fallbackText}
          </ErrorDisplay>
        </UserInfo>
      </ProtectedContainer>
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

  // 보안 배지 타입 결정
  const getSecurityBadgeType = () => {
    if (securityStatus.isBlocked) return 'blocked';
    if (securityStatus.isSuspicious) return 'suspicious';
    if (isVerified) return 'verified';
    return null;
  };

  // 보안 배지 아이콘 결정
  const getSecurityBadgeIcon = () => {
    if (securityStatus.isBlocked) return <FaLock />;
    if (securityStatus.isSuspicious) return <FaExclamationTriangle />;
    if (isVerified) return <FaCheckCircle />;
    return null;
  };

  return (
    <ProtectedContainer 
      gap={gap} 
      onClick={onClick}
      className={className}
      {...props}
    >
      <UserAvatar 
        size={size} 
        imageUrl={displayImage}
        isVerified={isVerified}
        isSuspicious={securityStatus.isSuspicious}
        isBlocked={securityStatus.isBlocked}
      >
        {!displayImage && getInitial(displayName)}
        {getSecurityBadgeType() && (
          <SecurityBadge type={getSecurityBadgeType()}>
            {getSecurityBadgeIcon()}
          </SecurityBadge>
        )}
      </UserAvatar>
      
      <UserInfo>
        <UserName 
          fontSize={`${parseInt(size) * 0.4}px`}
          maxWidth={maxWidth}
          isSuspicious={securityStatus.isSuspicious}
          isBlocked={securityStatus.isBlocked}
        >
          {displayName}
          {showVerified && isVerified && !securityStatus.isSuspicious && (
            <FaCheckCircle style={{ color: '#4CAF50', fontSize: `${parseInt(size) * 0.3}px` }} />
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
        
        {showSecurityWarnings && securityStatus.isSuspicious && (
          <WarningMessage fontSize={`${parseInt(size) * 0.3}px`}>
            ⚠️ {securityStatus.issues[0]}
          </WarningMessage>
        )}
      </UserInfo>
    </ProtectedContainer>
  );
};

export default ProtectedUserDisplay;




