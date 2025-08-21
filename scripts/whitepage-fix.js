// 하얀화면 완전 방지 시스템
class WhitePagePrevention {
  constructor() {
    this.initializeGlobalProtection();
    this.startHealthCheck();
  }

  initializeGlobalProtection() {
    // 모든 React 에러 캐치
    window.addEventListener('error', this.handleCriticalError.bind(this));
    window.addEventListener('unhandledrejection', this.handlePromiseError.bind(this));
    
    // Context 에러 특별 처리
    this.overrideConsoleError();
    
    console.log('🛡️ 하얀화면 방지 시스템 활성화');
  }

  handleCriticalError(event) {
    const errorTypes = [
      'ChunkLoadError',
      'Loading CSS chunk',
      'Loading chunk',
      'NetworkError',
      'Cannot read properties',
      'useContext'
    ];

    const isCritical = errorTypes.some(type => 
      event.message?.includes(type) || event.error?.message?.includes(type)
    );

    if (isCritical) {
      console.error('🚨 심각한 에러 감지:', event.message);
      this.performEmergencyRecovery();
    }
  }

  handlePromiseError(event) {
    const message = event.reason?.message || '';
    
    if (message.includes('Context') || message.includes('Provider')) {
      console.error('🔧 Context 에러 감지:', message);
      this.performEmergencyRecovery();
    }
  }

  overrideConsoleError() {
    const originalError = console.error;
    console.error = (...args) => {
      const message = args.join(' ');
      
      // 하얀화면 유발 패턴 감지
      const whiteScreenPatterns = [
        'Warning: useContext',
        'Cannot read properties of null',
        'Cannot read properties of undefined',
        'Minified React error'
      ];

      if (whiteScreenPatterns.some(pattern => message.includes(pattern))) {
        console.warn('⚠️ 하얀화면 위험 패턴 감지, 복구 시도 중...');
        this.performEmergencyRecovery();
      }

      originalError.apply(console, args);
    };
  }

  performEmergencyRecovery() {
    console.log('🚑 긴급 복구 시작...');
    
    // 로컬 스토리지 정리 (중요한 것만 보존)
    try {
      const preserve = ['user-auth', 'user-preferences'];
      const backup = {};
      
      preserve.forEach(key => {
        if (localStorage.getItem(key)) {
          backup[key] = localStorage.getItem(key);
        }
      });
      
      localStorage.clear();
      
      Object.keys(backup).forEach(key => {
        localStorage.setItem(key, backup[key]);
      });
    } catch (e) {
      console.warn('로컬 스토리지 정리 실패:', e);
    }

    // 세션 스토리지 완전 정리
    try {
      sessionStorage.clear();
    } catch (e) {
      console.warn('세션 스토리지 정리 실패:', e);
    }

    // 3초 후 새로고침
    setTimeout(() => {
      try {
        window.location.reload();
      } catch (e) {
        window.location.href = '/';
      }
    }, 3000);
  }

  startHealthCheck() {
    // 5초마다 페이지 상태 체크
    setInterval(() => {
      this.checkPageHealth();
    }, 5000);
  }

  checkPageHealth() {
    // DOM이 비어있는지 체크
    const body = document.body;
    const hasContent = body && body.children.length > 0;
    
    if (!hasContent) {
      console.error('🚨 하얀화면 감지! 긴급 복구 시작...');
      this.performEmergencyRecovery();
      return;
    }

    // React 앱이 마운트되어있는지 체크
    const reactRoot = document.getElementById('root');
    const hasReactContent = reactRoot && reactRoot.children.length > 0;
    
    if (!hasReactContent) {
      console.error('🚨 React 앱 마운트 실패 감지! 긴급 복구 시작...');
      this.performEmergencyRecovery();
    }
  }
}

// 즉시 실행
if (typeof window !== 'undefined') {
  new WhitePagePrevention();
}

export default WhitePagePrevention;