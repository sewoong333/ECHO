// Comprehensive error case testing and simulation for ECHO platform

import { ValidationError, NetworkError, AuthError } from './dataValidator';

// 에러 시나리오 시뮬레이터
export class ErrorSimulator {
  constructor() {
    this.isEnabled = process.env.NODE_ENV === 'development';
    this.scenarios = new Map();
    this.activeScenarios = new Set();
  }

  // 에러 시나리오 등록
  registerScenario(name, config) {
    this.scenarios.set(name, {
      probability: config.probability || 0.1, // 10% 확률
      error: config.error,
      condition: config.condition || (() => true),
      description: config.description || '',
      ...config
    });
  }

  // 시나리오 활성화/비활성화
  toggleScenario(name, enabled = true) {
    if (enabled) {
      this.activeScenarios.add(name);
    } else {
      this.activeScenarios.delete(name);
    }
  }

  // 에러 시뮬레이션 실행
  async simulate(operation, context = {}) {
    if (!this.isEnabled) {
      return await operation();
    }

    // 활성화된 시나리오 중에서 조건에 맞는 것 찾기
    for (const scenarioName of this.activeScenarios) {
      const scenario = this.scenarios.get(scenarioName);
      if (!scenario) continue;

      // 조건 확인
      if (!scenario.condition(context)) continue;

      // 확률 확인
      if (Math.random() > scenario.probability) continue;

      // 지연 시뮬레이션
      if (scenario.delay) {
        await new Promise(resolve => setTimeout(resolve, scenario.delay));
      }

      console.warn(`🎭 Error Simulation: ${scenarioName}`, scenario.description);

      // 에러 발생
      if (typeof scenario.error === 'function') {
        throw scenario.error(context);
      } else {
        throw scenario.error;
      }
    }

    return await operation();
  }

  // 모든 시나리오 비활성화
  disableAll() {
    this.activeScenarios.clear();
  }

  // 활성 시나리오 목록
  getActiveScenarios() {
    return Array.from(this.activeScenarios).map(name => ({
      name,
      ...this.scenarios.get(name)
    }));
  }
}

// 글로벌 에러 시뮬레이터 인스턴스
export const errorSimulator = new ErrorSimulator();

// 일반적인 에러 시나리오들
export const commonErrorScenarios = {
  // 네트워크 에러
  networkTimeout: {
    probability: 0.05,
    delay: 5000,
    error: new NetworkError('요청 시간이 초과되었습니다', 408),
    description: '네트워크 요청 타임아웃 시뮬레이션'
  },

  networkUnavailable: {
    probability: 0.03,
    error: new NetworkError('네트워크에 연결할 수 없습니다', 503),
    description: '네트워크 연결 불가 시뮬레이션'
  },

  rateLimited: {
    probability: 0.02,
    error: new NetworkError('요청이 너무 많습니다. 잠시 후 다시 시도해주세요', 429),
    description: 'API 요청 제한 시뮬레이션'
  },

  // 인증 에러
  authExpired: {
    probability: 0.04,
    error: new AuthError('인증이 만료되었습니다', 'auth/id-token-expired'),
    description: '인증 토큰 만료 시뮬레이션'
  },

  permissionDenied: {
    probability: 0.03,
    error: new AuthError('권한이 없습니다', 'permission-denied'),
    description: '권한 부족 시뮬레이션'
  },

  // 데이터 에러
  invalidData: {
    probability: 0.02,
    error: new ValidationError('데이터가 유효하지 않습니다', {
      title: ['제목이 너무 짧습니다'],
      price: ['가격은 양수여야 합니다']
    }),
    description: '데이터 검증 실패 시뮬레이션'
  },

  // Firebase 에러
  firebaseQuotaExceeded: {
    probability: 0.01,
    error: new Error('Firebase quota exceeded'),
    description: 'Firebase 할당량 초과 시뮬레이션'
  },

  firestoreUnavailable: {
    probability: 0.02,
    error: new Error('Cloud Firestore backend unavailable'),
    description: 'Firestore 서비스 불가 시뮬레이션'
  },

  // 이미지 업로드 에러
  imageUploadFailed: {
    probability: 0.05,
    condition: (context) => context.operation === 'imageUpload',
    error: new Error('이미지 업로드에 실패했습니다'),
    description: '이미지 업로드 실패 시뮬레이션'
  },

  // 결제 에러
  paymentFailed: {
    probability: 0.03,
    condition: (context) => context.operation === 'payment',
    error: new Error('결제 처리 중 오류가 발생했습니다'),
    description: '결제 실패 시뮬레이션'
  }
};

// 시나리오 자동 등록
Object.entries(commonErrorScenarios).forEach(([name, config]) => {
  errorSimulator.registerScenario(name, config);
});

// 에러 케이스 테스트 도구
export class ErrorCaseTester {
  constructor() {
    this.testResults = [];
    this.isRunning = false;
  }

  // 특정 에러 시나리오 테스트
  async testScenario(scenarioName, operation, context = {}) {
    const startTime = Date.now();
    
    try {
      // 시나리오 임시 활성화
      const wasActive = errorSimulator.activeScenarios.has(scenarioName);
      errorSimulator.toggleScenario(scenarioName, true);
      
      // 확률을 100%로 설정하여 반드시 에러 발생
      const scenario = errorSimulator.scenarios.get(scenarioName);
      const originalProbability = scenario.probability;
      scenario.probability = 1.0;
      
      let result;
      try {
        result = await errorSimulator.simulate(operation, context);
        // 에러가 발생하지 않았다면 테스트 실패
        this.recordResult(scenarioName, false, '에러가 발생하지 않음', Date.now() - startTime);
      } catch (error) {
        // 예상된 에러인지 확인
        const isExpectedError = this.isExpectedError(error, scenario.error);
        this.recordResult(scenarioName, isExpectedError, error.message, Date.now() - startTime);
        
        if (!isExpectedError) {
          throw error;
        }
      }
      
      // 원래 설정 복원
      scenario.probability = originalProbability;
      if (!wasActive) {
        errorSimulator.toggleScenario(scenarioName, false);
      }
      
      return result;
    } catch (error) {
      this.recordResult(scenarioName, false, error.message, Date.now() - startTime);
      throw error;
    }
  }

  // 모든 에러 시나리오 테스트
  async testAllScenarios(operation, context = {}) {
    this.isRunning = true;
    this.testResults = [];
    
    const scenarios = Array.from(errorSimulator.scenarios.keys());
    
    for (const scenarioName of scenarios) {
      try {
        await this.testScenario(scenarioName, operation, context);
      } catch (error) {
        console.warn(`Test failed for scenario ${scenarioName}:`, error);
      }
    }
    
    this.isRunning = false;
    return this.getTestReport();
  }

  // 특정 에러 타입 테스트
  async testErrorType(errorType, operation, context = {}) {
    const scenarios = Array.from(errorSimulator.scenarios.entries())
      .filter(([, config]) => {
        if (typeof config.error === 'function') {
          try {
            const error = config.error(context);
            return error.constructor.name === errorType;
          } catch {
            return false;
          }
        }
        return config.error.constructor.name === errorType;
      })
      .map(([name]) => name);

    const results = [];
    for (const scenarioName of scenarios) {
      try {
        await this.testScenario(scenarioName, operation, context);
        results.push({ scenario: scenarioName, success: true });
      } catch (error) {
        results.push({ scenario: scenarioName, success: false, error: error.message });
      }
    }

    return results;
  }

  // 예상된 에러인지 확인
  isExpectedError(actualError, expectedError) {
    if (typeof expectedError === 'function') {
      try {
        const expected = expectedError({});
        return actualError.constructor === expected.constructor;
      } catch {
        return false;
      }
    }
    
    return actualError.constructor === expectedError.constructor ||
           actualError.message === expectedError.message ||
           actualError.code === expectedError.code;
  }

  // 테스트 결과 기록
  recordResult(scenario, success, message, duration) {
    this.testResults.push({
      scenario,
      success,
      message,
      duration,
      timestamp: new Date().toISOString()
    });
  }

  // 테스트 리포트 생성
  getTestReport() {
    const total = this.testResults.length;
    const successful = this.testResults.filter(r => r.success).length;
    const failed = total - successful;
    const averageDuration = total > 0 
      ? this.testResults.reduce((sum, r) => sum + r.duration, 0) / total 
      : 0;

    return {
      summary: {
        total,
        successful,
        failed,
        successRate: total > 0 ? (successful / total * 100).toFixed(2) + '%' : '0%',
        averageDuration: averageDuration.toFixed(2) + 'ms'
      },
      results: this.testResults,
      failedTests: this.testResults.filter(r => !r.success),
      recommendations: this.generateRecommendations()
    };
  }

  // 개선 권장사항 생성
  generateRecommendations() {
    const recommendations = [];
    const failedTests = this.testResults.filter(r => !r.success);

    if (failedTests.length === 0) {
      recommendations.push('✅ 모든 에러 케이스가 적절히 처리되고 있습니다');
      return recommendations;
    }

    const errorTypes = {};
    failedTests.forEach(test => {
      const scenario = errorSimulator.scenarios.get(test.scenario);
      const errorType = scenario?.error?.constructor?.name || 'Unknown';
      errorTypes[errorType] = (errorTypes[errorType] || 0) + 1;
    });

    Object.entries(errorTypes).forEach(([type, count]) => {
      switch (type) {
        case 'NetworkError':
          recommendations.push(`🌐 네트워크 에러 처리 개선 필요 (${count}개 시나리오)`);
          break;
        case 'AuthError':
          recommendations.push(`🔒 인증 에러 처리 개선 필요 (${count}개 시나리오)`);
          break;
        case 'ValidationError':
          recommendations.push(`📝 데이터 검증 에러 처리 개선 필요 (${count}개 시나리오)`);
          break;
        default:
          recommendations.push(`⚠️ ${type} 에러 처리 개선 필요 (${count}개 시나리오)`);
      }
    });

    return recommendations;
  }
}

// 실제 데이터 테스트 케이스
export const realDataTestCases = {
  // 상품 등록 테스트
  productRegistration: {
    validCases: [
      {
        name: '정상적인 기타 상품',
        data: {
          title: '야마하 FG820 어쿠스틱 기타',
          description: '상태가 매우 좋은 야마하 어쿠스틱 기타입니다. 케이스와 함께 판매합니다.',
          price: 350000,
          category: 'guitar',
          condition: 'excellent',
          images: ['image1.jpg'],
          location: '서울시 강남구'
        }
      },
      {
        name: '가격이 높은 피아노',
        data: {
          title: '스타인웨이 그랜드 피아노',
          description: '1960년대 제작된 스타인웨이 그랜드 피아노입니다.',
          price: 50000000,
          category: 'piano',
          condition: 'good',
          images: ['piano1.jpg', 'piano2.jpg'],
          location: '부산시 해운대구'
        }
      }
    ],
    invalidCases: [
      {
        name: '제목이 너무 짧음',
        data: {
          title: 'ㄱ',
          description: '설명이 충분히 긴 텍스트입니다.',
          price: 100000,
          category: 'guitar',
          condition: 'good',
          images: ['image1.jpg'],
          location: '서울시'
        },
        expectedErrors: ['title']
      },
      {
        name: '가격이 너무 낮음',
        data: {
          title: '저렴한 기타',
          description: '매우 저렴한 기타입니다.',
          price: 500,
          category: 'guitar',
          condition: 'poor',
          images: ['image1.jpg'],
          location: '서울시'
        },
        expectedErrors: ['price']
      },
      {
        name: '이미지가 없음',
        data: {
          title: '이미지 없는 상품',
          description: '이미지가 없는 상품입니다.',
          price: 100000,
          category: 'guitar',
          condition: 'good',
          images: [],
          location: '서울시'
        },
        expectedErrors: ['images']
      }
    ]
  },

  // 사용자 등록 테스트
  userRegistration: {
    validCases: [
      {
        name: '정상적인 사용자',
        data: {
          nickname: '음악애호가',
          email: 'music@example.com',
          phoneNumber: '010-1234-5678',
          address: '서울시 강남구 테헤란로 123'
        }
      }
    ],
    invalidCases: [
      {
        name: '잘못된 이메일',
        data: {
          nickname: '사용자',
          email: 'invalid-email',
          phoneNumber: '010-1234-5678',
          address: '서울시'
        },
        expectedErrors: ['email']
      },
      {
        name: '잘못된 전화번호',
        data: {
          nickname: '사용자',
          email: 'user@example.com',
          phoneNumber: '123-456',
          address: '서울시'
        },
        expectedErrors: ['phoneNumber']
      }
    ]
  }
};

// 에러 케이스 테스터 인스턴스
export const errorCaseTester = new ErrorCaseTester();

// 개발 환경에서만 사용할 수 있는 테스트 헬퍼
export const devTestHelpers = {
  // 에러 시뮬레이션 활성화
  enableErrorSimulation(scenarios = []) {
    if (process.env.NODE_ENV !== 'development') return;
    
    if (scenarios.length === 0) {
      // 모든 시나리오 활성화
      Object.keys(commonErrorScenarios).forEach(scenario => {
        errorSimulator.toggleScenario(scenario, true);
      });
    } else {
      scenarios.forEach(scenario => {
        errorSimulator.toggleScenario(scenario, true);
      });
    }
    
    console.log('🎭 Error simulation enabled:', errorSimulator.getActiveScenarios());
  },

  // 에러 시뮬레이션 비활성화
  disableErrorSimulation() {
    errorSimulator.disableAll();
    console.log('🎭 Error simulation disabled');
  },

  // 특정 에러 강제 발생
  forceError(errorType, message = 'Test error') {
    switch (errorType) {
      case 'network':
        throw new NetworkError(message, 500);
      case 'auth':
        throw new AuthError(message, 'test-error');
      case 'validation':
        throw new ValidationError(message, { test: [message] });
      default:
        throw new Error(message);
    }
  },

  // 테스트 리포트 출력
  printTestReport(report) {
    console.group('🧪 Error Case Test Report');
    console.log('Summary:', report.summary);
    if (report.failedTests.length > 0) {
      console.log('Failed Tests:', report.failedTests);
    }
    console.log('Recommendations:', report.recommendations);
    console.groupEnd();
  }
};

export default {
  ErrorSimulator,
  errorSimulator,
  ErrorCaseTester,
  errorCaseTester,
  commonErrorScenarios,
  realDataTestCases,
  devTestHelpers
};