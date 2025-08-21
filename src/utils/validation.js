// 사용자 입력 검증 및 보안 유틸리티

// 검증 결과 타입
export const VALIDATION_RESULT = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning'
};

// 일반적인 보안 패턴들
const SECURITY_PATTERNS = {
  // XSS 공격 패턴
  XSS_PATTERNS: [
    /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
    /<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi,
    /<object[\s\S]*?>[\s\S]*?<\/object>/gi,
    /<embed[\s\S]*?>/gi,
    /<link[\s\S]*?>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<img[^>]+src[^>]*=[\s"']*javascript:/gi
  ],
  
  // SQL Injection 패턴 (NoSQL에도 적용)
  SQL_INJECTION_PATTERNS: [
    /('|(\\\\')|(;)|(--)|(\\\\)|(select|union|insert|update|delete|drop|create|alter|exec|execute)\\s)/gi,
    /(\$where|\$ne|\$gt|\$lt|\$gte|\$lte|\$in|\$nin|\$regex)/gi,
    /(script|eval|function|constructor)/gi
  ],
  
  // 파일 업로드 보안 패턴
  DANGEROUS_FILE_PATTERNS: [
    /\.(exe|bat|com|scr|pif|cmd|sh|php|asp|aspx|jsp|js|vbs|jar)$/i,
    /\.\w+\.(exe|bat|com|scr)$/i // 이중 확장자
  ],
  
  // 악성 URL 패턴
  MALICIOUS_URL_PATTERNS: [
    /javascript:/gi,
    /data:text\/html/gi,
    /vbscript:/gi,
    /file:\/\//gi
  ]
};

// 이메일 검증
export function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '이메일을 입력해주세요.' 
    };
  }

  const trimmedEmail = email.trim();
  
  // 기본 이메일 형식 검증
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmedEmail)) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '올바른 이메일 형식이 아닙니다.' 
    };
  }

  // 길이 검증
  if (trimmedEmail.length > 320) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '이메일이 너무 깁니다.' 
    };
  }

  // 보안 패턴 검증
  if (containsSecurityThreat(trimmedEmail)) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '유효하지 않은 이메일입니다.' 
    };
  }

  return { 
    isValid: true, 
    type: VALIDATION_RESULT.SUCCESS,
    message: '유효한 이메일입니다.',
    value: trimmedEmail.toLowerCase()
  };
}

// 비밀번호 검증
export function validatePassword(password) {
  if (!password || typeof password !== 'string') {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '비밀번호를 입력해주세요.' 
    };
  }

  // 길이 검증
  if (password.length < 8) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '비밀번호는 8자 이상이어야 합니다.' 
    };
  }

  if (password.length > 128) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '비밀번호가 너무 깁니다.' 
    };
  }

  // 복잡성 검증
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const complexity = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar].filter(Boolean).length;

  if (complexity < 3) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '비밀번호는 대문자, 소문자, 숫자, 특수문자 중 3종류 이상 포함해야 합니다.' 
    };
  }

  // 일반적인 약한 비밀번호 패턴 검증
  const weakPatterns = [
    /^(.)\1+$/, // 같은 문자 반복
    /^(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)+$/i,
    /^(password|admin|user|test|guest|qwerty|asdf|zxcv|1234|0000)+$/i
  ];

  for (const pattern of weakPatterns) {
    if (pattern.test(password)) {
      return { 
        isValid: false, 
        type: VALIDATION_RESULT.ERROR,
        message: '너무 약한 비밀번호입니다. 다른 비밀번호를 사용해주세요.' 
      };
    }
  }

  return { 
    isValid: true, 
    type: VALIDATION_RESULT.SUCCESS,
    message: '안전한 비밀번호입니다.',
    strength: complexity === 4 ? 'strong' : 'medium'
  };
}

// 전화번호 검증
export function validatePhoneNumber(phoneNumber) {
  if (!phoneNumber || typeof phoneNumber !== 'string') {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '전화번호를 입력해주세요.' 
    };
  }

  // 숫자만 추출
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  
  // 한국 휴대폰 번호 검증 (010, 011, 016, 017, 018, 019)
  const koreanMobileRegex = /^01[0-9]\d{7,8}$/;
  
  if (!koreanMobileRegex.test(digitsOnly)) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '올바른 휴대폰 번호 형식이 아닙니다.' 
    };
  }

  // 형식화
  const formatted = digitsOnly.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

  return { 
    isValid: true, 
    type: VALIDATION_RESULT.SUCCESS,
    message: '유효한 전화번호입니다.',
    value: formatted,
    digitsOnly
  };
}

// 상품명 검증
export function validateProductTitle(title) {
  if (!title || typeof title !== 'string') {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '상품명을 입력해주세요.' 
    };
  }

  const trimmedTitle = title.trim();

  // 길이 검증
  if (trimmedTitle.length < 2) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '상품명은 2자 이상 입력해주세요.' 
    };
  }

  if (trimmedTitle.length > 100) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '상품명은 100자 이하로 입력해주세요.' 
    };
  }

  // 보안 검증
  if (containsSecurityThreat(trimmedTitle)) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '사용할 수 없는 문자가 포함되어 있습니다.' 
    };
  }

  // 금지된 키워드 검증
  const forbiddenKeywords = [
    '마약', '대마초', '총기', '폭발물', '성인용품', '도박', '카지노',
    '불법', '복제품', '위조', '피싱', '스팸', '바이러스'
  ];

  const lowerTitle = trimmedTitle.toLowerCase();
  for (const keyword of forbiddenKeywords) {
    if (lowerTitle.includes(keyword)) {
      return { 
        isValid: false, 
        type: VALIDATION_RESULT.ERROR,
        message: '판매가 금지된 상품입니다.' 
      };
    }
  }

  return { 
    isValid: true, 
    type: VALIDATION_RESULT.SUCCESS,
    message: '유효한 상품명입니다.',
    value: sanitizeInput(trimmedTitle)
  };
}

// 상품 설명 검증
export function validateProductDescription(description) {
  if (!description || typeof description !== 'string') {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '상품 설명을 입력해주세요.' 
    };
  }

  const trimmedDescription = description.trim();

  // 길이 검증
  if (trimmedDescription.length < 10) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '상품 설명은 10자 이상 입력해주세요.' 
    };
  }

  if (trimmedDescription.length > 2000) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '상품 설명은 2000자 이하로 입력해주세요.' 
    };
  }

  // 보안 검증
  if (containsSecurityThreat(trimmedDescription)) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '사용할 수 없는 내용이 포함되어 있습니다.' 
    };
  }

  return { 
    isValid: true, 
    type: VALIDATION_RESULT.SUCCESS,
    message: '유효한 상품 설명입니다.',
    value: sanitizeInput(trimmedDescription)
  };
}

// 가격 검증
export function validatePrice(price) {
  if (price === null || price === undefined || price === '') {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '가격을 입력해주세요.' 
    };
  }

  const numericPrice = typeof price === 'string' ? 
    parseFloat(price.replace(/[^\d.]/g, '')) : 
    parseFloat(price);

  if (isNaN(numericPrice)) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '올바른 가격을 입력해주세요.' 
    };
  }

  if (numericPrice < 0) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '가격은 0원 이상이어야 합니다.' 
    };
  }

  if (numericPrice > 100000000) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '가격이 너무 높습니다.' 
    };
  }

  // 최소 가격 경고
  if (numericPrice < 1000) {
    return { 
      isValid: true, 
      type: VALIDATION_RESULT.WARNING,
      message: '1,000원 미만의 가격은 권장하지 않습니다.',
      value: Math.round(numericPrice)
    };
  }

  return { 
    isValid: true, 
    type: VALIDATION_RESULT.SUCCESS,
    message: '유효한 가격입니다.',
    value: Math.round(numericPrice)
  };
}

// 파일 검증
export function validateFile(file, options = {}) {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB
    allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp']
  } = options;

  if (!file || !file.name) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '파일을 선택해주세요.' 
    };
  }

  // 파일 크기 검증
  if (file.size > maxSize) {
    const maxSizeMB = Math.round(maxSize / (1024 * 1024));
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: `파일 크기는 ${maxSizeMB}MB 이하여야 합니다.` 
    };
  }

  // 파일 타입 검증
  if (!allowedTypes.includes(file.type)) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '지원하지 않는 파일 형식입니다.' 
    };
  }

  // 파일 확장자 검증
  const fileName = file.name.toLowerCase();
  const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
  
  if (!hasValidExtension) {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '허용되지 않는 파일 확장자입니다.' 
    };
  }

  // 위험한 파일명 패턴 검증
  for (const pattern of SECURITY_PATTERNS.DANGEROUS_FILE_PATTERNS) {
    if (pattern.test(fileName)) {
      return { 
        isValid: false, 
        type: VALIDATION_RESULT.ERROR,
        message: '업로드할 수 없는 파일입니다.' 
      };
    }
  }

  return { 
    isValid: true, 
    type: VALIDATION_RESULT.SUCCESS,
    message: '유효한 파일입니다.',
    value: file
  };
}

// URL 검증
export function validateURL(url) {
  if (!url || typeof url !== 'string') {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: 'URL을 입력해주세요.' 
    };
  }

  const trimmedUrl = url.trim();

  // 기본 URL 형식 검증
  try {
    new URL(trimmedUrl);
  } catch {
    return { 
      isValid: false, 
      type: VALIDATION_RESULT.ERROR,
      message: '올바른 URL 형식이 아닙니다.' 
    };
  }

  // 악성 URL 패턴 검증
  for (const pattern of SECURITY_PATTERNS.MALICIOUS_URL_PATTERNS) {
    if (pattern.test(trimmedUrl)) {
      return { 
        isValid: false, 
        type: VALIDATION_RESULT.ERROR,
        message: '허용되지 않는 URL입니다.' 
      };
    }
  }

  // HTTPS 권장
  if (!trimmedUrl.startsWith('https://')) {
    return { 
      isValid: true, 
      type: VALIDATION_RESULT.WARNING,
      message: 'HTTPS URL을 권장합니다.',
      value: trimmedUrl
    };
  }

  return { 
    isValid: true, 
    type: VALIDATION_RESULT.SUCCESS,
    message: '유효한 URL입니다.',
    value: trimmedUrl
  };
}

// 보안 위협 검출
function containsSecurityThreat(input) {
  if (!input || typeof input !== 'string') return false;

  // XSS 패턴 검사
  for (const pattern of SECURITY_PATTERNS.XSS_PATTERNS) {
    if (pattern.test(input)) return true;
  }

  // SQL Injection 패턴 검사
  for (const pattern of SECURITY_PATTERNS.SQL_INJECTION_PATTERNS) {
    if (pattern.test(input)) return true;
  }

  return false;
}

// 입력값 정화 (자체 구현)
export function sanitizeInput(input) {
  if (!input || typeof input !== 'string') return input;

  let sanitized = input;

  // HTML 태그 제거
  sanitized = sanitized.replace(/<[^>]*>/g, '');
  
  // 스크립트 관련 문자열 제거
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/on\w+\s*=/gi, '');
  
  // 특수 HTML 엔터티 이스케이프
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
  
  // 연속된 공백 정리
  sanitized = sanitized.replace(/\s+/g, ' ');

  return sanitized.trim();
}

// HTML 콘텐츠 정화 (일부 태그 허용)
export function sanitizeHTML(html, options = {}) {
  if (!html || typeof html !== 'string') return html;

  const {
    _allowedTags = ['p', 'br', 'strong', 'em', 'u', 'ul', 'ol', 'li'],
    removeAllTags = false
  } = options;

  let sanitized = html;

  if (removeAllTags) {
    // 모든 HTML 태그 제거
    sanitized = sanitized.replace(/<[^>]*>/g, '');
  } else {
    // 허용되지 않은 태그 제거
    sanitized = sanitized.replace(/<(?!\/?(?:p|br|strong|em|u|ul|ol|li)\b)[^>]*>/gi, '');
  }

  // 위험한 속성 제거
  sanitized = sanitized.replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  
  return sanitized.trim();
}

// 폼 전체 검증
export function validateForm(formData, rules) {
  const results = {};
  let isValid = true;
  let hasWarnings = false;

  for (const [field, value] of Object.entries(formData)) {
    if (rules[field]) {
      const rule = rules[field];
      let result;

      // 검증 함수 실행
      if (typeof rule === 'function') {
        result = rule(value);
      } else if (rule.validator) {
        result = rule.validator(value, rule.options);
      }

      results[field] = result;

      if (result && !result.isValid) {
        isValid = false;
      }

      if (result && result.type === VALIDATION_RESULT.WARNING) {
        hasWarnings = true;
      }
    }
  }

  return {
    isValid,
    hasWarnings,
    results,
    errors: Object.entries(results)
      .filter(([, result]) => result && !result.isValid)
      .map(([field, result]) => ({ field, message: result.message })),
    warnings: Object.entries(results)
      .filter(([, result]) => result && result.type === VALIDATION_RESULT.WARNING)
      .map(([field, result]) => ({ field, message: result.message }))
  };
}

// 실시간 검증을 위한 디바운스 함수
export function debounceValidation(validationFn, delay = 300) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    
    return new Promise((resolve) => {
      timeoutId = setTimeout(() => {
        resolve(validationFn(...args));
      }, delay);
    });
  };
}

export default {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validateProductTitle,
  validateProductDescription,
  validatePrice,
  validateFile,
  validateURL,
  sanitizeInput,
  sanitizeHTML,
  validateForm,
  debounceValidation,
  VALIDATION_RESULT
};