// Comprehensive data validation and error handling for ECHO platform

// 데이터 타입 검증 유틸리티
export const DataTypes = {
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean',
  ARRAY: 'array',
  OBJECT: 'object',
  EMAIL: 'email',
  PHONE: 'phone',
  URL: 'url',
  DATE: 'date',
  PRICE: 'price',
  UUID: 'uuid'
};

// 한국어 휴대폰 번호 정규식
const PHONE_REGEX = /^(01[0-9]|02|0[3-9][0-9])-?([0-9]{3,4})-?([0-9]{4})$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// 기본 검증 함수들
export const validators = {
  required: (value, message = '필수 입력 항목입니다') => {
    if (value === null || value === undefined || value === '' || 
        (Array.isArray(value) && value.length === 0)) {
      return { isValid: false, message };
    }
    return { isValid: true };
  },

  minLength: (min, message) => (value) => {
    if (!value || value.length < min) {
      return { 
        isValid: false, 
        message: message || `최소 ${min}자 이상 입력해주세요` 
      };
    }
    return { isValid: true };
  },

  maxLength: (max, message) => (value) => {
    if (value && value.length > max) {
      return { 
        isValid: false, 
        message: message || `최대 ${max}자까지 입력 가능합니다` 
      };
    }
    return { isValid: true };
  },

  min: (min, message) => (value) => {
    const num = Number(value);
    if (isNaN(num) || num < min) {
      return { 
        isValid: false, 
        message: message || `${min} 이상이어야 합니다` 
      };
    }
    return { isValid: true };
  },

  max: (max, message) => (value) => {
    const num = Number(value);
    if (isNaN(num) || num > max) {
      return { 
        isValid: false, 
        message: message || `${max} 이하여야 합니다` 
      };
    }
    return { isValid: true };
  },

  email: (message = '올바른 이메일 주소를 입력해주세요') => (value) => {
    if (!value || !EMAIL_REGEX.test(value)) {
      return { isValid: false, message };
    }
    return { isValid: true };
  },

  phone: (message = '올바른 휴대폰 번호를 입력해주세요') => (value) => {
    if (!value || !PHONE_REGEX.test(value.replace(/\s/g, ''))) {
      return { isValid: false, message };
    }
    return { isValid: true };
  },

  url: (message = '올바른 URL을 입력해주세요') => (value) => {
    if (!value || !URL_REGEX.test(value)) {
      return { isValid: false, message };
    }
    return { isValid: true };
  },

  price: (message = '올바른 가격을 입력해주세요') => (value) => {
    const num = Number(value);
    if (isNaN(num) || num < 0 || num > 100000000) {
      return { isValid: false, message };
    }
    return { isValid: true };
  },

  pattern: (regex, message) => (value) => {
    if (!value || !regex.test(value)) {
      return { isValid: false, message };
    }
    return { isValid: true };
  },

  oneOf: (options, message) => (value) => {
    if (!options.includes(value)) {
      return { 
        isValid: false, 
        message: message || `다음 중 하나여야 합니다: ${options.join(', ')}` 
      };
    }
    return { isValid: true };
  },

  custom: (validatorFn, message) => (value) => {
    try {
      const isValid = validatorFn(value);
      return { 
        isValid, 
        message: isValid ? '' : (message || '유효하지 않은 값입니다') 
      };
    } catch (error) {
      return { isValid: false, message: '검증 중 오류가 발생했습니다' };
    }
  }
};

// 스키마 기반 검증 클래스
export class ValidationSchema {
  constructor(schema) {
    this.schema = schema;
  }

  validate(data) {
    const errors = {};
    const cleanData = {};

    for (const [field, rules] of Object.entries(this.schema)) {
      const value = data[field];
      const fieldErrors = [];

      // 변환기 적용 (sanitizer)
      let processedValue = value;
      if (rules.transform) {
        try {
          processedValue = rules.transform(value);
        } catch (error) {
          fieldErrors.push('데이터 변환 중 오류가 발생했습니다');
        }
      }

      // 검증 규칙 적용
      if (rules.validators) {
        for (const validator of rules.validators) {
          const result = validator(processedValue);
          if (!result.isValid) {
            fieldErrors.push(result.message);
          }
        }
      }

      if (fieldErrors.length > 0) {
        errors[field] = fieldErrors;
      } else {
        cleanData[field] = processedValue;
      }
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      data: cleanData
    };
  }
}

// 제품 데이터 검증 스키마
export const productSchema = new ValidationSchema({
  title: {
    validators: [
      validators.required(),
      validators.minLength(2, '제목은 2글자 이상이어야 합니다'),
      validators.maxLength(100, '제목은 100글자를 초과할 수 없습니다'),
      validators.custom(
        (value) => !/<script|javascript:|data:/i.test(value),
        '제목에 허용되지 않는 내용이 포함되어 있습니다'
      )
    ],
    transform: (value) => value?.trim()
  },
  description: {
    validators: [
      validators.required(),
      validators.minLength(10, '설명은 10글자 이상이어야 합니다'),
      validators.maxLength(2000, '설명은 2000글자를 초과할 수 없습니다')
    ],
    transform: (value) => value?.trim()
  },
  price: {
    validators: [
      validators.required(),
      validators.min(1000, '가격은 1,000원 이상이어야 합니다'),
      validators.max(100000000, '가격은 1억원을 초과할 수 없습니다')
    ],
    transform: (value) => Number(value)
  },
  category: {
    validators: [
      validators.required(),
      validators.oneOf(
        ['guitar', 'piano', 'drums', 'wind', 'string', 'audio', 'other'],
        '올바른 카테고리를 선택해주세요'
      )
    ]
  },
  condition: {
    validators: [
      validators.required(),
      validators.oneOf(
        ['excellent', 'good', 'fair', 'poor'],
        '올바른 상태를 선택해주세요'
      )
    ]
  },
  images: {
    validators: [
      validators.custom(
        (value) => Array.isArray(value) && value.length > 0,
        '최소 1개의 이미지가 필요합니다'
      ),
      validators.custom(
        (value) => Array.isArray(value) && value.length <= 5,
        '최대 5개의 이미지만 업로드할 수 있습니다'
      )
    ]
  },
  location: {
    validators: [
      validators.minLength(2, '위치는 2글자 이상이어야 합니다'),
      validators.maxLength(100, '위치는 100글자를 초과할 수 없습니다')
    ],
    transform: (value) => value?.trim()
  }
});

// 사용자 데이터 검증 스키마
export const userSchema = new ValidationSchema({
  nickname: {
    validators: [
      validators.required(),
      validators.minLength(2, '닉네임은 2글자 이상이어야 합니다'),
      validators.maxLength(20, '닉네임은 20글자를 초과할 수 없습니다'),
      validators.pattern(
        /^[가-힣a-zA-Z0-9_-]+$/,
        '닉네임은 한글, 영문, 숫자, _, - 만 사용 가능합니다'
      )
    ],
    transform: (value) => value?.trim()
  },
  email: {
    validators: [
      validators.required(),
      validators.email()
    ],
    transform: (value) => value?.trim().toLowerCase()
  },
  phoneNumber: {
    validators: [
      validators.phone()
    ],
    transform: (value) => value?.replace(/[^0-9]/g, '')
  },
  address: {
    validators: [
      validators.maxLength(200, '주소는 200글자를 초과할 수 없습니다')
    ],
    transform: (value) => value?.trim()
  }
});

// 댓글 데이터 검증 스키마
export const commentSchema = new ValidationSchema({
  content: {
    validators: [
      validators.required(),
      validators.minLength(1, '댓글 내용을 입력해주세요'),
      validators.maxLength(500, '댓글은 500글자를 초과할 수 없습니다'),
      validators.custom(
        (value) => !/<script|javascript:|data:/i.test(value),
        '댓글에 허용되지 않는 내용이 포함되어 있습니다'
      )
    ],
    transform: (value) => value?.trim()
  },
  rating: {
    validators: [
      validators.min(1, '평점은 1점 이상이어야 합니다'),
      validators.max(5, '평점은 5점 이하여야 합니다')
    ],
    transform: (value) => Number(value)
  }
});

// 실시간 검증 유틸리티
export class RealTimeValidator {
  constructor(schema, options = {}) {
    this.schema = schema;
    this.debounceTime = options.debounceTime || 300;
    this.validateOnChange = options.validateOnChange !== false;
    this.timeouts = new Map();
  }

  validateField(field, value, callback) {
    if (!this.validateOnChange) return;

    // 이전 타이머 제거
    if (this.timeouts.has(field)) {
      clearTimeout(this.timeouts.get(field));
    }

    // 새 타이머 설정
    const timeout = setTimeout(() => {
      const fieldSchema = this.schema.schema[field];
      if (!fieldSchema) return;

      const fieldErrors = [];
      let processedValue = value;

      // 변환기 적용
      if (fieldSchema.transform) {
        try {
          processedValue = fieldSchema.transform(value);
        } catch (error) {
          fieldErrors.push('데이터 변환 중 오류가 발생했습니다');
        }
      }

      // 검증 규칙 적용
      if (fieldSchema.validators) {
        for (const validator of fieldSchema.validators) {
          const result = validator(processedValue);
          if (!result.isValid) {
            fieldErrors.push(result.message);
            break; // 첫 번째 오류만 표시
          }
        }
      }

      callback({
        field,
        isValid: fieldErrors.length === 0,
        errors: fieldErrors,
        value: processedValue
      });

      this.timeouts.delete(field);
    }, this.debounceTime);

    this.timeouts.set(field, timeout);
  }

  destroy() {
    this.timeouts.forEach(timeout => clearTimeout(timeout));
    this.timeouts.clear();
  }
}

// 에러 핸들링 유틸리티
export class ErrorHandler {
  constructor(options = {}) {
    this.onError = options.onError || this.defaultErrorHandler;
    this.maxRetries = options.maxRetries || 3;
    this.retryDelay = options.retryDelay || 1000;
  }

  defaultErrorHandler(error, context) {
    console.error('데이터 검증 오류:', error, context);
  }

  async withValidation(data, schema, operation) {
    try {
      // 데이터 검증
      const validation = schema.validate(data);
      if (!validation.isValid) {
        throw new ValidationError('데이터 검증 실패', validation.errors);
      }

      // 검증된 데이터로 작업 수행
      return await operation(validation.data);
    } catch (error) {
      this.onError(error, { data, schema: schema.constructor.name });
      throw error;
    }
  }

  async withRetry(operation, context = {}) {
    let lastError;
    
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        
        // 재시도 불가능한 오류인지 확인
        if (error instanceof ValidationError || error.code === 'permission-denied') {
          throw error;
        }

        // 마지막 시도였다면 에러 발생
        if (attempt === this.maxRetries) {
          this.onError(error, { ...context, attempt, maxRetries: this.maxRetries });
          throw error;
        }

        // 지연 후 재시도
        await new Promise(resolve => setTimeout(resolve, this.retryDelay * attempt));
      }
    }

    throw lastError;
  }
}

// 커스텀 에러 클래스들
export class ValidationError extends Error {
  constructor(message, errors = {}) {
    super(message);
    this.name = 'ValidationError';
    this.errors = errors;
    this.isValidationError = true;
  }
}

export class NetworkError extends Error {
  constructor(message, status, response) {
    super(message);
    this.name = 'NetworkError';
    this.status = status;
    this.response = response;
    this.isNetworkError = true;
  }
}

export class AuthError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'AuthError';
    this.code = code;
    this.isAuthError = true;
  }
}

// 데이터 정제 유틸리티
export const sanitizers = {
  trim: (value) => value?.toString().trim(),
  
  removeHtml: (value) => value?.toString().replace(/<[^>]*>/g, ''),
  
  normalizeWhitespace: (value) => value?.toString().replace(/\s+/g, ' ').trim(),
  
  phoneNumber: (value) => {
    const digits = value?.toString().replace(/[^0-9]/g, '');
    if (digits?.length === 11) {
      return digits.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
    return digits;
  },
  
  price: (value) => {
    const num = Number(value);
    return isNaN(num) ? 0 : Math.max(0, Math.floor(num));
  },
  
  slug: (value) => value?.toString()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, ''),

  filename: (value) => value?.toString()
    .replace(/[^a-zA-Z0-9가-힣._-]/g, '')
    .substring(0, 100)
};

// 테스트 데이터 생성 유틸리티
export const testDataGenerator = {
  product: () => ({
    title: '테스트 기타',
    description: '테스트용 어쿠스틱 기타입니다. 상태가 매우 좋습니다.',
    price: 150000,
    category: 'guitar',
    condition: 'excellent',
    images: ['/test-image.jpg'],
    location: '서울시 강남구'
  }),

  user: () => ({
    nickname: '테스트유저',
    email: 'test@example.com',
    phoneNumber: '010-1234-5678',
    address: '서울시 강남구 테헤란로'
  }),

  comment: () => ({
    content: '좋은 상품이네요!',
    rating: 5
  })
};

export default {
  validators,
  ValidationSchema,
  productSchema,
  userSchema,
  commentSchema,
  RealTimeValidator,
  ErrorHandler,
  ValidationError,
  NetworkError,
  AuthError,
  sanitizers,
  testDataGenerator
};