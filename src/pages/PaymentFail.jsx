import React from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
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

const ErrorIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #ff6b6b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
  font-size: 36px;
  animation: shake 0.5s ease-out;

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
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
  margin: 0 0 24px 0;
`;

const ErrorDetails = styled.div`
  background: #fff5f5;
  border: 1px solid #fed7d7;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 32px;
  text-align: left;
`;

const ErrorCode = styled.div`
  font-size: 14px;
  color: #c53030;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ErrorMessage = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
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

const HelpText = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 20px;
  line-height: 1.4;
`;

export default function PaymentFail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const code = searchParams.get('code');
  const message = searchParams.get('message');
  const orderId = searchParams.get('orderId');

  const handleRetry = () => {
    navigate(-1); // 이전 페이지로 돌아가서 재시도
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const getErrorMessage = (code, message) => {
    const errorMessages = {
      'PAY_PROCESS_CANCELED': '사용자가 결제를 취소했습니다.',
      'PAY_PROCESS_ABORTED': '결제 중 오류가 발생했습니다.',
      'REJECT_CARD_COMPANY': '카드사에서 결제를 거절했습니다.',
      'INSUFFICIENT_FUNDS': '계좌 잔액이 부족합니다.',
      'INVALID_CARD': '유효하지 않은 카드입니다.',
      'EXCEED_MAX_DAILY_PAYMENT_COUNT': '일일 결제 한도를 초과했습니다.',
      'EXCEED_MAX_MONTHLY_PAYMENT_AMOUNT': '월 결제 한도를 초과했습니다.',
    };

    return errorMessages[code] || message || '결제 중 알 수 없는 오류가 발생했습니다.';
  };

  return (
    <Container>
      <Card>
        <ErrorIcon>
          <FaExclamationTriangle />
        </ErrorIcon>
        
        <Title>결제 실패</Title>
        <Message>
          결제가 완료되지 않았습니다.
          <br />
          다시 시도해 주세요.
        </Message>

        {(code || message) && (
          <ErrorDetails>
            {code && <ErrorCode>오류 코드: {code}</ErrorCode>}
            <ErrorMessage>{getErrorMessage(code, message)}</ErrorMessage>
          </ErrorDetails>
        )}

        <ButtonGroup>
          <SecondaryButton onClick={handleGoHome}>
            <FaHome />
            홈으로
          </SecondaryButton>
          <PrimaryButton onClick={handleRetry}>
            <FaRedo />
            다시 시도
          </PrimaryButton>
        </ButtonGroup>

        <HelpText>
          계속해서 문제가 발생한다면 고객센터로 문의해 주세요.
          <br />
          주문번호: {orderId}
        </HelpText>
      </Card>
    </Container>
  );
}