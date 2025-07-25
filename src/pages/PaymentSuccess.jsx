import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ProductContext } from '../store/ProductContext';
import { UserContext } from '../store/UserContext';
import { useToast } from '../store/ToastContext';
import { FaCheckCircle, FaHome, FaComments } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px 24px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
  font-size: 36px;
  animation: scaleIn 0.5s ease-out;

  @keyframes scaleIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 12px 0;
`;

const Message = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin: 0 0 32px 0;
`;

const OrderInfo = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 32px;
  text-align: left;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.last ? '0' : '12px'};
  font-size: 14px;
`;

const InfoLabel = styled.span`
  color: #666;
`;

const InfoValue = styled.span`
  font-weight: 600;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  flex: 1;
  height: 48px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const PrimaryButton = styled(Button)`
  background: #2ed8b6;
  color: white;
  
  &:hover {
    background: #26c4a8;
  }
`;

const SecondaryButton = styled(Button)`
  background: #f8f9fa;
  color: #333;
  border: 1px solid #e0e0e0;
  
  &:hover {
    background: #e9ecef;
  }
`;

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { changeProductStatus: _changeProductStatus, PRODUCT_STATUS: _PRODUCT_STATUS } = useContext(ProductContext);
  const { user: _user } = useContext(UserContext);
  const { showSuccess } = useToast();

  const orderId = searchParams.get('orderId');
  const paymentKey = searchParams.get('paymentKey');
  const amount = searchParams.get('amount');

  useEffect(() => {
    if (orderId && paymentKey && amount) {
      showSuccess('결제가 성공적으로 완료되었습니다!', {
        title: '결제 완료'
      });
      
      // TODO: 서버에 결제 완료 알림 전송
      // TODO: 상품 상태를 '결제 완료'로 변경
      // TODO: 판매자에게 알림 전송
    }
  }, [orderId, paymentKey, amount, showSuccess]);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoToChat = () => {
    // TODO: 해당 상품의 채팅방으로 이동
    navigate('/chat');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <Container>
      <Card>
        <SuccessIcon>
          <FaCheckCircle />
        </SuccessIcon>
        
        <Title>결제 완료!</Title>
        <Message>
          결제가 성공적으로 완료되었습니다.
          <br />
          판매자와 연락하여 거래를 진행해 주세요.
        </Message>

        <OrderInfo>
          <InfoRow>
            <InfoLabel>주문번호</InfoLabel>
            <InfoValue>{orderId}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>결제키</InfoLabel>
            <InfoValue>{paymentKey?.slice(0, 20)}...</InfoValue>
          </InfoRow>
          <InfoRow last>
            <InfoLabel>결제금액</InfoLabel>
            <InfoValue>{formatPrice(amount)}원</InfoValue>
          </InfoRow>
        </OrderInfo>

        <ButtonGroup>
          <SecondaryButton onClick={handleGoHome}>
            <FaHome />
            홈으로
          </SecondaryButton>
          <PrimaryButton onClick={handleGoToChat}>
            <FaComments />
            채팅하기
          </PrimaryButton>
        </ButtonGroup>
      </Card>
    </Container>
  );
}