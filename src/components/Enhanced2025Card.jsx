import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { designSystem2025 } from '../styles/designSystem2025';

const Card3DContainer = styled.div`
  ${designSystem2025.effects3D.card}
  position: relative;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  cursor: pointer;
  
  /* 모션 감소 설정 존중 */
  ${designSystem2025.media.reducedMotion} {
    transform: none !important;
    &:hover {
      transform: none !important;
    }
  }
`;

const GlassCard = styled.div`
  ${designSystem2025.glassmorphism.enhanced}
  ${designSystem2025.microInteractions.fadeIn}
  ${designSystem2025.accessibility.focusRing}
  
  border-radius: 24px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 다크모드 지원 */
  [data-theme="dark"] & {
    ${designSystem2025.glassmorphism.dark}
  }
  
  /* 호버 효과 */
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 25px 80px rgba(45, 212, 191, 0.15),
      0 0 60px rgba(45, 212, 191, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
  }
  
  /* 접근성 - 포커스 상태 */
  &:focus-within {
    outline: 2px solid ${designSystem2025.colors.mint[400]};
    outline-offset: 4px;
  }
  
  /* 고대비 모드 */
  ${designSystem2025.accessibility.highContrast}
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const StatusBadge = styled.div`
  padding: 6px 12px;
  border-radius: 12px;
  font-size: ${designSystem2025.typography.sizes.xs};
  font-weight: ${designSystem2025.typography.weights.semibold};
  position: relative;
  
  /* 색각 이상자를 위한 패턴 추가 */
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    right: 2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  
  /* 상태별 스타일 */
  ${props => {
    switch(props.status) {
      case 'new':
        return `
          background: linear-gradient(135deg, ${designSystem2025.colors.mint[100]}, ${designSystem2025.colors.mint[200]});
          color: ${designSystem2025.colors.mint[800]};
          &::before { background: ${designSystem2025.colors.mint[500]}; }
        `;
      case 'hot':
        return `
          background: linear-gradient(135deg, #fee2e2, #fecaca);
          color: #991b1b;
          &::before { 
            background: #ef4444;
            animation: pulse 1.5s infinite;
          }
        `;
      case 'urgent':
        return `
          background: linear-gradient(135deg, #fef3c7, #fed7aa);
          color: #92400e;
          &::before { 
            background: #f59e0b;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          }
        `;
      default:
        return `
          background: ${designSystem2025.colors.neutral[100]};
          color: ${designSystem2025.colors.neutral[700]};
        `;
    }
  }}
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const LikeButton = styled.button`
  ${designSystem2025.microInteractions.heartPop}
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 8px;
  border-radius: 50%;
  
  &:hover {
    background: rgba(45, 212, 191, 0.1);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  /* 좋아요 상태 */
  &.liked {
    color: #ef4444;
    animation: heartPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  /* 접근성 */
  ${designSystem2025.accessibility.focusRing}
`;

const CardImage = styled.div`
  ${designSystem2025.effects3D.image}
  width: 100%;
  height: 200px;
  border-radius: 16px;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  
  /* 로딩 상태 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: ${props => props.loading ? 'shimmer 1.5s infinite' : 'none'};
  }
  
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h3`
  font-size: ${designSystem2025.typography.sizes.lg};
  font-weight: ${designSystem2025.typography.weights.semibold};
  color: ${designSystem2025.colors.neutral[900]};
  line-height: ${designSystem2025.typography.lineHeights.tight};
  margin: 0;
  
  /* 텍스트 말줄임 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const Description = styled.p`
  font-size: ${designSystem2025.typography.sizes.sm};
  color: ${designSystem2025.colors.neutral[600]};
  line-height: ${designSystem2025.typography.lineHeights.normal};
  margin: 0;
  
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const Price = styled.div`
  font-size: ${designSystem2025.typography.sizes.xl};
  font-weight: ${designSystem2025.typography.weights.bold};
  color: ${designSystem2025.colors.mint[600]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.mint[400]};
  }
`;

const ActionButton = styled.button`
  ${designSystem2025.glassmorphism.base}
  ${designSystem2025.microInteractions.hover}
  ${designSystem2025.microInteractions.press}
  ${designSystem2025.accessibility.focusRing}
  
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  font-size: ${designSystem2025.typography.sizes.sm};
  font-weight: ${designSystem2025.typography.weights.medium};
  color: ${designSystem2025.colors.mint[700]};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  /* 리플 효과 */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(45, 212, 191, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
  }
  
  &:active::before {
    width: 100px;
    height: 100px;
  }
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.mint[300]};
  }
`;

const Enhanced2025Card = ({ 
  title,
  description,
  image,
  price,
  status = 'default',
  liked = false,
  onLike,
  onAction,
  loading = false,
  ...props 
}) => {
  const [isLiked, setIsLiked] = useState(liked);
  const cardRef = useRef(null);

  // 마우스 움직임에 따른 3D 효과
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
    }
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    onLike?.(!isLiked);
    
    // 햅틱 피드백 (지원하는 기기에서)
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleAction = (e) => {
    e.stopPropagation();
    onAction?.();
  };

  return (
    <Card3DContainer
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <GlassCard>
        <CardHeader>
          <StatusBadge status={status}>
            {status === 'new' && '신상품'}
            {status === 'hot' && '인기'}
            {status === 'urgent' && '급매'}
            {status === 'default' && '일반'}
          </StatusBadge>
          
          <LikeButton
            className={isLiked ? 'liked' : ''}
            onClick={handleLike}
            aria-label={isLiked ? '좋아요 취소' : '좋아요'}
          >
            {isLiked ? '❤️' : '🤍'}
          </LikeButton>
        </CardHeader>

        <CardImage 
          src={image} 
          loading={loading}
          aria-hidden="true"
        />

        <CardContent>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </CardContent>

        <CardFooter>
          <Price>
            {typeof price === 'number' 
              ? `${price.toLocaleString()}원` 
              : price
            }
          </Price>
          
          <ActionButton 
            onClick={handleAction}
            aria-label={`${title} 상세보기`}
          >
            보기
          </ActionButton>
        </CardFooter>
      </GlassCard>
    </Card3DContainer>
  );
};

export default Enhanced2025Card;