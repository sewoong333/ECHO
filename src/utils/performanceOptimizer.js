// Performance optimization utilities for ECHO platform

// 디바운스 함수 - 검색, 스크롤 이벤트 최적화
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// 스로틀 함수 - 스크롤, 리사이즈 이벤트 최적화
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// 메모이제이션 - 비싼 연산 결과 캐싱
export const memoize = (fn, getKey = (...args) => JSON.stringify(args)) => {
  const cache = new Map();
  return (...args) => {
    const key = getKey(...args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

// 배치 처리 - DOM 업데이트 최적화
export const batchUpdate = (() => {
  const queue = [];
  let isScheduled = false;

  const flush = () => {
    while (queue.length > 0) {
      const callback = queue.shift();
      try {
        callback();
      } catch (error) {
        console.error('Batch update error:', error);
      }
    }
    isScheduled = false;
  };

  return (callback) => {
    queue.push(callback);
    if (!isScheduled) {
      isScheduled = true;
      requestAnimationFrame(flush);
    }
  };
})();

// 가상 스크롤링 - 큰 리스트 최적화
export class VirtualScroller {
  constructor(container, itemHeight, buffer = 10) {
    this.container = container;
    this.itemHeight = itemHeight;
    this.buffer = buffer;
    this.scrollTop = 0;
    this.containerHeight = container.clientHeight;
    
    this.handleScroll = throttle(this._handleScroll.bind(this), 16);
    container.addEventListener('scroll', this.handleScroll);
  }

  _handleScroll() {
    this.scrollTop = this.container.scrollTop;
    this.updateVisibleRange();
  }

  getVisibleRange(totalItems) {
    const startIndex = Math.floor(this.scrollTop / this.itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(this.containerHeight / this.itemHeight) + this.buffer,
      totalItems
    );
    
    return {
      start: Math.max(0, startIndex - this.buffer),
      end: endIndex
    };
  }

  destroy() {
    this.container.removeEventListener('scroll', this.handleScroll);
  }
}

// 이미지 지연 로딩 최적화
export class LazyLoader {
  constructor(options = {}) {
    this.options = {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    };
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.options
    );
    this.imageCache = new Map();
  }

  observe(element) {
    this.observer.observe(element);
  }

  unobserve(element) {
    this.observer.unobserve(element);
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.loadImage(entry.target);
        this.observer.unobserve(entry.target);
      }
    });
  }

  async loadImage(img) {
    const src = img.dataset.src;
    if (!src) return;

    try {
      // 캐시에서 확인
      if (this.imageCache.has(src)) {
        img.src = src;
        return;
      }

      // 이미지 프리로드
      const image = new Image();
      image.onload = () => {
        this.imageCache.set(src, true);
        img.src = src;
        img.classList.add('loaded');
      };
      image.onerror = () => {
        img.classList.add('error');
      };
      image.src = src;
    } catch (error) {
      console.error('Image loading error:', error);
      img.classList.add('error');
    }
  }

  destroy() {
    this.observer.disconnect();
  }
}

// 번들 크기 최적화 - 동적 임포트
export const loadModule = async (moduleLoader) => {
  try {
    const module = await moduleLoader();
    return module.default || module;
  } catch (error) {
    console.error('Module loading error:', error);
    throw error;
  }
};

// 성능 메트릭 수집
export class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.observers = [];
    this.startTime = performance.now();
  }

  // Core Web Vitals 측정
  measureWebVitals() {
    // FCP (First Contentful Paint)
    this.measureFCP();
    
    // LCP (Largest Contentful Paint)
    this.measureLCP();
    
    // FID (First Input Delay)
    this.measureFID();
    
    // CLS (Cumulative Layout Shift)
    this.measureCLS();
  }

  measureFCP() {
    const observer = new PerformanceObserver(list => {
      const entries = list.getEntries();
      const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        this.metrics.set('FCP', fcp.startTime);
        console.log('FCP:', fcp.startTime);
      }
    });
    observer.observe({ entryTypes: ['paint'] });
    this.observers.push(observer);
  }

  measureLCP() {
    const observer = new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.set('LCP', lastEntry.startTime);
      console.log('LCP:', lastEntry.startTime);
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(observer);
  }

  measureFID() {
    const observer = new PerformanceObserver(list => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        this.metrics.set('FID', entry.processingStart - entry.startTime);
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    observer.observe({ entryTypes: ['first-input'] });
    this.observers.push(observer);
  }

  measureCLS() {
    let clsValue = 0;
    const observer = new PerformanceObserver(list => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.set('CLS', clsValue);
      console.log('CLS:', clsValue);
    });
    observer.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(observer);
  }

  // 커스텀 메트릭 측정
  startMeasure(name) {
    performance.mark(`${name}-start`);
  }

  endMeasure(name) {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    
    const measure = performance.getEntriesByName(name)[0];
    this.metrics.set(name, measure.duration);
    
    // 정리
    performance.clearMarks(`${name}-start`);
    performance.clearMarks(`${name}-end`);
    performance.clearMeasures(name);
    
    return measure.duration;
  }

  // 메모리 사용량 측정
  measureMemory() {
    if ('memory' in performance) {
      const memory = performance.memory;
      this.metrics.set('memory', {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      });
    }
  }

  // 리소스 로딩 성능 측정
  measureResourceTiming() {
    const resources = performance.getEntriesByType('resource');
    const summary = {
      totalResources: resources.length,
      totalSize: 0,
      averageTime: 0,
      slowResources: []
    };

    resources.forEach(resource => {
      const duration = resource.responseEnd - resource.startTime;
      summary.totalSize += resource.transferSize || 0;
      summary.averageTime += duration;
      
      if (duration > 1000) { // 1초 이상 걸린 리소스
        summary.slowResources.push({
          name: resource.name,
          duration,
          size: resource.transferSize
        });
      }
    });

    summary.averageTime /= resources.length;
    this.metrics.set('resources', summary);
  }

  // 메트릭 리포트 생성
  getReport() {
    this.measureMemory();
    this.measureResourceTiming();
    
    return {
      timestamp: Date.now(),
      sessionDuration: performance.now() - this.startTime,
      metrics: Object.fromEntries(this.metrics)
    };
  }

  // 성능 경고 체크
  checkPerformanceIssues() {
    const issues = [];
    
    // FCP가 2.5초 이상
    if (this.metrics.has('FCP') && this.metrics.get('FCP') > 2500) {
      issues.push('First Contentful Paint is slow (>2.5s)');
    }
    
    // LCP가 4초 이상
    if (this.metrics.has('LCP') && this.metrics.get('LCP') > 4000) {
      issues.push('Largest Contentful Paint is slow (>4s)');
    }
    
    // FID가 300ms 이상
    if (this.metrics.has('FID') && this.metrics.get('FID') > 300) {
      issues.push('First Input Delay is high (>300ms)');
    }
    
    // CLS가 0.25 이상
    if (this.metrics.has('CLS') && this.metrics.get('CLS') > 0.25) {
      issues.push('Cumulative Layout Shift is high (>0.25)');
    }
    
    // 메모리 사용량이 높음
    if (this.metrics.has('memory')) {
      const memory = this.metrics.get('memory');
      const usagePercent = (memory.used / memory.limit) * 100;
      if (usagePercent > 80) {
        issues.push(`High memory usage (${usagePercent.toFixed(1)}%)`);
      }
    }
    
    return issues;
  }

  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// 리소스 프리로딩
export const preloadResources = {
  // 중요한 이미지 프리로드
  images(urls, priority = false) {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = priority ? 'preload' : 'prefetch';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  },

  // 스크립트 프리로드
  scripts(urls) {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'script';
      link.href = url;
      document.head.appendChild(link);
    });
  },

  // 폰트 프리로드
  fonts(urls) {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = url;
      document.head.appendChild(link);
    });
  }
};

// 캐시 관리
export class CacheManager {
  constructor(maxSize = 100) {
    this.cache = new Map();
    this.maxSize = maxSize;
    this.accessOrder = [];
  }

  get(key) {
    if (this.cache.has(key)) {
      // LRU 업데이트
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
      this.accessOrder.push(key);
      
      return this.cache.get(key);
    }
    return null;
  }

  set(key, value) {
    // 용량 체크 및 오래된 항목 제거
    if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
      const oldestKey = this.accessOrder.shift();
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, value);
    
    // 액세스 순서 업데이트
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
    this.accessOrder.push(key);
  }

  clear() {
    this.cache.clear();
    this.accessOrder = [];
  }

  size() {
    return this.cache.size;
  }
}

// 전역 성능 모니터 인스턴스
export const performanceMonitor = new PerformanceMonitor();

// 개발 모드에서만 성능 측정 시작
if (process.env.NODE_ENV === 'development') {
  performanceMonitor.measureWebVitals();
}

// 성능 최적화 팁
export const performanceTips = {
  // React 최적화
  react: {
    useMemo: 'expensive calculations',
    useCallback: 'stable function references',
    memo: 'component memoization',
    lazy: 'code splitting',
    Suspense: 'loading states'
  },

  // 이미지 최적화
  images: {
    webp: 'modern format',
    lazy: 'viewport-based loading',
    responsive: 'multiple sizes',
    compression: 'reduced file size'
  },

  // 번들 최적화
  bundle: {
    splitting: 'dynamic imports',
    treeshaking: 'unused code removal',
    minification: 'size reduction',
    gzip: 'compression'
  }
};