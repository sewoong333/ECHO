import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { UserContext } from '../store/UserContext';
import { useContext } from 'react';
import { useToast } from '../store/ToastContext';
import { FaTimes, FaCreditCard, FaPhone, FaCheck, FaSpinner } from 'react-icons/fa';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const Content = styled.div`
  padding: 24px;
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const ProductTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 2px solid ${props => props.selected ? '#2ed8b6' : '#e0e0e0'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.selected ? '#f0fffe' : 'white'};
  
  &:hover {
    border-color: #2ed8b6;
  }
`;

const MethodIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.selected ? '#2ed8b6' : '#f0f0f0'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.selected ? 'white' : '#666'};
  font-size: 18px;
  margin-right: 12px;
`;

const MethodInfo = styled.div`
  flex: 1;
`;

const MethodName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const MethodDesc = styled.div`
  font-size: 13px;
  color: #666;
`;

const RadioButton = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${props => props.selected ? '#2ed8b6' : '#ddd'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #2ed8b6;
    display: ${props => props.selected ? 'block' : 'none'};
  }
`;

const PaymentSummary = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.last ? '0' : '12px'};
  font-size: ${props => props.total ? '18px' : '14px'};
  font-weight: ${props => props.total ? '700' : '500'};
  color: ${props => props.total ? '#333' : '#666'};
  
  ${props => props.total && `
    padding-top: 12px;
    border-top: 1px solid #e0e0e0;
    color: #2ed8b6;
  `}
`;

const PayButton = styled.button`
  width: 100%;
  height: 56px;
  background: #2ed8b6;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: #26c4a8;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const Notice = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.4;
  margin-top: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
`;

const TOSS_CLIENT_KEY = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq'; // 테스트용 키

export default function PaymentModal({ 
  isOpen, 
  onClose, 
  product, 
  onPaymentSuccess: _onPaymentSuccess,
  onPaymentError 
}) {
  const { user } = useContext(UserContext);
  const { showSuccess: _showSuccess, showError } = useToast();
  const [selectedMethod, setSelectedMethod] = useState('카드');
  const [isProcessing, setIsProcessing] = useState(false);
  const [tossPayments, setTossPayments] = useState(null);

  useEffect(() => {
    if (isOpen) {
      loadTossPayments(TOSS_CLIENT_KEY).then(setTossPayments);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const paymentMethods = [
    {
      key: '카드',
      name: '신용/체크카드',
      desc: '모든 카드사 지원',
      icon: <FaCreditCard />
    },
    {
      key: '계좌이체',
      name: '계좌이체',
      desc: '실시간 계좌이체',
      icon: <FaPhone />
    },
    {
      key: '휴대폰',
      name: '휴대폰 결제',
      desc: '통신사 소액결제',
      icon: <FaPhone />
    }
  ];

  const handlePayment = async () => {
    if (!tossPayments || !user || !product) {
      showError('결제 준비가 완료되지 않았습니다.');
      return;
    }

    setIsProcessing(true);

    try {
      const orderId = `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const customerName = user.displayName || user.email?.split('@')[0] || '구매자';
      
      const paymentData = {
        amount: product.price,
        orderId,
        orderName: product.title,
        customerName,
        successUrl: `${window.location.origin}/payment/success`,
        failUrl: `${window.location.origin}/payment/fail`,
      };

      let paymentWidget;
      
      switch (selectedMethod) {
        case '카드':
          paymentWidget = tossPayments.requestPayment('카드', paymentData);
          break;
        case '계좌이체':
          paymentWidget = tossPayments.requestPayment('계좌이체', paymentData);
          break; 
        case '휴대폰':
          paymentWidget = tossPayments.requestPayment('휴대폰', {
            ...paymentData,
            customerMobilePhone: user.phoneNumber || '01000000000'
          });
          break;
        default:
          throw new Error('지원하지 않는 결제 방법입니다.');
      }

      await paymentWidget;
      
    } catch (error) {
      console.error('결제 실패:', error);
      showError(error.message || '결제 중 오류가 발생했습니다.');
      if (onPaymentError) {
        onPaymentError(error);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const deliveryFee = product.delivery ? 3000 : 0;
  const totalAmount = product.price + deliveryFee;

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>결제하기</Title>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </Header>
        
        <Content>
          <ProductInfo>
            <ProductImage 
              src={product.images?.[0] || '/placeholder.jpg'} 
              alt={product.title}
            />
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{formatPrice(product.price)}원</ProductPrice>
            </ProductDetails>
          </ProductInfo>

          <Section>
            <SectionTitle>결제 방법</SectionTitle>
            <PaymentMethods>
              {paymentMethods.map((method) => (
                <PaymentMethod
                  key={method.key}
                  selected={selectedMethod === method.key}
                  onClick={() => setSelectedMethod(method.key)}
                >
                  <MethodIcon selected={selectedMethod === method.key}>
                    {method.icon}
                  </MethodIcon>
                  <MethodInfo>
                    <MethodName>{method.name}</MethodName>
                    <MethodDesc>{method.desc}</MethodDesc>
                  </MethodInfo>
                  <RadioButton selected={selectedMethod === method.key} />
                </PaymentMethod>
              ))}
            </PaymentMethods>
          </Section>

          <PaymentSummary>
            <SummaryRow>
              <span>상품 금액</span>
              <span>{formatPrice(product.price)}원</span>
            </SummaryRow>
            {deliveryFee > 0 && (
              <SummaryRow>
                <span>배송비</span>
                <span>{formatPrice(deliveryFee)}원</span>
              </SummaryRow>
            )}
            <SummaryRow total last>
              <span>총 결제 금액</span>
              <span>{formatPrice(totalAmount)}원</span>
            </SummaryRow>
          </PaymentSummary>

          <PayButton 
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <FaSpinner className="fa-spin" />
                결제 진행 중...
              </>
            ) : (
              <>
                <FaCheck />
                {formatPrice(totalAmount)}원 결제하기
              </>
            )}
          </PayButton>

          <Notice>
            • 결제 완료 후 판매자와 연결되어 거래를 진행합니다.
            <br />
            • 안전한 거래를 위해 직거래를 권장합니다.
            <br />
            • 문제 발생 시 고객센터로 문의해 주세요.
          </Notice>
        </Content>
      </ModalContent>
    </Modal>
  );
}