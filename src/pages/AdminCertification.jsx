import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../store/ProductContext";
import { UserContext } from "../store/UserContext";
import PageErrorBoundary from "../components/PageErrorBoundary";
import { useToast } from "../store/ToastContext";
import { 
  FaArrowLeft, 
  FaCheck, 
  FaTimes, 
  FaClock, 
  FaCheckCircle,
  FaExclamationTriangle,
  FaSearch,
  FaFilter,
  FaEye
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

const FilterSection = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #2ed8b6;
    border-radius: 2px;
  }
`;

const FilterChip = styled.button`
  padding: 8px 16px;
  border: 1px solid ${props => props.active ? '#2ed8b6' : '#e0e0e0'};
  border-radius: 20px;
  background: ${props => props.active ? '#2ed8b6' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #2ed8b6;
    color: ${props => props.active ? 'white' : '#2ed8b6'};
  }
`;

const RequestCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`;

const RequestHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
  line-height: 1.3;
`;

const ProductMeta = styled.div`
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const StatusBadge = styled.div`
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: ${props => {
    switch(props.status) {
      case 'pending': return '#fff3e0';
      case 'approved': return '#e8f5e8';
      case 'rejected': return '#ffebee';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'pending': return '#ff8c00';
      case 'approved': return '#4caf50';
      case 'rejected': return '#f44336';
      default: return '#666';
    }
  }};
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 8px;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  margin-left: 12px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 10px 16px;
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
  
  &.approve {
    background: #4caf50;
    color: white;
    
    &:hover {
      background: #45a049;
    }
  }
  
  &.reject {
    background: #f44336;
    color: white;
    
    &:hover {
      background: #da190b;
    }
  }
  
  &.view {
    background: #f5f5f5;
    color: #666;
    
    &:hover {
      background: #e0e0e0;
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  color: #666;
  
  svg {
    margin-bottom: 16px;
    opacity: 0.5;
  }
  
  h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
  }
  
  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
  }
`;

const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  color: #666;
  
  svg {
    animation: spin 1s linear infinite;
    margin-bottom: 16px;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export default function AdminCertification() {
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();
  
  // Context 에러 처리
  // useContext는 항상 최상위에서 호출
  const productContext = useContext(ProductContext);
  const userContext = useContext(UserContext);
  
  // Context 데이터 안전 처리
  const products = productContext?.products || [];
  const updateProductCertification = productContext?.updateProductCertification || (() => Promise.reject(new Error('상품 서비스에 연결할 수 없습니다')));
  const user = userContext?.user || { isLoggedIn: false, loading: false };
  
  const [filter, setFilter] = useState('pending');
  const [loading, setLoading] = useState(false);

  // 관리자 권한 확인 (임시로 특정 이메일 확인)
  const isAdmin = user?.email === 'admin@echo.com' || user?.isAdmin;

  useEffect(() => {
    if (!user?.isLoggedIn) {
      navigate('/login');
      return;
    }
    
    if (!isAdmin) {
      showError('관리자 권한이 필요합니다.');
      navigate('/');
      return;
    }
  }, [user, isAdmin, navigate, showError]);

  // 인증 요청 상품 필터링
  const certificationRequests = products.filter(product => {
    if (!product.certificationRequested) return false;
    
    switch(filter) {
      case 'pending':
        return product.certificationStatus === 'pending';
      case 'approved':
        return product.certificationStatus === 'approved';
      case 'rejected':
        return product.certificationStatus === 'rejected';
      case 'all':
        return true;
      default:
        return true;
    }
  });

  const handleApprove = async (productId) => {
    setLoading(true);
    try {
      await updateProductCertification(productId, 'approved');
      showSuccess('인증을 승인했습니다.');
    } catch (error) {
      console.error('인증 승인 실패:', error);
      showError('인증 승인에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async (productId) => {
    setLoading(true);
    try {
      await updateProductCertification(productId, 'rejected');
      showSuccess('인증을 거부했습니다.');
    } catch (error) {
      console.error('인증 거부 실패:', error);
      showError('인증 거부에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <PageErrorBoundary>
      <Container>
      <Inner>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </BackButton>
          <HeaderTitle>악기 인증 관리</HeaderTitle>
          <div></div>
        </Header>

        <Content>
          <FilterSection>
            <FilterChip 
              active={filter === 'pending'}
              onClick={() => setFilter('pending')}
            >
              <FaClock />
              대기중
            </FilterChip>
            <FilterChip 
              active={filter === 'approved'}
              onClick={() => setFilter('approved')}
            >
              <FaCheckCircle />
              승인됨
            </FilterChip>
            <FilterChip 
              active={filter === 'rejected'}
              onClick={() => setFilter('rejected')}
            >
              <FaTimes />
              거부됨
            </FilterChip>
            <FilterChip 
              active={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              <FaFilter />
              전체
            </FilterChip>
          </FilterSection>

          {loading && (
            <LoadingState>
              <FaClock size={32} />
              <p>처리 중...</p>
            </LoadingState>
          )}

          {certificationRequests.length === 0 ? (
            <EmptyState>
              <FaSearch size={48} />
              <h3>
                {filter === 'pending' && '대기중인 인증 요청이 없습니다'}
                {filter === 'approved' && '승인된 인증이 없습니다'}
                {filter === 'rejected' && '거부된 인증이 없습니다'}
                {filter === 'all' && '인증 요청이 없습니다'}
              </h3>
              <p>새로운 인증 요청이 있으면 여기에 표시됩니다.</p>
            </EmptyState>
          ) : (
            certificationRequests.map((product) => (
              <RequestCard key={product.id}>
                <RequestHeader>
                  <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductMeta>
                      <span>{product.sellerNickname || '익명'}</span>
                      <span>•</span>
                      <span>{formatDate(product.createdAt)}</span>
                      <StatusBadge status={product.certificationStatus}>
                        {product.certificationStatus === 'pending' && <><FaClock /> 검토중</>}
                        {product.certificationStatus === 'approved' && <><FaCheckCircle /> 승인됨</>}
                        {product.certificationStatus === 'rejected' && <><FaTimes /> 거부됨</>}
                      </StatusBadge>
                    </ProductMeta>
                    <ProductPrice>₩{formatPrice(product.price)}</ProductPrice>
                  </ProductInfo>
                  {product.images?.[0] && (
                    <ProductImage 
                      src={product.images[0]} 
                      alt={product.title}
                    />
                  )}
                </RequestHeader>

                <ActionButtons>
                  <ActionButton 
                    className="view"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <FaEye />
                    상품 보기
                  </ActionButton>
                  
                  {product.certificationStatus === 'pending' && (
                    <>
                      <ActionButton 
                        className="approve"
                        onClick={() => handleApprove(product.id)}
                        disabled={loading}
                      >
                        <FaCheck />
                        승인
                      </ActionButton>
                      <ActionButton 
                        className="reject"
                        onClick={() => handleReject(product.id)}
                        disabled={loading}
                      >
                        <FaTimes />
                        거부
                      </ActionButton>
                    </>
                  )}
                </ActionButtons>
              </RequestCard>
            ))
          )}
        </Content>
      </Inner>
      </Container>
    </PageErrorBoundary>
  );
}