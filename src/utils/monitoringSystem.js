/**
 * 모니터링 시스템
 * - 성능 모니터링
 * - 에러 추적
 * - 사용자 행동 분석
 * - 시스템 상태 모니터링
 */

// 모니터링 설정
export const MONITORING_CONFIG = {
  SAMPLE_RATE: 0.1, // 10% 샘플링
  BATCH_SIZE: 10,
  FLUSH_INTERVAL: 30000, // 30초
  MAX_EVENTS: 1000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000
};

// 이벤트 타입 정의
export const EVENT_TYPES = {
  PAGE_VIEW: 'page_view',
  USER_ACTION: 'user_action',
  API_CALL: 'api_call',
  ERROR: 'error',
  PERFORMANCE: 'performance',
  SECURITY: 'security'
};

// 이벤트 심각도
export const EVENT_SEVERITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical'
};

// 모니터링 이벤트 클래스
class MonitoringEvent {
  constructor(type, data, severity = EVENT_SEVERITY.LOW) {
    this.id = this.generateId();
    this.type = type;
    this.severity = severity;
    this.data = data;
    this.timestamp = Date.now();
    this.sessionId = this.getSessionId();
    this.userId = this.getUserId();
    this.userAgent = navigator.userAgent;
    this.url = window.location.href;
    this.referrer = document.referrer;
  }

  generateId() {
    return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getSessionId() {
    return sessionStorage.getItem('sessionId') || 'anonymous';
  }

  getUserId() {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      return user?.uid || 'anonymous';
    } catch {
      return 'anonymous';
    }
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      severity: this.severity,
      data: this.data,
      timestamp: this.timestamp,
      sessionId: this.sessionId,
      userId: this.userId,
      userAgent: this.userAgent,
      url: this.url,
      referrer: this.referrer
    };
  }
}

// 모니터링 시스템 메인 클래스
class MonitoringSystem {
  constructor() {
    this.events = [];
    this.isEnabled = true;
    this.flushTimer = null;
    this.retryQueue = [];
    this.metrics = {
      totalEvents: 0,
      errors: 0,
      apiCalls: 0,
      userActions: 0,
      pageViews: 0
    };
    
    this.initialize();
  }

  // 초기화
  initialize() {
    // 세션 ID 생성
    if (!sessionStorage.getItem('sessionId')) {
      sessionStorage.setItem('sessionId', this.generateSessionId());
    }

    // 주기적 플러시 설정
    this.startFlushTimer();

    // 페이지 언로드 시 이벤트 전송
    window.addEventListener('beforeunload', () => {
      this.flush();
    });

    // 에러 이벤트 리스너
    window.addEventListener('error', (event) => {
      this.trackError({
        message: event.error?.message || 'Unknown error',
        stack: event.error?.stack,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });

    // Promise rejection 이벤트 리스너
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError({
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        type: 'promise_rejection'
      });
    });

    console.log('🔍 모니터링 시스템이 초기화되었습니다.');
  }

  // 세션 ID 생성
  generateSessionId() {
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // 이벤트 추적
  track(type, data, severity = EVENT_SEVERITY.LOW) {
    if (!this.isEnabled) return;

    // 샘플링 확인
    if (Math.random() > MONITORING_CONFIG.SAMPLE_RATE) {
      return;
    }

    const event = new MonitoringEvent(type, data, severity);
    this.events.push(event);
    this.updateMetrics(type);

    // 최대 이벤트 수 초과 시 오래된 이벤트 제거
    if (this.events.length > MONITORING_CONFIG.MAX_EVENTS) {
      this.events.shift();
    }

    // 배치 크기 초과 시 즉시 전송
    if (this.events.length >= MONITORING_CONFIG.BATCH_SIZE) {
      this.flush();
    }
  }

  // 페이지 뷰 추적
  trackPageView(pageName, additionalData = {}) {
    this.track(EVENT_TYPES.PAGE_VIEW, {
      page: pageName,
      title: document.title,
      ...additionalData
    });
  }

  // 사용자 액션 추적
  trackUserAction(action, target, additionalData = {}) {
    this.track(EVENT_TYPES.USER_ACTION, {
      action,
      target,
      ...additionalData
    });
  }

  // API 호출 추적
  trackApiCall(apiName, method, status, duration, additionalData = {}) {
    this.track(EVENT_TYPES.API_CALL, {
      api: apiName,
      method,
      status,
      duration,
      ...additionalData
    });
  }

  // 에러 추적
  trackError(errorData, severity = EVENT_SEVERITY.HIGH) {
    this.track(EVENT_TYPES.ERROR, {
      ...errorData,
      severity
    }, severity);
  }

  // 성능 메트릭 추적
  trackPerformance(metricName, value, additionalData = {}) {
    this.track(EVENT_TYPES.PERFORMANCE, {
      metric: metricName,
      value,
      ...additionalData
    });
  }

  // 보안 이벤트 추적
  trackSecurity(eventType, data, severity = EVENT_SEVERITY.HIGH) {
    this.track(EVENT_TYPES.SECURITY, {
      eventType,
      ...data
    }, severity);
  }

  // 메트릭 업데이트
  updateMetrics(type) {
    this.metrics.totalEvents++;
    
    switch (type) {
      case EVENT_TYPES.ERROR:
        this.metrics.errors++;
        break;
      case EVENT_TYPES.API_CALL:
        this.metrics.apiCalls++;
        break;
      case EVENT_TYPES.USER_ACTION:
        this.metrics.userActions++;
        break;
      case EVENT_TYPES.PAGE_VIEW:
        this.metrics.pageViews++;
        break;
    }
  }

  // 이벤트 전송
  async flush() {
    if (this.events.length === 0) return;

    const eventsToSend = [...this.events];
    this.events = [];

    try {
      await this.sendEvents(eventsToSend);
      console.log(`📊 ${eventsToSend.length}개 이벤트가 전송되었습니다.`);
    } catch (error) {
      console.error('이벤트 전송 실패:', error);
      // 실패한 이벤트를 재시도 큐에 추가
      this.retryQueue.push(...eventsToSend);
    }
  }

  // 이벤트 전송 (실제 구현)
  async sendEvents(events) {
    // 실제 환경에서는 외부 모니터링 서비스로 전송
    // 예: Google Analytics, Mixpanel, Sentry 등
    
    // 개발 환경에서는 로컬 스토리지에 저장
    if (process.env.NODE_ENV === 'development') {
      const existingData = JSON.parse(localStorage.getItem('monitoring_events') || '[]');
      const newData = [...existingData, ...events.map(e => e.toJSON())];
      localStorage.setItem('monitoring_events', JSON.stringify(newData));
    }

    // 시뮬레이션된 네트워크 지연
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // 재시도 큐 처리
  async processRetryQueue() {
    if (this.retryQueue.length === 0) return;

    const eventsToRetry = [...this.retryQueue];
    this.retryQueue = [];

    try {
      await this.sendEvents(eventsToRetry);
      console.log(`🔄 ${eventsToRetry.length}개 이벤트 재전송 성공`);
    } catch (error) {
      console.error('이벤트 재전송 실패:', error);
      // 재시도 횟수 제한
      if (eventsToRetry.length < MONITORING_CONFIG.MAX_EVENTS) {
        this.retryQueue.push(...eventsToRetry);
      }
    }
  }

  // 플러시 타이머 시작
  startFlushTimer() {
    this.flushTimer = setInterval(() => {
      this.flush();
      this.processRetryQueue();
    }, MONITORING_CONFIG.FLUSH_INTERVAL);
  }

  // 플러시 타이머 중지
  stopFlushTimer() {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
      this.flushTimer = null;
    }
  }

  // 모니터링 활성화/비활성화
  setEnabled(enabled) {
    this.isEnabled = enabled;
    console.log(`🔍 모니터링이 ${enabled ? '활성화' : '비활성화'}되었습니다.`);
  }

  // 통계 조회
  getStats() {
    return {
      ...this.metrics,
      pendingEvents: this.events.length,
      retryQueue: this.retryQueue.length,
      isEnabled: this.isEnabled
    };
  }

  // 이벤트 조회
  getEvents(limit = 100) {
    return this.events.slice(-limit);
  }

  // 데이터 초기화
  clear() {
    this.events = [];
    this.retryQueue = [];
    this.metrics = {
      totalEvents: 0,
      errors: 0,
      apiCalls: 0,
      userActions: 0,
      pageViews: 0
    };
  }

  // 시스템 종료
  destroy() {
    this.stopFlushTimer();
    this.flush();
    this.clear();
  }
}

// 전역 모니터링 시스템 인스턴스
export const monitoringSystem = new MonitoringSystem();

// 모니터링 훅
export const useMonitoring = () => {
  const trackPageView = (pageName, additionalData = {}) => {
    monitoringSystem.trackPageView(pageName, additionalData);
  };

  const trackUserAction = (action, target, additionalData = {}) => {
    monitoringSystem.trackUserAction(action, target, additionalData);
  };

  const trackApiCall = (apiName, method, status, duration, additionalData = {}) => {
    monitoringSystem.trackApiCall(apiName, method, status, duration, additionalData);
  };

  const trackError = (errorData, severity = EVENT_SEVERITY.HIGH) => {
    monitoringSystem.trackError(errorData, severity);
  };

  const trackPerformance = (metricName, value, additionalData = {}) => {
    monitoringSystem.trackPerformance(metricName, value, additionalData);
  };

  const trackSecurity = (eventType, data, severity = EVENT_SEVERITY.HIGH) => {
    monitoringSystem.trackSecurity(eventType, data, severity);
  };

  const getStats = () => {
    return monitoringSystem.getStats();
  };

  const getEvents = (limit = 100) => {
    return monitoringSystem.getEvents(limit);
  };

  const clear = () => {
    monitoringSystem.clear();
  };

  return {
    trackPageView,
    trackUserAction,
    trackApiCall,
    trackError,
    trackPerformance,
    trackSecurity,
    getStats,
    getEvents,
    clear
  };
};

// 자동 추적을 위한 이벤트 리스너
export const setupAutoTracking = () => {
  // 링크 클릭 추적
  document.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.tagName === 'A') {
      monitoringSystem.trackUserAction('link_click', {
        href: target.href,
        text: target.textContent
      });
    } else if (target.tagName === 'BUTTON') {
      monitoringSystem.trackUserAction('button_click', {
        text: target.textContent,
        className: target.className
      });
    }
  });

  // 폼 제출 추적
  document.addEventListener('submit', (event) => {
    const form = event.target;
    monitoringSystem.trackUserAction('form_submit', {
      action: form.action,
      method: form.method,
      id: form.id,
      className: form.className
    });
  });

  // 스크롤 추적
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > 0 && scrollPercent % 25 === 0) {
        monitoringSystem.trackUserAction('scroll', {
          percent: scrollPercent
        });
      }
    }, 100);
  });

  console.log('🔍 자동 추적이 설정되었습니다.');
};

// 개발자 도구용 모니터링 정보 노출
if (typeof window !== 'undefined') {
  window.monitoringSystem = monitoringSystem;
  window.useMonitoring = useMonitoring;
  window.EVENT_TYPES = EVENT_TYPES;
  window.EVENT_SEVERITY = EVENT_SEVERITY;
}




