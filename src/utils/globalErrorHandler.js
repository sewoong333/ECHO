// 전역 에러 핸들러 시스템
import React from 'react';
import { logError, analyzeError, networkMonitor } from './errorHandler';

// 전역 에러 타입
const GLOBAL_ERROR_TYPES = {
  UNHANDLED_PROMISE: 'unhandled_promise_rejection',
  RUNTIME_ERROR: 'runtime_error',
  RESOURCE_LOAD_ERROR: 'resource_load_error',
  NETWORK_ERROR: 'network_error',
  SCRIPT_ERROR: 'script_error'
};

// 에러 알림 타입
const NOTIFICATION_TYPES = {
  SILENT: 'silent',         // 로깅만
  TOAST: 'toast',          // 토스트 알림
  MODAL: 'modal',          // 모달 알림
  BANNER: 'banner'         // 배너 알림
};

class GlobalErrorHandler {
  constructor() {
    this.isInitialized = false;
    this.errorQueue = [];
    this.listeners = new Set();
    this.rateLimiter = new Map();
    this.config = {
      enableConsoleLogging: process.env.NODE_ENV === 'development',
      enableRemoteLogging: process.env.NODE_ENV === 'production',
      maxErrorsPerMinute: 10,
      enableUserNotifications: true,
      notificationDurations: {
        toast: 5000,
        banner: 10000
      }
    };
  }

  // 전역 에러 핸들러 초기화
  initialize(options = {}) {
    if (this.isInitialized) {
      console.warn('GlobalErrorHandler is already initialized');
      return;
    }

    // 설정 병합
    this.config = { ...this.config, ...options };

    // 전역 에러 이벤트 리스너 등록
    this.setupGlobalErrorListeners();

    // 네트워크 모니터링
    this.setupNetworkMonitoring();

    // Promise rejection 핸들링
    this.setupUnhandledPromiseRejection();

    // 리소스 로딩 에러 핸들링
    this.setupResourceErrorHandling();

    this.isInitialized = true;
    console.log('🛡️ Global Error Handler initialized');
  }

  // 전역 에러 이벤트 리스너 설정
  setupGlobalErrorListeners() {
    // JavaScript 런타임 에러
    window.addEventListener('error', (event) => {
      this.handleRuntimeError(event);
    });

    // 처리되지 않은 Promise rejection
    window.addEventListener('unhandledrejection', (event) => {
      this.handleUnhandledPromiseRejection(event);
    });

    // 네트워크 연결 에러
    window.addEventListener('offline', () => {
      this.handleNetworkError('offline');
    });

    window.addEventListener('online', () => {
      this.handleNetworkError('online');
    });
  }

  // 네트워크 모니터링 설정
  setupNetworkMonitoring() {
    networkMonitor.addListener((status) => {
      if (!status.isOnline) {
        this.notifyUser({
          type: GLOBAL_ERROR_TYPES.NETWORK_ERROR,
          message: '인터넷 연결이 끊어졌습니다.',
          notificationType: NOTIFICATION_TYPES.BANNER,
          persistent: true
        });
      } else {
        this.notifyUser({
          type: GLOBAL_ERROR_TYPES.NETWORK_ERROR,
          message: '인터넷 연결이 복구되었습니다.',
          notificationType: NOTIFICATION_TYPES.TOAST,
          severity: 'success'
        });
      }
    });
  }

  // Promise rejection 핸들링 설정
  setupUnhandledPromiseRejection() {
    window.addEventListener('unhandledrejection', (event) => {
      // 브라우저 기본 에러 표시 방지
      event.preventDefault();
      
      this.handleUnhandledPromiseRejection(event);
    });
  }

  // 리소스 로딩 에러 핸들링 설정
  setupResourceErrorHandling() {
    // 이미지, 스크립트 등 리소스 로딩 실패 감지
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.handleResourceLoadError(event);
      }
    }, true); // capturing phase에서 처리
  }

  // 런타임 에러 처리
  handleRuntimeError(event) {
    const error = {
      type: GLOBAL_ERROR_TYPES.RUNTIME_ERROR,
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      error: event.error,
      stack: event.error?.stack
    };

    this.processError(error, {
      notificationType: this.shouldNotifyUser(error) ? NOTIFICATION_TYPES.TOAST : NOTIFICATION_TYPES.SILENT
    });
  }

  // Promise rejection 처리
  handleUnhandledPromiseRejection(event) {
    const error = {
      type: GLOBAL_ERROR_TYPES.UNHANDLED_PROMISE,
      message: event.reason?.message || 'Unhandled Promise Rejection',
      reason: event.reason,
      stack: event.reason?.stack
    };

    this.processError(error, {
      notificationType: this.shouldNotifyUser(error) ? NOTIFICATION_TYPES.TOAST : NOTIFICATION_TYPES.SILENT
    });
  }

  // 리소스 로딩 에러 처리
  handleResourceLoadError(event) {
    const error = {
      type: GLOBAL_ERROR_TYPES.RESOURCE_LOAD_ERROR,
      message: `Failed to load resource: ${event.target.src || event.target.href}`,
      element: event.target.tagName,
      source: event.target.src || event.target.href
    };

    this.processError(error, {
      notificationType: NOTIFICATION_TYPES.SILENT // 리소스 로딩 에러는 조용히 처리
    });
  }

  // 네트워크 에러 처리
  handleNetworkError(type) {
    const error = {
      type: GLOBAL_ERROR_TYPES.NETWORK_ERROR,
      message: type === 'offline' ? 'Network connection lost' : 'Network connection restored',
      networkStatus: type
    };

    this.processError(error, {
      notificationType: type === 'offline' ? NOTIFICATION_TYPES.BANNER : NOTIFICATION_TYPES.TOAST
    });
  }

  // 에러 처리 메인 로직
  processError(error, options = {}) {
    // 레이트 리미팅 체크
    if (!this.checkRateLimit(error)) {
      return;
    }

    // 에러 분석
    const analysis = analyzeError(error);
    
    // 에러 로깅
    const logData = logError(error, {
      handler: 'global',
      analysis,
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString()
    });

    // 에러 큐에 추가
    this.errorQueue.push({
      ...error,
      analysis,
      logData,
      timestamp: Date.now(),
      options
    });

    // 리스너들에게 알림
    this.notifyListeners({
      error,
      analysis,
      logData,
      options
    });

    // 사용자 알림
    if (options.notificationType && options.notificationType !== NOTIFICATION_TYPES.SILENT) {
      this.notifyUser({
        ...error,
        analysis,
        notificationType: options.notificationType
      });
    }

    // 에러 큐 정리 (최대 100개 유지)
    if (this.errorQueue.length > 100) {
      this.errorQueue = this.errorQueue.slice(-100);
    }
  }

  // 레이트 리미팅 체크
  checkRateLimit(error) {
    const key = `${error.type}:${error.message}`;
    const now = Date.now();
    const minute = 60 * 1000;

    if (!this.rateLimiter.has(key)) {
      this.rateLimiter.set(key, []);
    }

    const timestamps = this.rateLimiter.get(key);
    
    // 1분 이내의 타임스탬프만 유지
    const recentTimestamps = timestamps.filter(t => now - t < minute);
    
    if (recentTimestamps.length >= this.config.maxErrorsPerMinute) {
      return false; // 레이트 리미트 초과
    }

    recentTimestamps.push(now);
    this.rateLimiter.set(key, recentTimestamps);
    return true;
  }

  // 사용자 알림 필요성 판단
  shouldNotifyUser(error) {
    if (!this.config.enableUserNotifications) return false;

    // 개발 환경에서는 대부분 알림하지 않음
    if (process.env.NODE_ENV === 'development') return false;

    // 스크립트 에러나 네트워크 에러는 알림
    const notifiableTypes = [
      GLOBAL_ERROR_TYPES.NETWORK_ERROR,
      GLOBAL_ERROR_TYPES.UNHANDLED_PROMISE
    ];

    return notifiableTypes.includes(error.type);
  }

  // 사용자에게 알림
  notifyUser(errorData) {
    const { notificationType, message, severity = 'error' } = errorData;

    // 토스트 알림 시스템과 연동
    if (window.showToast) {
      switch (notificationType) {
        case NOTIFICATION_TYPES.TOAST:
          window.showToast(message, {
            type: severity,
            duration: this.config.notificationDurations.toast
          });
          break;
        
        case NOTIFICATION_TYPES.BANNER:
          // 배너 알림 (구현 필요)
          this.showBanner(message, severity);
          break;
        
        case NOTIFICATION_TYPES.MODAL:
          // 모달 알림 (구현 필요)
          this.showModal(message, severity);
          break;
      }
    } else {
      console.warn('Toast notification system not available');
    }
  }

  // 배너 알림 표시
  showBanner(message, severity) {
    // 간단한 배너 구현
    const banner = document.createElement('div');
    banner.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: ${severity === 'error' ? '#ef4444' : '#10b981'};
      color: white;
      padding: 12px 20px;
      text-align: center;
      z-index: 10001;
      font-size: 14px;
      font-weight: 500;
    `;
    banner.textContent = message;
    
    document.body.appendChild(banner);
    
    // 자동 제거
    setTimeout(() => {
      if (banner.parentNode) {
        banner.parentNode.removeChild(banner);
      }
    }, this.config.notificationDurations.banner);
  }

  // 리스너 등록
  addListener(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  // 리스너들에게 알림
  notifyListeners(data) {
    this.listeners.forEach(callback => {
      try {
        callback(data);
      } catch (error) {
        console.error('Error in global error handler listener:', error);
      }
    });
  }

  // 에러 통계 조회
  getErrorStats() {
    const now = Date.now();
    const hour = 60 * 60 * 1000;
    const day = 24 * hour;

    const recentErrors = this.errorQueue.filter(e => now - e.timestamp < hour);
    const todayErrors = this.errorQueue.filter(e => now - e.timestamp < day);

    const errorsByType = this.errorQueue.reduce((acc, error) => {
      acc[error.type] = (acc[error.type] || 0) + 1;
      return acc;
    }, {});

    return {
      total: this.errorQueue.length,
      lastHour: recentErrors.length,
      today: todayErrors.length,
      byType: errorsByType,
      mostRecent: this.errorQueue[this.errorQueue.length - 1] || null
    };
  }

  // 에러 큐 조회
  getErrorQueue() {
    return [...this.errorQueue];
  }

  // 에러 큐 정리
  clearErrorQueue() {
    this.errorQueue = [];
    this.rateLimiter.clear();
  }

  // 수동 에러 보고
  reportError(error, context = {}) {
    this.processError({
      type: 'manual_report',
      message: error.message || error,
      error: error instanceof Error ? error : new Error(error),
      context
    }, {
      notificationType: NOTIFICATION_TYPES.SILENT
    });
  }

  // 정리
  destroy() {
    // 이벤트 리스너 제거는 removeEventListener로 정확히 매칭되는 함수를 전달해야 하므로
    // 실제로는 각 리스너를 개별적으로 관리해야 함
    this.listeners.clear();
    this.errorQueue = [];
    this.rateLimiter.clear();
    this.isInitialized = false;
    
    console.log('🗑️ Global Error Handler destroyed');
  }
}

// 전역 인스턴스 생성
export const globalErrorHandler = new GlobalErrorHandler();

// React Hook
export function useGlobalErrorHandler() {
  const [errors, setErrors] = React.useState([]);
  const [stats, setStats] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = globalErrorHandler.addListener((errorData) => {
      setErrors(prev => [...prev.slice(-19), errorData]); // 최대 20개 유지
    });

    // 통계 업데이트
    const updateStats = () => {
      setStats(globalErrorHandler.getErrorStats());
    };

    updateStats();
    const statsInterval = setInterval(updateStats, 30000); // 30초마다 업데이트

    return () => {
      unsubscribe();
      clearInterval(statsInterval);
    };
  }, []);

  return {
    errors,
    stats,
    reportError: globalErrorHandler.reportError.bind(globalErrorHandler),
    clearErrors: () => {
      globalErrorHandler.clearErrorQueue();
      setErrors([]);
    }
  };
}

// 초기화 함수
export function initializeGlobalErrorHandler(options = {}) {
  globalErrorHandler.initialize(options);
  
  // Toast 시스템과 연동
  if (window.showToast) {
    console.log('🔗 Global Error Handler connected to Toast system');
  }
  
  return globalErrorHandler;
}

export default globalErrorHandler;