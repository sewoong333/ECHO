import React, { useState } from 'react';
import styled from 'styled-components';
import { designSystem2025 } from '../styles/designSystem2025';
import { FiHeart, FiMapPin, FiClock, FiEye, FiMessageCircle } from 'react-icons/fi';
import { useToast } from '../store/ToastContext';

const CardContainer = styled.div`
  ${designSystem2025.glassmorphism.enhanced}
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  /* 모바일 터치 최적화 */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  
  /* 호버 효과 */
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  /* 터치 피드백 */
  &:active {
    transform: translateY(-2px) scale(0.98);
  }
  
  /* 다크모드 */
  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: ${designSystem2025.colors.neutral[100]};
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ImageSlider = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  transform: translateX(${props => -props.currentIndex * 100}%);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  user-select: none;
  -webkit-user-drag: none;
`;

const ImageIndicators = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`;

const Indicator = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.active 
    ? 'rgba(255, 255, 255, 0.9)' 
    : 'rgba(255, 255, 255, 0.5)'};
  transition: all 0.3s ease;
  
  ${props => props.active && `
    transform: scale(1.2);
  `}
`;

const LikeButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
  
  /* 터치 최적화 */
  min-height: 44px;
  min-width: 44px;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  ${props => props.liked && `
    background: ${designSystem2025.colors.red[500]};
    color: white;
    
    &:hover {
      background: ${designSystem2025.colors.red[600]};
    }
  `}
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  z-index: 2;
  
  ${props => {
    switch(props.status) {
      case 'sold':
        return `background: ${designSystem2025.colors.neutral[500]};`;
      case 'reserved':
        return `background: ${designSystem2025.colors.warning[500]};`;
      default:
        return 'display: none;';
    }
  }}
`;

const ContentArea = styled.div`
  padding: 16px;
  
  @media (max-width: 768px) {
    padding: 14px;
  }
`;

const ProductTitle = styled.h3`
  font-size: ${designSystem2025.typography.sizes.base};
  font-weight: ${designSystem2025.typography.weights.semibold};
  color: ${designSystem2025.colors.neutral[900]};
  margin: 0 0 8px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[100]};
  }
  
  @media (max-width: 768px) {
    font-size: ${designSystem2025.typography.sizes.sm};
  }
`;

const ProductPrice = styled.div`
  font-size: ${designSystem2025.typography.sizes.lg};
  font-weight: ${designSystem2025.typography.weights.bold};
  color: ${designSystem2025.colors.mint[600]};
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: ${designSystem2025.typography.sizes.base};
    margin-bottom: 10px;
  }
`;

const ProductLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${designSystem2025.typography.sizes.xs};
  color: ${designSystem2025.colors.neutral[600]};
  margin-bottom: 8px;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const ProductMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${designSystem2025.typography.sizes.xs};
  color: ${designSystem2025.colors.neutral[500]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[500]};
  }
`;

const MetaLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TimeAgo = styled.div`
  font-size: ${designSystem2025.typography.sizes.xs};
  color: ${designSystem2025.colors.neutral[500]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[500]};
  }
`;

// 터치 이벤트 유틸리티
const useSwipeGesture = (onSwipeLeft, onSwipeRight, threshold = 50) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    } else if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};

// 시간 포맷 유틸리티
const formatTimeAgo = (date) => {
  if (!date) return '';
  
  const now = new Date();
  const target = date.toDate ? date.toDate() : new Date(date);
  const diffInMinutes = Math.floor((now - target) / (1000 * 60));
  
  if (diffInMinutes < 1) return '방금 전';
  if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}시간 전`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays}일 전`;
  
  const diffInMonths = Math.floor(diffInDays / 30);
  return `${diffInMonths}개월 전`;
};

const MobileProductCard = ({ 
  product,
  onLike,
  onProductClick,
  liked = false 
}) => {
  const { showToast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(liked);
  const images = product.images || ['/placeholder-image.jpg'];

  // 스와이프 제스처 설정
  const swipeHandlers = useSwipeGesture(
    () => {
      // 왼쪽 스와이프 - 다음 이미지
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    },
    () => {
      // 오른쪽 스와이프 - 이전 이미지
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }
  );

  // 찜하기 처리
  const handleLike = async (e) => {
    e.stopPropagation();
    
    try {
      const newLikedState = !isLiked;
      setIsLiked(newLikedState);
      
      // 햅틱 피드백 (iOS)
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
      
      if (onLike) {
        await onLike(product.id, newLikedState);
      }
      
      showToast(newLikedState ? '찜 목록에 추가되었습니다' : '찜 목록에서 제거되었습니다', 'success');
    } catch (error) {
      setIsLiked(!isLiked); // 롤백
      showToast('오류가 발생했습니다', 'error');
    }
  };

  // 카드 클릭 처리
  const handleCardClick = () => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  // 가격 포맷팅
  const formatPrice = (price) => {
    if (!price) return '가격 문의';
    return `${price.toLocaleString()}원`;
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <ImageContainer>
        <ImageSlider 
          currentIndex={currentImageIndex}
          {...swipeHandlers}
        >
          {images.map((image, index) => (
            <ProductImage
              key={index}
              src={image}
              alt={`${product.title} ${index + 1}`}
              loading="lazy"
              onError={(e) => {
                e.target.src = '/placeholder-image.jpg';
              }}
            />
          ))}
        </ImageSlider>

        {/* 상태 배지 */}
        <StatusBadge status={product.status}>
          {product.status === 'sold' ? '판매완료' : '예약중'}
        </StatusBadge>

        {/* 찜하기 버튼 */}
        <LikeButton 
          liked={isLiked}
          onClick={handleLike}
          aria-label={isLiked ? '찜 해제' : '찜하기'}
        >
          <FiHeart fill={isLiked ? 'currentColor' : 'none'} />
        </LikeButton>

        {/* 이미지 인디케이터 */}
        {images.length > 1 && (
          <ImageIndicators>
            {images.map((_, index) => (
              <Indicator 
                key={index} 
                active={index === currentImageIndex}
              />
            ))}
          </ImageIndicators>
        )}
      </ImageContainer>

      <ContentArea>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
        
        <ProductLocation>
          <FiMapPin size={12} />
          {product.location || '위치 정보 없음'}
        </ProductLocation>

        <ProductMeta>
          <MetaLeft>
            <MetaItem>
              <FiEye size={12} />
              {product.viewCount || 0}
            </MetaItem>
            <MetaItem>
              <FiHeart size={12} />
              {product.likeCount || 0}
            </MetaItem>
            <MetaItem>
              <FiMessageCircle size={12} />
              {product.chatCount || 0}
            </MetaItem>
          </MetaLeft>
          
          <TimeAgo>
            <FiClock size={12} style={{ marginRight: '4px' }} />
            {formatTimeAgo(product.createdAt)}
          </TimeAgo>
        </ProductMeta>
      </ContentArea>
    </CardContainer>
  );
};

export default MobileProductCard;