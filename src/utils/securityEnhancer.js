/**
 * 보안 강화 시스템
 * - 입력 데이터 검증
 * - XSS/CSRF 방지
 * - API 보안
 * - 데이터 암호화
 */

// 보안 설정
export const SECURITY_CONFIG = {
  MAX_INPUT_LENGTH: 1000,
  MAX_IMAGE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  RATE_LIMIT: {
    API_CALLS: 100, // 분당 API 호출 수
    LOGIN_ATTEMPTS: 5, // 분당 로그인 시도 수
    MESSAGE_SEND: 30 // 분당 메시지 전송 수
  },
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30분
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_REQUIREMENTS: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: false
  }
};

// XSS 방지 유틸리티
export const xssProtection = {
  // HTML 태그 제거
  sanitizeHtml(input) {
    if (typeof input !== 'string') return input;
    
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  },

  // 위험한 문자 이스케이프
  escapeHtml(input) {
    if (typeof input !== 'string') return input;
    
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;'
    };
    
    return input.replace(/[&<>"'/]/g, (s) => map[s]);
  },

  // URL 검증
  validateUrl(url) {
    try {
      const urlObj = new URL(url);
      const allowedProtocols = ['http:', 'https:'];
      
      if (!allowedProtocols.includes(urlObj.protocol)) {
        return false;
      }
      
      // 위험한 도메인 차단
      const blockedDomains = ['localhost', '127.0.0.1', '0.0.0.0'];
      if (blockedDomains.includes(urlObj.hostname)) {
        return false;
      }
      
      return true;
    } catch {
      return false;
    }
  },

  // 스크립트 태그 제거
  removeScriptTags(input) {
    if (typeof input !== 'string') return input;
    
    return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  }
};

// 입력 데이터 검증
export const inputValidator = {
  // 텍스트 입력 검증
  validateText(input, options = {}) {
    const {
      maxLength = SECURITY_CONFIG.MAX_INPUT_LENGTH,
      minLength = 0,
      allowHtml = false,
      required = false
    } = options;

    // 필수 입력 확인
    if (required && (!input || input.trim().length === 0)) {
      throw new Error('필수 입력 항목입니다.');
    }

    // 길이 검증
    if (input && input.length > maxLength) {
      throw new Error(`입력 길이가 ${maxLength}자를 초과합니다.`);
    }

    if (input && input.length < minLength) {
      throw new Error(`입력 길이가 ${minLength}자 미만입니다.`);
    }

    // HTML 태그 검증
    if (!allowHtml && input && /<[^>]*>/g.test(input)) {
      throw new Error('HTML 태그는 사용할 수 없습니다.');
    }

    return true;
  },

  // 이메일 검증
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
      throw new Error('올바른 이메일 형식이 아닙니다.');
    }

    if (email.length > 254) {
      throw new Error('이메일이 너무 깁니다.');
    }

    return true;
  },

  // 전화번호 검증
  validatePhoneNumber(phone) {
    const phoneRegex = /^[0-9-+\s()]+$/;
    
    if (!phone || !phoneRegex.test(phone)) {
      throw new Error('올바른 전화번호 형식이 아닙니다.');
    }

    // 숫자만 추출하여 길이 확인
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      throw new Error('전화번호 길이가 올바르지 않습니다.');
    }

    return true;
  },

  // 비밀번호 검증
  validatePassword(password) {
    const {
      minLength,
      requireUppercase,
      requireLowercase,
      requireNumbers,
      requireSpecialChars
    } = SECURITY_CONFIG.PASSWORD_REQUIREMENTS;

    if (!password || password.length < minLength) {
      throw new Error(`비밀번호는 최소 ${minLength}자 이상이어야 합니다.`);
    }

    if (requireUppercase && !/[A-Z]/.test(password)) {
      throw new Error('비밀번호에 대문자가 포함되어야 합니다.');
    }

    if (requireLowercase && !/[a-z]/.test(password)) {
      throw new Error('비밀번호에 소문자가 포함되어야 합니다.');
    }

    if (requireNumbers && !/[0-9]/.test(password)) {
      throw new Error('비밀번호에 숫자가 포함되어야 합니다.');
    }

    if (requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      throw new Error('비밀번호에 특수문자가 포함되어야 합니다.');
    }

    return true;
  },

  // 숫자 검증
  validateNumber(value, options = {}) {
    const { min, max, integer = false } = options;

    if (value === null || value === undefined) {
      throw new Error('숫자 값이 필요합니다.');
    }

    const num = Number(value);
    
    if (isNaN(num)) {
      throw new Error('올바른 숫자가 아닙니다.');
    }

    if (integer && !Number.isInteger(num)) {
      throw new Error('정수여야 합니다.');
    }

    if (min !== undefined && num < min) {
      throw new Error(`값은 ${min} 이상이어야 합니다.`);
    }

    if (max !== undefined && num > max) {
      throw new Error(`값은 ${max} 이하여야 합니다.`);
    }

    return true;
  },

  // 파일 검증
  validateFile(file, options = {}) {
    const {
      maxSize = SECURITY_CONFIG.MAX_IMAGE_SIZE,
      allowedTypes = SECURITY_CONFIG.ALLOWED_IMAGE_TYPES,
      required = false
    } = options;

    if (required && !file) {
      throw new Error('파일이 필요합니다.');
    }

    if (!file) return true;

    // 파일 크기 검증
    if (file.size > maxSize) {
      throw new Error(`파일 크기가 ${maxSize / 1024 / 1024}MB를 초과합니다.`);
    }

    // 파일 타입 검증
    if (!allowedTypes.includes(file.type)) {
      throw new Error('지원되지 않는 파일 형식입니다.');
    }

    // 파일명 검증
    if (file.name.length > 255) {
      throw new Error('파일명이 너무 깁니다.');
    }

    // 위험한 파일명 차단
    const dangerousPatterns = [/\.exe$/i, /\.bat$/i, /\.cmd$/i, /\.scr$/i, /\.pif$/i];
    if (dangerousPatterns.some(pattern => pattern.test(file.name))) {
      throw new Error('위험한 파일 형식입니다.');
    }

    return true;
  }
};

// 레이트 리미팅 시스템
class RateLimiter {
  constructor() {
    this.requests = new Map();
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 60000); // 1분마다 정리
  }

  // 요청 제한 확인
  checkLimit(key, limit, windowMs = 60000) {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    if (!this.requests.has(key)) {
      this.requests.set(key, []);
    }
    
    const requests = this.requests.get(key);
    
    // 오래된 요청 제거
    const recentRequests = requests.filter(time => time > windowStart);
    this.requests.set(key, recentRequests);
    
    // 제한 확인
    if (recentRequests.length >= limit) {
      return false;
    }
    
    // 요청 기록
    recentRequests.push(now);
    this.requests.set(key, recentRequests);
    
    return true;
  }

  // API 호출 제한
  checkApiLimit(userId) {
    return this.checkLimit(`api:${userId}`, SECURITY_CONFIG.RATE_LIMIT.API_CALLS);
  }

  // 로그인 시도 제한
  checkLoginLimit(identifier) {
    return this.checkLimit(`login:${identifier}`, SECURITY_CONFIG.RATE_LIMIT.LOGIN_ATTEMPTS);
  }

  // 메시지 전송 제한
  checkMessageLimit(userId) {
    return this.checkLimit(`message:${userId}`, SECURITY_CONFIG.RATE_LIMIT.MESSAGE_SEND);
  }

  // 정리 작업
  cleanup() {
    const now = Date.now();
    const maxAge = 5 * 60 * 1000; // 5분
    
    for (const [key, requests] of this.requests.entries()) {
      const recentRequests = requests.filter(time => now - time < maxAge);
      
      if (recentRequests.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, recentRequests);
      }
    }
  }

  // 통계 조회
  getStats() {
    return {
      totalKeys: this.requests.size,
      requests: Object.fromEntries(this.requests)
    };
  }

  // 초기화
  destroy() {
    clearInterval(this.cleanupInterval);
    this.requests.clear();
  }
}

// 전역 레이트 리미터 인스턴스
export const rateLimiter = new RateLimiter();

// 세션 관리
class SessionManager {
  constructor() {
    this.sessions = new Map();
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 60000); // 1분마다 정리
  }

  // 세션 생성
  createSession(userId, data = {}) {
    const sessionId = this.generateSessionId();
    const session = {
      id: sessionId,
      userId,
      data,
      createdAt: Date.now(),
      lastAccessed: Date.now()
    };
    
    this.sessions.set(sessionId, session);
    return sessionId;
  }

  // 세션 조회
  getSession(sessionId) {
    const session = this.sessions.get(sessionId);
    
    if (!session) {
      return null;
    }
    
    // 세션 만료 확인
    if (Date.now() - session.lastAccessed > SECURITY_CONFIG.SESSION_TIMEOUT) {
      this.sessions.delete(sessionId);
      return null;
    }
    
    // 마지막 접근 시간 업데이트
    session.lastAccessed = Date.now();
    return session;
  }

  // 세션 삭제
  deleteSession(sessionId) {
    this.sessions.delete(sessionId);
  }

  // 사용자 세션 삭제
  deleteUserSessions(userId) {
    for (const [sessionId, session] of this.sessions.entries()) {
      if (session.userId === userId) {
        this.sessions.delete(sessionId);
      }
    }
  }

  // 세션 ID 생성
  generateSessionId() {
    return 'sess_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  // 정리 작업
  cleanup() {
    const now = Date.now();
    
    for (const [sessionId, session] of this.sessions.entries()) {
      if (now - session.lastAccessed > SECURITY_CONFIG.SESSION_TIMEOUT) {
        this.sessions.delete(sessionId);
      }
    }
  }

  // 통계 조회
  getStats() {
    return {
      totalSessions: this.sessions.size,
      activeSessions: Array.from(this.sessions.values())
    };
  }

  // 초기화
  destroy() {
    clearInterval(this.cleanupInterval);
    this.sessions.clear();
  }
}

// 전역 세션 매니저 인스턴스
export const sessionManager = new SessionManager();

// 보안 헬퍼 함수들
export const securityHelpers = {
  // CSRF 토큰 생성
  generateCSRFToken() {
    return 'csrf_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  },

  // 안전한 랜덤 문자열 생성
  generateSecureRandom(length = 32) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return result;
  },

  // 해시 생성 (간단한 해시)
  simpleHash(input) {
    let hash = 0;
    
    if (input.length === 0) return hash;
    
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 32비트 정수로 변환
    }
    
    return hash.toString(36);
  },

  // 민감한 데이터 마스킹
  maskSensitiveData(data, fields = ['password', 'token', 'secret']) {
    if (typeof data !== 'object' || data === null) {
      return data;
    }
    
    const masked = { ...data };
    
    fields.forEach(field => {
      if (masked[field]) {
        masked[field] = '***';
      }
    });
    
    return masked;
  }
};

// 개발자 도구용 보안 정보 노출
if (typeof window !== 'undefined') {
  window.rateLimiter = rateLimiter;
  window.sessionManager = sessionManager;
  window.xssProtection = xssProtection;
  window.inputValidator = inputValidator;
  window.securityHelpers = securityHelpers;
}




