import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 40px 20px;
  text-align: center;
  background: #f8f9fa;
`;

const ErrorIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
  opacity: 0.5;
`;

const ErrorTitle = styled.h2`
  color: #333;
  margin-bottom: 12px;
  font-size: 24px;
`;

const ErrorMessage = styled.p`
  color: #666;
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.5;
`;

const RetryButton = styled.button`
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #26c4a8;
  }
`;

const PageErrorBoundary = ({ error, retry, children }) => {
  if (error) {
    return (
      <ErrorContainer>
        <ErrorIcon>⚠️</ErrorIcon>
        <ErrorTitle>페이지를 불러올 수 없습니다</ErrorTitle>
        <ErrorMessage>
          일시적인 오류가 발생했습니다.<br />
          잠시 후 다시 시도해주세요.
        </ErrorMessage>
        {retry && (
          <RetryButton onClick={retry}>
            다시 시도
          </RetryButton>
        )}
      </ErrorContainer>
    );
  }
  
  return children;
};

export default PageErrorBoundary;