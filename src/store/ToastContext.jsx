import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = Date.now() + Math.random();
    
    // 메시지가 없거나 빈 경우 기본 메시지 제공
    let message = toast.message;
    if (!message || message.trim() === '') {
      switch (toast.type) {
        case 'error':
          message = '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
          break;
        case 'warning':
          message = '주의가 필요한 상황입니다. 입력 내용을 확인해주세요.';
          break;
        case 'success':
          message = '작업이 성공적으로 완료되었습니다.';
          break;
        default:
          message = '알림이 있습니다.';
      }
    }
    
    const newToast = {
      id,
      type: 'info',
      duration: 5000,
      ...toast,
      message, // 처리된 메시지 사용
    };
    
    setToasts(prev => [...prev, newToast]);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  // 편의 함수들
  const showSuccess = useCallback((message, options = {}) => {
    return addToast({
      type: 'success',
      message,
      ...options,
    });
  }, [addToast]);

  const showError = useCallback((message, options = {}) => {
    return addToast({
      type: 'error',
      message,
      duration: 7000, // 에러는 좀 더 오래 표시
      ...options,
    });
  }, [addToast]);

  const showWarning = useCallback((message, options = {}) => {
    return addToast({
      type: 'warning',
      message,
      ...options,
    });
  }, [addToast]);

  const showInfo = useCallback((message, options = {}) => {
    return addToast({
      type: 'info',
      message,
      ...options,
    });
  }, [addToast]);

  // 구체적인 에러 메시지와 해결 방법을 제공하는 함수들
  const showDetailedError = useCallback((error, context = '') => {
    let message = '';
    let solution = '';
    
    if (error.message) {
      if (error.message.includes('permission')) {
        message = '권한이 없습니다';
        solution = '로그인 상태를 확인해주세요';
      } else if (error.message.includes('network')) {
        message = '네트워크 연결 오류';
        solution = '인터넷 연결을 확인하고 잠시 후 다시 시도해주세요';
      } else if (error.message.includes('quota')) {
        message = '서버 용량 부족';
        solution = '잠시 후 다시 시도해주세요';
      } else if (error.message.includes('auth')) {
        message = '인증 오류';
        solution = '로그아웃 후 다시 로그인해주세요';
      } else if (error.message.includes('validation')) {
        message = '입력 데이터 오류';
        solution = '입력 내용을 다시 확인해주세요';
      } else {
        message = error.message;
        solution = '잠시 후 다시 시도해주세요';
      }
    } else {
      message = '알 수 없는 오류가 발생했습니다';
      solution = '페이지를 새로고침하거나 잠시 후 다시 시도해주세요';
    }
    
    const fullMessage = context ? 
      `${context}: ${message}\n해결 방법: ${solution}` : 
      `${message}\n해결 방법: ${solution}`;
    
    return addToast({
      type: 'error',
      message: fullMessage,
      duration: 8000,
    });
  }, [addToast]);

  const showDetailedWarning = useCallback((warning, context = '') => {
    let message = '';
    let solution = '';
    
    if (warning.includes('필수')) {
      message = '필수 입력 항목이 누락되었습니다';
      solution = '모든 필수 항목을 입력해주세요';
    } else if (warning.includes('길이')) {
      message = '입력 길이가 올바르지 않습니다';
      solution = '제한된 길이 내에서 입력해주세요';
    } else if (warning.includes('형식')) {
      message = '입력 형식이 올바르지 않습니다';
      solution = '올바른 형식으로 입력해주세요';
    } else {
      message = warning;
      solution = '입력 내용을 확인해주세요';
    }
    
    const fullMessage = context ? 
      `${context}: ${message}\n해결 방법: ${solution}` : 
      `${message}\n해결 방법: ${solution}`;
    
    return addToast({
      type: 'warning',
      message: fullMessage,
      duration: 6000,
    });
  }, [addToast]);

  const value = {
    toasts,
    addToast,
    removeToast,
    clearToasts,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showDetailedError,
    showDetailedWarning,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastContext;