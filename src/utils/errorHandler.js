/**
 * 전역 에러 처리 시스템
 * - 일관된 에러 처리
 * - 사용자 친화적 에러 메시지
 * - 에러 로깅 및 모니터링
 */

// 에러 타입 정의
export const ERROR_TYPES = {
  NETWORK: 'NETWORK_ERROR',
  AUTH: 'AUTH_ERROR',
  VALIDATION: 'VALIDATION_ERROR',
  PERMISSION: 'PERMISSION_ERROR',
  NOT_FOUND: 'NOT_FOUND_ERROR',
  SERVER: 'SERVER_ERROR',
  UNKNOWN: 'UNKNOWN_ERROR'
};

// 에러 심각도 정의
export const ERROR_SEVERITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical'
};

// 사용자 친화적 에러 메시지
const ERROR_MESSAGES = {
  [ERROR_TYPES.NETWORK]: {
    title: '네트워크 오류',
    message: '인터넷 연결을 확인해주세요.',
    action: '다시 시도'
  },
  [ERROR_TYPES.AUTH]: {
    title: '인증 오류',
    message: '로그인이 필요합니다.',
    action: '로그인하기'
  },
  [ERROR_TYPES.VALIDATION]: {
    title: '입력 오류',
    message: '입력한 정보를 확인해주세요.',
    action: '다시 입력'
  },
  [ERROR_TYPES.PERMISSION]: {
    title: '권한 오류',
    message: '이 작업을 수행할 권한이 없습니다.',
    action: '권한 확인'
  },
  [ERROR_TYPES.NOT_FOUND]: {
    title: '찾을 수 없음',
    message: '요청한 정보를 찾을 수 없습니다.',
    action: '홈으로 이동'
  },
  [ERROR_TYPES.SERVER]: {
    title: '서버 오류',
    message: '일시적인 서버 오류가 발생했습니다.',
    action: '다시 시도'
  },
  [ERROR_TYPES.UNKNOWN]: {
    title: '알 수 없는 오류',
    message: '예상치 못한 오류가 발생했습니다.',
    action: '고객센터 문의'
  }
};

// 커스텀 에러 클래스
export class AppError extends Error {
  constructor(type, message, severity = ERROR_SEVERITY.MEDIUM, originalError = null) {
    super(message);
    this.name = 'AppError';
    this.type = type;
    this.severity = severity;
    this.originalError = originalError;
    this.timestamp = new Date().toISOString();
    this.id = this.generateErrorId();
  }

  generateErrorId() {
    return `ERR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getUserMessage() {
    return ERROR_MESSAGES[this.type] || ERROR_MESSAGES[ERROR_TYPES.UNKNOWN];
  }
}

// 에러 로깅 시스템
class ErrorLogger {
  constructor() {
    this.errors = [];
    this.maxErrors = 100; // 최대 저장 에러 수
  }

  log(error) {
    const errorLog = {
      id: error.id || this.generateId(),
      type: error.type || ERROR_TYPES.UNKNOWN,
      severity: error.severity || ERROR_SEVERITY.MEDIUM,
      message: error.message,
      stack: error.stack,
      timestamp: error.timestamp || new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getCurrentUserId()
    };

    this.errors.push(errorLog);

    // 최대 에러 수 초과 시 오래된 에러 제거
    if (this.errors.length > this.maxErrors) {
      this.errors.shift();
    }

    // 콘솔에 로그 출력
    this.logToConsole(errorLog);

    // 심각한 에러는 추가 처리
    if (error.severity === ERROR_SEVERITY.CRITICAL) {
      this.handleCriticalError(errorLog);
    }
  }

  generateId() {
    return `LOG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getCurrentUserId() {
    // 현재 로그인한 사용자 ID 반환
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      return user?.uid || 'anonymous';
    } catch {
      return 'anonymous';
    }
  }

  logToConsole(errorLog) {
    const logMessage = `[${errorLog.severity.toUpperCase()}] ${errorLog.type}: ${errorLog.message}`;
    
    switch (errorLog.severity) {
      case ERROR_SEVERITY.CRITICAL:
        console.error(logMessage, errorLog);
        break;
      case ERROR_SEVERITY.HIGH:
        console.error(logMessage, errorLog);
        break;
      case ERROR_SEVERITY.MEDIUM:
        console.warn(logMessage, errorLog);
        break;
      case ERROR_SEVERITY.LOW:
        console.info(logMessage, errorLog);
        break;
      default:
        console.log(logMessage, errorLog);
    }
  }

  handleCriticalError(errorLog) {
    // 심각한 에러에 대한 추가 처리
    // 예: 외부 모니터링 서비스에 전송, 관리자 알림 등
    console.error('🚨 CRITICAL ERROR:', errorLog);
    
    // 필요시 외부 서비스에 에러 전송
    // this.sendToExternalService(errorLog);
  }

  getErrors() {
    return [...this.errors];
  }

  clearErrors() {
    this.errors = [];
  }

  getErrorStats() {
    const stats = {
      total: this.errors.length,
      byType: {},
      bySeverity: {},
      recent: this.errors.slice(-10)
    };

    this.errors.forEach(error => {
      stats.byType[error.type] = (stats.byType[error.type] || 0) + 1;
      stats.bySeverity[error.severity] = (stats.bySeverity[error.severity] || 0) + 1;
    });

    return stats;
  }
}

// 전역 에러 로거 인스턴스
export const errorLogger = new ErrorLogger();

// 에러 처리 유틸리티 함수들
export const errorHandler = {
  // Firebase 에러를 AppError로 변환
  handleFirebaseError(error) {
    let type = ERROR_TYPES.UNKNOWN;
    let severity = ERROR_SEVERITY.MEDIUM;

    if (error.code) {
      switch (error.code) {
        case 'permission-denied':
          type = ERROR_TYPES.PERMISSION;
          severity = ERROR_SEVERITY.HIGH;
          break;
        case 'unauthenticated':
          type = ERROR_TYPES.AUTH;
          severity = ERROR_SEVERITY.MEDIUM;
          break;
        case 'not-found':
          type = ERROR_TYPES.NOT_FOUND;
          severity = ERROR_SEVERITY.LOW;
          break;
        case 'invalid-argument':
          type = ERROR_TYPES.VALIDATION;
          severity = ERROR_SEVERITY.MEDIUM;
          break;
        case 'unavailable':
          type = ERROR_TYPES.NETWORK;
          severity = ERROR_SEVERITY.HIGH;
          break;
        default:
          type = ERROR_TYPES.SERVER;
          severity = ERROR_SEVERITY.HIGH;
      }
    }

    return new AppError(type, error.message, severity, error);
  },

  // 네트워크 에러 처리
  handleNetworkError(error) {
    return new AppError(
      ERROR_TYPES.NETWORK,
      '네트워크 연결을 확인해주세요.',
      ERROR_SEVERITY.HIGH,
      error
    );
  },

  // 검증 에러 처리
  handleValidationError(message) {
    return new AppError(
      ERROR_TYPES.VALIDATION,
      message,
      ERROR_SEVERITY.LOW
    );
  },

  // 권한 에러 처리
  handlePermissionError(message = '이 작업을 수행할 권한이 없습니다.') {
    return new AppError(
      ERROR_TYPES.PERMISSION,
      message,
      ERROR_SEVERITY.HIGH
    );
  },

  // 일반적인 에러 처리
  handleError(error, context = '') {
    let appError;

    if (error instanceof AppError) {
      appError = error;
    } else if (error.code && error.code.startsWith('auth/')) {
      appError = this.handleFirebaseError(error);
    } else if (error.name === 'FirebaseError') {
      appError = this.handleFirebaseError(error);
    } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
      appError = this.handleNetworkError(error);
    } else {
      appError = new AppError(
        ERROR_TYPES.UNKNOWN,
        error.message || '알 수 없는 오류가 발생했습니다.',
        ERROR_SEVERITY.MEDIUM,
        error
      );
    }

    // 컨텍스트 정보 추가
    if (context) {
      appError.context = context;
    }

    // 에러 로깅
    errorLogger.log(appError);

    return appError;
  }
};

// 전역 에러 핸들러 설정
export const setupGlobalErrorHandler = () => {
  // JavaScript 에러 처리
  window.addEventListener('error', (event) => {
    const error = new AppError(
      ERROR_TYPES.UNKNOWN,
      event.error?.message || 'JavaScript 에러가 발생했습니다.',
      ERROR_SEVERITY.HIGH,
      event.error
    );
    errorLogger.log(error);
  });

  // Promise rejection 에러 처리
  window.addEventListener('unhandledrejection', (event) => {
    const error = new AppError(
      ERROR_TYPES.UNKNOWN,
      event.reason?.message || 'Promise rejection이 발생했습니다.',
      ERROR_SEVERITY.HIGH,
      event.reason
    );
    errorLogger.log(error);
  });
};

// 개발자 도구용 에러 정보 노출
if (typeof window !== 'undefined') {
  window.errorLogger = errorLogger;
  window.errorHandler = errorHandler;
  window.ERROR_TYPES = ERROR_TYPES;
  window.ERROR_SEVERITY = ERROR_SEVERITY;
}