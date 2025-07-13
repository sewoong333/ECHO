import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import { ProductContext } from "../store/ProductContext";
import { UserContext } from "../store/UserContext";
import { INSTRUMENT_CATEGORIES, REGIONS } from "../utils/firebase";
import {
  FaHeart,
  FaRegHeart,
  FaEye,
  FaMapMarkerAlt,
  FaFilter,
  FaSort,
  FaSearch,
  FaPlus,
  FaTimes,
  FaChevronDown,
  FaCog,
  FaDollarSign,
  FaCalendar,
  FaStar,
  FaComments,
  FaFireAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const SearchSection = styled.div`
  width: 100%;
  max-width: 500px;
  background: var(--color-bg-primary);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--color-border-light);
  padding: var(--space-lg) var(--space-xl) var(--space-sm);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-sm);
`;

const SearchBarContainer = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-bg-secondary);
  border: 2px solid ${props => props.focused ? 'var(--color-mint-main)' : 'var(--color-border-light)'};
  border-radius: var(--radius-xl);
  padding: var(--space-md) var(--space-lg);
  transition: all var(--transition-fast);
  box-shadow: ${props => props.focused ? '0 0 0 3px rgba(0, 217, 182, 0.1)' : 'var(--shadow-sm)'};
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 1rem;
  margin-left: var(--space-sm);
  color: var(--color-text-primary);
  font-weight: 500;

  &::placeholder {
    color: var(--color-text-tertiary);
  }
`;

const SearchSuggestions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 101;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
`;

const SuggestionItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #f5f5f5;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const RecentSearches = styled.div`
  margin-bottom: 16px;
`;

const RecentTitle = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecentTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const RecentTag = styled.div`
  background: #f0f0f0;
  color: #666;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterChip = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: 1px solid ${props => props.active ? 'var(--color-mint-main)' : '#e0e0e0'};
  border-radius: 16px;
  background: ${props => props.active ? 'var(--color-mint-main)' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  min-width: fit-content;

  &:hover {
    border-color: var(--color-mint-main);
    color: ${props => props.active ? 'white' : 'var(--color-mint-main)'};
  }
`;

const FilterModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const FilterContent = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 20px 20px 0 0;
  max-height: 80vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
  
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: white;
`;

const FilterTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const FilterCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 4px;
`;

const FilterBody = styled.div`
  padding: 20px;
`;

const FilterGroup = styled.div`
  margin-bottom: 24px;
`;

const FilterGroupTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const FilterOption = styled.button`
  padding: 8px 16px;
  border: 1px solid ${props => props.selected ? 'var(--color-mint-main)' : '#e0e0e0'};
  border-radius: 20px;
  background: ${props => props.selected ? '#fff5f2' : 'white'};
  color: ${props => props.selected ? 'var(--color-mint-main)' : '#666'};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: var(--color-mint-main);
  }
`;

const PriceRange = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`;

const PriceInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: var(--color-mint-main);
  }
`;

const SortSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
`;

const ResultCount = styled.div`
  font-size: 14px;
  color: #666;
`;

const SortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 6px 12px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
  
  &:hover {
    border-color: var(--color-mint-main);
    color: var(--color-mint-main);
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  position: relative;
`;

const ProductGrid = styled.div`
  padding: 0 20px 120px;
`;

const ProductCard = styled.div`
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #fafafa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 12px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 24px;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0 0 4px 0;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ProductMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const ProductActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductStats = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #999;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.liked ? 'var(--color-mint-main)' : '#ccc'};
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    color: var(--color-mint-main);
  }
`;

const StatusBadge = styled.div`
  background: ${props => {
    switch(props.type) {
      case 'urgent': return 'var(--color-mint-accent)';
      case 'new': return 'var(--color-mint-light)';
      case 'hot': return 'var(--color-mint-main)';
      default: return 'var(--color-mint-light)';
    }
  }};
  color: white;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  margin-right: 4px;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl);
  gap: var(--space-lg);
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-border-light);
  border-top: 3px solid var(--color-mint-main);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 500;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl) var(--space-xl);
  text-align: center;
  gap: var(--space-lg);
  
  h3 {
    color: var(--color-text-secondary);
    font-size: 1.125rem;
    margin: 0;
  }
  
  p {
    color: var(--color-text-tertiary);
    font-size: 0.875rem;
    margin: 0;
  }
  
  svg {
    color: var(--color-text-tertiary);
    opacity: 0.5;
  }
`;

const FAB = styled.button`
  position: fixed;
  bottom: 80px; /* 하단 네비게이션 바(64px) + 여백(16px) */
  right: calc(50vw - 250px + 5px); /* 리스트 섹션(500px) 우측 끝에서 5px 안쪽 */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-mint-main) 0%, var(--color-mint-dark) 100%);
  border: none;
  color: var(--color-text-inverse);
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: var(--shadow-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60; /* 하단 네비게이션보다 위 */
  transition: all var(--transition-normal);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
    z-index: -1;
    transition: all var(--transition-normal);
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.08);
    box-shadow: 0 20px 40px rgba(0, 217, 182, 0.4);
    
    &::before {
      transform: scale(1.15);
      opacity: 0.8;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.04);
    box-shadow: var(--shadow-lg);
  }
  
  &:focus-visible {
    outline: 3px solid rgba(0, 217, 182, 0.3);
    outline-offset: 3px;
  }
  
  /* 모바일에서는 화면 우측 기준으로 */
  @media (max-width: 500px) {
    right: var(--space-lg);
    bottom: 75px;
  }
`;

export default function Home() {
  const navigate = useNavigate();
  const { 
    products, 
    loading, 
    hasMore, 
    filters, 
    updateFilters, 
    searchProducts, 
    loadMoreProducts,
    toggleLike,
    INSTRUMENT_CATEGORIES,
  } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState(filters);
  const [sortBy, setSortBy] = useState('latest');
  
  const searchInputRef = useRef(null);
  const observerRef = useRef(null);

  // 최근 검색어 로드
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // 검색 제안 생성
  useEffect(() => {
    if (searchValue.length > 0) {
      const suggestions = [];
      
      // 카테고리 매칭
      Object.values(INSTRUMENT_CATEGORIES).forEach(category => {
        if (category.name.toLowerCase().includes(searchValue.toLowerCase())) {
          suggestions.push({
            type: 'category',
            text: category.name,
            value: category.id,
          });
        }
      });
      
      // 상품 제목 매칭
      products.forEach(product => {
        if (product.title.toLowerCase().includes(searchValue.toLowerCase()) && 
            suggestions.length < 5) {
          suggestions.push({
            type: 'product',
            text: product.title,
            value: product.title,
          });
        }
      });
      
      setSearchSuggestions(suggestions);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchValue, products, INSTRUMENT_CATEGORIES]);

  // 무한 스크롤
  useEffect(() => {
    if (observerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore && !loading) {
            loadMoreProducts();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(observerRef.current);
      return () => observer.disconnect();
    }
  }, [hasMore, loading, loadMoreProducts]);

  const handleSearch = useCallback((query) => {
    if (query.trim()) {
      // 최근 검색어에 추가
      const newRecentSearches = [
        query,
        ...recentSearches.filter(item => item !== query)
      ].slice(0, 10);
      
      setRecentSearches(newRecentSearches);
      localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
      
      searchProducts(query);
      setSearchValue(query);
      setSearchFocused(false);
    }
  }, [recentSearches, searchProducts]);

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.type === 'category') {
      updateFilters({ category: suggestion.value, searchQuery: '' });
      setSearchValue('');
    } else {
      handleSearch(suggestion.text);
    }
    setSearchFocused(false);
  };

  const handleFilterApply = () => {
    updateFilters(tempFilters);
    setIsFilterModalOpen(false);
  };

  const handleFilterReset = () => {
    const resetFilters = {
      category: '',
      region: '',
      priceMin: '',
      priceMax: '',
      condition: '',
      sortBy: 'latest',
      searchQuery: '',
    };
    setTempFilters(resetFilters);
    updateFilters(resetFilters);
    setIsFilterModalOpen(false);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const formatPrice = (price) => {
    if (price >= 10000) {
      return `${Math.floor(price / 10000)}만원`;
    }
    return `${price.toLocaleString()}원`;
  };

  const formatDate = (date) => {
    if (!date) return '';
    const now = new Date();
    const d = date.toDate ? date.toDate() : new Date(date);
    const diff = now - d;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return '방금 전';
    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    if (days < 7) return `${days}일 전`;
    
    return d.toLocaleDateString();
  };

  const getProductBadge = (product) => {
    // 신규 마크 제거됨 - 사용자 요청에 따라
    if (product.viewCount > 100) return { type: 'hot', text: '인기' };
    if (product.priceNegotiable) return { type: 'urgent', text: '급처' };
    return null;
  };

  const activeFilterCount = Object.values(filters).filter(v => v && v !== '').length;

  return (
    <Container className="main-content">
      <TopBar />
      
      <SearchSection>
        <SearchBarContainer>
          <SearchBar focused={searchFocused}>
            <FaSearch color="#999" />
            <SearchInput
              ref={searchInputRef}
              placeholder="어떤 악기를 찾고 계신가요?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(searchValue);
                }
              }}
            />
            {searchValue && (
              <FaTimes 
                color="#999" 
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setSearchValue('');
                  setSearchFocused(false);
                  // 검색 초기화
                  if (filters.searchQuery) {
                    updateFilters({ searchQuery: '' });
                  }
                }}
              />
            )}
          </SearchBar>
          
          {searchFocused && (
            <SearchSuggestions>
              {searchSuggestions.length > 0 ? (
                searchSuggestions.map((suggestion, index) => (
                  <SuggestionItem 
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.type === 'category' ? <FaCog /> : <FaSearch />}
                    {suggestion.text}
                  </SuggestionItem>
                ))
              ) : recentSearches.length > 0 && (
                <RecentSearches>
                  <RecentTitle>
                    최근 검색어
                    <button 
                      onClick={clearRecentSearches}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: '#999', 
                        fontSize: '12px',
                        cursor: 'pointer' 
                      }}
                    >
                      전체삭제
                    </button>
                  </RecentTitle>
                  <RecentTags>
                    {recentSearches.slice(0, 5).map((search, index) => (
                      <RecentTag 
                        key={index}
                        onClick={() => handleSearch(search)}
                      >
                        <FaClock />
                        {search}
                      </RecentTag>
                    ))}
                  </RecentTags>
                </RecentSearches>
              )}
            </SearchSuggestions>
          )}
        </SearchBarContainer>
        
        <FilterSection>
          <FilterChip 
            active={activeFilterCount > 0}
            onClick={() => setIsFilterModalOpen(true)}
          >
            <FaFilter />
            필터 {activeFilterCount > 0 && `(${activeFilterCount})`}
          </FilterChip>
          
          <FilterChip
            active={filters.category === 'guitar'}
            onClick={() => updateFilters({ 
              category: filters.category === 'guitar' ? '' : 'guitar' 
            })}
          >
            기타
          </FilterChip>
          
          <FilterChip
            active={filters.category === 'piano'}
            onClick={() => updateFilters({ 
              category: filters.category === 'piano' ? '' : 'piano' 
            })}
          >
            피아노
          </FilterChip>
          
          <FilterChip
            active={filters.category === 'drums'}
            onClick={() => updateFilters({ 
              category: filters.category === 'drums' ? '' : 'drums' 
            })}
          >
            드럼
          </FilterChip>
          
          <FilterChip
            active={filters.category === 'wind'}
            onClick={() => updateFilters({ 
              category: filters.category === 'wind' ? '' : 'wind' 
            })}
          >
            관악기
          </FilterChip>
          
          <FilterChip
            active={filters.category === 'audio'}
            onClick={() => updateFilters({ 
              category: filters.category === 'audio' ? '' : 'audio' 
            })}
          >
            오디오
          </FilterChip>
          
          <FilterChip 
            onClick={() => {
              const newSort = sortBy === 'latest' ? 'price' : 'latest';
              setSortBy(newSort);
              updateFilters({ sortBy: newSort });
            }}
          >
            <FaSort />
            {sortBy === 'latest' ? '최신순' : '가격순'}
          </FilterChip>
        </FilterSection>
      </SearchSection>


      <ContentContainer>
        <ProductGrid>
          {loading && products.length === 0 ? (
            <LoadingContainer>
              <LoadingSpinner />
              <LoadingText>상품을 불러오는 중...</LoadingText>
            </LoadingContainer>
          ) : products.length === 0 ? (
            <EmptyState>
              <FaSearch size={48} color="#ddd" />
              <h3>검색 결과가 없습니다</h3>
              <p>다른 검색어를 입력해보세요</p>
            </EmptyState>
          ) : (
            products.map((product) => {
              const badge = getProductBadge(product);
              return (
                <ProductCard 
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <ProductImageContainer>
                    {product.images && product.images.length > 0 ? (
                      <ProductImage 
                        src={product.images[0]} 
                        alt={product.title}
                      />
                    ) : (
                      <ImagePlaceholder>
                        <FaSearch />
                      </ImagePlaceholder>
                    )}
                  </ProductImageContainer>
                  
                  <ProductInfo>
                    <div>
                      <ProductMeta>
                        {badge && (
                          <StatusBadge type={badge.type}>
                            {badge.text}
                          </StatusBadge>
                        )}
                        <FaMapMarkerAlt />
                        {product.region} {product.district}
                        <span>•</span>
                        {formatDate(product.createdAt)}
                      </ProductMeta>
                      
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                    </div>
                    
                    <ProductActions>
                      <ProductStats>
                        <FaEye /> {product.viewCount || 0}
                        <FaComments /> {product.chatCount || 0}
                      </ProductStats>
                      
                      <LikeButton
                        liked={product.isLikedByUser}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (user?.isLoggedIn) {
                            toggleLike(product.id);
                          } else {
                            navigate('/login');
                          }
                        }}
                      >
                        {product.isLikedByUser ? <FaHeart /> : <FaRegHeart />}
                      </LikeButton>
                    </ProductActions>
                  </ProductInfo>
                </ProductCard>
              );
            })
          )}
          
          {hasMore && (
            <div ref={observerRef} style={{ height: '1px' }} />
          )}
        </ProductGrid>
        
        {/* 상품 등록 플로팅 버튼 - 하단바 기준 고정 */}
        <FAB 
          onClick={() => navigate('/add')}
          aria-label="상품 등록하기"
          title="상품 등록하기"
        >
          <FaPlus />
        </FAB>
        
      </ContentContainer>

      {/* 필터 모달 */}
      {isFilterModalOpen && (
        <FilterModal onClick={() => setIsFilterModalOpen(false)}>
          <FilterContent onClick={(e) => e.stopPropagation()}>
            <FilterHeader>
              <FilterTitle>필터</FilterTitle>
              <FilterCloseButton onClick={() => setIsFilterModalOpen(false)}>
                <FaTimes />
              </FilterCloseButton>
            </FilterHeader>
            
            <FilterBody>
              <FilterGroup>
                <FilterGroupTitle>가격대</FilterGroupTitle>
                <PriceRange>
                  <PriceInput
                    type="number"
                    placeholder="최소 금액"
                    value={tempFilters.priceMin}
                    onChange={(e) => setTempFilters(prev => ({
                      ...prev,
                      priceMin: e.target.value
                    }))}
                  />
                  <span>~</span>
                  <PriceInput
                    type="number"
                    placeholder="최대 금액"
                    value={tempFilters.priceMax}
                    onChange={(e) => setTempFilters(prev => ({
                      ...prev,
                      priceMax: e.target.value
                    }))}
                  />
                </PriceRange>
              </FilterGroup>
              
              <FilterGroup>
                <FilterGroupTitle>상품 상태</FilterGroupTitle>
                <FilterOptions>
                  {['excellent', 'good', 'fair', 'poor'].map(condition => (
                    <FilterOption
                      key={condition}
                      selected={tempFilters.condition === condition}
                      onClick={() => setTempFilters(prev => ({
                        ...prev,
                        condition: prev.condition === condition ? '' : condition
                      }))}
                    >
                      {condition === 'excellent' && '매우 좋음'}
                      {condition === 'good' && '좋음'}
                      {condition === 'fair' && '보통'}
                      {condition === 'poor' && '나쁨'}
                    </FilterOption>
                  ))}
                </FilterOptions>
              </FilterGroup>
              
              <div style={{ 
                display: 'flex', 
                gap: '12px', 
                marginTop: '24px',
                paddingTop: '20px',
                borderTop: '1px solid #f0f0f0'
              }}>
                <button 
                  onClick={handleFilterReset}
                  style={{
                    flex: 1,
                    padding: '12px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    background: 'white',
                    color: '#666',
                    cursor: 'pointer'
                  }}
                >
                  초기화
                </button>
                <button 
                  onClick={handleFilterApply}
                  style={{
                    flex: 2,
                    padding: '12px',
                    border: 'none',
                    borderRadius: '8px',
                    background: 'var(--color-mint-main)',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  적용하기
                </button>
              </div>
            </FilterBody>
          </FilterContent>
        </FilterModal>
      )}
    </Container>
  );
}