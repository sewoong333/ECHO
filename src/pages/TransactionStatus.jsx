import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import tradingService from '../utils/tradingService';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const StatusCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const StatusStep = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const StepIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background: ${props => props.completed ? '#4CAF50' : '#E0E0E0'};
  color: white;
  font-weight: bold;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  margin: 0 0 4px 0;
  font-size: 1rem;
  color: ${props => props.completed ? '#4CAF50' : '#666'};
`;

const StepDescription = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #666;
`;

const ActionButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background: #45a049;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const steps = [
  { key: 'initiated', title: '거래 시작', description: '구매 의사 확인' },
  { key: 'confirmed', title: '거래 확정', description: '판매자가 거래를 승인했습니다' },
  { key: 'shipped', title: '배송 시작', description: '상품이 배송되었습니다' },
  { key: 'delivered', title: '배송 완료', description: '상품이 도착했습니다' },
  { key: 'completed', title: '거래 완료', description: '거래가 성공적으로 완료되었습니다' }
];

export const TransactionStatus = () => {
  const { transactionId } = useParams();
  const [transaction, _setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTransaction();
  }, [transactionId]);

  const loadTransaction = async () => {
    // 실제 구현에서는 tradingService를 통해 거래 정보 로드
    setLoading(false);
  };

  const handleStatusUpdate = async (newStatus) => {
    const result = await tradingService.updateTransactionStatus(transactionId, newStatus);
    if (result.success) {
      await loadTransaction();
    }
  };

  if (loading) return <div>로딩 중...</div>;

  return (
    <Container>
      <StatusCard>
        <h2>거래 진행 상황</h2>
        {steps.map((step, index) => (
          <StatusStep key={step.key}>
            <StepIcon completed={transaction?.status === step.key || index < steps.findIndex(s => s.key === transaction?.status)}>
              {index + 1}
            </StepIcon>
            <StepContent>
              <StepTitle completed={transaction?.status === step.key}>
                {step.title}
              </StepTitle>
              <StepDescription>
                {step.description}
              </StepDescription>
            </StepContent>
            {transaction?.status === step.key && index < steps.length - 1 && (
              <ActionButton onClick={() => handleStatusUpdate(steps[index + 1].key)}>
                다음 단계
              </ActionButton>
            )}
          </StatusStep>
        ))}
      </StatusCard>
    </Container>
  );
};

export default TransactionStatus;