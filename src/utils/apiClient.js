// API 호출 에러 처리 서비스
import { useState } from 'react';
import { analyzeError, logError, retryOperation, networkMonitor } from './errorHandler';

// API 클라이언트 설정
const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 30000, // 30초
  retryAttempts: 3,
  retryDelay: 1000
};

// HTTP 상태 코드별 처리 전략
const HTTP_STATUS_STRATEGIES = {
  // 2xx Success
  200: { action: 'success', retry: false },
  201: { action: 'success', retry: false },
  204: { action: 'success', retry: false },
  
  // 4xx Client Error
  400: { action: 'client_error', retry: false, message: '잘못된 요청입니다.' },
  401: { action: 'auth_error', retry: false, message: '인증이 필요합니다.' },
  403: { action: 'permission_error', retry: false, message: '접근 권한이 없습니다.' },
  404: { action: 'not_found', retry: false, message: '요청한 리소스를 찾을 수 없습니다.' },
  408: { action: 'timeout', retry: true, message: '요청 시간이 초과되었습니다.' },
  409: { action: 'conflict', retry: false, message: '데이터 충돌이 발생했습니다.' },
  422: { action: 'validation_error', retry: false, message: '입력 데이터가 올바르지 않습니다.' },
  429: { action: 'rate_limit', retry: true, message: '너무 많은 요청입니다. 잠시 후 다시 시도해주세요.' },
  
  // 5xx Server Error
  500: { action: 'server_error', retry: true, message: '서버 오류가 발생했습니다.' },
  502: { action: 'bad_gateway', retry: true, message: '서버 연결에 문제가 있습니다.' },
  503: { action: 'service_unavailable', retry: true, message: '서비스가 일시적으로 사용할 수 없습니다.' },
  504: { action: 'gateway_timeout', retry: true, message: '서버 응답 시간이 초과되었습니다.' }
};

// 요청 인터셉터
class RequestInterceptor {
  constructor() {
    this.requestQueue = new Map();
    this.pendingRequests = new Set();
  }

  // 중복 요청 방지
  deduplicateRequest(config) {
    const requestKey = this.generateRequestKey(config);
    
    if (this.pendingRequests.has(requestKey)) {
      // 이미 진행 중인 동일한 요청이 있다면 해당 Promise 반환
      return this.requestQueue.get(requestKey);
    }

    // 새로운 요청 등록
    this.pendingRequests.add(requestKey);
    return null;
  }

  // 요청 완료 시 정리
  completeRequest(config) {
    const requestKey = this.generateRequestKey(config);
    this.pendingRequests.delete(requestKey);
    this.requestQueue.delete(requestKey);
  }

  // 요청 키 생성
  generateRequestKey(config) {
    const { method = 'GET', url, data } = config;
    const dataHash = data ? JSON.stringify(data) : '';
    return `${method}:${url}:${dataHash}`;
  }

  // 요청 헤더 설정
  setAuthHeaders(config) {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${token}`
      };
    }
    return config;
  }

  // 기본 헤더 설정
  setDefaultHeaders(config) {
    config.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...config.headers
    };
    return config;
  }
}

// 응답 인터셉터
class ResponseInterceptor {
  constructor() {
    this.responseCache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5분
  }

  // 응답 캐시 (GET 요청만)
  cacheResponse(config, response) {
    if (config.method?.toLowerCase() === 'get' && response.status === 200) {
      const cacheKey = this.generateCacheKey(config);
      this.responseCache.set(cacheKey, {
        data: response.data,
        timestamp: Date.now()
      });

      // 만료된 캐시 정리
      setTimeout(() => {
        this.responseCache.delete(cacheKey);
      }, this.cacheTimeout);
    }
  }

  // 캐시에서 응답 조회
  getCachedResponse(config) {
    if (config.method?.toLowerCase() !== 'get') return null;

    const cacheKey = this.generateCacheKey(config);
    const cached = this.responseCache.get(cacheKey);

    if (cached && (Date.now() - cached.timestamp) < this.cacheTimeout) {
      return cached.data;
    }

    return null;
  }

  // 캐시 키 생성
  generateCacheKey(config) {
    return `${config.url}:${JSON.stringify(config.params || {})}`;
  }
}

// API 클라이언트 클래스
class ApiClient {
  constructor() {
    this.requestInterceptor = new RequestInterceptor();
    this.responseInterceptor = new ResponseInterceptor();
    this.isOnline = networkMonitor.isOnline;

    // 네트워크 상태 모니터링
    networkMonitor.addListener((status) => {
      this.isOnline = status.isOnline;
      if (status.isOnline) {
        console.log('🌐 네트워크 연결 복구됨');
      } else {
        console.log('📵 네트워크 연결 끊어짐');
      }
    });
  }

  // 메인 요청 메서드
  async request(config) {
    // 오프라인 상태 체크
    if (!this.isOnline) {
      throw new Error('인터넷 연결을 확인해주세요.');
    }

    // 설정 전처리
    const processedConfig = this.preprocessConfig(config);

    // 캐시된 응답 확인
    const cachedResponse = this.responseInterceptor.getCachedResponse(processedConfig);
    if (cachedResponse) {
      console.log('📦 캐시된 응답 반환:', processedConfig.url);
      return cachedResponse;
    }

    // 중복 요청 체크
    const existingRequest = this.requestInterceptor.deduplicateRequest(processedConfig);
    if (existingRequest) {
      console.log('🔄 중복 요청 감지, 기존 요청 대기:', processedConfig.url);
      return existingRequest;
    }

    // 실제 요청 실행
    const requestPromise = this.executeRequest(processedConfig);
    
    // 요청 큐에 등록
    const requestKey = this.requestInterceptor.generateRequestKey(processedConfig);
    this.requestInterceptor.requestQueue.set(requestKey, requestPromise);

    try {
      const response = await requestPromise;
      
      // 응답 캐시 저장
      this.responseInterceptor.cacheResponse(processedConfig, response);
      
      return response.data;
    } finally {
      // 요청 완료 처리
      this.requestInterceptor.completeRequest(processedConfig);
    }
  }

  // 설정 전처리
  preprocessConfig(config) {
    let processedConfig = { ...config };

    // 기본 설정 적용
    processedConfig.timeout = processedConfig.timeout || API_CONFIG.timeout;
    processedConfig.baseURL = processedConfig.baseURL || API_CONFIG.baseURL;

    // 헤더 설정
    processedConfig = this.requestInterceptor.setDefaultHeaders(processedConfig);
    processedConfig = this.requestInterceptor.setAuthHeaders(processedConfig);

    return processedConfig;
  }

  // 실제 요청 실행
  async executeRequest(config) {
    return retryOperation(async () => {
      console.log('🚀 API 요청 시작:', config.method, config.url);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, config.timeout);

      try {
        const response = await fetch(this.buildUrl(config), {
          method: config.method || 'GET',
          headers: config.headers,
          body: config.data ? JSON.stringify(config.data) : undefined,
          signal: controller.signal,
          ...config.options
        });

        clearTimeout(timeoutId);

        // HTTP 상태 코드 처리
        await this.handleHttpStatus(response, config);

        const responseData = await this.parseResponse(response);
        
        console.log('✅ API 요청 성공:', config.url, response.status);
        
        return {
          data: responseData,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        };

      } catch (error) {
        clearTimeout(timeoutId);
        
        // 에러 로깅
        logError(error, {
          operation: 'api_request',
          method: config.method,
          url: config.url,
          timeout: config.timeout
        });

        throw this.enhanceError(error, config);
      }
    }, API_CONFIG.retryAttempts, API_CONFIG.retryDelay);
  }

  // URL 구성
  buildUrl(config) {
    let url = config.url;
    
    if (config.baseURL && !url.startsWith('http')) {
      url = `${config.baseURL.replace(/\/$/, '')}/${url.replace(/^\//, '')}`;
    }

    // 쿼리 파라미터 추가
    if (config.params) {
      const searchParams = new URLSearchParams();
      Object.entries(config.params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString());
        }
      });
      
      if (searchParams.toString()) {
        url += `${url.includes('?') ? '&' : '?'}${searchParams.toString()}`;
      }
    }

    return url;
  }

  // HTTP 상태 코드 처리
  async handleHttpStatus(response) {
    const status = response.status;
    const strategy = HTTP_STATUS_STRATEGIES[status];

    if (status >= 200 && status < 300) {
      return; // 성공
    }

    // 에러 응답 파싱 시도
    let errorData = null;
    try {
      errorData = await response.json();
    } catch {
      // JSON 파싱 실패 시 텍스트로 시도
      try {
        errorData = { message: await response.text() };
      } catch {
        errorData = { message: '알 수 없는 오류' };
      }
    }

    const errorMessage = errorData?.message || 
                        strategy?.message || 
                        `HTTP ${status} 오류가 발생했습니다.`;

    const error = new Error(errorMessage);
    error.status = status;
    error.response = { data: errorData, status, statusText: response.statusText };
    error.isRetryable = strategy?.retry || false;

    throw error;
  }

  // 응답 파싱
  async parseResponse(response) {
    const contentType = response.headers.get('content-type');
    
    if (contentType?.includes('application/json')) {
      return await response.json();
    } else if (contentType?.includes('text/')) {
      return await response.text();
    } else {
      return await response.blob();
    }
  }

  // 에러 강화
  enhanceError(error, config) {
    const errorInfo = analyzeError(error);
    
    const enhancedError = new Error(errorInfo.message);
    enhancedError.originalError = error;
    enhancedError.errorInfo = errorInfo;
    enhancedError.config = config;
    enhancedError.timestamp = new Date().toISOString();

    return enhancedError;
  }

  // HTTP 메서드별 편의 함수들
  async get(url, config = {}) {
    return this.request({ ...config, method: 'GET', url });
  }

  async post(url, data = null, config = {}) {
    return this.request({ ...config, method: 'POST', url, data });
  }

  async put(url, data = null, config = {}) {
    return this.request({ ...config, method: 'PUT', url, data });
  }

  async patch(url, data = null, config = {}) {
    return this.request({ ...config, method: 'PATCH', url, data });
  }

  async delete(url, config = {}) {
    return this.request({ ...config, method: 'DELETE', url });
  }

  // 파일 업로드
  async upload(url, file, config = {}) {
    const formData = new FormData();
    formData.append('file', file);

    // 추가 데이터가 있다면 폼 데이터에 추가
    if (config.data) {
      Object.entries(config.data).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }

    return this.request({
      ...config,
      method: 'POST',
      url,
      data: formData,
      headers: {
        ...config.headers,
        // Content-Type을 설정하지 않음 (브라우저가 multipart/form-data로 자동 설정)
        'Content-Type': undefined
      }
    });
  }

  // 다중 요청 (병렬)
  async all(requests) {
    try {
      const promises = requests.map(config => this.request(config));
      return await Promise.all(promises);
    } catch (error) {
      logError(error, { operation: 'api_all_requests' });
      throw error;
    }
  }

  // 다중 요청 (순차)
  async sequence(requests) {
    const results = [];
    
    for (const config of requests) {
      try {
        const result = await this.request(config);
        results.push(result);
      } catch (error) {
        logError(error, { 
          operation: 'api_sequence_requests',
          step: results.length + 1,
          total: requests.length
        });
        throw error;
      }
    }
    
    return results;
  }

  // 캐시 관리
  clearCache() {
    this.responseInterceptor.responseCache.clear();
    console.log('🗑️ API 응답 캐시 정리됨');
  }

  // 진행 중인 요청 취소
  cancelPendingRequests() {
    this.requestInterceptor.pendingRequests.clear();
    this.requestInterceptor.requestQueue.clear();
    console.log('❌ 진행 중인 요청들이 취소됨');
  }
}

// 전역 API 클라이언트 인스턴스
export const apiClient = new ApiClient();

// 특정 도메인별 API 클라이언트 생성 함수
export function createApiClient(baseURL, options = {}) {
  const client = new ApiClient();
  client.baseURL = baseURL;
  Object.assign(client, options);
  return client;
}

// React Hook용 API 클라이언트
export function useApiClient() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (config) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiClient.request(config);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    request,
    loading,
    error,
    get: (url, config) => request({ ...config, method: 'GET', url }),
    post: (url, data, config) => request({ ...config, method: 'POST', url, data }),
    put: (url, data, config) => request({ ...config, method: 'PUT', url, data }),
    patch: (url, data, config) => request({ ...config, method: 'PATCH', url, data }),
    delete: (url, config) => request({ ...config, method: 'DELETE', url })
  };
}

export default apiClient;