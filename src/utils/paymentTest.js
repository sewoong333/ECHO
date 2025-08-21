// 결제 시스템 테스트 유틸리티
import paymentService from './paymentService';
import paymentSecurity from './paymentSecurity';
import { transactionService } from './transactionService';

// 테스트 데이터
const mockProduct = {
  id: 'test_product_001',
  title: '테스트 기타',
  price: 150000,
  images: ['https://example.com/guitar.jpg'],
  sellerId: 'test_seller_001',
  sellerNickname: '테스트 판매자',
  condition: 'excellent'
};

const mockUser = {
  uid: 'test_user_001',
  email: 'test@example.com',
  displayName: '테스트 사용자',
  phoneNumber: '010-1234-5678',
  metadata: {
    creationTime: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString() // 30일 전
  }
};

// 테스트 시나리오
export const PaymentTestScenarios = {
  // 정상 결제 테스트
  async testNormalPayment() {
    console.log('🧪 정상 결제 테스트 시작');
    
    try {
      // 1. 거래 생성
      const transaction = await transactionService.createTransaction({
        productId: mockProduct.id,
        sellerId: mockProduct.sellerId,
        buyerId: mockUser.uid,
        productTitle: mockProduct.title,
        productPrice: mockProduct.price,
        productImages: mockProduct.images,
        productCondition: mockProduct.condition,
        totalAmount: mockProduct.price,
        shippingMethod: 'direct',
        paymentMethod: 'card',
        isEscrow: true
      });

      console.log('✅ 거래 생성 성공:', transaction.id);

      // 2. 결제 데이터 준비
      const paymentData = paymentService.createPaymentData({
        transactionId: transaction.id,
        amount: mockProduct.price,
        orderName: mockProduct.title,
        customerName: mockUser.displayName,
        customerEmail: mockUser.email,
        customerMobilePhone: mockUser.phoneNumber
      });

      console.log('✅ 결제 데이터 준비 완료');

      // 3. 테스트 결제 실행
      const paymentResult = await paymentService.simulateTestPayment(paymentData, 'card');
      console.log('✅ 테스트 결제 성공:', paymentResult);

      // 4. 거래 상태 업데이트
      await transactionService.updatePaymentInfo(transaction.id, {
        paymentKey: paymentResult.paymentKey,
        method: paymentResult.method,
        totalAmount: paymentResult.totalAmount
      });

      console.log('✅ 정상 결제 테스트 완료');
      return { success: true, transaction, paymentResult };

    } catch (error) {
      console.error('❌ 정상 결제 테스트 실패:', error);
      return { success: false, error };
    }
  },

  // 보안 검증 테스트
  async testSecurityValidation() {
    console.log('🔒 보안 검증 테스트 시작');

    const testCases = [
      {
        name: '정상 요청',
        data: {
          amount: 150000,
          orderId: 'ECHO_test_001',
          customerData: {
            userId: mockUser.uid,
            email: mockUser.email,
            name: mockUser.displayName,
            phone: mockUser.phoneNumber,
            accountAge: mockUser.metadata.creationTime
          },
          productData: {
            productId: mockProduct.id,
            price: mockProduct.price
          },
          metadata: {
            ipAddress: '127.0.0.1',
            userAgent: 'Test Browser',
            country: 'KR',
            customerCountry: 'KR'
          }
        },
        expectedValid: true
      },
      {
        name: '잘못된 금액',
        data: {
          amount: 50, // 최소 금액 미만
          orderId: 'ECHO_test_002',
          customerData: {
            userId: mockUser.uid,
            email: mockUser.email,
            name: mockUser.displayName
          }
        },
        expectedValid: false
      },
      {
        name: '의심스러운 이메일',
        data: {
          amount: 150000,
          orderId: 'ECHO_test_003',
          customerData: {
            userId: mockUser.uid,
            email: 'test@tempmail.com', // 일회용 이메일
            name: 'test123' // 의심스러운 이름
          }
        },
        expectedValid: true // 경고만 발생
      }
    ];

    const results = [];
    
    for (const testCase of testCases) {
      try {
        console.log(`🧪 테스트: ${testCase.name}`);
        const validation = await paymentSecurity.validatePaymentRequest(testCase.data);
        
        const passed = validation.isValid === testCase.expectedValid;
        console.log(passed ? '✅' : '❌', `${testCase.name}:`, {
          isValid: validation.isValid,
          riskScore: validation.riskScore,
          riskLevel: validation.riskLevel,
          errorsCount: validation.errors.length,
          warningsCount: validation.warnings.length
        });

        results.push({
          name: testCase.name,
          passed,
          validation
        });

      } catch (error) {
        console.error('❌', `${testCase.name} 실행 중 오류:`, error);
        results.push({
          name: testCase.name,
          passed: false,
          error
        });
      }
    }

    const passedCount = results.filter(r => r.passed).length;
    console.log(`🔒 보안 검증 테스트 완료: ${passedCount}/${results.length} 통과`);
    
    return results;
  },

  // 에러 처리 테스트
  async testErrorHandling() {
    console.log('⚠️ 에러 처리 테스트 시작');

    const errorTests = [
      {
        name: '네트워크 에러 시뮬레이션',
        test: async () => {
          // 잘못된 환경 변수로 초기화 시도
          const originalKey = import.meta.env.VITE_TOSS_CLIENT_KEY;
          import.meta.env.VITE_TOSS_CLIENT_KEY = '';
          
          try {
            await paymentService.initialize();
            return { success: false, message: '에러가 발생해야 함' };
          } catch (error) {
            return { success: true, message: '예상된 에러 발생', error: error.message };
          } finally {
            import.meta.env.VITE_TOSS_CLIENT_KEY = originalKey;
          }
        }
      },
      {
        name: '잘못된 결제 데이터',
        test: async () => {
          try {
            paymentService.validatePaymentData({
              // amount 누락
              orderId: 'test',
              orderName: 'test'
            });
            return { success: false, message: '검증 오류가 발생해야 함' };
          } catch (error) {
            return { success: true, message: '예상된 검증 오류', error: error.message };
          }
        }
      }
    ];

    const results = [];
    
    for (const test of errorTests) {
      try {
        console.log(`🧪 테스트: ${test.name}`);
        const result = await test.test();
        
        console.log(result.success ? '✅' : '❌', `${test.name}:`, result.message);
        results.push({
          name: test.name,
          ...result
        });

      } catch (error) {
        console.error('❌', `${test.name} 실행 중 예외:`, error);
        results.push({
          name: test.name,
          success: false,
          error: error.message
        });
      }
    }

    console.log('⚠️ 에러 처리 테스트 완료');
    return results;
  },

  // 성능 테스트
  async testPerformance() {
    console.log('⚡ 성능 테스트 시작');

    const startTime = performance.now();
    const iterations = 10;
    const results = [];

    for (let i = 0; i < iterations; i++) {
      const iterationStart = performance.now();
      
      try {
        // 보안 검증 성능 테스트
        await paymentSecurity.validatePaymentRequest({
          amount: 100000,
          orderId: `ECHO_perf_${i}`,
          customerData: {
            userId: `test_user_${i}`,
            email: `test${i}@example.com`,
            name: '테스트 사용자'
          }
        });

        const iterationTime = performance.now() - iterationStart;
        results.push(iterationTime);

      } catch (error) {
        console.error(`반복 ${i} 실패:`, error);
      }
    }

    const totalTime = performance.now() - startTime;
    const avgTime = results.reduce((sum, time) => sum + time, 0) / results.length;
    const maxTime = Math.max(...results);
    const minTime = Math.min(...results);

    console.log('⚡ 성능 테스트 결과:', {
      총_시간: `${totalTime.toFixed(2)}ms`,
      평균_시간: `${avgTime.toFixed(2)}ms`,
      최대_시간: `${maxTime.toFixed(2)}ms`,
      최소_시간: `${minTime.toFixed(2)}ms`,
      반복_횟수: iterations
    });

    return {
      totalTime,
      avgTime,
      maxTime,
      minTime,
      iterations,
      results
    };
  },

  // 전체 테스트 실행
  async runAllTests() {
    console.log('🚀 결제 시스템 종합 테스트 시작');
    console.log('='.repeat(50));

    const testResults = {
      normalPayment: null,
      securityValidation: null,
      errorHandling: null,
      performance: null,
      startTime: Date.now()
    };

    try {
      // 1. 정상 결제 테스트
      testResults.normalPayment = await this.testNormalPayment();
      console.log('');

      // 2. 보안 검증 테스트
      testResults.securityValidation = await this.testSecurityValidation();
      console.log('');

      // 3. 에러 처리 테스트
      testResults.errorHandling = await this.testErrorHandling();
      console.log('');

      // 4. 성능 테스트
      testResults.performance = await this.testPerformance();
      console.log('');

    } catch (error) {
      console.error('❌ 테스트 실행 중 치명적 오류:', error);
    }

    testResults.endTime = Date.now();
    testResults.totalDuration = testResults.endTime - testResults.startTime;

    console.log('='.repeat(50));
    console.log('📊 테스트 결과 요약:');
    console.log(`총 실행 시간: ${testResults.totalDuration}ms`);
    console.log(`정상 결제: ${testResults.normalPayment?.success ? '✅ 성공' : '❌ 실패'}`);
    console.log(`보안 검증: ${testResults.securityValidation ? '✅ 완료' : '❌ 실패'}`);
    console.log(`에러 처리: ${testResults.errorHandling ? '✅ 완료' : '❌ 실패'}`);
    console.log(`성능 테스트: ${testResults.performance ? '✅ 완료' : '❌ 실패'}`);

    // 보안 통계 출력
    const securityStats = paymentSecurity.getSecurityStats();
    console.log('🔒 보안 통계:', securityStats);

    console.log('='.repeat(50));
    console.log('🎉 결제 시스템 테스트 완료');

    return testResults;
  }
};

// 브라우저 콘솔에서 사용할 수 있도록 전역 객체에 추가
if (typeof window !== 'undefined') {
  window.PaymentTestScenarios = PaymentTestScenarios;
  console.log('💡 브라우저 콘솔에서 PaymentTestScenarios.runAllTests() 로 테스트를 실행할 수 있습니다.');
}

export default PaymentTestScenarios;