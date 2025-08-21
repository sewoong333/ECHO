import { useState, useCallback } from 'react';

// 에러 경계 훅
export const useErrorBoundary = () => {
  const [error, setError] = useState(null);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  const captureError = useCallback((error, errorInfo) => {
    console.error('Error captured:', error, errorInfo);
    setError(error);
    
    // 에러 리포팅 (예: Sentry)
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
  }, []);

  return {
    error,
    resetError,
    captureError,
    hasError: !!error
  };
};