import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import PageErrorBoundary from './PageErrorBoundary';

// 안전한 페이지 래퍼 - 모든 페이지의 하얀 화면 문제 방지
const SafePageWrapper = ({ 
  children, 
  title = "페이지", 
  fallbackComponent = null,
  showTopBar = true,
  loading = false,
  error = null 
}) => {
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // 페이지 준비 상태 확인
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (error) {
      setHasError(true);
    }
  }, [error]);

  const handleRetry = () => {
    setHasError(false);
    setRetryCount(prev => prev + 1);
    window.location.reload();
  };

  // 로딩 상태
  if (loading || !isReady) {
    return (
      <SafeContainer>
        {showTopBar && <div style={{ height: '56px' }} />}
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>{title}을 불러오는 중...</LoadingText>
        </LoadingContainer>
      </SafeContainer>
    );
  }

  // 에러 상태
  if (hasError || error) {
    return (
      <SafeContainer>
        {showTopBar && <div style={{ height: '56px' }} />}
        <ErrorContainer>
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorTitle>페이지를 불러올 수 없습니다</ErrorTitle>
          <ErrorMessage>
            일시적인 오류가 발생했습니다.<br />
            잠시 후 다시 시도해주세요.
            {retryCount > 0 && ` (재시도 ${retryCount}회)`}
          </ErrorMessage>
          <RetryButton onClick={handleRetry}>
            다시 시도
          </RetryButton>
          {fallbackComponent && (
            <FallbackContainer>
              {fallbackComponent}
            </FallbackContainer>
          )}
        </ErrorContainer>
      </SafeContainer>
    );
  }

  // 정상 렌더링
  return (
    <PageErrorBoundary 
      error={error} 
      retry={handleRetry}
      fallback={
        <SafeContainer>
          {showTopBar && <div style={{ height: '56px' }} />}
          <ErrorContainer>
            <ErrorIcon>🔧</ErrorIcon>
            <ErrorTitle>페이지 로딩 중 문제가 발생했습니다</ErrorTitle>
            <ErrorMessage>
              페이지를 다시 로드하겠습니다...
            </ErrorMessage>
            <RetryButton onClick={handleRetry}>
              새로고침
            </RetryButton>
          </ErrorContainer>
        </SafeContainer>
      }
    >
      <SafeContainer>
        <Suspense fallback={
          <LoadingContainer>
            <LoadingSpinner />
            <LoadingText>컴포넌트 로딩 중...</LoadingText>
          </LoadingContainer>
        }>
          {children}
        </Suspense>
      </SafeContainer>
    </PageErrorBoundary>
  );
};

// Styled Components
const SafeContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 40px 20px;
  text-align: center;
`;

const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #e1e5e9;
  border-top: 4px solid #2ed8b6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.div`
  font-size: 16px;
  color: #666;
  font-weight: 500;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 40px 20px;
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
  opacity: 0.7;
`;

const ErrorTitle = styled.h2`
  color: #333;
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 600;
`;

const ErrorMessage = styled.p`
  color: #666;
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.5;
  max-width: 400px;
`;

const RetryButton = styled.button`
  background: #2ed8b6;
  color: #06302a;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #26c4a8;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const FallbackContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 500px;
  width: 100%;
`;

export default SafePageWrapper;