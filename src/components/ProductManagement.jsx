import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { designSystem2025 } from '../styles/designSystem2025';
import { FiEdit3, FiTrash2, FiEye, FiEyeOff, FiDollarSign, FiPackage, FiTrendingUp } from 'react-icons/fi';
import { collection, query, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useUser } from '../store/UserContext';
import { toast } from 'react-hot-toast';

const ManagementContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: ${designSystem2025.typography.sizes['3xl']};
  font-weight: ${designSystem2025.typography.weights.bold};
  color: ${designSystem2025.colors.neutral[900]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
`;

const StatCard = styled.div`
  ${designSystem2025.glassmorphism.enhanced}
  padding: 24px;
  border-radius: 16px;
  text-align: center;
`;

const StatIcon = styled.div`
  display: inline-flex;
  padding: 12px;
  border-radius: 12px;
  background: ${props => props.color}20;
  color: ${props => props.color};
  font-size: 24px;
  margin-bottom: 12px;
`;

const StatValue = styled.div`
  font-size: ${designSystem2025.typography.sizes['2xl']};
  font-weight: ${designSystem2025.typography.weights.bold};
  color: ${designSystem2025.colors.neutral[900]};
  margin-bottom: 4px;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const StatLabel = styled.div`
  font-size: ${designSystem2025.typography.sizes.sm};
  color: ${designSystem2025.colors.neutral[600]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const FilterTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding-bottom: 8px;
`;

const FilterTab = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 24px;
  font-size: ${designSystem2025.typography.sizes.sm};
  font-weight: ${designSystem2025.typography.weights.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  ${props => props.active ? `
    background: ${designSystem2025.colors.mint[500]};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${designSystem2025.colors.mint[500]}40;
  ` : `
    ${designSystem2025.glassmorphism.base}
    color: ${designSystem2025.colors.neutral[600]};
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
    }
  `}
  
  [data-theme="dark"] & {
    ${props => !props.active && `
      color: ${designSystem2025.colors.neutral[400]};
    `}
  }
`;

const ProductGrid = styled.div`
  display: grid;
  gap: 20px;
`;

const ProductCard = styled.div`
  ${designSystem2025.glassmorphism.enhanced}
  border-radius: 16px;
  padding: 20px;
  display: flex;
  gap: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  background: ${designSystem2025.colors.neutral[100]};
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const ProductContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProductTitle = styled.h3`
  font-size: ${designSystem2025.typography.sizes.lg};
  font-weight: ${designSystem2025.typography.weights.semibold};
  color: ${designSystem2025.colors.neutral[900]};
  margin: 0;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const ProductPrice = styled.div`
  font-size: ${designSystem2025.typography.sizes.xl};
  font-weight: ${designSystem2025.typography.weights.bold};
  color: ${designSystem2025.colors.mint[600]};
`;

const ProductMeta = styled.div`
  display: flex;
  gap: 16px;
  font-size: ${designSystem2025.typography.sizes.sm};
  color: ${designSystem2025.colors.neutral[600]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const ProductStatus = styled.span`
  padding: 4px 12px;
  border-radius: 12px;
  font-size: ${designSystem2025.typography.sizes.xs};
  font-weight: ${designSystem2025.typography.weights.medium};
  
  ${props => {
    switch(props.status) {
      case 'active':
        return `
          background: ${designSystem2025.colors.success[100]};
          color: ${designSystem2025.colors.success[800]};
        `;
      case 'sold':
        return `
          background: ${designSystem2025.colors.neutral[100]};
          color: ${designSystem2025.colors.neutral[600]};
        `;
      case 'reserved':
        return `
          background: ${designSystem2025.colors.warning[100]};
          color: ${designSystem2025.colors.warning[800]};
        `;
      default:
        return `
          background: ${designSystem2025.colors.neutral[100]};
          color: ${designSystem2025.colors.neutral[600]};
        `;
    }
  }}
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ActionButton = styled.button`
  ${designSystem2025.accessibility.focusRing}
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-size: ${designSystem2025.typography.sizes.sm};
  font-weight: ${designSystem2025.typography.weights.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => {
    switch(props.variant) {
      case 'edit':
        return `
          background: ${designSystem2025.colors.blue[100]};
          color: ${designSystem2025.colors.blue[700]};
          &:hover {
            background: ${designSystem2025.colors.blue[200]};
            transform: translateY(-1px);
          }
        `;
      case 'delete':
        return `
          background: ${designSystem2025.colors.red[100]};
          color: ${designSystem2025.colors.red[700]};
          &:hover {
            background: ${designSystem2025.colors.red[200]};
            transform: translateY(-1px);
          }
        `;
      case 'toggle':
        return `
          background: ${designSystem2025.colors.warning[100]};
          color: ${designSystem2025.colors.warning[700]};
          &:hover {
            background: ${designSystem2025.colors.warning[200]};
            transform: translateY(-1px);
          }
        `;
      default:
        return `
          ${designSystem2025.glassmorphism.base}
          color: ${designSystem2025.colors.neutral[600]};
          &:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `;
    }
  }}
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 64px 24px;
  color: ${designSystem2025.colors.neutral[600]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const EmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
`;

const statusLabels = {
  active: '판매중',
  sold: '판매완료',
  reserved: '예약중',
  deleted: '삭제됨'
};

const statusFilters = [
  { key: 'all', label: '전체' },
  { key: 'active', label: '판매중' },
  { key: 'sold', label: '판매완료' },
  { key: 'reserved', label: '예약중' }
];

const ProductManagement = () => {
  const { user } = useUser();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    sold: 0,
    totalViews: 0
  });

  // 내 상품 목록 불러오기
  useEffect(() => {
    const fetchMyProducts = async () => {
      if (!user?.uid) return;

      try {
        const q = query(
          collection(db, 'products'),
          where('sellerId', '==', user.uid)
        );
        
        const querySnapshot = await getDocs(q);
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProducts(productsList);
        calculateStats(productsList);
      } catch (error) {
        console.error('상품 목록 조회 실패:', error);
        toast.error('상품 목록을 불러오는데 실패했습니다');
      } finally {
        setLoading(false);
      }
    };

    fetchMyProducts();
  }, [user]);

  // 필터 적용
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.status === activeFilter));
    }
  }, [products, activeFilter]);

  // 통계 계산
  const calculateStats = (productsList) => {
    const stats = {
      total: productsList.length,
      active: productsList.filter(p => p.status === 'active').length,
      sold: productsList.filter(p => p.status === 'sold').length,
      totalViews: productsList.reduce((sum, p) => sum + (p.views || 0), 0)
    };
    setStats(stats);
  };

  // 상품 상태 변경
  const handleStatusChange = async (productId, newStatus) => {
    try {
      const productRef = doc(db, 'products', productId);
      await updateDoc(productRef, { status: newStatus });
      
      // 로컬 상태 업데이트
      const updatedProducts = products.map(product =>
        product.id === productId ? { ...product, status: newStatus } : product
      );
      setProducts(updatedProducts);
      calculateStats(updatedProducts);
      
      toast.success(`상품이 ${statusLabels[newStatus]}(으)로 변경되었습니다`);
    } catch (error) {
      console.error('상품 상태 변경 실패:', error);
      toast.error('상품 상태 변경에 실패했습니다');
    }
  };

  // 상품 삭제
  const handleDelete = async (productId) => {
    if (!confirm('정말로 이 상품을 삭제하시겠습니까?')) return;

    try {
      const productRef = doc(db, 'products', productId);
      await deleteDoc(productRef);
      
      const updatedProducts = products.filter(product => product.id !== productId);
      setProducts(updatedProducts);
      calculateStats(updatedProducts);
      
      toast.success('상품이 삭제되었습니다');
    } catch (error) {
      console.error('상품 삭제 실패:', error);
      toast.error('상품 삭제에 실패했습니다');
    }
  };

  // 상품 수정 (다른 페이지로 이동)
  const handleEdit = (productId) => {
    window.location.href = `/product-edit/${productId}`;
  };

  if (loading) {
    return (
      <ManagementContainer>
        <div style={{ textAlign: 'center', padding: '64px' }}>
          상품 목록을 불러오는 중...
        </div>
      </ManagementContainer>
    );
  }

  return (
    <ManagementContainer>
      <Header>
        <Title>내 상품 관리</Title>
      </Header>

      {/* 통계 */}
      <StatsGrid>
        <StatCard>
          <StatIcon color={designSystem2025.colors.blue[500]}>
            <FiPackage />
          </StatIcon>
          <StatValue>{stats.total}</StatValue>
          <StatLabel>총 등록 상품</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatIcon color={designSystem2025.colors.success[500]}>
            <FiDollarSign />
          </StatIcon>
          <StatValue>{stats.active}</StatValue>
          <StatLabel>판매중</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatIcon color={designSystem2025.colors.neutral[500]}>
            <FiEye />
          </StatIcon>
          <StatValue>{stats.sold}</StatValue>
          <StatLabel>판매완료</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatIcon color={designSystem2025.colors.mint[500]}>
            <FiTrendingUp />
          </StatIcon>
          <StatValue>{stats.totalViews}</StatValue>
          <StatLabel>총 조회수</StatLabel>
        </StatCard>
      </StatsGrid>

      {/* 필터 탭 */}
      <FilterTabs>
        {statusFilters.map(filter => (
          <FilterTab
            key={filter.key}
            active={activeFilter === filter.key}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </FilterTab>
        ))}
      </FilterTabs>

      {/* 상품 목록 */}
      {filteredProducts.length === 0 ? (
        <EmptyState>
          <EmptyIcon>📦</EmptyIcon>
          <div style={{ fontSize: '18px', marginBottom: '8px' }}>
            {activeFilter === 'all' ? '등록된 상품이 없습니다' : `${statusFilters.find(f => f.key === activeFilter)?.label} 상품이 없습니다`}
          </div>
          <div>첫 상품을 등록해보세요!</div>
        </EmptyState>
      ) : (
        <ProductGrid>
          {filteredProducts.map(product => (
            <ProductCard key={product.id}>
              <ProductImage 
                src={product.images?.[0] || '/placeholder-image.jpg'}
                alt={product.title}
              />
              
              <ProductContent>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.price?.toLocaleString()}원</ProductPrice>
                
                <ProductMeta>
                  <span>조회 {product.viewCount || 0}회</span>
                  <span>찜 {product.likeCount || 0}개</span>
                  <ProductStatus status={product.status}>
                    {statusLabels[product.status]}
                  </ProductStatus>
                </ProductMeta>
                
                <ActionButtons>
                  <ActionButton variant="edit" onClick={() => handleEdit(product.id)}>
                    <FiEdit3 />
                    수정
                  </ActionButton>
                  
                  {product.status === 'active' ? (
                    <ActionButton 
                      variant="toggle" 
                      onClick={() => handleStatusChange(product.id, 'reserved')}
                    >
                      <FiEyeOff />
                      예약중으로
                    </ActionButton>
                  ) : product.status === 'reserved' ? (
                    <ActionButton 
                      variant="toggle" 
                      onClick={() => handleStatusChange(product.id, 'active')}
                    >
                      <FiEye />
                      판매중으로
                    </ActionButton>
                  ) : null}
                  
                  {product.status !== 'sold' && (
                    <ActionButton 
                      variant="toggle" 
                      onClick={() => handleStatusChange(product.id, 'sold')}
                    >
                      판매완료
                    </ActionButton>
                  )}
                  
                  <ActionButton variant="delete" onClick={() => handleDelete(product.id)}>
                    <FiTrash2 />
                    삭제
                  </ActionButton>
                </ActionButtons>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductGrid>
      )}
    </ManagementContainer>
  );
};

export default ProductManagement;