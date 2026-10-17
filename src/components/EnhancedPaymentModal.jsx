import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import { UserContext } from "../store/UserContext";
import { useToast } from "../store/ToastContext";
import { transactionService, TRANSACTION_STATUS } from "../utils/transactionService";
import paymentService, { PAYMENT_METHODS } from "../utils/paymentService";
import {
  FaTimes,
  FaCreditCard,
  FaUniversity,
  FaMobile,
  FaQrcode,
  FaLock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaShieldAlt,
  FaCalculator,
  FaTruck,
  FaHome,
  FaMapMarkerAlt,
  FaSpinner,
  FaClock,
  FaWifi,
  FaExclamationCircle
} from "react-icons/fa";

// CSS for spinning animation
const GlobalStyle = styled.div`
  @keyframes fa-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .fa-spin {
    animation: fa-spin 1s infinite linear;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 0;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  padding: 0 24px 24px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProductSummary = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  line-height: 1.3;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #0b7a68;
  margin-bottom: 8px;
`;

const ShippingSection = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const ShippingOption = styled.div`
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${props => props.selected ? '#f0fffe' : 'white'};
  border: 2px solid ${props => props.selected ? '#2ed8b6' : 'transparent'};
  transition: all 0.2s ease;
  
  &:hover {
    background: #f0fffe;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`;

const ShippingIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.selected ? '#2ed8b6' : '#f5f5f5'};
  color: ${props => props.selected ? '#06302a' : '#666'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const ShippingDetails = styled.div`
  flex: 1;
`;

const ShippingTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const ShippingDescription = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.4;
`;

const ShippingPrice = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #0b7a68;
`;

const AddressInput = styled.div`
  margin-top: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
`;

const AddressLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const AddressField = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 8px;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
`;

const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`;

const PaymentMethod = styled.div`
  padding: 16px;
  border: 2px solid ${props => props.selected ? '#2ed8b6' : '#e0e0e0'};
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.selected ? '#f0fffe' : 'white'};
  
  &:hover {
    border-color: #2ed8b6;
    background: #f0fffe;
  }
`;

const PaymentIcon = styled.div`
  font-size: 24px;
  color: ${props => props.selected ? '#0b7a68' : '#666'};
  margin-bottom: 8px;
`;

const PaymentLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${props => props.selected ? '#0b7a68' : '#333'};
  margin-bottom: 4px;
`;

const PaymentDescription = styled.div`
  font-size: 11px;
  color: #666;
  line-height: 1.3;
`;

const PriceBreakdown = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
    padding-top: 8px;
    border-top: 1px solid #e0e0e0;
    font-weight: 600;
    font-size: 16px;
  }
`;

const PriceLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

const PriceValue = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

const SecurityInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: #e8f5e8;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SecurityText = styled.div`
  font-size: 12px;
  color: #2e7d32;
  line-height: 1.4;
`;

const PaymentButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #2ed8b6 0%, #25b89a 100%);
  color: #06302a;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: linear-gradient(135deg, #25b89a 0%, #1ea085 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(46, 216, 182, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #2ed8b6;
  margin-top: 2px;
`;

const CheckboxText = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.4;
`;

const ErrorContainer = styled.div`
  background: #fee2e2;
  border: 1px solid #fca5a5;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ErrorText = styled.div`
  font-size: 14px;
  color: #991b1b;
  flex: 1;
`;

const RetryButton = styled.button`
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background: #b91c1c;
  }
`;

const TermsLink = styled.span`
  color: #0b7a68;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    color: #25b89a;
  }
`;

export default function EnhancedPaymentModal({ 
  isOpen, 
  onClose, 
  product, 
  onPaymentSuccess, 
  onPaymentError 
}) {
  const { user } = useContext(UserContext);
  const { showSuccess, showError } = useToast();
  
  const [shippingMethod, setShippingMethod] = useState('direct');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [shippingAddress, setShippingAddress] = useState({
    fullAddress: '',
    detailAddress: '',
    zipCode: '',
    recipient: user?.displayName || '',
    phone: user?.phoneNumber || ''
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState('form'); // 'form', 'processing', 'verification'
  const [paymentError, setPaymentError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const paymentAttemptRef = useRef(null);

  const shippingFee = shippingMethod === 'delivery' ? 3000 : 0;
  const totalAmount = product.price + shippingFee;

  useEffect(() => {
    if (!isOpen) {
      // 모달이 닫힐 때 상태 초기화
      setShippingMethod('direct');
      setPaymentMethod('card');
      setAgreeTerms(false);
      setProcessing(false);
      setPaymentStep('form');
      setPaymentError(null);
      setRetryCount(0);
    } else {
      // 모달이 열릴 때 Toss Payments 초기화
      initializePaymentService();
    }
  }, [isOpen]);

  // 네트워크 상태 모니터링
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Toss Payments 초기화
  const initializePaymentService = async () => {
    try {
      await paymentService.initialize();
      console.log('✅ 결제 서비스 초기화 완료');
    } catch (error) {
      console.error('❌ 결제 서비스 초기화 실패:', error);
      showError('결제 서비스를 초기화할 수 없습니다. 페이지를 새로고침해 주세요.');
    }
  };

  // 결제 전 유효성 검사
  const validatePaymentForm = () => {
    // 네트워크 연결 확인
    if (!isOnline) {
      setPaymentError({
        type: 'NETWORK_ERROR',
        message: '인터넷 연결을 확인해 주세요.'
      });
      return false;
    }

    // 약관 동의 확인
    if (!agreeTerms) {
      setPaymentError({
        type: 'VALIDATION_ERROR',
        message: '이용약관에 동의해주세요.'
      });
      return false;
    }

    // 배송 정보 확인
    if (shippingMethod === 'delivery') {
      if (!shippingAddress.fullAddress || !shippingAddress.recipient || !shippingAddress.phone) {
        setPaymentError({
          type: 'VALIDATION_ERROR',
          message: '배송 정보를 모두 입력해주세요.'
        });
        return false;
      }

      // 전화번호 형식 검증
      const phoneRegex = /^[0-9]{10,11}$/;
      if (!phoneRegex.test(shippingAddress.phone.replace(/-/g, ''))) {
        setPaymentError({
          type: 'VALIDATION_ERROR',
          message: '올바른 전화번호를 입력해주세요.'
        });
        return false;
      }
    }

    // 사용자 정보 확인
    if (!user || !user.email) {
      setPaymentError({
        type: 'AUTH_ERROR',
        message: '로그인이 필요합니다.'
      });
      return false;
    }

    // 결제 금액 확인
    if (totalAmount < 100) {
      setPaymentError({
        type: 'VALIDATION_ERROR',
        message: '최소 결제 금액은 100원입니다.'
      });
      return false;
    }

    return true;
  };

  // 재시도 로직
  const retryPayment = () => {
    if (retryCount >= 3) {
      setPaymentError({
        type: 'MAX_RETRY_EXCEEDED',
        message: '최대 재시도 횟수를 초과했습니다. 잠시 후 다시 시도해 주세요.'
      });
      return;
    }

    setRetryCount(prev => prev + 1);
    setPaymentError(null);
    setPaymentStep('form');
  };

  // 클라이언트 IP 조회 (간단한 구현)
  const getClientIP = async () => {
    try {
      // 실제로는 서버에서 IP를 제공하거나 외부 서비스 이용
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch {
      return 'unknown';
    }
  };

  // 결제 처리 메인 함수
  const handlePayment = async () => {
    // 중복 결제 방지
    if (processing || paymentStep !== 'form') {
      return;
    }

    // 유효성 검사
    if (!validatePaymentForm()) {
      return;
    }

    setProcessing(true);
    setPaymentStep('processing');
    setPaymentError(null);
    
    try {
      // 1. 거래 생성
      console.log('🔄 거래 생성 중...');
      const transactionData = {
        productId: product.id,
        sellerId: product.sellerId,
        buyerId: user.uid,
        productTitle: product.title,
        productPrice: product.price,
        productImages: product.images,
        productCondition: product.condition,
        totalAmount,
        shippingMethod,
        shippingAddress: shippingMethod === 'delivery' ? shippingAddress : null,
        paymentMethod,
        isEscrow: true,
        notes: `${PAYMENT_METHODS[paymentMethod.toUpperCase()]?.displayName || paymentMethod} 결제, ${shippingMethod === 'direct' ? '직거래' : '택배거래'}`
      };
      
      const transaction = await transactionService.createTransaction(transactionData);
      console.log('✅ 거래 생성 완료:', transaction.id);
      
      // 2. 결제 데이터 준비
      const paymentData = paymentService.createPaymentData({
        transactionId: transaction.id,
        amount: totalAmount,
        orderName: product.title,
        customerName: user.displayName || user.email,
        customerEmail: user.email,
        customerMobilePhone: user.phoneNumber || shippingAddress.phone,
        sellerName: product.sellerNickname || '판매자',
        sellerEmail: product.sellerEmail
      });

      console.log('🔄 결제 요청 중...', { paymentMethod, amount: totalAmount });
      
      // 3. 결제 요청
      let paymentResult;
      
      if (paymentService.isTestMode()) {
        console.log('🧪 테스트 모드: 시뮬레이션 결제');
        setPaymentStep('verification');
        paymentResult = await paymentService.simulateTestPayment(paymentData, paymentMethod);
        
        // 테스트 모드에서는 바로 성공 처리
        await transactionService.updatePaymentInfo(transaction.id, {
          paymentKey: paymentResult.paymentKey,
          method: paymentResult.method,
          totalAmount: paymentResult.totalAmount,
          approvedAt: paymentResult.approvedAt
        });
        
        showSuccess('테스트 결제가 완료되었습니다!');
        onPaymentSuccess({
          transactionId: transaction.id,
          paymentResult
        });
        onClose();
        
      } else {
        // 실제 결제 모드 (보안 검증 포함)
        setPaymentStep('verification');
        
        // 보안 데이터 준비
        const securityData = {
          userId: user.uid,
          productId: product.id,
          productPrice: product.price,
          accountAge: user.metadata?.creationTime,
          ipAddress: await getClientIP(),
          sessionId: paymentAttemptRef.current || Date.now().toString(),
          country: 'KR', // 실제로는 IP 기반 지역 감지
          customerCountry: 'KR'
        };
        
        paymentResult = await paymentService.requestPayment(paymentMethod, paymentData, securityData);
        
        // 실제 모드에서는 콜백으로 처리됨
        console.log('🔄 결제 페이지로 리디렉션됩니다...');
      }
      
    } catch (error) {
      console.error('❌ 결제 처리 실패:', error);
      
      setPaymentStep('form');
      setPaymentError({
        type: error.code || 'PAYMENT_ERROR',
        message: error.message || '결제 처리 중 오류가 발생했습니다.',
        originalError: error
      });
      
      // 사용자에게 친화적인 에러 메시지 표시
      const userMessage = paymentService.getErrorMessage(error.code || error.message);
      showError(userMessage);
      
      if (onPaymentError) {
        onPaymentError(error);
      }
    } finally {
      setProcessing(false);
      
      // 결제 시도 참조 정리
      if (paymentAttemptRef.current) {
        clearTimeout(paymentAttemptRef.current);
        paymentAttemptRef.current = null;
      }
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>안전한 결제</ModalTitle>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          {/* 상품 요약 */}
          <ProductSummary>
            {product.images?.[0] && (
              <ProductImage src={product.images[0]} alt={product.title} />
            )}
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>₩{formatPrice(product.price)}</ProductPrice>
            </ProductInfo>
          </ProductSummary>

          {/* 배송 방법 선택 */}
          <Section>
            <SectionTitle>
              <FaTruck />
              거래 방법
            </SectionTitle>
            <ShippingSection>
              <ShippingOption 
                selected={shippingMethod === 'direct'}
                onClick={() => setShippingMethod('direct')}
              >
                <ShippingIcon selected={shippingMethod === 'direct'}>
                  <FaHome />
                </ShippingIcon>
                <ShippingDetails>
                  <ShippingTitle>직거래</ShippingTitle>
                  <ShippingDescription>
                    판매자와 직접 만나서 거래해요
                  </ShippingDescription>
                </ShippingDetails>
                <ShippingPrice>무료</ShippingPrice>
              </ShippingOption>
              
              <ShippingOption 
                selected={shippingMethod === 'delivery'}
                onClick={() => setShippingMethod('delivery')}
              >
                <ShippingIcon selected={shippingMethod === 'delivery'}>
                  <FaTruck />
                </ShippingIcon>
                <ShippingDetails>
                  <ShippingTitle>택배거래</ShippingTitle>
                  <ShippingDescription>
                    안전하게 택배로 받아보세요
                  </ShippingDescription>
                </ShippingDetails>
                <ShippingPrice>₩{formatPrice(3000)}</ShippingPrice>
              </ShippingOption>
            </ShippingSection>

            {/* 배송지 입력 */}
            {shippingMethod === 'delivery' && (
              <AddressInput>
                <AddressLabel>
                  <FaMapMarkerAlt style={{ marginRight: '4px' }} />
                  배송지 정보
                </AddressLabel>
                <AddressField
                  type="text"
                  placeholder="받으실 분 성함"
                  value={shippingAddress.recipient}
                  onChange={(e) => setShippingAddress(prev => ({
                    ...prev,
                    recipient: e.target.value
                  }))}
                />
                <AddressField
                  type="text"
                  placeholder="연락처"
                  value={shippingAddress.phone}
                  onChange={(e) => setShippingAddress(prev => ({
                    ...prev,
                    phone: e.target.value
                  }))}
                />
                <AddressField
                  type="text"
                  placeholder="우편번호"
                  value={shippingAddress.zipCode}
                  onChange={(e) => setShippingAddress(prev => ({
                    ...prev,
                    zipCode: e.target.value
                  }))}
                />
                <AddressField
                  type="text"
                  placeholder="주소"
                  value={shippingAddress.fullAddress}
                  onChange={(e) => setShippingAddress(prev => ({
                    ...prev,
                    fullAddress: e.target.value
                  }))}
                />
                <AddressField
                  type="text"
                  placeholder="상세주소"
                  value={shippingAddress.detailAddress}
                  onChange={(e) => setShippingAddress(prev => ({
                    ...prev,
                    detailAddress: e.target.value
                  }))}
                />
              </AddressInput>
            )}
          </Section>

          {/* 결제 방법 선택 */}
          <Section>
            <SectionTitle>
              <FaCreditCard />
              결제 방법
            </SectionTitle>
            <PaymentMethods>
              <PaymentMethod 
                selected={paymentMethod === 'card'}
                onClick={() => setPaymentMethod('card')}
              >
                <PaymentIcon selected={paymentMethod === 'card'}>
                  <FaCreditCard />
                </PaymentIcon>
                <PaymentLabel selected={paymentMethod === 'card'}>
                  신용/체크카드
                </PaymentLabel>
                <PaymentDescription>
                  간편하고 빠른 결제
                </PaymentDescription>
              </PaymentMethod>
              
              <PaymentMethod 
                selected={paymentMethod === 'transfer'}
                onClick={() => setPaymentMethod('transfer')}
              >
                <PaymentIcon selected={paymentMethod === 'transfer'}>
                  <FaUniversity />
                </PaymentIcon>
                <PaymentLabel selected={paymentMethod === 'transfer'}>
                  계좌이체
                </PaymentLabel>
                <PaymentDescription>
                  수수료 없는 결제
                </PaymentDescription>
              </PaymentMethod>
              
              <PaymentMethod 
                selected={paymentMethod === 'mobile'}
                onClick={() => setPaymentMethod('mobile')}
              >
                <PaymentIcon selected={paymentMethod === 'mobile'}>
                  <FaMobile />
                </PaymentIcon>
                <PaymentLabel selected={paymentMethod === 'mobile'}>
                  휴대폰 결제
                </PaymentLabel>
                <PaymentDescription>
                  휴대폰 요금과 함께
                </PaymentDescription>
              </PaymentMethod>
              
              <PaymentMethod 
                selected={paymentMethod === 'vbank'}
                onClick={() => setPaymentMethod('vbank')}
              >
                <PaymentIcon selected={paymentMethod === 'vbank'}>
                  <FaQrcode />
                </PaymentIcon>
                <PaymentLabel selected={paymentMethod === 'vbank'}>
                  가상계좌
                </PaymentLabel>
                <PaymentDescription>
                  입금 확인 후 거래
                </PaymentDescription>
              </PaymentMethod>
            </PaymentMethods>
          </Section>

          {/* 결제 금액 */}
          <Section>
            <SectionTitle>
              <FaCalculator />
              결제 금액
            </SectionTitle>
            <PriceBreakdown>
              <PriceRow>
                <PriceLabel>상품 금액</PriceLabel>
                <PriceValue>₩{formatPrice(product.price)}</PriceValue>
              </PriceRow>
              <PriceRow>
                <PriceLabel>배송비</PriceLabel>
                <PriceValue>₩{formatPrice(shippingFee)}</PriceValue>
              </PriceRow>
              <PriceRow>
                <PriceLabel>총 결제금액</PriceLabel>
                <PriceValue style={{ color: '#0b7a68', fontSize: '18px' }}>
                  ₩{formatPrice(totalAmount)}
                </PriceValue>
              </PriceRow>
            </PriceBreakdown>
          </Section>

          {/* 보안 정보 */}
          <SecurityInfo>
            <FaShieldAlt color="#2e7d32" />
            <SecurityText>
              안전한 에스크로 거래로 보호받는 결제입니다. 
              상품 수령 확인 후 판매자에게 대금이 전달됩니다.
            </SecurityText>
          </SecurityInfo>

          {/* 약관 동의 */}
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <CheckboxText>
              <TermsLink>구매조건</TermsLink> 및 <TermsLink>개인정보처리방침</TermsLink>에 동의합니다.
              에스크로 서비스를 통한 안전거래에 동의합니다.
            </CheckboxText>
          </CheckboxContainer>

          {/* 에러 메시지 및 재시도 */}
          {paymentError && (
            <ErrorContainer>
              <FaExclamationCircle color="#991b1b" />
              <ErrorText>{paymentError.message}</ErrorText>
              {paymentError.type !== 'MAX_RETRY_EXCEEDED' && (
                <RetryButton onClick={retryPayment}>
                  재시도
                </RetryButton>
              )}
            </ErrorContainer>
          )}

          {/* 결제 버튼 */}
          <PaymentButton 
            onClick={handlePayment}
            disabled={!agreeTerms || processing}
          >
            {processing ? (
              <>
                <FaClock />
                결제 처리 중...
              </>
            ) : (
              <>
                <FaLock />
                ₩{formatPrice(totalAmount)} 안전결제
              </>
            )}
          </PaymentButton>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}