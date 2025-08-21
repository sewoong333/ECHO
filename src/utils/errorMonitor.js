import React from 'react';

// 전역 에러 모니터링 시스템
class ErrorMonitor {
  constructor() {
    this.errors = [];
    this.listeners = [];
    this.maxErrors = 100;
    this.init();
  }

  init() {
    // React 에러 캐치
    window.addEventListener('error', this.handleError.bind(this));
    window.addEventListener('unhandledrejection', this.handlePromiseRejection.bind(this));
    
    // React Suspense 에러 감지
    this.observeReactErrors();
  }

  handleError(event) {
    const error = {
      type: 'javascript',
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    this.logError(error);
    
    // 심각한 에러 감지 시 페이지 복구 시도
    if (this.isCriticalError(error)) {
      this.attemptRecovery(error);
    }
  }

  handlePromiseRejection(event) {
    const error = {
      type: 'promise',
      message: event.reason?.message || 'Unhandled Promise Rejection',
      stack: event.reason?.stack,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    this.logError(error);
    
    // Context 관련 에러인지 확인
    if (this.isContextError(error)) {
      this.handleContextError(error);
    }
  }

  observeReactErrors() {
    // React DevTools가 있는 경우 에러 감지
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const message = args.join(' ');
      
      // React 에러 패턴 감지
      if (message.includes('Warning') || 
          message.includes('Error') || 
          message.includes('Cannot read prop') ||
          message.includes('undefined')) {
        
        const error = {
          type: 'react',
          message,
          timestamp: new Date().toISOString(),
          url: window.location.href
        };
        
        this.logError(error);
      }
      
      // 원래 console.error 호출
      originalConsoleError.apply(console, args);
    };
  }

  logError(error) {
    this.errors.push(error);
    
    // 최대 에러 수 제한
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }
    
    // 리스너들에게 알림
    this.listeners.forEach(listener => {
      try {
        listener(error);
      } catch (err) {
        console.warn('Error listener failed:', err);
      }
    });
    
    // 개발 환경에서 로깅
    if (process.env.NODE_ENV === 'development') {
      console.warn('🚨 Error Monitor:', error);
    }
  }

  isCriticalError(error) {
    const criticalPatterns = [
      'ChunkLoadError',
      'Loading chunk',
      'NetworkError',
      'Script error',
      'Cannot read prop.*of undefined',
      'Cannot read prop.*of null'
    ];
    
    return criticalPatterns.some(pattern => 
      new RegExp(pattern).test(error.message)
    );
  }

  isContextError(error) {
    const contextPatterns = [
      'useContext',
      'Context',
      'Provider',
      'Consumer'
    ];
    
    return contextPatterns.some(pattern => 
      error.message.includes(pattern) || error.stack?.includes(pattern)
    );
  }

  handleContextError(error) {
    console.warn('🔧 Context 에러 감지, 복구 시도 중...', error);
    
    // Context 관련 에러는 페이지 새로고침으로 복구
    setTimeout(() => {
      if (this.getRecentContextErrors().length >= 3) {
        this.attemptRecovery(error);
      }
    }, 1000);
  }

  getRecentContextErrors() {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    return this.errors.filter(error => 
      this.isContextError(error) && 
      new Date(error.timestamp) > fiveMinutesAgo
    );
  }

  attemptRecovery(error) {
    console.warn('🚑 에러 복구 시도 중...', error);
    
    // 로컬 스토리지 정리
    try {
      const keysToKeep = ['user-preferences', 'auth-token'];
      Object.keys(localStorage).forEach(key => {
        if (!keysToKeep.includes(key)) {
          localStorage.removeItem(key);
        }
      });
    } catch (err) {
      console.warn('로컬 스토리지 정리 실패:', err);
    }
    
    // 세션 스토리지 정리
    try {
      sessionStorage.clear();
    } catch (err) {
      console.warn('세션 스토리지 정리 실패:', err);
    }
    
    // 2초 후 새로고침
    setTimeout(() => {
      try {
        window.location.reload();
      } catch (err) {
        // 새로고침도 실패하면 홈으로 이동
        window.location.href = '/';
      }
    }, 2000);
  }

  addListener(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  getErrorStats() {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    
    const recentErrors = this.errors.filter(error => 
      new Date(error.timestamp) > oneHourAgo
    );
    
    const errorsByType = recentErrors.reduce((acc, error) => {
      acc[error.type] = (acc[error.type] || 0) + 1;
      return acc;
    }, {});
    
    return {
      total: recentErrors.length,
      byType: errorsByType,
      critical: recentErrors.filter(error => this.isCriticalError(error)).length,
      context: recentErrors.filter(error => this.isContextError(error)).length
    };
  }

  clearErrors() {
    this.errors = [];
  }
}

// 전역 인스턴스 생성
const errorMonitor = new ErrorMonitor();

// React 컴포넌트에서 사용할 수 있는 훅
export const useErrorMonitor = () => {
  const [errorStats, setErrorStats] = React.useState(errorMonitor.getErrorStats());
  
  React.useEffect(() => {
    const updateStats = () => {
      setErrorStats(errorMonitor.getErrorStats());
    };
    
    const removeListener = errorMonitor.addListener(updateStats);
    
    // 5초마다 스탯 업데이트
    const interval = setInterval(updateStats, 5000);
    
    return () => {
      removeListener();
      clearInterval(interval);
    };
  }, []);
  
  return {
    errorStats,
    clearErrors: () => errorMonitor.clearErrors(),
    forceRecovery: () => errorMonitor.attemptRecovery({ type: 'manual', message: 'Manual recovery' })
  };
};

export default errorMonitor;