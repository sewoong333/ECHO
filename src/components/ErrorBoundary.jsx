import React from 'react';
import styled from 'styled-components';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: var(--color-bg-secondary);
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  color: var(--color-red);
  margin-bottom: 1.5rem;
  opacity: 0.8;
`;

const ErrorTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 400px;
`;

const ErrorDetails = styled.details`
  margin-bottom: 2rem;
  max-width: 600px;
  text-align: left;
  
  summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--color-text-secondary);
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-md);
    
    &:hover {
      background: var(--color-border-light);
    }
  }
  
  pre {
    background: var(--color-bg-tertiary);
    padding: 1rem;
    border-radius: var(--radius-md);
    font-size: 0.75rem;
    overflow-x: auto;
    color: var(--color-text-primary);
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &.primary {
    background: var(--color-mint-main);
    color: white;
    
    &:hover {
      background: var(--color-mint-dark);
      transform: translateY(-1px);
    }
  }
  
  &.secondary {
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border-medium);
    
    &:hover {
      background: var(--color-bg-secondary);
      border-color: var(--color-border-dark);
    }
  }
`;

const ReportButton = styled.button`
  margin-top: 1rem;
  background: none;
  border: none;
  color: var(--color-text-tertiary);
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: var(--color-text-secondary);
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError() {
    // 에러 발생 시 상태 업데이트
    return {
      hasError: true,
      errorId: `ERR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 정보 저장
    this.setState({
      error,
      errorInfo
    });

    // 에러 로깅 (개발 환경)
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught an Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Component Stack:', errorInfo.componentStack);
      console.groupEnd();
    }

    // 프로덕션 환경에서는 에러 리포팅 서비스로 전송
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }
  }

  reportError = (error, errorInfo) => {
    // 에러 리포팅 로직 (예: Sentry, LogRocket 등)
    const errorReport = {
      id: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.props.userId || 'anonymous'
    };

    // 실제 서비스에서는 에러 리포팅 서비스 API 호출
    console.log('Error reported:', errorReport);
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportIssue = () => {
    const subject = encodeURIComponent(`버그 신고: ${this.state.errorId}`);
    const body = encodeURIComponent(`
에러 ID: ${this.state.errorId}
발생 시간: ${new Date().toLocaleString()}
페이지: ${window.location.href}
브라우저: ${navigator.userAgent}

에러 내용:
${this.state.error?.message || '알 수 없는 에러'}

재현 방법:
1. 
2. 
3. 

추가 정보:
    `);
    
    window.open(`mailto:support@echo-music.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      const { error, errorInfo, errorId } = this.state;
      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <ErrorContainer>
          <ErrorIcon>
            <FaExclamationTriangle />
          </ErrorIcon>
          
          <ErrorTitle>
            앗! 문제가 발생했습니다
          </ErrorTitle>
          
          <ErrorMessage>
            예상치 못한 오류가 발생했습니다.<br />
            잠시 후 다시 시도해주시거나 홈으로 돌아가세요.
          </ErrorMessage>

          {isDevelopment && error && (
            <ErrorDetails>
              <summary>개발자 정보 (개발 모드에서만 표시)</summary>
              <pre>
                <strong>Error ID:</strong> {errorId}
                {'\n\n'}
                <strong>Error Message:</strong> {error.message}
                {'\n\n'}
                <strong>Stack Trace:</strong>
                {error.stack}
                {'\n\n'}
                <strong>Component Stack:</strong>
                {errorInfo?.componentStack}
              </pre>
            </ErrorDetails>
          )}

          <ButtonGroup>
            <ActionButton 
              className="primary" 
              onClick={this.handleRetry}
            >
              <FaRedo />
              다시 시도
            </ActionButton>
            
            <ActionButton 
              className="secondary" 
              onClick={this.handleGoHome}
            >
              <FaHome />
              홈으로 이동
            </ActionButton>
          </ButtonGroup>

          <ReportButton onClick={this.handleReportIssue}>
            문제 신고하기
          </ReportButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;