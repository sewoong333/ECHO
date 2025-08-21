import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { designSystem2025 } from '../styles/designSystem2025';
import MobileProductCard from './MobileProductCard';
import { FiRefreshCw, FiArrowUp } from 'react-icons/fi';

const GridContainer = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: ${designSystem2025.colors.neutral[600]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid ${designSystem2025.colors.neutral[300]};
  border-top: 3px solid ${designSystem2025.colors.mint[500]};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 12px;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
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

const EmptyTitle = styled.h3`
  font-size: ${designSystem2025.typography.sizes.lg};
  font-weight: ${designSystem2025.typography.weights.semibold};
  color: ${designSystem2025.colors.neutral[800]};
  margin-bottom: 8px;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[200]};
  }
`;

const EmptyDescription = styled.p`
  font-size: ${designSystem2025.typography.sizes.sm};
  color: ${designSystem2025.colors.neutral[600]};
  line-height: 1.5;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const LoadMoreButton = styled.button`
  ${designSystem2025.accessibility.focusRing}
  grid-column: 1 / -1;
  margin: 24px auto 0;
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  background: ${designSystem2025.colors.mint[500]};
  color: white;
  font-size: ${designSystem2025.typography.sizes.base};
  font-weight: ${designSystem2025.typography.weights.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  
  /* 모바일 터치 최적화 */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  
  &:hover {
    background: ${designSystem2025.colors.mint[600]};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${designSystem2025.colors.mint[500]}40;
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  &:disabled {
    background: ${designSystem2025.colors.neutral[300]};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border: none;
  background: ${designSystem2025.colors.mint[500]};
  color: white;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  
  /* 모바일 터치 최적화 */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  
  /* 스크롤 위치에 따른 표시/숨김 */
  opacity: ${props => props.show ? 1 : 0};
  transform: ${props => props.show 
    ? 'translateY(0) scale(1)' 
    : 'translateY(20px) scale(0.8)'};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  
  &:hover {
    background: ${designSystem2025.colors.mint[600]};
    transform: translateY(-2px) scale(1.05);
  }
  
  &:active {
    transform: translateY(0) scale(0.95);
  }
`;

const RefreshIndicator = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: ${designSystem2025.colors.mint[500]};
  color: white;
  padding: 12px 20px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${designSystem2025.typography.sizes.sm};
  font-weight: ${designSystem2025.typography.weights.medium};
  z-index: 1000;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  opacity: ${props => props.show ? 1 : 0};
  transform: translateX(-50%) translateY(${props => props.show ? '0' : '-20px'});
  transition: all 0.3s ease;
  pointer-events: none;
`;

// 무한 스크롤 훅
const useInfiniteScroll = (callback, hasMore) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop 
          >= document.documentElement.offsetHeight - 1000) {
        if (hasMore) {
          callback();
        }
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 200);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [callback, hasMore]);
};

// 스로틀링 유틸리티
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

// Pull to Refresh 훅
const usePullToRefresh = (onRefresh) => {
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = useCallback((e) => {
    if (window.scrollY === 0) {
      setStartY(e.touches[0].clientY);
    }
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (startY && window.scrollY === 0) {
      const currentY = e.touches[0].clientY;
      const distance = currentY - startY;
      
      if (distance > 0) {
        e.preventDefault();
        setPullDistance(Math.min(distance, 150));
        setIsPulling(distance > 80);
      }
    }
  }, [startY]);

  const handleTouchEnd = useCallback(() => {
    if (isPulling && pullDistance > 80) {
      onRefresh();
    }
    setIsPulling(false);
    setPullDistance(0);
    setStartY(0);
  }, [isPulling, pullDistance, onRefresh]);

  return {
    isPulling,
    pullDistance,
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  };
};

const MobileProductGrid = ({
  products = [],
  loading = false,
  hasMore = false,
  onLoadMore,
  onRefresh,
  onProductClick,
  onLike,
  emptyMessage = "등록된 상품이 없습니다",
  emptyDescription = "첫 번째 상품을 등록해보세요!"
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Pull to Refresh 기능
  const { isPulling, pullDistance, touchHandlers } = usePullToRefresh(async () => {
    if (onRefresh) {
      setRefreshing(true);
      await onRefresh();
      setRefreshing(false);
    }
  });

  // 무한 스크롤
  useInfiniteScroll(onLoadMore, hasMore && !loading);

  // 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = throttle(() => {
      setShowScrollTop(window.scrollY > 300);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 상품 클릭 처리 (메모이제이션)
  const handleProductClick = useCallback((product) => {
    if (onProductClick) {
      onProductClick(product);
    }
  }, [onProductClick]);

  // 찜하기 처리 (메모이제이션)
  const handleLike = useCallback((productId, liked) => {
    if (onLike) {
      return onLike(productId, liked);
    }
  }, [onLike]);

  // 상품 목록 렌더링 최적화
  const productCards = useMemo(() => {
    return products.map((product) => (
      <MobileProductCard
        key={product.id}
        product={product}
        onProductClick={handleProductClick}
        onLike={handleLike}
        liked={product.liked}
      />
    ));
  }, [products, handleProductClick, handleLike]);

  return (
    <>
      {/* Pull to Refresh 인디케이터 */}
      <RefreshIndicator show={refreshing || isPulling}>
        <LoadingSpinner />
        {refreshing ? '새로고침 중...' : isPulling ? '놓으면 새로고침' : '아래로 당겨서 새로고침'}
      </RefreshIndicator>

      <GridContainer 
        {...touchHandlers}
        style={{
          transform: `translateY(${Math.min(pullDistance * 0.3, 45)}px)`,
          transition: pullDistance === 0 ? 'transform 0.3s ease' : 'none'
        }}
      >
        <Grid>
          {/* 상품 카드들 */}
          {productCards}

          {/* 빈 상태 */}
          {!loading && products.length === 0 && (
            <EmptyState>
              <EmptyIcon>📦</EmptyIcon>
              <EmptyTitle>{emptyMessage}</EmptyTitle>
              <EmptyDescription>{emptyDescription}</EmptyDescription>
            </EmptyState>
          )}

          {/* 로딩 인디케이터 */}
          {loading && (
            <LoadingContainer>
              <LoadingSpinner />
              상품을 불러오는 중...
            </LoadingContainer>
          )}

          {/* 더 보기 버튼 */}
          {!loading && hasMore && products.length > 0 && (
            <LoadMoreButton onClick={onLoadMore} disabled={loading}>
              <FiRefreshCw />
              더 많은 상품 보기
            </LoadMoreButton>
          )}
        </Grid>
      </GridContainer>

      {/* 맨 위로 가기 버튼 */}
      <FloatingButton show={showScrollTop} onClick={scrollToTop}>
        <FiArrowUp size={24} />
      </FloatingButton>
    </>
  );
};

export default MobileProductGrid;