import React, { useContext, useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { ProductContext } from '../store/ProductContext';
import { UserContext } from '../store/UserContext';
import { INSTRUMENT_CATEGORIES, REGIONS } from '../utils/firebase';
import { FaHeart, FaRegHeart, FaEye, FaMapMarkerAlt, FaFilter, FaSort, FaSearch } from 'react-icons/fa';

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const SearchSection = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  will-change: transform;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  margin-left: 8px;
  
  &::placeholder {
    color: #999;
  }
`;

const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: ${props => props.active ? '#ff7e36' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #ff7e36;
    color: ${props => props.active ? 'white' : '#ff7e36'};
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 20px 100px;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  will-change: transform;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  min-height: 120px;
  will-change: transform;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  overflow: hidden;
  flex-shrink: 0;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f5f5f5, #e8e8e8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #ccc;
`;

const LikeButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: ${props => props.liked ? '#ff6b6b' : '#999'};
  
  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const UrgentBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ff4757;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
`;

const ProductInfo = styled.div`
  padding: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #ff7e36;
  margin-bottom: 8px;
`;

const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
`;

const ProductLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ProductStats = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #999;
`;

const EmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const EmptyTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  color: #666;
`;

const EmptyDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const ActionButton = styled.button`
  padding: 12px 24px;
  background: #ff7e36;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #e66b2b;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #ff7e36;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadMoreButton = styled.button`
  width: 100%;
  padding: 16px;
  background: white;
  border: 2px solid #ff7e36;
  color: #ff7e36;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s;
  
  &:hover {
    background: #ff7e36;
    color: white;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  text-align: center;
`;

export default function Home() {
  const {
    products,
    loading,
    error,
    hasMore,
    filters,
    updateFilters,
    searchProducts,
    loadMoreProducts,
    toggleLike,
    incrementViews,
    refreshProducts
  } = useContext(ProductContext);
  
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const [searchInput, setSearchInput] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  const observerRef = useRef();
  const lastProductElementRef = useCallback(node => {
    if (loading || isLoadingMore) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !loading && !isLoadingMore) {
        setIsLoadingMore(true);
        loadMoreProducts().finally(() => setIsLoadingMore(false));
      }
    }, { threshold: 0.1, rootMargin: '50px' });
    if (node) observerRef.current.observe(node);
  }, [loading, hasMore, loadMoreProducts, isLoadingMore]);

  // URL 상태나 성공 메시지 처리
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // 상태 초기화 (뒤로가기 시 메시지 재표시 방지)
      window.history.replaceState({}, document.title);
      
      // 3초 후 메시지 숨김
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  }, [location.state]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchProducts(searchInput.trim());
  };

  const handleFilterChange = (filterType, value) => {
    updateFilters({ [filterType]: value });
  };

  const handleProductClick = (product) => {
    incrementViews(product.id);
    navigate(`/product/${product.id}`);
  };

  const handleLikeClick = async (e, productId) => {
    e.stopPropagation();
    
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      await toggleLike(productId);
    } catch (error) {
      console.error('찜하기 실패:', error);
    }
  };

  const formatPrice = (price) => {
    if (price >= 10000) {
      const man = Math.floor(price / 10000);
      const remainder = price % 10000;
      if (remainder === 0) {
        return `${man}만원`;
      } else {
        return `${man}만 ${remainder.toLocaleString()}원`;
      }
    }
    return `${price.toLocaleString()}원`;
  };

  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return '방금 전';
    
    const now = new Date();
    const time = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const diffInSeconds = Math.floor((now - time) / 1000);
    
    if (diffInSeconds < 60) return '방금 전';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}분 전`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}시간 전`;
    return `${Math.floor(diffInSeconds / 86400)}일 전`;
  };

  return (
    <Container>
      <TopBar />
      
      <SearchSection>
        {successMessage && (
          <SuccessMessage>{successMessage}</SuccessMessage>
        )}
        
        <form onSubmit={handleSearch}>
          <SearchBar>
            <FaSearch color="#999" />
            <SearchInput
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="어떤 악기를 찾고 계신가요?"
            />
          </SearchBar>
        </form>
        
        <FilterRow>
          <FilterButton
            active={filters?.category === ''}
            onClick={() => handleFilterChange('category', '')}
          >
            전체
          </FilterButton>
          {Object.values(INSTRUMENT_CATEGORIES).map(category => (
            <FilterButton
              key={category.id}
              active={filters?.category === category.id}
              onClick={() => handleFilterChange('category', category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
          
          <FilterButton
            active={showFilters}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter />
            필터
          </FilterButton>
        </FilterRow>
        
        {showFilters && (
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '12px', color: '#666', marginBottom: '4px', display: 'block' }}>
                지역
              </label>
              <select
                value={filters?.region || ''}
                onChange={(e) => handleFilterChange('region', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
              >
                <option value="">전체 지역</option>
                {Object.values(REGIONS).map(region => (
                  <option key={region.id} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '12px', color: '#666', marginBottom: '4px', display: 'block' }}>
                  최소 가격
                </label>
                <input
                  type="number"
                  value={filters?.priceMin || ''}
                  onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                  placeholder="최소 가격"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '12px', color: '#666', marginBottom: '4px', display: 'block' }}>
                  최대 가격
                </label>
                <input
                  type="number"
                  value={filters?.priceMax || ''}
                  onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                  placeholder="최대 가격"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>
            
            <div>
              <label style={{ fontSize: '12px', color: '#666', marginBottom: '4px', display: 'block' }}>
                정렬
              </label>
              <select
                value={filters?.sortBy || 'latest'}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
              >
                <option value="latest">최신순</option>
                <option value="price_low">가격 낮은순</option>
                <option value="price_high">가격 높은순</option>
                <option value="popular">인기순</option>
              </select>
            </div>
          </div>
        )}
      </SearchSection>
      
      <ContentContainer>
        {error && (
          <div style={{
            background: '#ffebee',
            color: '#c62828',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            {error}
            <button
              onClick={refreshProducts}
              style={{
                marginLeft: '8px',
                padding: '4px 8px',
                background: '#c62828',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              다시 시도
            </button>
          </div>
        )}
        
        {loading && (!products || products.length === 0) ? (
          <LoadingContainer>
            <LoadingSpinner />
          </LoadingContainer>
        ) : (!products || products.length === 0) ? (
          <EmptyState>
            <EmptyIcon>🎵</EmptyIcon>
            <EmptyTitle>
              {filters?.searchQuery ? 
                `"${filters.searchQuery}"에 대한 검색 결과가 없어요` : 
                '아직 등록된 상품이 없어요'
              }
            </EmptyTitle>
            <EmptyDescription>
              {filters?.searchQuery ? 
                '다른 키워드로 검색해보시거나 필터를 조정해보세요.' :
                '첫 번째 악기를 등록하고 ECHO 커뮤니티를 시작해보세요!'
              }
            </EmptyDescription>
            {!filters?.searchQuery && (
              <ActionButton onClick={() => navigate('/register')}>
                상품 등록하기
              </ActionButton>
            )}
          </EmptyState>
        ) : (
          <>
            <ProductGrid>
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  ref={index === products.length - 1 ? lastProductElementRef : null}
                  onClick={() => handleProductClick(product)}
                >
                  <ProductImageContainer>
                    {product.images && product.images.length > 0 ? (
                      <ProductImage
                        src={product.images[0]}
                        alt={product.title}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : (
                      <ImagePlaceholder>🎵</ImagePlaceholder>
                    )}
                    <ImagePlaceholder style={{ display: 'none' }}>🎵</ImagePlaceholder>
                    
                    {product.isUrgent && <UrgentBadge>급처분</UrgentBadge>}
                    
                    <LikeButton
                      liked={product.isLikedByUser}
                      onClick={(e) => handleLikeClick(e, product.id)}
                    >
                      {product.isLikedByUser ? <FaHeart /> : <FaRegHeart />}
                    </LikeButton>
                  </ProductImageContainer>
                  
                  <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>
                      {formatPrice(product.price)}
                      {product.isPriceNegotiable && (
                        <span style={{ fontSize: '12px', color: '#999', marginLeft: '4px' }}>
                          협상가능
                        </span>
                      )}
                    </ProductPrice>
                    <ProductDetails>
                      <ProductLocation>
                        <FaMapMarkerAlt />
                        {product.fullLocation || product.location || '위치 미상'}
                      </ProductLocation>
                      <ProductStats>
                        <StatItem>
                          <FaEye />
                          {product.viewCount || 0}
                        </StatItem>
                        <StatItem>
                          <FaHeart />
                          {product.likeCount || 0}
                        </StatItem>
                      </ProductStats>
                    </ProductDetails>
                    <div style={{ 
                      fontSize: '11px', 
                      color: '#bbb', 
                      marginTop: '4px',
                      textAlign: 'right'
                    }}>
                      {formatTimeAgo(product.createdAt)}
                    </div>
                  </ProductInfo>
                </ProductCard>
              ))}
            </ProductGrid>
            
            {(loading || isLoadingMore) && products && products.length > 0 && (
              <LoadingContainer>
                <LoadingSpinner />
              </LoadingContainer>
            )}
            
            {!loading && !isLoadingMore && hasMore && (
              <LoadMoreButton 
                onClick={() => {
                  setIsLoadingMore(true);
                  loadMoreProducts().finally(() => setIsLoadingMore(false));
                }}
                disabled={isLoadingMore}
              >
                더 많은 상품 보기
              </LoadMoreButton>
            )}
            
            {!hasMore && products && products.length > 0 && (
              <div style={{
                textAlign: 'center',
                padding: '20px',
                color: '#999',
                fontSize: '14px'
              }}>
                모든 상품을 확인했습니다 🎉
              </div>
            )}
          </>
        )}
      </ContentContainer>
    </Container>
  );
}