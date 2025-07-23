import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const ToastContainer = styled.div`
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 10000;
  max-width: 400px;
  width: calc(100vw - 40px);
  
  @media (max-width: 500px) {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
    max-width: calc(100vw - 40px);
  }
`;

const ToastItem = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${props => props.isExiting ? slideOut : slideIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${props => {
      switch (props.type) {
        case 'success': return '#10b981';
        case 'error': return '#ef4444';
        case 'warning': return '#f59e0b';
        default: return '#3b82f6';
      }
    }};
  }
`;

const IconWrapper = styled.div`
  font-size: 20px;
  color: ${props => {
    switch (props.type) {
      case 'success': return '#10b981';
      case 'error': return '#ef4444';
      case 'warning': return '#f59e0b';
      default: return '#3b82f6';
    }
  }};
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 2px;
  font-size: 14px;
`;

const Message = styled.div`
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #6b7280;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${props => {
    switch (props.type) {
      case 'success': return '#10b981';
      case 'error': return '#ef4444';
      case 'warning': return '#f59e0b';
      default: return '#3b82f6';
    }
  }};
  width: ${props => `${props.progress}%`};
  transition: width 0.1s linear;
`;

export function Toast({ toasts, removeToast }) {
  return (
    <ToastContainer>
      {toasts.map(toast => (
        <ToastNotification
          key={toast.id}
          toast={toast}
          onRemove={() => removeToast(toast.id)}
        />
      ))}
    </ToastContainer>
  );
}

function ToastNotification({ toast, onRemove }) {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const duration = toast.duration || 5000;
    const interval = 50;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev - step;
        if (newProgress <= 0) {
          clearInterval(timer);
          handleRemove();
          return 0;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [toast.duration]);

  const handleRemove = () => {
    setIsExiting(true);
    setTimeout(() => {
      onRemove();
    }, 300);
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success': return <FaCheckCircle />;
      case 'error': return <FaExclamationCircle />;
      case 'warning': return <FaExclamationCircle />;
      default: return <FaInfoCircle />;
    }
  };

  const getTitle = () => {
    switch (toast.type) {
      case 'success': return '성공';
      case 'error': return '오류';
      case 'warning': return '주의';
      default: return '알림';
    }
  };

  return (
    <ToastItem type={toast.type} isExiting={isExiting}>
      <IconWrapper type={toast.type}>
        {getIcon()}
      </IconWrapper>
      <Content>
        <Title>{toast.title || getTitle()}</Title>
        <Message>{toast.message}</Message>
      </Content>
      <CloseButton onClick={handleRemove}>
        <FaTimes size={14} />
      </CloseButton>
      <ProgressBar type={toast.type} progress={progress} />
    </ToastItem>
  );
}

export default Toast;