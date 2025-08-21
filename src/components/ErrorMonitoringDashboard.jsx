// 에러 모니터링 대시보드 (개발용)
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBug, FaExclamationTriangle, FaChart, FaTimes, FaDownload } from 'react-icons/fa';
import { useGlobalErrorHandler } from '../utils/globalErrorHandler';

const DashboardContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 350px;
  max-height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e7eb;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const DashboardHeader = styled.div`
  padding: 16px 20px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DashboardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  
  &:hover {
    background: #e5e7eb;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
`;

const StatCard = styled.div`
  background: ${props => props.color}15;
  border: 1px solid ${props => props.color}30;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.color};
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
`;

const ErrorList = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: 300px;
`;

const ErrorItem = styled.div`
  padding: 12px 20px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  flex-direction: column;
  gap: 6px;
  
  &:hover {
    background: #f9fafb;
  }
`;

const ErrorType = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${props => {
    switch (props.type) {
      case 'error': return '#ef4444';
      case 'warning': return '#f59e0b';
      default: return '#6b7280';
    }
  }};
  text-transform: uppercase;
`;

const ErrorMessage = styled.div`
  font-size: 14px;
  color: #1f2937;
  line-height: 1.4;
`;

const ErrorMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #9ca3af;
`;

const DashboardActions = styled.div`
  padding: 12px 20px;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  background: white;
  color: #374151;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  &:hover {
    background: #f3f4f6;
  }
  
  &.danger {
    background: #fef2f2;
    border-color: #fecaca;
    color: #dc2626;
    
    &:hover {
      background: #fee2e2;
    }
  }
`;

const Trigger = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${props => props.hasErrors ? '#ef4444' : '#6b7280'};
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 9999;
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.1);
  }
  
  ${props => props.hasErrors && `
    animation: pulse 2s infinite;
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  `}
`;

const ErrorBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  background: #dc2626;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
`;

export function ErrorMonitoringDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const { errors, stats, clearErrors } = useGlobalErrorHandler();

  // 개발 환경에서만 표시
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const downloadErrorReport = () => {
    const report = {
      timestamp: new Date().toISOString(),
      stats,
      errors: errors.map(({ error }) => ({
        type: error.type,
        message: error.message,
        timestamp: error.timestamp,
        analysis: error.analysis,
        logData: error.logData
      }))
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `error-report-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const hasErrors = errors.length > 0;
  const recentErrors = errors.slice(-10); // 최근 10개만 표시

  return (
    <>
      {/* 트리거 버튼 */}
      <Trigger 
        hasErrors={hasErrors}
        onClick={() => setIsOpen(!isOpen)}
        title="에러 모니터링 대시보드"
      >
        <FaBug />
        {hasErrors && (
          <ErrorBadge>
            {errors.length > 99 ? '99+' : errors.length}
          </ErrorBadge>
        )}
      </Trigger>

      {/* 대시보드 */}
      {isOpen && (
        <DashboardContainer>
          <DashboardHeader>
            <DashboardTitle>
              <FaChart />
              에러 모니터링
            </DashboardTitle>
            <CloseButton onClick={() => setIsOpen(false)}>
              <FaTimes />
            </CloseButton>
          </DashboardHeader>

          {/* 통계 */}
          {stats && (
            <StatsGrid>
              <StatCard color="#ef4444">
                <StatValue color="#ef4444">{stats.total}</StatValue>
                <StatLabel>총 에러</StatLabel>
              </StatCard>
              <StatCard color="#f59e0b">
                <StatValue color="#f59e0b">{stats.lastHour}</StatValue>
                <StatLabel>최근 1시간</StatLabel>
              </StatCard>
              <StatCard color="#3b82f6">
                <StatValue color="#3b82f6">{stats.today}</StatValue>
                <StatLabel>오늘</StatLabel>
              </StatCard>
              <StatCard color="#10b981">
                <StatValue color="#10b981">
                  {stats.byType ? Object.keys(stats.byType).length : 0}
                </StatValue>
                <StatLabel>에러 타입</StatLabel>
              </StatCard>
            </StatsGrid>
          )}

          {/* 에러 목록 */}
          <ErrorList>
            {recentErrors.length === 0 ? (
              <ErrorItem>
                <ErrorMessage style={{ textAlign: 'center', color: '#9ca3af' }}>
                  에러가 없습니다 ✨
                </ErrorMessage>
              </ErrorItem>
            ) : (
              recentErrors.map(({ error }, index) => (
                <ErrorItem key={index}>
                  <ErrorType type={error.analysis?.type?.includes('error') ? 'error' : 'warning'}>
                    {error.analysis?.type || error.type}
                  </ErrorType>
                  <ErrorMessage>{error.message}</ErrorMessage>
                  <ErrorMeta>
                    <span>{formatTime(error.timestamp)}</span>
                    <span>
                      {error.analysis?.isRetryable ? '재시도 가능' : '재시도 불가'}
                    </span>
                  </ErrorMeta>
                </ErrorItem>
              ))
            )}
          </ErrorList>

          {/* 액션 버튼들 */}
          <DashboardActions>
            <ActionButton onClick={downloadErrorReport} disabled={!hasErrors}>
              <FaDownload />
              리포트 다운로드
            </ActionButton>
            <ActionButton 
              className="danger" 
              onClick={clearErrors}
              disabled={!hasErrors}
            >
              <FaTimes />
              에러 정리
            </ActionButton>
          </DashboardActions>
        </DashboardContainer>
      )}
    </>
  );
}

export default ErrorMonitoringDashboard;