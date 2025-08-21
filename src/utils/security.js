// 보안 유틸리티 함수들

// CSP (Content Security Policy) 설정
export const setCSPHeaders = () => {
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://apis.google.com https://www.gstatic.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https: blob:;
    connect-src 'self' https://firebaseapp.com https://*.firebaseio.com https://*.cloudfunctions.net;
    frame-src 'self' https://accounts.google.com;
  `.replace(/\s+/g, ' ').trim();
  
  document.head.appendChild(meta);
};

// XSS 방지
export const preventXSS = (str) => {
  if (!str) return str;
  
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// CSRF 토큰 생성
export const generateCSRFToken = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// 안전한 URL 검증
export const isSecureURL = (url) => {
  try {
    const parsed = new URL(url);
    
    // 허용된 프로토콜만
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return false;
    }
    
    // localhost는 개발 환경에서만
    if (parsed.hostname === 'localhost' && process.env.NODE_ENV === 'production') {
      return false;
    }
    
    // 허용된 도메인 패턴
    const allowedDomains = [
      'echomusic.kr',
      'firebaseapp.com',
      'googleapis.com',
      'gstatic.com',
      'google.com'
    ];
    
    return allowedDomains.some(domain => 
      parsed.hostname === domain || parsed.hostname.endsWith('.' + domain)
    );
  } catch {
    return false;
  }
};

// 비밀번호 강도 검증
export const getPasswordStrength = (password) => {
  if (!password) return { score: 0, feedback: '비밀번호를 입력해주세요.' };
  
  let score = 0;
  const feedback = [];
  
  // 길이 검증
  if (password.length >= 8) score += 1;
  else feedback.push('8자 이상 입력하세요.');
  
  // 대문자 포함
  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push('대문자를 포함하세요.');
  
  // 소문자 포함
  if (/[a-z]/.test(password)) score += 1;
  else feedback.push('소문자를 포함하세요.');
  
  // 숫자 포함
  if (/\d/.test(password)) score += 1;
  else feedback.push('숫자를 포함하세요.');
  
  // 특수문자 포함
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
  else feedback.push('특수문자를 포함하세요.');
  
  // 일반적인 패턴 검증
  const commonPatterns = [
    /123456/,
    /password/i,
    /qwerty/i,
    /admin/i,
    /(.)\1{2,}/ // 같은 문자 3번 이상 반복
  ];
  
  if (commonPatterns.some(pattern => pattern.test(password))) {
    score -= 2;
    feedback.push('일반적인 패턴을 피해주세요.');
  }
  
  const strength = {
    score: Math.max(0, Math.min(5, score)),
    feedback: feedback.join(' ')
  };
  
  if (strength.score >= 4) strength.level = 'strong';
  else if (strength.score >= 3) strength.level = 'medium';
  else strength.level = 'weak';
  
  return strength;
};

// 세션 보안
export const secureSession = {
  set(key, value, expirationMinutes = 60) {
    const item = {
      value,
      expiry: Date.now() + (expirationMinutes * 60 * 1000)
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
  
  get(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    
    try {
      const item = JSON.parse(itemStr);
      if (Date.now() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
      return item.value;
    } catch {
      localStorage.removeItem(key);
      return null;
    }
  },
  
  remove(key) {
    localStorage.removeItem(key);
  },
  
  clear() {
    localStorage.clear();
  }
};

// 파일 업로드 보안 검증
export const validateFileUpload = (file) => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  
  const errors = [];
  
  // 파일 크기 검증
  if (file.size > maxSize) {
    errors.push('파일 크기는 5MB 이하여야 합니다.');
  }
  
  // MIME 타입 검증
  if (!allowedTypes.includes(file.type)) {
    errors.push('허용되지 않는 파일 형식입니다.');
  }
  
  // 확장자 검증
  const extension = file.name.toLowerCase().match(/\.[^.]+$/)?.[0];
  if (!extension || !allowedExtensions.includes(extension)) {
    errors.push('허용되지 않는 파일 확장자입니다.');
  }
  
  // 파일명 검증 (경로 조작 공격 방지)
  if (file.name.includes('..') || file.name.includes('/') || file.name.includes('\\')) {
    errors.push('유효하지 않은 파일명입니다.');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// API 요청 보안
export const secureAPIRequest = async (url, options = {}) => {
  // CSRF 토큰 추가
  const csrfToken = generateCSRFToken();
  
  const secureOptions = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      'X-Requested-With': 'XMLHttpRequest',
      ...options.headers
    },
    credentials: 'same-origin'
  };
  
  // URL 검증
  if (!isSecureURL(url)) {
    throw new Error('Invalid URL');
  }
  
  try {
    const response = await fetch(url, secureOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response;
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
};

// 개발자 도구 감지 (선택사항)
export const detectDevTools = () => {
  let devtools = {
    open: false,
    orientation: null
  };
  
  const threshold = 160;
  
  const detectOpenDevtools = () => {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      
      if (!devtools.open) {
        devtools.open = true;
        devtools.orientation = (window.outerHeight - window.innerHeight > threshold) ? 'vertical' : 'horizontal';
        
        // 개발자 도구 감지 시 처리 (선택적)
        if (process.env.NODE_ENV === 'production') {
          console.clear();
          console.log('%c⚠️ 개발자 도구 사용이 감지되었습니다.', 'color: red; font-size: 20px; font-weight: bold;');
        }
      }
    } else {
      devtools.open = false;
      devtools.orientation = null;
    }
  };
  
  // 주기적 검사
  if (process.env.NODE_ENV === 'production') {
    setInterval(detectOpenDevtools, 500);
  }
  
  return devtools;
};

// 보안 초기화
export const initSecurity = () => {
  // CSP 헤더 설정
  setCSPHeaders();
  
  // 개발자 도구 감지 시작
  detectDevTools();
  
  // 콘솔 경고 메시지
  if (process.env.NODE_ENV === 'production') {
    console.log('%c🛡️ ECHO 보안 시스템', 'color: #2ed8b6; font-size: 16px; font-weight: bold;');
    console.log('%c이 콘솔은 개발자 전용입니다. 악의적인 코드 실행은 계정 보안에 위험할 수 있습니다.', 'color: orange; font-size: 12px;');
  }
};