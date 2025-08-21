// Toss Payments 통합 서비스
import { transactionService, TRANSACTION_STATUS } from './transactionService';
import paymentSecurity from './paymentSecurity';

// 결제 상태 열거형
export const PAYMENT_STATUS = {
  READY: 'READY',           // 결제 준비
  IN_PROGRESS: 'IN_PROGRESS', // 결제 진행 중
  WAITING_FOR_DEPOSIT: 'WAITING_FOR_DEPOSIT', // 입금 대기 (가상계좌)
  DONE: 'DONE',             // 결제 완료
  CANCELED: 'CANCELED',     // 결제 취소
  PARTIAL_CANCELED: 'PARTIAL_CANCELED', // 부분 취소
  ABORTED: 'ABORTED',       // 결제 중단
  EXPIRED: 'EXPIRED'        // 결제 만료
};

// 결제 방법별 설정
export const PAYMENT_METHODS = {
  CARD: {
    key: '카드',
    name: 'Card',
    displayName: '신용/체크카드',
    description: '간편하고 빠른 결제',
    icon: 'FaCreditCard'
  },
  TRANSFER: {
    key: '계좌이체',
    name: 'Transfer',
    displayName: '계좌이체',
    description: '수수료 없는 결제',
    icon: 'FaUniversity'
  },
  VIRTUAL_ACCOUNT: {
    key: '가상계좌',
    name: 'VirtualAccount',
    displayName: '가상계좌',
    description: '입금 확인 후 거래',
    icon: 'FaQrcode'
  },
  MOBILE_PHONE: {
    key: '휴대폰',
    name: 'MobilePhone',
    displayName: '휴대폰 결제',
    description: '휴대폰 요금과 함께',
    icon: 'FaMobile'
  },
  CULTURE_GIFT_CERTIFICATE: {
    key: '문화상품권',
    name: 'CultureGiftCertificate',
    displayName: '문화상품권',
    description: '문화상품권으로 결제',
    icon: 'FaGift'
  }
};

// 결제 에러 코드별 메시지
const PAYMENT_ERROR_MESSAGES = {
  'PAY_PROCESS_CANCELED': '사용자가 결제를 취소했습니다.',
  'PAY_PROCESS_ABORTED': '결제 진행 중 오류가 발생했습니다.',
  'REJECT_CARD_COMPANY': '카드사에서 결제를 거절했습니다. 다른 카드를 사용해 주세요.',
  'INSUFFICIENT_FUNDS': '계좌 잔액이 부족합니다.',
  'INVALID_CARD': '유효하지 않은 카드입니다.',
  'EXCEED_MAX_DAILY_PAYMENT_COUNT': '일일 결제 횟수 한도를 초과했습니다.',
  'EXCEED_MAX_MONTHLY_PAYMENT_AMOUNT': '월 결제 금액 한도를 초과했습니다.',
  'INVALID_REQUEST': '잘못된 요청입니다.',
  'NOT_ALLOWED_POINT_USE': '포인트 사용이 허용되지 않습니다.',
  'INVALID_API_KEY': 'API 키가 유효하지 않습니다.',
  'INVALID_SECRET_KEY': 'Secret 키가 유효하지 않습니다.',
  'UNAUTHORIZED_KEY': '인증되지 않은 키입니다.',
  'REJECT_ACCOUNT_PAYMENT': '계좌 결제가 거절되었습니다.',
  'REJECT_CARD_PAYMENT': '카드 결제가 거절되었습니다.',
  'EXCEED_MAX_AUTH_COUNT': '최대 인증 횟수를 초과했습니다.',
  'EXCEED_MAX_ONE_DAY_DEPOSIT_AMOUNT': '1일 입금 한도를 초과했습니다.',
  'NOT_SUPPORTED_INSTALLMENT_PLAN_CARD_OR_MERCHANT': '할부가 지원되지 않는 카드이거나 가맹점입니다.',
  'NOT_SUPPORTED_MONTHLY_INSTALLMENT_PLAN': '월 할부가 지원되지 않습니다.',
  'EXCEED_MAX_PAYMENT_AMOUNT': '최대 결제 금액을 초과했습니다.',
  'NOT_FOUND_TERMINAL_ID': '터미널 ID를 찾을 수 없습니다.',
  'INVALID_AUTHORIZE_AUTH': '유효하지 않은 승인입니다.',
  'INVALID_PAYMENT_METHOD': '유효하지 않은 결제 수단입니다.',
  'PAYMENT_TIMEOUT': '결제 시간이 초과되었습니다.',
  'NETWORK_ERROR': '네트워크 오류가 발생했습니다.'
};

// 결제 서비스 클래스
class PaymentService {
  constructor() {
    this.tossPayments = null;
    this.isInitialized = false;
    this.initPromise = null;
  }

  // Toss Payments 초기화
  async initialize() {
    if (this.initPromise) {
      return this.initPromise;
    }

    this.initPromise = new Promise((resolve, reject) => {
      try {
        // SDK 로드 확인
        if (typeof window === 'undefined' || !window.TossPayments) {
          throw new Error('Toss Payments SDK가 로드되지 않았습니다.');
        }

        // 클라이언트 키 확인
        const clientKey = import.meta.env.VITE_TOSS_CLIENT_KEY;
        if (!clientKey) {
          throw new Error('Toss Payments 클라이언트 키가 설정되지 않았습니다.');
        }

        // Toss Payments 인스턴스 생성
        this.tossPayments = window.TossPayments(clientKey);
        this.isInitialized = true;

        console.log('✅ Toss Payments 초기화 완료');
        resolve(this.tossPayments);
      } catch (error) {
        console.error('❌ Toss Payments 초기화 실패:', error);
        reject(error);
      }
    });

    return this.initPromise;
  }

  // 결제 요청 데이터 생성
  createPaymentData(params) {
    const {
      transactionId,
      amount,
      orderName,
      customerName,
      customerEmail,
      customerMobilePhone,
      productType = 'DIGITAL'
    } = params;

    const orderId = `ECHO_${transactionId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const baseUrl = import.meta.env.DEV 
      ? 'http://localhost:5173' 
      : window.location.origin;

    return {
      amount,
      orderId,
      orderName: orderName.length > 100 ? orderName.substring(0, 97) + '...' : orderName,
      customerName,
      customerEmail,
      customerMobilePhone,
      successUrl: `${baseUrl}/payment/success?transactionId=${transactionId}`,
      failUrl: `${baseUrl}/payment/fail?transactionId=${transactionId}`,
      flowMode: 'DEFAULT',
      easyPay: 'PAYCO',
      locale: 'ko',
      productType,
      // 에스크로 정보 (필요시)
      escrow: {
        companyName: 'ECHO 에스크로',
        sellerName: params.sellerName || '판매자',
        buyerName: customerName,
        sellerEmail: params.sellerEmail || '',
        buyerEmail: customerEmail
      }
    };
  }

  // 결제 요청
  async requestPayment(paymentMethod, paymentData, securityData = {}) {
    try {
      // 초기화 확인
      if (!this.isInitialized) {
        await this.initialize();
      }

      // 보안 검증 수행
      console.log('🔒 결제 보안 검증 시작...');
      const securityValidation = await paymentSecurity.validatePaymentRequest({
        amount: paymentData.amount,
        orderId: paymentData.orderId,
        paymentMethod,
        customerData: {
          userId: securityData.userId,
          email: paymentData.customerEmail,
          name: paymentData.customerName,
          phone: paymentData.customerMobilePhone,
          accountAge: securityData.accountAge
        },
        productData: {
          productId: securityData.productId,
          price: securityData.productPrice
        },
        metadata: {
          ipAddress: securityData.ipAddress,
          userAgent: navigator.userAgent,
          country: securityData.country,
          customerCountry: securityData.customerCountry
        },
        sessionData: {
          sessionId: securityData.sessionId,
          fingerprint: paymentSecurity.generateDeviceFingerprint()
        }
      });

      // 보안 검증 실패 시 처리
      if (!securityValidation.isValid) {
        console.error('❌ 보안 검증 실패:', securityValidation.errors);
        throw {
          code: 'SECURITY_VALIDATION_FAILED',
          message: '보안 검증에 실패했습니다: ' + securityValidation.errors.join(', '),
          securityErrors: securityValidation.errors
        };
      }

      // 높은 위험도 결제는 추가 확인 필요
      if (securityValidation.riskLevel === 'HIGH') {
        console.warn('⚠️ 고위험 결제 감지:', securityValidation);
        throw {
          code: 'HIGH_RISK_PAYMENT',
          message: '보안상의 이유로 결제를 진행할 수 없습니다. 고객센터에 문의해 주세요.',
          riskLevel: securityValidation.riskLevel,
          riskScore: securityValidation.riskScore
        };
      }

      // 중간 위험도 결제는 경고 표시
      if (securityValidation.riskLevel === 'MEDIUM' && securityValidation.warnings.length > 0) {
        console.warn('⚠️ 중위험 결제:', securityValidation.warnings);
      }

      // 결제 진행 상태 표시
      if (securityData.userId) {
        paymentSecurity.markPaymentInProgress(securityData.userId);
      }

      // 기본 결제 데이터 검증
      this.validatePaymentData(paymentData);

      console.log('🔄 결제 요청 시작:', { 
        paymentMethod, 
        orderId: paymentData.orderId,
        riskLevel: securityValidation.riskLevel,
        riskScore: securityValidation.riskScore
      });

      // 결제 방법에 따른 처리
      const methodKey = this.getPaymentMethodKey(paymentMethod);
      const result = await this.tossPayments.requestPayment(methodKey, paymentData);

      console.log('✅ 결제 요청 성공:', result);

      // 결제 성공 표시
      if (securityData.userId) {
        paymentSecurity.markPaymentCompleted(securityData.userId, true);
      }

      return result;

    } catch (error) {
      console.error('❌ 결제 요청 실패:', error);
      
      // 결제 실패 표시
      if (securityData?.userId) {
        paymentSecurity.markPaymentCompleted(securityData.userId, false);
      }

      // 보안 관련 에러는 IP 차단 고려
      if (error.code === 'SECURITY_VALIDATION_FAILED' && securityData?.ipAddress) {
        // 반복적인 보안 위반 시 IP 차단
        const attempts = paymentSecurity.paymentAttempts.get(securityData.userId || securityData.ipAddress) || [];
        const recentFailures = attempts.filter(a => 
          !a.success && 
          Date.now() - a.timestamp < 60000 // 1분 이내
        ).length;

        if (recentFailures >= 3) {
          paymentSecurity.blockIP(securityData.ipAddress, '반복적인 보안 위반');
        }
      }
      
      // 사용자에게 친화적인 에러 메시지 제공
      const userFriendlyMessage = this.getErrorMessage(error.code || error.message);
      
      throw {
        code: error.code || 'UNKNOWN_ERROR',
        message: userFriendlyMessage,
        originalError: error,
        securityInfo: error.securityErrors ? {
          riskLevel: error.riskLevel,
          riskScore: error.riskScore,
          securityErrors: error.securityErrors
        } : undefined
      };
    }
  }

  // 결제 승인 (서버에서 호출해야 하는 API)
  async confirmPayment(paymentKey, orderId, amount) {
    try {
      const secretKey = import.meta.env.VITE_TOSS_SECRET_KEY;
      if (!secretKey) {
        throw new Error('Toss Payments Secret 키가 설정되지 않았습니다.');
      }

      const response = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(secretKey + ':')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          paymentKey,
          orderId,
          amount
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '결제 승인 실패');
      }

      const result = await response.json();
      console.log('✅ 결제 승인 완료:', result);
      return result;

    } catch (error) {
      console.error('❌ 결제 승인 실패:', error);
      throw error;
    }
  }

  // 결제 조회
  async getPayment(paymentKey) {
    try {
      const secretKey = import.meta.env.VITE_TOSS_SECRET_KEY;
      if (!secretKey) {
        throw new Error('Toss Payments Secret 키가 설정되지 않았습니다.');
      }

      const response = await fetch(`https://api.tosspayments.com/v1/payments/${paymentKey}`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${btoa(secretKey + ':')}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '결제 조회 실패');
      }

      return await response.json();

    } catch (error) {
      console.error('❌ 결제 조회 실패:', error);
      throw error;
    }
  }

  // 결제 취소
  async cancelPayment(paymentKey, cancelReason, cancelAmount = null) {
    try {
      const secretKey = import.meta.env.VITE_TOSS_SECRET_KEY;
      if (!secretKey) {
        throw new Error('Toss Payments Secret 키가 설정되지 않았습니다.');
      }

      const requestBody = {
        cancelReason
      };

      // 부분 취소인 경우
      if (cancelAmount !== null) {
        requestBody.cancelAmount = cancelAmount;
      }

      const response = await fetch(`https://api.tosspayments.com/v1/payments/${paymentKey}/cancel`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(secretKey + ':')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '결제 취소 실패');
      }

      const result = await response.json();
      console.log('✅ 결제 취소 완료:', result);
      return result;

    } catch (error) {
      console.error('❌ 결제 취소 실패:', error);
      throw error;
    }
  }

  // 결제 위젯 렌더링 (고급 기능)
  async renderPaymentWidget(elementId, options = {}) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const widget = this.tossPayments.widgets({
        customerKey: options.customerKey || 'anonymous'
      });

      const paymentWidget = widget.renderPaymentMethods(
        elementId,
        options.paymentMethods || { value: options.amount || 1000 }
      );

      return { widget, paymentWidget };

    } catch (error) {
      console.error('❌ 결제 위젯 렌더링 실패:', error);
      throw error;
    }
  }

  // 결제 데이터 유효성 검사
  validatePaymentData(paymentData) {
    const required = ['amount', 'orderId', 'orderName', 'successUrl', 'failUrl'];
    
    for (const field of required) {
      if (!paymentData[field]) {
        throw new Error(`필수 필드가 누락되었습니다: ${field}`);
      }
    }

    // 금액 검증
    if (paymentData.amount < 100) {
      throw new Error('최소 결제 금액은 100원입니다.');
    }

    if (paymentData.amount > 10000000) {
      throw new Error('최대 결제 금액은 1,000만원입니다.');
    }

    // 주문명 길이 검증
    if (paymentData.orderName.length > 100) {
      throw new Error('주문명은 100자를 초과할 수 없습니다.');
    }

    // URL 유효성 검증
    try {
      new URL(paymentData.successUrl);
      new URL(paymentData.failUrl);
    } catch {
      throw new Error('성공/실패 URL이 유효하지 않습니다.');
    }
  }

  // 결제 방법 키 변환
  getPaymentMethodKey(method) {
    const methodMap = {
      'card': '카드',
      'transfer': '계좌이체',
      'vbank': '가상계좌',
      'mobile': '휴대폰',
      'gift': '문화상품권'
    };

    return methodMap[method] || '카드';
  }

  // 에러 메시지 변환
  getErrorMessage(errorCode) {
    return PAYMENT_ERROR_MESSAGES[errorCode] || 
           '결제 중 알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.';
  }

  // 결제 상태 확인 및 거래 업데이트
  async handlePaymentCallback(params) {
    try {
      const { paymentKey, orderId, amount, transactionId } = params;

      // 결제 승인
      const paymentResult = await this.confirmPayment(paymentKey, orderId, amount);

      // 거래 상태 업데이트
      if (paymentResult.status === 'DONE') {
        await transactionService.updatePaymentInfo(transactionId, {
          paymentKey,
          method: paymentResult.method,
          totalAmount: paymentResult.totalAmount,
          approvedAt: paymentResult.approvedAt,
          receipt: paymentResult.receipt
        });

        return {
          success: true,
          paymentResult,
          message: '결제가 성공적으로 완료되었습니다.'
        };
      } else {
        throw new Error('결제가 완료되지 않았습니다.');
      }

    } catch (error) {
      console.error('❌ 결제 콜백 처리 실패:', error);
      
      // 거래 실패 상태 업데이트
      if (params.transactionId) {
        try {
          await transactionService.updateTransactionStatus(
            params.transactionId,
            TRANSACTION_STATUS.CANCELLED,
            '결제 실패로 인한 거래 취소'
          );
        } catch (updateError) {
          console.error('거래 상태 업데이트 실패:', updateError);
        }
      }

      return {
        success: false,
        error,
        message: this.getErrorMessage(error.code || error.message)
      };
    }
  }

  // 테스트 모드 결제 시뮬레이션
  async simulateTestPayment(paymentData, paymentMethod) {
    console.log('🧪 테스트 모드: 결제 시뮬레이션 시작');
    
    // 테스트 지연 시간
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 랜덤 성공/실패 (90% 성공률)
    const isSuccess = Math.random() > 0.1;

    if (isSuccess) {
      const mockResult = {
        paymentKey: `test_payment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        orderId: paymentData.orderId,
        orderName: paymentData.orderName,
        method: paymentMethod,
        totalAmount: paymentData.amount,
        status: 'DONE',
        approvedAt: new Date().toISOString(),
        receipt: {
          url: `https://dashboard.tosspayments.com/receipt/test_${Date.now()}`
        }
      };

      console.log('✅ 테스트 결제 성공:', mockResult);
      return mockResult;
    } else {
      const errorCodes = ['PAY_PROCESS_CANCELED', 'INSUFFICIENT_FUNDS', 'INVALID_CARD'];
      const randomError = errorCodes[Math.floor(Math.random() * errorCodes.length)];
      
      console.log('❌ 테스트 결제 실패:', randomError);
      throw {
        code: randomError,
        message: this.getErrorMessage(randomError)
      };
    }
  }

  // 결제 환경 확인
  isTestMode() {
    const clientKey = import.meta.env.VITE_TOSS_CLIENT_KEY;
    return clientKey && clientKey.startsWith('test_');
  }
}

// 싱글톤 인스턴스 생성
const paymentService = new PaymentService();

export { paymentService, PAYMENT_ERROR_MESSAGES };
export default paymentService;