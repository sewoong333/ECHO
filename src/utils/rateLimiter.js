// API 호출 제한 관리

class RateLimiter {
  constructor() {
    this.limits = new Map();
    this.cleanupInterval = setInterval(() => this.cleanup(), 60000); // 1분마다 정리
  }

  // 요청 제한 확인
  checkLimit(key, maxRequests = 10, windowMs = 60000) {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    if (!this.limits.has(key)) {
      this.limits.set(key, []);
    }
    
    const requests = this.limits.get(key);
    
    // 윈도우 밖의 요청들 제거
    const validRequests = requests.filter(timestamp => timestamp > windowStart);
    this.limits.set(key, validRequests);
    
    if (validRequests.length >= maxRequests) {
      const oldestRequest = validRequests[0];
      const resetTime = oldestRequest + windowMs;
      
      return {
        allowed: false,
        resetTime,
        remaining: 0,
        total: maxRequests
      };
    }
    
    // 새 요청 기록
    validRequests.push(now);
    this.limits.set(key, validRequests);
    
    return {
      allowed: true,
      resetTime: now + windowMs,
      remaining: maxRequests - validRequests.length,
      total: maxRequests
    };
  }
  
  // 오래된 기록 정리
  cleanup() {
    const now = Date.now();
    const maxAge = 5 * 60 * 1000; // 5분
    
    for (const [key, requests] of this.limits.entries()) {
      const validRequests = requests.filter(timestamp => now - timestamp < maxAge);
      
      if (validRequests.length === 0) {
        this.limits.delete(key);
      } else {
        this.limits.set(key, validRequests);
      }
    }
  }
  
  // 리소스 정리
  destroy() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.limits.clear();
  }
}

// 전역 인스턴스
const rateLimiter = new RateLimiter();

// 특정 API 엔드포인트별 제한 설정
const API_LIMITS = {
  login: { maxRequests: 5, windowMs: 15 * 60 * 1000 }, // 15분에 5회
  signup: { maxRequests: 3, windowMs: 60 * 60 * 1000 }, // 1시간에 3회
  productUpload: { maxRequests: 10, windowMs: 60 * 60 * 1000 }, // 1시간에 10회
  chat: { maxRequests: 100, windowMs: 60 * 1000 }, // 1분에 100회
  search: { maxRequests: 60, windowMs: 60 * 1000 }, // 1분에 60회
  default: { maxRequests: 30, windowMs: 60 * 1000 } // 기본: 1분에 30회
};

// API 호출 제한 미들웨어
export const withRateLimit = (apiCall, endpoint = 'default', userKey = 'anonymous') => {
  return async (...args) => {
    const limit = API_LIMITS[endpoint] || API_LIMITS.default;
    const key = `${endpoint}:${userKey}`;
    
    const result = rateLimiter.checkLimit(key, limit.maxRequests, limit.windowMs);
    
    if (!result.allowed) {
      const resetDate = new Date(result.resetTime);
      throw new Error(`요청 한도 초과. ${resetDate.toLocaleTimeString()}에 재시도하세요.`);
    }
    
    try {
      return await apiCall(...args);
    } catch (error) {
      // API 실패 시 요청 카운트에서 제외 (선택적)
      if (error.status >= 500) {
        const requests = rateLimiter.limits.get(key);
        if (requests && requests.length > 0) {
          requests.pop(); // 마지막 요청 제거
        }
      }
      throw error;
    }
  };
};

// 사용자별 제한 체크
export const checkUserRateLimit = (userId, action) => {
  const key = `user:${userId}:${action}`;
  const limit = API_LIMITS[action] || API_LIMITS.default;
  
  return rateLimiter.checkLimit(key, limit.maxRequests, limit.windowMs);
};

// IP별 제한 체크 (프록시 사용 시)
export const checkIPRateLimit = (ip, action) => {
  const key = `ip:${ip}:${action}`;
  const limit = API_LIMITS[action] || API_LIMITS.default;
  
  return rateLimiter.checkLimit(key, limit.maxRequests, limit.windowMs);
};

export default rateLimiter;