// 통합 에러 처리 시스템
import { auth } from './firebase';

// 에러 타입 분류
export const ERROR_TYPES = {
  // Firebase 에러
  FIREBASE_AUTH: 'firebase_auth',
  FIREBASE_FIRESTORE: 'firebase_firestore', 
  FIREBASE_STORAGE: 'firebase_storage',
  FIREBASE_NETWORK: 'firebase_network',
  
  // 네트워크 에러
  NETWORK_OFFLINE: 'network_offline',
  NETWORK_TIMEOUT: 'network_timeout',
  NETWORK_CONNECTION: 'network_connection',
  
  // 사용자 입력 에러
  VALIDATION_FAILED: 'validation_failed',
  INVALID_INPUT: 'invalid_input',
  
  // API 에러
  API_CLIENT_ERROR: 'api_client_error',
  API_SERVER_ERROR: 'api_server_error',
  API_TIMEOUT: 'api_timeout',
  
  // 애플리케이션 에러
  PERMISSION_DENIED: 'permission_denied',
  NOT_FOUND: 'not_found',
  UNKNOWN: 'unknown'
};

// Firebase 에러 코드 매핑
const FIREBASE_ERROR_CODES = {
  // Authentication 에러
  'auth/user-not-found': {
    type: ERROR_TYPES.FIREBASE_AUTH,
    message: '등록되지 않은 사용자입니다.',
    action: 'redirect_signup'
  },
  'auth/wrong-password': {
    type: ERROR_TYPES.FIREBASE_AUTH,
    message: '비밀번호가 올바르지 않습니다.',
    action: 'retry'
  },
  'auth/email-already-in-use': {
    type: ERROR_TYPES.FIREBASE_AUTH,
    message: '이미 사용 중인 이메일입니다.',
    action: 'redirect_login'
  },
  'auth/weak-password': {
    type: ERROR_TYPES.FIREBASE_AUTH,
    message: '비밀번호가 너무 약합니다. 6자 이상 입력해주세요.',
    action: 'retry'
  },
  'auth/invalid-email': {
    type: ERROR_TYPES.FIREBASE_AUTH,
    message: '유효하지 않은 이메일 형식입니다.',
    action: 'retry'
  },
  'auth/too-many-requests': {
    type: ERROR_TYPES.FIREBASE_AUTH,
    message: '너무 많은 시도가 있었습니다. 잠시 후 다시 시도해주세요.',
    action: 'wait'
  },
  'auth/network-request-failed': {
    type: ERROR_TYPES.FIREBASE_NETWORK,
    message: '네트워크 연결을 확인해주세요.',
    action: 'retry'
  },

  // Firestore 에러
  'permission-denied': {
    type: ERROR_TYPES.PERMISSION_DENIED,
    message: '접근 권한이 없습니다.',
    action: 'login_required'
  },
  'not-found': {
    type: ERROR_TYPES.NOT_FOUND,
    message: '요청한 데이터를 찾을 수 없습니다.',
    action: 'reload'
  },
  'unavailable': {
    type: ERROR_TYPES.FIREBASE_NETWORK,
    message: '서비스가 일시적으로 사용할 수 없습니다.',
    action: 'retry'
  },
  'deadline-exceeded': {
    type: ERROR_TYPES.FIREBASE_NETWORK,
    message: '요청 시간이 초과되었습니다.',
    action: 'retry'
  },
  'resource-exhausted': {
    type: ERROR_TYPES.FIREBASE_FIRESTORE,
    message: '서버 리소스가 부족합니다. 잠시 후 다시 시도해주세요.',
    action: 'wait'
  },

  // Storage 에러
  'storage/object-not-found': {
    type: ERROR_TYPES.FIREBASE_STORAGE,
    message: '파일을 찾을 수 없습니다.',
    action: 'reload'
  },
  'storage/bucket-not-found': {
    type: ERROR_TYPES.FIREBASE_STORAGE,
    message: '저장소를 찾을 수 없습니다.',
    action: 'reload'
  },
  'storage/quota-exceeded': {
    type: ERROR_TYPES.FIREBASE_STORAGE,
    message: '저장 용량이 초과되었습니다.',
    action: 'contact_support'
  },
  'storage/unauthenticated': {
    type: ERROR_TYPES.FIREBASE_AUTH,
    message: '로그인이 필요합니다.',
    action: 'login_required'
  },
  'storage/unauthorized': {
    type: ERROR_TYPES.PERMISSION_DENIED,
    message: '파일 업로드 권한이 없습니다.',
    action: 'login_required'
  },
  'storage/retry-limit-exceeded': {
    type: ERROR_TYPES.FIREBASE_NETWORK,
    message: '업로드 재시도 횟수를 초과했습니다.',
    action: 'retry'
  },
  'storage/invalid-format': {
    type: ERROR_TYPES.VALIDATION_FAILED,
    message: '지원하지 않는 파일 형식입니다.',
    action: 'change_file'
  }
};

// HTTP 상태 코드별 에러 처리
const HTTP_ERROR_CODES = {
  400: {
    type: ERROR_TYPES.API_CLIENT_ERROR,
    message: '잘못된 요청입니다.',
    action: 'retry'
  },
  401: {
    type: ERROR_TYPES.PERMISSION_DENIED,
    message: '인증이 필요합니다.',
    action: 'login_required'
  },
  403: {
    type: ERROR_TYPES.PERMISSION_DENIED,
    message: '접근 권한이 없습니다.',
    action: 'contact_support'
  },
  404: {
    type: ERROR_TYPES.NOT_FOUND,
    message: '요청한 리소스를 찾을 수 없습니다.',
    action: 'reload'
  },
  408: {
    type: ERROR_TYPES.API_TIMEOUT,
    message: '요청 시간이 초과되었습니다.',
    action: 'retry'
  },
  429: {
    type: ERROR_TYPES.API_CLIENT_ERROR,
    message: '너무 많은 요청입니다. 잠시 후 다시 시도해주세요.',
    action: 'wait'
  },
  500: {
    type: ERROR_TYPES.API_SERVER_ERROR,
    message: '서버 오류가 발생했습니다.',
    action: 'retry'
  },
  502: {
    type: ERROR_TYPES.API_SERVER_ERROR,
    message: '서버 연결에 문제가 있습니다.',
    action: 'retry'
  },
  503: {
    type: ERROR_TYPES.API_SERVER_ERROR,
    message: '서비스가 일시적으로 사용할 수 없습니다.',
    action: 'wait'
  },
  504: {
    type: ERROR_TYPES.API_TIMEOUT,
    message: '서버 응답 시간이 초과되었습니다.',
    action: 'retry'
  }
};

// 에러 분석 및 분류 함수
export function analyzeError(error) {
  console.group('🔍 에러 분석 시작');
  console.log('원본 에러:', error);

  let errorInfo = {
    type: ERROR_TYPES.UNKNOWN,
    code: null,
    message: '알 수 없는 오류가 발생했습니다.',
    action: 'reload',
    isRetryable: false,
    retryAfter: null,
    originalError: error
  };

  try {
    // Firebase 에러 처리
    if (error?.code && FIREBASE_ERROR_CODES[error.code]) {
      const firebaseError = FIREBASE_ERROR_CODES[error.code];
      errorInfo = {
        ...errorInfo,
        ...firebaseError,
        code: error.code,
        isRetryable: ['retry', 'wait'].includes(firebaseError.action)
      };
    }
    // HTTP 에러 처리
    else if (error?.response?.status) {
      const httpError = HTTP_ERROR_CODES[error.response.status];
      if (httpError) {
        errorInfo = {
          ...errorInfo,
          ...httpError,
          code: error.response.status,
          isRetryable: ['retry', 'wait'].includes(httpError.action)
        };
      }
    }
    // 네트워크 에러 처리
    else if (!navigator.onLine) {
      errorInfo = {
        ...errorInfo,
        type: ERROR_TYPES.NETWORK_OFFLINE,
        message: '인터넷 연결을 확인해주세요.',
        action: 'retry',
        isRetryable: true
      };
    }
    // 타임아웃 에러 처리
    else if (error?.name === 'TimeoutError' || error?.message?.includes('timeout')) {
      errorInfo = {
        ...errorInfo,
        type: ERROR_TYPES.NETWORK_TIMEOUT,
        message: '요청 시간이 초과되었습니다.',
        action: 'retry',
        isRetryable: true
      };
    }
    // 일반적인 네트워크 에러
    else if (error?.name === 'NetworkError' || error?.message?.includes('fetch')) {
      errorInfo = {
        ...errorInfo,
        type: ERROR_TYPES.NETWORK_CONNECTION,
        message: '네트워크 연결에 문제가 있습니다.',
        action: 'retry',
        isRetryable: true
      };
    }

    // 재시도 시간 설정
    if (errorInfo.isRetryable) {
      switch (errorInfo.action) {
        case 'wait':
          errorInfo.retryAfter = 5000; // 5초
          break;
        case 'retry':
          errorInfo.retryAfter = 1000; // 1초
          break;
      }
    }

  } catch (analysisError) {
    console.error('에러 분석 중 오류 발생:', analysisError);
  }

  console.log('분석 결과:', errorInfo);
  console.groupEnd();

  return errorInfo;
}

// 에러 로깅 함수
export function logError(error, context = {}) {
  const errorInfo = analyzeError(error);
  
  const logData = {
    timestamp: new Date().toISOString(),
    errorInfo,
    context: {
      userId: auth.currentUser?.uid || 'anonymous',
      userAgent: navigator.userAgent,
      url: window.location.href,
      ...context
    },
    environment: process.env.NODE_ENV
  };

  // 개발 환경에서는 콘솔에 로깅
  if (process.env.NODE_ENV === 'development') {
    console.group('🚨 에러 로그');
    console.error('에러 정보:', logData);
    console.groupEnd();
  }

  // 프로덕션 환경에서는 에러 리포팅 서비스로 전송
  if (process.env.NODE_ENV === 'production') {
    // 여기에 실제 에러 리포팅 서비스 연동
    // 예: Sentry, LogRocket, 자체 서버 등
    sendErrorToService(logData);
  }

  return logData;
}

// 에러 리포팅 서비스 전송 (프로덕션용)
async function sendErrorToService(logData) {
  try {
    // 실제 환경에서는 에러 리포팅 서비스 API 호출
    console.log('에러 리포팅 서비스로 전송:', logData);
    
    // 예시: 자체 서버로 전송
    // await fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(logData)
    // });
  } catch (sendError) {
    console.error('에러 리포팅 전송 실패:', sendError);
  }
}

// 재시도 함수
export async function retryOperation(operation, maxRetries = 3, backoffMs = 1000) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 작업 시도 ${attempt}/${maxRetries}`);
      return await operation();
    } catch (error) {
      lastError = error;
      const errorInfo = analyzeError(error);
      
      console.warn(`❌ 시도 ${attempt} 실패:`, errorInfo.message);
      
      // 재시도 불가능한 에러인 경우 즉시 종료
      if (!errorInfo.isRetryable) {
        console.log('🚫 재시도 불가능한 에러');
        break;
      }
      
      // 마지막 시도가 아닌 경우 백오프 적용
      if (attempt < maxRetries) {
        const delay = backoffMs * Math.pow(2, attempt - 1); // 지수 백오프
        console.log(`⏳ ${delay}ms 후 재시도`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  console.error(`💥 모든 재시도 실패`);
  throw lastError;
}

// Firebase 작업 래퍼 함수
export async function withFirebaseErrorHandling(operation, context = {}) {
  try {
    return await operation();
  } catch (error) {
    const logData = logError(error, {
      operation: 'firebase_operation',
      ...context
    });
    
    // 에러 정보와 함께 다시 throw
    const enhancedError = new Error(logData.errorInfo.message);
    enhancedError.errorInfo = logData.errorInfo;
    enhancedError.originalError = error;
    
    throw enhancedError;
  }
}

// 네트워크 상태 감지
export class NetworkMonitor {
  constructor() {
    this.isOnline = navigator.onLine;
    this.listeners = new Set();
    
    window.addEventListener('online', this.handleOnline.bind(this));
    window.addEventListener('offline', this.handleOffline.bind(this));
  }
  
  handleOnline() {
    this.isOnline = true;
    this.notifyListeners({ isOnline: true });
  }
  
  handleOffline() {
    this.isOnline = false;
    this.notifyListeners({ isOnline: false });
  }
  
  addListener(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }
  
  notifyListeners(status) {
    this.listeners.forEach(callback => {
      try {
        callback(status);
      } catch (error) {
        console.error('네트워크 상태 리스너 에러:', error);
      }
    });
  }
  
  destroy() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
    this.listeners.clear();
  }
}

// 전역 네트워크 모니터 인스턴스
export const networkMonitor = new NetworkMonitor();

export default {
  ERROR_TYPES,
  analyzeError,
  logError,
  retryOperation,
  withFirebaseErrorHandling,
  networkMonitor
};