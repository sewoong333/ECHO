// 분석 및 트래킹 유틸리티

class AnalyticsService {
  constructor() {
    this.events = [];
    this.sessionId = this.generateSessionId();
    this.userId = null;
    this.startTime = Date.now();
    
    // 페이지 언로드 시 이벤트 전송
    window.addEventListener('beforeunload', () => {
      this.sendPendingEvents();
    });
  }

  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  setUserId(userId) {
    this.userId = userId;
  }

  // 이벤트 트래킹
  track(eventName, properties = {}) {
    const event = {
      id: this.generateEventId(),
      name: eventName,
      properties: {
        ...properties,
        timestamp: Date.now(),
        sessionId: this.sessionId,
        userId: this.userId,
        url: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`
      }
    };

    this.events.push(event);
    
    // 이벤트가 많이 쌓이면 전송
    if (this.events.length >= 10) {
      this.sendEvents();
    }

    // 개발 환경에서 콘솔 출력
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event);
    }
  }

  generateEventId() {
    return 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // 페이지 뷰 트래킹
  pageView(pageName, properties = {}) {
    this.track('page_view', {
      page: pageName,
      loadTime: Date.now() - this.startTime,
      ...properties
    });
  }

  // 사용자 액션 트래킹
  userAction(action, target, properties = {}) {
    this.track('user_action', {
      action,
      target,
      ...properties
    });
  }

  // 상품 관련 이벤트
  productEvent(eventType, productId, properties = {}) {
    this.track(`product_${eventType}`, {
      productId,
      ...properties
    });
  }

  // 검색 이벤트
  searchEvent(query, resultsCount, filters = {}) {
    this.track('search', {
      query: query.toLowerCase(),
      resultsCount,
      filters,
      queryLength: query.length
    });
  }

  // 에러 트래킹
  trackError(error, context = {}) {
    this.track('error', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      context,
      severity: 'error'
    });
  }

  // 성능 지표 트래킹
  trackPerformance(metric, value, context = {}) {
    this.track('performance', {
      metric,
      value,
      context
    });
  }

  // 비즈니스 KPI 트래킹
  trackKPI(kpiName, value, properties = {}) {
    this.track('kpi', {
      kpi: kpiName,
      value,
      ...properties
    });
  }

  // 이벤트 배치 전송
  async sendEvents() {
    if (this.events.length === 0) return;

    const eventsToSend = [...this.events];
    this.events = [];

    try {
      // 실제 분석 서비스로 전송 (예: Google Analytics, Mixpanel 등)
      if (window.gtag) {
        eventsToSend.forEach(event => {
          window.gtag('event', event.name, event.properties);
        });
      }

      // Firebase Analytics
      if (window.firebase && window.firebase.analytics) {
        const analytics = window.firebase.analytics();
        eventsToSend.forEach(event => {
          analytics.logEvent(event.name, event.properties);
        });
      }

      // 개발 환경에서는 로컬 스토리지에 저장
      if (process.env.NODE_ENV === 'development') {
        const existingEvents = JSON.parse(localStorage.getItem('analytics_events') || '[]');
        existingEvents.push(...eventsToSend);
        localStorage.setItem('analytics_events', JSON.stringify(existingEvents.slice(-100)));
      }

    } catch (error) {
      console.error('Analytics 전송 실패:', error);
      // 실패한 이벤트들을 다시 큐에 추가
      this.events.unshift(...eventsToSend);
    }
  }

  // 보류 중인 이벤트 전송
  sendPendingEvents() {
    if (this.events.length > 0) {
      // Beacon API 사용 (페이지 언로드 시)
      if (navigator.sendBeacon) {
        const data = JSON.stringify(this.events);
        navigator.sendBeacon('/api/analytics', data);
      }
    }
  }

  // 세션 정보 가져오기
  getSessionInfo() {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      startTime: this.startTime,
      duration: Date.now() - this.startTime,
      eventCount: this.events.length
    };
  }

  // 사용자 행동 패턴 분석
  getUserBehaviorPatterns() {
    const stored = localStorage.getItem('analytics_events');
    if (!stored) return {};

    const events = JSON.parse(stored);
    const patterns = {
      mostVisitedPages: {},
      mostUsedFeatures: {},
      searchPatterns: [],
      sessionDuration: 0,
      bounceRate: 0
    };

    events.forEach(event => {
      // 페이지 방문 패턴
      if (event.name === 'page_view') {
        const page = event.properties.page;
        patterns.mostVisitedPages[page] = (patterns.mostVisitedPages[page] || 0) + 1;
      }

      // 기능 사용 패턴
      if (event.name === 'user_action') {
        const action = event.properties.action;
        patterns.mostUsedFeatures[action] = (patterns.mostUsedFeatures[action] || 0) + 1;
      }

      // 검색 패턴
      if (event.name === 'search') {
        patterns.searchPatterns.push({
          query: event.properties.query,
          timestamp: event.properties.timestamp
        });
      }
    });

    return patterns;
  }

  // A/B 테스트 지원
  getVariant(testName, variants = ['A', 'B']) {
    const key = `ab_test_${testName}`;
    let variant = localStorage.getItem(key);
    
    if (!variant) {
      variant = variants[Math.floor(Math.random() * variants.length)];
      localStorage.setItem(key, variant);
    }
    
    // A/B 테스트 참여 이벤트 트래킹
    this.track('ab_test_assigned', {
      testName,
      variant
    });
    
    return variant;
  }

  // 변환 추적
  trackConversion(conversionName, value = 0, properties = {}) {
    this.track('conversion', {
      conversionName,
      value,
      ...properties
    });
  }

  // 실시간 메트릭 수집
  startRealTimeMetrics() {
    // 성능 지표 수집
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.trackPerformance(entry.entryType, entry.duration, {
            name: entry.name
          });
        }
      });
      
      observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
    }

    // 메모리 사용량 모니터링
    if ('memory' in performance) {
      setInterval(() => {
        this.trackPerformance('memory_usage', performance.memory.usedJSHeapSize, {
          total: performance.memory.totalJSHeapSize,
          limit: performance.memory.jsHeapSizeLimit
        });
      }, 30000); // 30초마다
    }
  }
}

// 전역 인스턴스
const analytics = new AnalyticsService();

// 편의 함수들
export const trackEvent = (name, properties) => analytics.track(name, properties);
export const trackPageView = (page, properties) => analytics.pageView(page, properties);
export const trackUserAction = (action, target, properties) => analytics.userAction(action, target, properties);
export const trackProduct = (eventType, productId, properties) => analytics.productEvent(eventType, productId, properties);
export const trackSearch = (query, count, filters) => analytics.searchEvent(query, count, filters);
export const trackError = (error, context) => analytics.trackError(error, context);
export const trackConversion = (name, value, properties) => analytics.trackConversion(name, value, properties);
export const getABVariant = (testName, variants) => analytics.getVariant(testName, variants);

export default analytics;