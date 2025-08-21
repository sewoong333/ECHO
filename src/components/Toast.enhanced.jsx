import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiCheck, FiX, FiAlertTriangle, FiInfo } from 'react-icons/fi';

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
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ToastItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  animation: ${props => props.isExiting ? slideOut : slideIn} 0.3s ease-in-out;
  min-width: 300px;
  max-width: 400px;

  ${props => {
    switch (props.type) {
      case 'success':
        return `
          background: rgba(16, 185, 129, 0.9);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: white;
        `;
      case 'error':
        return `
          background: rgba(239, 68, 68, 0.9);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: white;
        `;
      case 'warning':
        return `
          background: rgba(245, 158, 11, 0.9);
          border: 1px solid rgba(245, 158, 11, 0.2);
          color: white;
        `;
      case 'info':
      default:
        return `
          background: rgba(59, 130, 246, 0.9);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: white;
        `;
    }
  }}

  @media (max-width: 768px) {
    right: 10px;
    left: 10px;
    min-width: auto;
    max-width: none;
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const Content = styled.div`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

const CloseButton = styled.button`
  flex-shrink: 0;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0 0 12px 12px;
  transition: width 0.1s linear;
  width: ${props => props.progress}%;
`;

const getIcon = (type) => {
  switch (type) {
    case 'success': return <FiCheck size={18} />;
    case 'error': return <FiX size={18} />;
    case 'warning': return <FiAlertTriangle size={18} />;
    case 'info': 
    default: return <FiInfo size={18} />;
  }
};

const Toast = ({ toasts = [], removeToast }) => {
  return (
    <ToastContainer role="region" aria-label="알림" aria-live="polite">
      {toasts.map(toast => (
        <ToastInstance 
          key={toast.id} 
          toast={toast} 
          onRemove={() => removeToast(toast.id)} 
        />
      ))}
    </ToastContainer>
  );
};

const ToastInstance = ({ toast, onRemove }) => {
  const [progress, setProgress] = useState(100);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = toast.duration || 4000;
    const interval = 50;
    const decrement = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          handleRemove();
          return 0;
        }
        return prev - decrement;
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

  return (
    <ToastItem
      type={toast.type}
      isExiting={isExiting}
      role="alert"
      aria-live={toast.type === 'error' ? 'assertive' : 'polite'}
    >
      <IconWrapper>
        {getIcon(toast.type)}
      </IconWrapper>
      <Content>{toast.message}</Content>
      <CloseButton 
        onClick={handleRemove}
        aria-label="알림 닫기"
      >
        <FiX size={16} />
      </CloseButton>
      <ProgressBar progress={progress} />
    </ToastItem>
  );
};

export default Toast;