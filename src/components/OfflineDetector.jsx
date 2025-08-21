// 오프라인 상태 감지 및 처리 컴포넌트
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWifi, FaExclamationTriangle, FaSync, FaCloud, FaCloudDownloadAlt } from 'react-icons/fa';
import { networkMonitor } from '../utils/errorHandler';

// 애니메이션 정의
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

// 스타일 컴포넌트들
const OfflineBanner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.isOnline ? '#10b981' : '#ef4444'};
  color: white;
  padding: 12px 20px;
  text-align: center;
  z-index: 10002;
  font-size: 14px;
  font-weight: 500;
  animation: ${props => props.isVisible ? slideDown : slideUp} 0.3s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StatusIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  
  ${props => props.connecting && `
    animation: ${pulse} 1.5s infinite;
  `}
`;

const StatusMessage = styled.span`
  flex: 1;
  margin: 0 12px;
`;

const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const OfflineModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10003;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const ModalIcon = styled.div`
  font-size: 48px;
  color: #ef4444;
  margin-bottom: 16px;
`;

const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
`;

const ModalMessage = styled.p`
  color: #6b7280;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &.primary {
    background: #3b82f6;
    color: white;
    
    &:hover {
      background: #2563eb;
    }
  }
  
  &.secondary {
    background: #f3f4f6;
    color: #374151;
    
    &:hover {
      background: #e5e7eb;
    }
  }
`;

// 오프라인 상태 관리 Hook
export function useOfflineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [wasOffline, setWasOffline] = useState(false);
  const [offlineStartTime, setOfflineStartTime] = useState(null);
  const [connectionQuality, setConnectionQuality] = useState('good');

  useEffect(() => {
    const unsubscribe = networkMonitor.addListener((status) => {
      setIsOnline(status.isOnline);
      
      if (!status.isOnline) {
        setWasOffline(true);
        setOfflineStartTime(Date.now());
      } else if (wasOffline) {
        // 온라인으로 복구됨
        setOfflineStartTime(null);
      }
    });

    // 연결 품질 모니터링
    const checkConnectionQuality = async () => {
      if (!navigator.onLine) return;

      try {
        const startTime = Date.now();
        await fetch('/ping', { 
          method: 'HEAD',
          cache: 'no-cache',
          signal: AbortSignal.timeout(5000)
        });
        const responseTime = Date.now() - startTime;

        if (responseTime < 500) {
          setConnectionQuality('good');
        } else if (responseTime < 1500) {
          setConnectionQuality('fair');
        } else {
          setConnectionQuality('poor');
        }
      } catch {
        setConnectionQuality('poor');
      }
    };

    const qualityInterval = setInterval(checkConnectionQuality, 30000);
    checkConnectionQuality();

    return () => {
      unsubscribe();
      clearInterval(qualityInterval);
    };
  }, [wasOffline]);

  const getOfflineDuration = () => {
    if (!offlineStartTime) return 0;
    return Date.now() - offlineStartTime;
  };

  const formatOfflineDuration = () => {
    const duration = getOfflineDuration();
    const seconds = Math.floor(duration / 1000);
    const minutes = Math.floor(seconds / 60);
    
    if (minutes > 0) {
      return `${minutes}분 ${seconds % 60}초`;
    }
    return `${seconds}초`;
  };

  return {
    isOnline,
    wasOffline,
    offlineStartTime,
    connectionQuality,
    getOfflineDuration,
    formatOfflineDuration,
    resetOfflineStatus: () => setWasOffline(false)
  };
}

// 오프라인 감지 컴포넌트
export function OfflineDetector({ 
  showModal = false, 
  showBanner = true,
  autoHideBanner = true,
  onOffline,
  onOnline 
}) {
  const {
    isOnline,
    wasOffline,
    formatOfflineDuration,
    resetOfflineStatus
  } = useOfflineStatus();

  const [showOfflineModal, setShowOfflineModal] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [isReconnecting, setIsReconnecting] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setBannerVisible(true);
      if (showModal) {
        setShowOfflineModal(true);
      }
      onOffline?.();
    } else {
      if (wasOffline) {
        // 연결 복구됨
        setIsReconnecting(false);
        onOnline?.();
        
        // 복구 메시지 잠시 표시
        if (showBanner) {
          setBannerVisible(true);
          if (autoHideBanner) {
            setTimeout(() => {
              setBannerVisible(false);
              resetOfflineStatus();
            }, 3000);
          }
        }
      }
      setShowOfflineModal(false);
    }
  }, [isOnline, wasOffline, showModal, showBanner, autoHideBanner, onOffline, onOnline, resetOfflineStatus]);

  const handleRetryConnection = async () => {
    setIsReconnecting(true);
    
    try {
      // 간단한 연결 테스트
      await fetch('/', { 
        method: 'HEAD',
        cache: 'no-cache',
        signal: AbortSignal.timeout(5000)
      });
      
      // 성공하면 상태가 자동으로 업데이트됨
    } catch {
      // 실패해도 자동으로 처리됨
    } finally {
      setTimeout(() => {
        setIsReconnecting(false);
      }, 1000);
    }
  };

  const getStatusIcon = () => {
    if (isReconnecting) {
      return <FaSync />;
    }
    
    if (isOnline) {
      return wasOffline ? <FaCloudDownloadAlt /> : <FaWifi />;
    }
    
    return <FaExclamationTriangle />;
  };

  const getStatusMessage = () => {
    if (isReconnecting) {
      return '연결을 확인하는 중...';
    }
    
    if (isOnline) {
      if (wasOffline) {
        return `인터넷 연결이 복구되었습니다! (오프라인: ${formatOfflineDuration()})`;
      }
      return '인터넷 연결이 양호합니다';
    }
    
    return `인터넷 연결을 확인해주세요 (오프라인: ${formatOfflineDuration()})`;
  };

  if (!bannerVisible && !showOfflineModal) {
    return null;
  }

  return (
    <>
      {/* 배너 알림 */}
      {bannerVisible && showBanner && (
        <OfflineBanner 
          isOnline={isOnline} 
          isVisible={bannerVisible}
        >
          <StatusIcon connecting={isReconnecting}>
            {getStatusIcon()}
          </StatusIcon>
          
          <StatusMessage>
            {getStatusMessage()}
          </StatusMessage>
          
          {!isOnline && (
            <ActionButton 
              onClick={handleRetryConnection}
              disabled={isReconnecting}
            >
              다시 시도
            </ActionButton>
          )}
          
          {(isOnline && wasOffline) && autoHideBanner && (
            <ActionButton onClick={() => setBannerVisible(false)}>
              닫기
            </ActionButton>
          )}
        </OfflineBanner>
      )}

      {/* 모달 알림 */}
      {showOfflineModal && (
        <OfflineModal>
          <ModalContent>
            <ModalIcon>
              <FaWifi />
            </ModalIcon>
            
            <ModalTitle>
              인터넷 연결 확인
            </ModalTitle>
            
            <ModalMessage>
              인터넷 연결이 끊어졌습니다.<br />
              연결 상태를 확인하고 다시 시도해주세요.
            </ModalMessage>
            
            <ModalActions>
              <ModalButton 
                className="primary" 
                onClick={handleRetryConnection}
                disabled={isReconnecting}
              >
                {isReconnecting ? '확인 중...' : '다시 시도'}
              </ModalButton>
              
              <ModalButton 
                className="secondary"
                onClick={() => setShowOfflineModal(false)}
              >
                나중에
              </ModalButton>
            </ModalActions>
          </ModalContent>
        </OfflineModal>
      )}
    </>
  );
}

// 오프라인 상태 표시기 (간단한 버전)
export function OfflineIndicator({ className = '' }) {
  const { isOnline, connectionQuality } = useOfflineStatus();

  if (isOnline && connectionQuality === 'good') {
    return null;
  }

  const getIndicatorColor = () => {
    if (!isOnline) return '#ef4444';
    if (connectionQuality === 'poor') return '#f59e0b';
    if (connectionQuality === 'fair') return '#fbbf24';
    return '#10b981';
  };

  const getIndicatorText = () => {
    if (!isOnline) return '오프라인';
    if (connectionQuality === 'poor') return '연결 불안정';
    if (connectionQuality === 'fair') return '연결 느림';
    return '온라인';
  };

  return (
    <OfflineIndicatorStyle 
      className={className}
      color={getIndicatorColor()}
      title={getIndicatorText()}
    >
      <FaWifi />
    </OfflineIndicatorStyle>
  );
}

const OfflineIndicatorStyle = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  color: ${props => props.color};
  opacity: 0.8;
`;

// 오프라인 지원 Context
export const OfflineContext = React.createContext({
  isOnline: true,
  connectionQuality: 'good',
  enableOfflineMode: () => {},
  disableOfflineMode: () => {}
});

export function OfflineProvider({ children }) {
  const offlineStatus = useOfflineStatus();
  const [offlineModeEnabled, setOfflineModeEnabled] = useState(false);

  const value = {
    ...offlineStatus,
    offlineModeEnabled,
    enableOfflineMode: () => setOfflineModeEnabled(true),
    disableOfflineMode: () => setOfflineModeEnabled(false)
  };

  return (
    <OfflineContext.Provider value={value}>
      {children}
    </OfflineContext.Provider>
  );
}

export function useOfflineContext() {
  const context = React.useContext(OfflineContext);
  if (!context) {
    throw new Error('useOfflineContext must be used within OfflineProvider');
  }
  return context;
}

export default OfflineDetector;