import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import PageErrorBoundary from "../components/PageErrorBoundary";
import { useToast } from "../store/ToastContext";
import { 
  transactionService, 
  TRANSACTION_STATUS, 
  TRANSACTION_STATUS_LABELS 
} from "../utils/transactionService";
import {
  FaArrowLeft,
  FaBox,
  FaTruck,
  FaCheckCircle,
  FaClock,
  FaTimes,
  FaExclamationTriangle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCopy,
  FaExternalLinkAlt,
  FaStar,
  FaShoppingCart,
  FaReceipt,
  FaShippingFast
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 500px;
  background: var(--color-bg-primary);
  min-height: 100vh;
  position: relative;
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 500px) {
    box-shadow: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #333;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Content = styled.div`
  padding: 20px;
`;

const StatusCard = styled.div`
  background: linear-gradient(135deg, 
    rgba(46, 216, 182, 0.1) 0%, 
    rgba(46, 216, 182, 0.05) 100%);
  border: 1px solid rgba(46, 216, 182, 0.2);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const StatusIcon = styled.div`
  font-size: 48px;
  color: ${props => {
    switch(props.status) {
      case TRANSACTION_STATUS.COMPLETED: return '#4caf50';
      case TRANSACTION_STATUS.CANCELLED: return '#f44336';
      case TRANSACTION_STATUS.DISPUTED: return '#ff9800';
      case TRANSACTION_STATUS.SHIPPED: return '#2196f3';
      case TRANSACTION_STATUS.PAID: return '#9c27b0';
      default: return '#2ed8b6';
    }
  }};
  margin-bottom: 12px;
`;

const StatusText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const StatusDescription = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    height: 2px;
    background: #e0e0e0;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: ${props => props.progress}%;
    height: 2px;
    background: #2ed8b6;
    z-index: 2;
    transition: width 0.5s ease;
  }
`;

const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  z-index: 3;
  position: relative;
`;

const StepIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.active ? '#2ed8b6' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : '#999'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
`;

const StepLabel = styled.div`
  font-size: 11px;
  color: ${props => props.active ? '#2ed8b6' : '#999'};
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-weight: 600;
  color: #333;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

const InfoValue = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 500;
  text-align: right;
  max-width: 60%;
  word-break: break-word;
`;

const ProductCard = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
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
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 4px;
`;

const ProductCondition = styled.div`
  font-size: 12px;
  color: #666;
  background: #e8f5e8;
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-block;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 14px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  
  &.primary {
    background: #2ed8b6;
    color: white;
    
    &:hover {
      background: #25b89a;
    }
  }
  
  &.secondary {
    background: #f5f5f5;
    color: #666;
    
    &:hover {
      background: #e0e0e0;
    }
  }
  
  &.danger {
    background: #f44336;
    color: white;
    
    &:hover {
      background: #da190b;
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const HistoryCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const HistoryItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const HistoryIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
  flex-shrink: 0;
`;

const HistoryContent = styled.div`
  flex: 1;
`;

const HistoryStatus = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const HistoryNote = styled.div`
  font-size: 13px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 4px;
`;

const HistoryTime = styled.div`
  font-size: 12px;
  color: #999;
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  color: #2ed8b6;
  cursor: pointer;
  font-size: 12px;
  padding: 2px;
  margin-left: 4px;
  
  &:hover {
    color: #25b89a;
  }
`;

const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  
  svg {
    animation: spin 1s linear infinite;
    margin-bottom: 16px;
    color: #2ed8b6;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export default function TransactionDetail() {
  const navigate = useNavigate();
  const { id: transactionId } = useParams();
  const { showSuccess, showError } = useToast();
  
  // Context 에러 처리
  let user;
  try {
    const context = useContext(UserContext);
    user = context?.user || { isLoggedIn: false, loading: false };
  } catch (error) {
    console.error('UserContext 연결 실패:', error);
    user = { isLoggedIn: false, loading: false };
  }
  
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.isLoggedIn) {
      navigate('/login');
      return;
    }
    
    loadTransaction();
  }, [transactionId, user]);

  const loadTransaction = async () => {
    try {
      setLoading(true);
      const data = await transactionService.getTransaction(transactionId);
      
      // 권한 확인 (판매자 또는 구매자만 조회 가능)
      if (data.sellerId !== user.uid && data.buyerId !== user.uid) {
        showError('접근 권한이 없습니다.');
        navigate('/');
        return;
      }
      
      setTransaction(data);
    } catch (error) {
      console.error('거래 조회 실패:', error);
      showError('거래 정보를 불러올 수 없습니다.');
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmDelivery = async () => {
    try {
      await transactionService.confirmTransaction(transactionId, user.uid);
      showSuccess('거래가 완료되었습니다!');
      loadTransaction();
    } catch (error) {
      showError(error.message);
    }
  };

  const handleCancelTransaction = async () => {
    const reason = prompt('취소 사유를 입력해주세요:');
    if (!reason) return;
    
    try {
      await transactionService.cancelTransaction(transactionId, reason, user.uid);
      showSuccess('거래가 취소되었습니다.');
      loadTransaction();
    } catch (error) {
      showError(error.message);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showSuccess('복사되었습니다');
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case TRANSACTION_STATUS.PENDING: return <FaClock />;
      case TRANSACTION_STATUS.PAYMENT_PENDING: return <FaReceipt />;
      case TRANSACTION_STATUS.PAID: return <FaCheckCircle />;
      case TRANSACTION_STATUS.SHIPPED: return <FaTruck />;
      case TRANSACTION_STATUS.DELIVERED: return <FaBox />;
      case TRANSACTION_STATUS.COMPLETED: return <FaCheckCircle />;
      case TRANSACTION_STATUS.CANCELLED: return <FaTimes />;
      case TRANSACTION_STATUS.DISPUTED: return <FaExclamationTriangle />;
      default: return <FaClock />;
    }
  };

  const getProgressPercent = (status) => {
    const steps = [
      TRANSACTION_STATUS.PENDING,
      TRANSACTION_STATUS.PAID,
      TRANSACTION_STATUS.SHIPPED,
      TRANSACTION_STATUS.DELIVERED,
      TRANSACTION_STATUS.COMPLETED
    ];
    const currentIndex = steps.indexOf(status);
    return currentIndex >= 0 ? ((currentIndex + 1) / steps.length) * 100 : 0;
  };

  const isStepActive = (stepStatus, currentStatus) => {
    const steps = [
      TRANSACTION_STATUS.PENDING,
      TRANSACTION_STATUS.PAID,
      TRANSACTION_STATUS.SHIPPED,
      TRANSACTION_STATUS.DELIVERED,
      TRANSACTION_STATUS.COMPLETED
    ];
    return steps.indexOf(currentStatus) >= steps.indexOf(stepStatus);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '-';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString('ko-KR');
  };

  const getUserRole = () => {
    if (!transaction || !user) return '';
    return transaction.sellerId === user.uid ? 'seller' : 'buyer';
  };

  if (loading) {
    return (
      <Container>
        <Inner>
          <Header>
            <BackButton onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </BackButton>
            <HeaderTitle>거래 내역</HeaderTitle>
            <div></div>
          </Header>
          <LoadingState>
            <FaClock size={32} />
            <p>거래 정보를 불러오는 중...</p>
          </LoadingState>
        </Inner>
      </Container>
    );
  }

  if (!transaction) {
    return null;
  }

  const userRole = getUserRole();
  const canConfirm = userRole === 'buyer' && transaction.status === TRANSACTION_STATUS.DELIVERED;
  const canCancel = [TRANSACTION_STATUS.PENDING, TRANSACTION_STATUS.PAYMENT_PENDING].includes(transaction.status);

  return (
    <PageErrorBoundary>
      <Container>
      <Inner>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </BackButton>
          <HeaderTitle>거래 #{transaction.id.slice(-6)}</HeaderTitle>
          <div></div>
        </Header>

        <Content>
          {/* 현재 상태 */}
          <StatusCard>
            <StatusIcon status={transaction.status}>
              {getStatusIcon(transaction.status)}
            </StatusIcon>
            <StatusText>
              {TRANSACTION_STATUS_LABELS[transaction.status]}
            </StatusText>
            <StatusDescription>
              {transaction.status === TRANSACTION_STATUS.PENDING && '판매자가 거래를 확인하면 결제를 진행합니다.'}
              {transaction.status === TRANSACTION_STATUS.PAYMENT_PENDING && '결제를 완료해주세요.'}
              {transaction.status === TRANSACTION_STATUS.PAID && '결제가 완료되었습니다. 배송을 기다려주세요.'}
              {transaction.status === TRANSACTION_STATUS.SHIPPED && '상품이 배송 중입니다.'}
              {transaction.status === TRANSACTION_STATUS.DELIVERED && '배송이 완료되었습니다. 상품을 확인해주세요.'}
              {transaction.status === TRANSACTION_STATUS.COMPLETED && '거래가 성공적으로 완료되었습니다.'}
              {transaction.status === TRANSACTION_STATUS.CANCELLED && '거래가 취소되었습니다.'}
            </StatusDescription>
          </StatusCard>

          {/* 진행 상황 */}
          {![TRANSACTION_STATUS.CANCELLED, TRANSACTION_STATUS.DISPUTED].includes(transaction.status) && (
            <ProgressBar progress={getProgressPercent(transaction.status)}>
              <ProgressStep>
                <StepIcon active={isStepActive(TRANSACTION_STATUS.PENDING, transaction.status)}>
                  <FaShoppingCart />
                </StepIcon>
                <StepLabel active={isStepActive(TRANSACTION_STATUS.PENDING, transaction.status)}>
                  주문
                </StepLabel>
              </ProgressStep>
              
              <ProgressStep>
                <StepIcon active={isStepActive(TRANSACTION_STATUS.PAID, transaction.status)}>
                  <FaReceipt />
                </StepIcon>
                <StepLabel active={isStepActive(TRANSACTION_STATUS.PAID, transaction.status)}>
                  결제
                </StepLabel>
              </ProgressStep>
              
              <ProgressStep>
                <StepIcon active={isStepActive(TRANSACTION_STATUS.SHIPPED, transaction.status)}>
                  <FaShippingFast />
                </StepIcon>
                <StepLabel active={isStepActive(TRANSACTION_STATUS.SHIPPED, transaction.status)}>
                  배송
                </StepLabel>
              </ProgressStep>
              
              <ProgressStep>
                <StepIcon active={isStepActive(TRANSACTION_STATUS.COMPLETED, transaction.status)}>
                  <FaCheckCircle />
                </StepIcon>
                <StepLabel active={isStepActive(TRANSACTION_STATUS.COMPLETED, transaction.status)}>
                  완료
                </StepLabel>
              </ProgressStep>
            </ProgressBar>
          )}

          {/* 상품 정보 */}
          <ProductCard>
            {transaction.productSnapshot.images?.[0] && (
              <ProductImage 
                src={transaction.productSnapshot.images[0]} 
                alt={transaction.productSnapshot.title}
              />
            )}
            <ProductInfo>
              <ProductTitle>{transaction.productSnapshot.title}</ProductTitle>
              <ProductPrice>₩{formatPrice(transaction.productSnapshot.price)}</ProductPrice>
              <ProductCondition>{transaction.productSnapshot.condition}</ProductCondition>
            </ProductInfo>
          </ProductCard>

          {/* 거래 정보 */}
          <InfoCard>
            <InfoHeader>
              <FaReceipt />
              거래 정보
            </InfoHeader>
            <InfoRow>
              <InfoLabel>거래 번호</InfoLabel>
              <InfoValue>
                #{transaction.id.slice(-8)}
                <CopyButton onClick={() => copyToClipboard(transaction.id)}>
                  <FaCopy />
                </CopyButton>
              </InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>거래 금액</InfoLabel>
              <InfoValue>₩{formatPrice(transaction.totalAmount)}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>배송 방법</InfoLabel>
              <InfoValue>
                {transaction.shippingMethod === 'direct' ? '직거래' : '택배거래'}
              </InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>거래 시작</InfoLabel>
              <InfoValue>{formatDate(transaction.createdAt)}</InfoValue>
            </InfoRow>
            {transaction.completedAt && (
              <InfoRow>
                <InfoLabel>완료 시간</InfoLabel>
                <InfoValue>{formatDate(transaction.completedAt)}</InfoValue>
              </InfoRow>
            )}
          </InfoCard>

          {/* 배송 정보 */}
          {transaction.shippingMethod === 'delivery' && (
            <InfoCard>
              <InfoHeader>
                <FaTruck />
                배송 정보
              </InfoHeader>
              {transaction.trackingNumber ? (
                <>
                  <InfoRow>
                    <InfoLabel>택배사</InfoLabel>
                    <InfoValue>{transaction.shippingCompany || '택배사'}</InfoValue>
                  </InfoRow>
                  <InfoRow>
                    <InfoLabel>운송장번호</InfoLabel>
                    <InfoValue>
                      {transaction.trackingNumber}
                      <CopyButton onClick={() => copyToClipboard(transaction.trackingNumber)}>
                        <FaCopy />
                      </CopyButton>
                    </InfoValue>
                  </InfoRow>
                  {transaction.estimatedDelivery && (
                    <InfoRow>
                      <InfoLabel>예상 배송일</InfoLabel>
                      <InfoValue>{formatDate(transaction.estimatedDelivery)}</InfoValue>
                    </InfoRow>
                  )}
                </>
              ) : (
                <InfoRow>
                  <InfoLabel>상태</InfoLabel>
                  <InfoValue>배송 준비중</InfoValue>
                </InfoRow>
              )}
            </InfoCard>
          )}

          {/* 거래 이력 */}
          <HistoryCard>
            <InfoHeader>
              <FaClock />
              거래 이력
            </InfoHeader>
            {transaction.statusHistory?.map((history, index) => (
              <HistoryItem key={index}>
                <HistoryIcon>
                  {getStatusIcon(history.status)}
                </HistoryIcon>
                <HistoryContent>
                  <HistoryStatus>
                    {TRANSACTION_STATUS_LABELS[history.status]}
                  </HistoryStatus>
                  {history.note && (
                    <HistoryNote>{history.note}</HistoryNote>
                  )}
                  <HistoryTime>
                    {formatDate(history.timestamp)}
                  </HistoryTime>
                </HistoryContent>
              </HistoryItem>
            ))}
          </HistoryCard>

          {/* 액션 버튼 */}
          <ActionButtons>
            {canConfirm && (
              <ActionButton className="primary" onClick={handleConfirmDelivery}>
                <FaCheckCircle />
                거래 완료 확인
              </ActionButton>
            )}
            
            {canCancel && (
              <ActionButton className="danger" onClick={handleCancelTransaction}>
                <FaTimes />
                거래 취소
              </ActionButton>
            )}
            
            <ActionButton 
              className="secondary" 
              onClick={() => navigate(`/product/${transaction.productId}`)}
            >
              <FaExternalLinkAlt />
              상품 보기
            </ActionButton>
          </ActionButtons>
        </Content>
      </Inner>
      </Container>
    </PageErrorBoundary>
  );
}