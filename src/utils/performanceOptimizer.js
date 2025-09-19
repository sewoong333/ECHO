/**
 * 성능 최적화 시스템
 * - 이미지 최적화
 * - 쿼리 최적화
 * - 캐싱 전략
 * - 성능 모니터링
 */

// 이미지 최적화 설정
export const IMAGE_OPTIMIZATION = {
  MAX_WIDTH: 1200,
  MAX_HEIGHT: 1200,
  QUALITY: 0.8,
  FORMATS: ['webp', 'jpeg', 'png'],
  THUMBNAIL_SIZE: 300
};

// 캐시 설정
export const CACHE_CONFIG = {
  USER_INFO: 5 * 60 * 1000, // 5분
  PRODUCT_LIST: 2 * 60 * 1000, // 2분
  MUSICLIFE_POSTS: 2 * 60 * 1000, // 2분
  CHAT_MESSAGES: 1 * 60 * 1000, // 1분
  STATIC_DATA: 30 * 60 * 1000 // 30분
};

// 성능 모니터링
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      pageLoad: [],
      apiCalls: [],
      imageLoads: [],
      userInteractions: []
    };
    this.observers = new Map();
  }

  // 페이지 로드 시간 측정
  measurePageLoad(pageName) {
    const startTime = performance.now();
    
    return {
      end: () => {
        const loadTime = performance.now() - startTime;
        this.metrics.pageLoad.push({
          page: pageName,
          loadTime,
          timestamp: Date.now()
        });
        
        if (loadTime > 3000) { // 3초 이상
          console.warn(`🐌 느린 페이지 로드: ${pageName} (${loadTime.toFixed(2)}ms)`);
        }
      }
    };
  }

  // API 호출 시간 측정
  measureApiCall(apiName) {
    const startTime = performance.now();
    
    return {
      end: (success = true) => {
        const duration = performance.now() - startTime;
        this.metrics.apiCalls.push({
          api: apiName,
          duration,
          success,
          timestamp: Date.now()
        });
        
        if (duration > 5000) { // 5초 이상
          console.warn(`🐌 느린 API 호출: ${apiName} (${duration.toFixed(2)}ms)`);
        }
      }
    };
  }

  // 이미지 로드 시간 측정
  measureImageLoad(imageUrl) {
    const startTime = performance.now();
    
    return {
      end: (success = true) => {
        const loadTime = performance.now() - startTime;
        this.metrics.imageLoads.push({
          url: imageUrl,
          loadTime,
          success,
          timestamp: Date.now()
        });
        
        if (loadTime > 2000) { // 2초 이상
          console.warn(`🐌 느린 이미지 로드: ${imageUrl} (${loadTime.toFixed(2)}ms)`);
        }
      }
    };
  }

  // 사용자 상호작용 측정
  measureUserInteraction(action) {
    const startTime = performance.now();
    
    return {
      end: () => {
        const responseTime = performance.now() - startTime;
        this.metrics.userInteractions.push({
          action,
          responseTime,
          timestamp: Date.now()
        });
        
        if (responseTime > 100) { // 100ms 이상
          console.warn(`🐌 느린 사용자 상호작용: ${action} (${responseTime.toFixed(2)}ms)`);
        }
      }
    };
  }

  // 성능 통계 조회
  getStats() {
    const stats = {
      pageLoad: this.getAverageMetric(this.metrics.pageLoad, 'loadTime'),
      apiCalls: this.getAverageMetric(this.metrics.apiCalls, 'duration'),
      imageLoads: this.getAverageMetric(this.metrics.imageLoads, 'loadTime'),
      userInteractions: this.getAverageMetric(this.metrics.userInteractions, 'responseTime')
    };

    return stats;
  }

  getAverageMetric(metrics, field) {
    if (metrics.length === 0) return { average: 0, count: 0, max: 0, min: 0 };
    
    const values = metrics.map(m => m[field]);
    return {
      average: values.reduce((a, b) => a + b, 0) / values.length,
      count: values.length,
      max: Math.max(...values),
      min: Math.min(...values)
    };
  }

  // 성능 데이터 초기화
  clearMetrics() {
    this.metrics = {
      pageLoad: [],
      apiCalls: [],
      imageLoads: [],
      userInteractions: []
    };
  }
}

// 전역 성능 모니터 인스턴스
export const performanceMonitor = new PerformanceMonitor();

// 이미지 최적화 유틸리티
export const imageOptimizer = {
  // 이미지 압축
  async compressImage(file, options = {}) {
    const {
      maxWidth = IMAGE_OPTIMIZATION.MAX_WIDTH,
      maxHeight = IMAGE_OPTIMIZATION.MAX_HEIGHT,
      quality = IMAGE_OPTIMIZATION.QUALITY,
      format = 'webp'
    } = options;

    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // 이미지 크기 계산
        let { width, height } = img;
        
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        // 캔버스 크기 설정
        canvas.width = width;
        canvas.height = height;

        // 이미지 그리기
        ctx.drawImage(img, 0, 0, width, height);

        // 압축된 이미지 생성
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('이미지 압축에 실패했습니다.'));
            }
          },
          `image/${format}`,
          quality
        );
      };

      img.onerror = () => reject(new Error('이미지 로드에 실패했습니다.'));
      img.src = URL.createObjectURL(file);
    });
  },

  // 썸네일 생성
  async generateThumbnail(file, size = IMAGE_OPTIMIZATION.THUMBNAIL_SIZE) {
    return this.compressImage(file, {
      maxWidth: size,
      maxHeight: size,
      quality: 0.7,
      format: 'webp'
    });
  },

  // 이미지 크기 검증
  validateImageSize(file, maxSizeMB = 10) {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      throw new Error(`이미지 크기가 ${maxSizeMB}MB를 초과합니다.`);
    }
    return true;
  },

  // 지원되는 이미지 형식 검증
  validateImageFormat(file) {
    const supportedFormats = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!supportedFormats.includes(file.type)) {
      throw new Error('지원되지 않는 이미지 형식입니다.');
    }
    return true;
  }
};

// 쿼리 최적화 유틸리티
export const queryOptimizer = {
  // 페이지네이션을 위한 쿼리 최적화
  optimizePaginationQuery(baseQuery, pageSize = 20) {
    return {
      ...baseQuery,
      limit: pageSize + 1, // 다음 페이지 존재 여부 확인용
      orderBy: baseQuery.orderBy || ['createdAt', 'desc']
    };
  },

  // 검색 쿼리 최적화
  optimizeSearchQuery(searchTerm, filters = {}) {
    const query = {
      where: [],
      orderBy: ['createdAt', 'desc'],
      limit: 50
    };

    // 검색어가 있으면 제목과 내용에서 검색
    if (searchTerm && searchTerm.trim()) {
      query.where.push(['title', '>=', searchTerm]);
      query.where.push(['title', '<=', searchTerm + '\uf8ff']);
    }

    // 필터 적용
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        query.where.push([key, '==', value]);
      }
    });

    return query;
  },

  // 사용자별 데이터 쿼리 최적화
  optimizeUserDataQuery(userId, dataType) {
    const queries = {
      products: {
        where: [['sellerId', '==', userId]],
        orderBy: ['createdAt', 'desc'],
        limit: 50
      },
      musiclife_posts: {
        where: [['authorId', '==', userId]],
        orderBy: ['createdAt', 'desc'],
        limit: 50
      },
      reviews: {
        where: [['buyerId', '==', userId]],
        orderBy: ['createdAt', 'desc'],
        limit: 20
      }
    };

    return queries[dataType] || {};
  }
};

// 캐싱 시스템
class CacheManager {
  constructor() {
    this.cache = new Map();
    this.timers = new Map();
  }

  // 캐시에 데이터 저장
  set(key, data, ttl = CACHE_CONFIG.USER_INFO) {
    // 기존 타이머 제거
    if (this.timers.has(key)) {
      clearTimeout(this.timers.get(key));
    }

    // 데이터 저장
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });

    // TTL 타이머 설정
    const timer = setTimeout(() => {
      this.delete(key);
    }, ttl);

    this.timers.set(key, timer);
  }

  // 캐시에서 데이터 조회
  get(key) {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // TTL 확인
    if (Date.now() - item.timestamp > item.ttl) {
      this.delete(key);
    return null;
  }

    return item.data;
  }

  // 캐시에서 데이터 삭제
  delete(key) {
    this.cache.delete(key);
    
    if (this.timers.has(key)) {
      clearTimeout(this.timers.get(key));
      this.timers.delete(key);
    }
  }

  // 캐시 초기화
  clear() {
    this.cache.clear();
    this.timers.forEach(timer => clearTimeout(timer));
    this.timers.clear();
  }

  // 캐시 통계
  getStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
      memoryUsage: this.estimateMemoryUsage()
    };
  }

  // 메모리 사용량 추정
  estimateMemoryUsage() {
    let totalSize = 0;
    
    this.cache.forEach((item, key) => {
      totalSize += key.length * 2; // 문자열은 2바이트
      totalSize += JSON.stringify(item).length * 2;
    });

    return totalSize;
  }
}

// 전역 캐시 매니저 인스턴스
export const cacheManager = new CacheManager();

// 성능 최적화 훅
export const usePerformanceOptimization = () => {
  const measurePageLoad = (pageName) => {
    return performanceMonitor.measurePageLoad(pageName);
  };

  const measureApiCall = (apiName) => {
    return performanceMonitor.measureApiCall(apiName);
  };

  const measureImageLoad = (imageUrl) => {
    return performanceMonitor.measureImageLoad(imageUrl);
  };

  const measureUserInteraction = (action) => {
    return performanceMonitor.measureUserInteraction(action);
  };

  const getPerformanceStats = () => {
    return performanceMonitor.getStats();
  };

  const clearPerformanceData = () => {
    performanceMonitor.clearMetrics();
  };

  return {
    measurePageLoad,
    measureApiCall,
    measureImageLoad,
    measureUserInteraction,
    getPerformanceStats,
    clearPerformanceData
  };
};

// 개발자 도구용 성능 정보 노출
if (typeof window !== 'undefined') {
  window.performanceMonitor = performanceMonitor;
  window.cacheManager = cacheManager;
  window.imageOptimizer = imageOptimizer;
  window.queryOptimizer = queryOptimizer;
}