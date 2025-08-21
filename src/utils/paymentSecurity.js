// 결제 보안 검증 유틸리티
import CryptoJS from 'crypto-js';

// 보안 설정
const SECURITY_CONFIG = {
  // 결제 세션 유효 시간 (분)
  SESSION_TIMEOUT: 30,
  // 최대 재시도 횟수
  MAX_RETRY_COUNT: 3,
  // IP 차단 시간 (분)
  IP_BLOCK_DURATION: 60,
  // 동시 결제 시도 제한
  MAX_CONCURRENT_PAYMENTS: 1,
  // 최소 결제 간격 (초)
  MIN_PAYMENT_INTERVAL: 10
};

// 의심스러운 활동 패턴
const SUSPICIOUS_PATTERNS = {
  // 짧은 시간 내 반복 결제 시도
  RAPID_PAYMENT_ATTEMPTS: 'RAPID_PAYMENT_ATTEMPTS',
  // 비정상적인 금액
  UNUSUAL_AMOUNT: 'UNUSUAL_AMOUNT',
  // 다양한 카드로 연속 시도
  MULTIPLE_CARD_ATTEMPTS: 'MULTIPLE_CARD_ATTEMPTS',
  // 비정상적인 시간대 결제
  UNUSUAL_TIME: 'UNUSUAL_TIME',
  // 지역 불일치
  LOCATION_MISMATCH: 'LOCATION_MISMATCH'
};

class PaymentSecurity {
  constructor() {
    this.sessionStorage = new Map();
    this.paymentAttempts = new Map();
    this.blockedIPs = new Map();
    this.activePayments = new Set();
  }

  // 결제 요청 전 보안 검증
  async validatePaymentRequest(requestData) {
    const validationResult = {
      isValid: true,
      errors: [],
      warnings: [],
      riskScore: 0,
      sessionId: this.generateSessionId()
    };

    try {
      // 1. 기본 데이터 검증
      const basicValidation = this.validateBasicData(requestData);
      if (!basicValidation.isValid) {
        validationResult.isValid = false;
        validationResult.errors.push(...basicValidation.errors);
      }

      // 2. 금액 검증
      const amountValidation = this.validateAmount(requestData.amount);
      if (!amountValidation.isValid) {
        validationResult.isValid = false;
        validationResult.errors.push(...amountValidation.errors);
      }
      validationResult.riskScore += amountValidation.riskScore;

      // 3. 사용자 검증
      const userValidation = await this.validateUser(requestData.customerData);
      if (!userValidation.isValid) {
        validationResult.isValid = false;
        validationResult.errors.push(...userValidation.errors);
      }
      validationResult.riskScore += userValidation.riskScore;

      // 4. IP 및 위치 검증
      const ipValidation = this.validateIPAndLocation(requestData.metadata);
      if (!ipValidation.isValid) {
        validationResult.isValid = false;
        validationResult.errors.push(...ipValidation.errors);
      }
      validationResult.riskScore += ipValidation.riskScore;

      // 5. 결제 패턴 분석
      const patternValidation = this.analyzePaymentPattern(requestData);
      if (!patternValidation.isValid) {
        validationResult.warnings.push(...patternValidation.warnings);
      }
      validationResult.riskScore += patternValidation.riskScore;

      // 6. 세션 보안 검증
      const sessionValidation = this.validateSession(requestData.sessionData);
      if (!sessionValidation.isValid) {
        validationResult.isValid = false;
        validationResult.errors.push(...sessionValidation.errors);
      }

      // 7. 동시 결제 제한 검증
      const concurrencyValidation = this.validateConcurrentPayments(requestData.userId);
      if (!concurrencyValidation.isValid) {
        validationResult.isValid = false;
        validationResult.errors.push(...concurrencyValidation.errors);
      }

      // 8. 리스크 스코어 최종 평가
      validationResult.riskLevel = this.calculateRiskLevel(validationResult.riskScore);

      // 9. 결제 시도 기록
      this.recordPaymentAttempt(requestData);

      console.log('🔒 결제 보안 검증 완료:', {
        isValid: validationResult.isValid,
        riskScore: validationResult.riskScore,
        riskLevel: validationResult.riskLevel,
        errorsCount: validationResult.errors.length,
        warningsCount: validationResult.warnings.length
      });

      return validationResult;

    } catch (error) {
      console.error('❌ 결제 보안 검증 실패:', error);
      return {
        isValid: false,
        errors: ['보안 검증 중 오류가 발생했습니다.'],
        warnings: [],
        riskScore: 100,
        riskLevel: 'HIGH',
        sessionId: null
      };
    }
  }

  // 기본 데이터 검증
  validateBasicData(requestData) {
    const errors = [];

    // 필수 필드 검증
    const requiredFields = ['amount', 'orderId', 'customerData', 'productData'];
    for (const field of requiredFields) {
      if (!requestData[field]) {
        errors.push(`필수 필드가 누락되었습니다: ${field}`);
      }
    }

    // 주문 ID 형식 검증
    if (requestData.orderId && !/^ECHO_[a-zA-Z0-9_-]+$/.test(requestData.orderId)) {
      errors.push('주문 ID 형식이 올바르지 않습니다.');
    }

    // 고객 이메일 형식 검증
    if (requestData.customerData?.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(requestData.customerData.email)) {
        errors.push('이메일 형식이 올바르지 않습니다.');
      }
    }

    // 전화번호 형식 검증
    if (requestData.customerData?.phone) {
      const phoneRegex = /^[0-9-+\s()]{10,15}$/;
      if (!phoneRegex.test(requestData.customerData.phone.replace(/\s/g, ''))) {
        errors.push('전화번호 형식이 올바르지 않습니다.');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // 금액 검증
  validateAmount(amount) {
    const errors = [];
    let riskScore = 0;

    // 기본 금액 검증
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      errors.push('올바르지 않은 결제 금액입니다.');
      return { isValid: false, errors, riskScore: 100 };
    }

    // 최소/최대 금액 제한
    if (amount < 100) {
      errors.push('최소 결제 금액은 100원입니다.');
    }

    if (amount > 10000000) {
      errors.push('최대 결제 금액은 1,000만원입니다.');
    }

    // 의심스러운 금액 패턴 검증
    const suspiciousAmounts = [
      // 테스트용 금액들
      1, 10, 100, 1000, 9999, 99999,
      // 라운드 넘버 (큰 금액)
      1000000, 5000000, 10000000
    ];

    if (suspiciousAmounts.includes(amount)) {
      riskScore += 10;
    }

    // 비정상적으로 큰 금액
    if (amount > 1000000) {
      riskScore += 20;
    }

    // 홀수/기이한 금액 패턴
    if (amount > 10000 && amount % 1000 !== 0 && amount % 100 === 0) {
      riskScore += 5;
    }

    return {
      isValid: errors.length === 0,
      errors,
      riskScore
    };
  }

  // 사용자 검증
  async validateUser(customerData) {
    const errors = [];
    let riskScore = 0;

    if (!customerData) {
      errors.push('고객 정보가 필요합니다.');
      return { isValid: false, errors, riskScore: 100 };
    }

    // 신규 계정 위험도
    if (customerData.accountAge) {
      const accountDays = (Date.now() - new Date(customerData.accountAge).getTime()) / (1000 * 60 * 60 * 24);
      if (accountDays < 1) {
        riskScore += 30;
      } else if (accountDays < 7) {
        riskScore += 15;
      }
    }

    // 이메일 도메인 검증
    if (customerData.email) {
      const domain = customerData.email.split('@')[1];
      const suspiciousDomains = ['tempmail.com', '10minutemail.com', 'guerrillamail.com'];
      if (suspiciousDomains.includes(domain)) {
        riskScore += 25;
      }

      // 일회용 이메일 패턴
      if (/temp|fake|test|trash|disposable/.test(domain)) {
        riskScore += 20;
      }
    }

    // 이름 검증
    if (customerData.name) {
      // 비정상적인 이름 패턴
      if (/test|admin|user\d+|temp/.test(customerData.name.toLowerCase())) {
        riskScore += 15;
      }

      // 특수문자가 포함된 이름
      if (/[^a-zA-Z가-힣\s]/.test(customerData.name)) {
        riskScore += 10;
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      riskScore
    };
  }

  // IP 및 위치 검증
  validateIPAndLocation(metadata) {
    const errors = [];
    let riskScore = 0;

    if (!metadata) {
      return { isValid: true, errors, riskScore };
    }

    // IP 차단 목록 확인
    if (metadata.ipAddress && this.blockedIPs.has(metadata.ipAddress)) {
      const blockInfo = this.blockedIPs.get(metadata.ipAddress);
      if (Date.now() < blockInfo.expiresAt) {
        errors.push('차단된 IP 주소입니다.');
        return { isValid: false, errors, riskScore: 100 };
      } else {
        this.blockedIPs.delete(metadata.ipAddress);
      }
    }

    // Tor/VPN/Proxy 검출 (간단한 패턴)
    if (metadata.userAgent) {
      const suspiciousAgents = ['tor', 'proxy', 'vpn', 'anonymous'];
      for (const agent of suspiciousAgents) {
        if (metadata.userAgent.toLowerCase().includes(agent)) {
          riskScore += 20;
          break;
        }
      }
    }

    // 지역 불일치 검증
    if (metadata.country && metadata.customerCountry) {
      if (metadata.country !== metadata.customerCountry) {
        riskScore += 15;
      }
    }

    // 비정상적인 시간대 결제
    const currentHour = new Date().getHours();
    if (currentHour < 6 || currentHour > 23) {
      riskScore += 10;
    }

    return {
      isValid: errors.length === 0,
      errors,
      riskScore
    };
  }

  // 결제 패턴 분석
  analyzePaymentPattern(requestData) {
    const warnings = [];
    let riskScore = 0;

    const userId = requestData.customerData?.userId;
    const ipAddress = requestData.metadata?.ipAddress;

    if (!userId && !ipAddress) {
      return { isValid: true, warnings, riskScore };
    }

    const currentTime = Date.now();
    const key = userId || ipAddress;

    // 기존 시도 이력 확인
    if (this.paymentAttempts.has(key)) {
      const attempts = this.paymentAttempts.get(key);
      const recentAttempts = attempts.filter(attempt => 
        currentTime - attempt.timestamp < 60000 // 1분 이내
      );

      // 빠른 연속 시도
      if (recentAttempts.length >= 3) {
        warnings.push('짧은 시간 내 반복적인 결제 시도가 감지되었습니다.');
        riskScore += 25;
      }

      // 다양한 결제 방법 시도
      const uniqueMethods = new Set(recentAttempts.map(a => a.method));
      if (uniqueMethods.size >= 3) {
        warnings.push('다양한 결제 방법으로 연속 시도가 감지되었습니다.');
        riskScore += 20;
      }

      // 서로 다른 금액으로 시도
      const uniqueAmounts = new Set(recentAttempts.map(a => a.amount));
      if (uniqueAmounts.size >= 3) {
        warnings.push('다양한 금액으로 연속 시도가 감지되었습니다.');
        riskScore += 15;
      }
    }

    return {
      isValid: true,
      warnings,
      riskScore
    };
  }

  // 세션 보안 검증
  validateSession(sessionData) {
    const errors = [];

    if (!sessionData || !sessionData.sessionId) {
      return { isValid: true, errors };
    }

    // 세션 유효성 확인
    if (this.sessionStorage.has(sessionData.sessionId)) {
      const session = this.sessionStorage.get(sessionData.sessionId);
      
      // 세션 만료 확인
      if (Date.now() > session.expiresAt) {
        errors.push('세션이 만료되었습니다. 다시 시도해 주세요.');
        this.sessionStorage.delete(sessionData.sessionId);
      }

      // 세션 무결성 확인
      if (session.fingerprint !== sessionData.fingerprint) {
        errors.push('세션 정보가 일치하지 않습니다.');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // 동시 결제 제한 검증
  validateConcurrentPayments(userId) {
    const errors = [];

    if (!userId) {
      return { isValid: true, errors };
    }

    // 현재 진행 중인 결제 확인
    if (this.activePayments.has(userId)) {
      errors.push('이미 진행 중인 결제가 있습니다. 완료 후 다시 시도해 주세요.');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // 리스크 레벨 계산
  calculateRiskLevel(riskScore) {
    if (riskScore >= 70) return 'HIGH';
    if (riskScore >= 40) return 'MEDIUM';
    if (riskScore >= 20) return 'LOW';
    return 'MINIMAL';
  }

  // 결제 시도 기록
  recordPaymentAttempt(requestData) {
    const currentTime = Date.now();
    const userId = requestData.customerData?.userId;
    const ipAddress = requestData.metadata?.ipAddress;
    const key = userId || ipAddress;

    if (!key) return;

    const attemptInfo = {
      timestamp: currentTime,
      amount: requestData.amount,
      method: requestData.paymentMethod,
      success: false,
      ipAddress: ipAddress,
      userAgent: requestData.metadata?.userAgent
    };

    if (!this.paymentAttempts.has(key)) {
      this.paymentAttempts.set(key, []);
    }

    const attempts = this.paymentAttempts.get(key);
    attempts.push(attemptInfo);

    // 오래된 기록 정리 (24시간 이상)
    const dayAgo = currentTime - (24 * 60 * 60 * 1000);
    const recentAttempts = attempts.filter(attempt => attempt.timestamp > dayAgo);
    this.paymentAttempts.set(key, recentAttempts);
  }

  // 결제 시작 표시
  markPaymentInProgress(userId) {
    if (userId) {
      this.activePayments.add(userId);
    }
  }

  // 결제 완료 표시
  markPaymentCompleted(userId, success = true) {
    if (userId) {
      this.activePayments.delete(userId);
      
      // 성공한 결제 기록 업데이트
      if (success && this.paymentAttempts.has(userId)) {
        const attempts = this.paymentAttempts.get(userId);
        if (attempts.length > 0) {
          attempts[attempts.length - 1].success = true;
        }
      }
    }
  }

  // IP 차단
  blockIP(ipAddress, reason = '의심스러운 활동') {
    const blockUntil = Date.now() + (SECURITY_CONFIG.IP_BLOCK_DURATION * 60 * 1000);
    this.blockedIPs.set(ipAddress, {
      reason,
      blockedAt: Date.now(),
      expiresAt: blockUntil
    });
    console.log(`🚫 IP 차단: ${ipAddress} (${reason})`);
  }

  // 세션 생성
  generateSessionId() {
    return CryptoJS.lib.WordArray.random(128/8).toString();
  }

  // 보안 토큰 생성
  generateSecurityToken(data) {
    const timestamp = Date.now();
    const nonce = CryptoJS.lib.WordArray.random(128/8).toString();
    const payload = JSON.stringify({
      ...data,
      timestamp,
      nonce
    });
    
    // 간단한 HMAC 서명 (실제 운영에서는 서버 사이드에서 처리)
    const secretKey = import.meta.env.VITE_SECURITY_SECRET || 'default-secret-key';
    const signature = CryptoJS.HmacSHA256(payload, secretKey).toString();
    
    return {
      payload,
      signature,
      timestamp,
      nonce
    };
  }

  // 보안 토큰 검증
  verifySecurityToken(token) {
    try {
      const secretKey = import.meta.env.VITE_SECURITY_SECRET || 'default-secret-key';
      const expectedSignature = CryptoJS.HmacSHA256(token.payload, secretKey).toString();
      
      // 서명 검증
      if (token.signature !== expectedSignature) {
        return { isValid: false, error: '토큰 서명이 올바르지 않습니다.' };
      }
      
      // 타임스탬프 검증 (5분 유효)
      const maxAge = 5 * 60 * 1000;
      if (Date.now() - token.timestamp > maxAge) {
        return { isValid: false, error: '토큰이 만료되었습니다.' };
      }
      
      return { isValid: true };
    } catch (error) {
      return { isValid: false, error: '토큰 검증 중 오류가 발생했습니다.' };
    }
  }

  // 결제 데이터 암호화
  encryptPaymentData(data) {
    try {
      const secretKey = import.meta.env.VITE_ENCRYPTION_KEY || 'default-encryption-key';
      const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
      return encrypted;
    } catch (error) {
      console.error('결제 데이터 암호화 실패:', error);
      return null;
    }
  }

  // 결제 데이터 복호화
  decryptPaymentData(encryptedData) {
    try {
      const secretKey = import.meta.env.VITE_ENCRYPTION_KEY || 'default-encryption-key';
      const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey);
      return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      console.error('결제 데이터 복호화 실패:', error);
      return null;
    }
  }

  // 디바이스 핑거프린팅
  generateDeviceFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Device fingerprint', 2, 2);
    
    const fingerprint = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      canvasFingerprint: canvas.toDataURL(),
      localStorageAvailable: !!window.localStorage,
      sessionStorageAvailable: !!window.sessionStorage,
      indexedDBAvailable: !!window.indexedDB
    };
    
    return CryptoJS.SHA256(JSON.stringify(fingerprint)).toString();
  }

  // 보안 통계 조회
  getSecurityStats() {
    const currentTime = Date.now();
    const lastHour = currentTime - (60 * 60 * 1000);
    const _lastDay = currentTime - (24 * 60 * 60 * 1000);
    
    let totalAttempts = 0;
    let successfulPayments = 0;
    let failedPayments = 0;
    let recentAttempts = 0;
    
    for (const attempts of this.paymentAttempts.values()) {
      totalAttempts += attempts.length;
      
      for (const attempt of attempts) {
        if (attempt.success) {
          successfulPayments++;
        } else {
          failedPayments++;
        }
        
        if (attempt.timestamp > lastHour) {
          recentAttempts++;
        }
      }
    }
    
    return {
      totalAttempts,
      successfulPayments,
      failedPayments,
      recentAttempts,
      blockedIPs: this.blockedIPs.size,
      activePayments: this.activePayments.size,
      successRate: totalAttempts > 0 ? (successfulPayments / totalAttempts * 100).toFixed(2) : 0
    };
  }

  // 정리 작업 (주기적으로 호출)
  cleanup() {
    const currentTime = Date.now();
    
    // 만료된 IP 차단 해제
    for (const [ip, blockInfo] of this.blockedIPs.entries()) {
      if (currentTime > blockInfo.expiresAt) {
        this.blockedIPs.delete(ip);
      }
    }
    
    // 오래된 결제 시도 기록 정리
    const dayAgo = currentTime - (24 * 60 * 60 * 1000);
    for (const [key, attempts] of this.paymentAttempts.entries()) {
      const recentAttempts = attempts.filter(attempt => attempt.timestamp > dayAgo);
      if (recentAttempts.length === 0) {
        this.paymentAttempts.delete(key);
      } else {
        this.paymentAttempts.set(key, recentAttempts);
      }
    }
    
    // 만료된 세션 정리
    for (const [sessionId, session] of this.sessionStorage.entries()) {
      if (currentTime > session.expiresAt) {
        this.sessionStorage.delete(sessionId);
      }
    }
    
    console.log('🧹 보안 데이터 정리 완료');
  }
}

// 싱글톤 인스턴스 생성
const paymentSecurity = new PaymentSecurity();

// 주기적 정리 작업 (5분마다)
if (typeof window !== 'undefined') {
  setInterval(() => {
    paymentSecurity.cleanup();
  }, 5 * 60 * 1000);
}

export { paymentSecurity, SECURITY_CONFIG, SUSPICIOUS_PATTERNS };
export default paymentSecurity;