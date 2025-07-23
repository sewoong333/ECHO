import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductContext } from "../store/ProductContext";
import { UserContext } from "../store/UserContext";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaArrowLeft, FaShoppingCart, FaEye, FaTimes } from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 56px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #2ed8b6;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const Content = styled.div`
  flex: 1;
  padding: 72px 16px 90px;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  color: #666;
`;

const EmptyIcon = styled.div`
  font-size: 64px;
  color: #ddd;
  margin-bottom: 16px;
`;

const EmptyTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const EmptyDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const ExploreButton = styled.button`
  padding: 12px 24px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #26c4a8;
    transform: translateY(-1px);
  }
`;

const WishItem = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const ItemContent = styled.div`
  display: flex;
  gap: 12px;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  background: #f5f5f5;
`;

const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 8px;
`;

const ItemMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #666;
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  color: #666;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    border-color: #2ed8b6;
    color: #2ed8b6;
  }
  
  &.remove {
    color: #f56565;
    
    &:hover {
      border-color: #f56565;
      background: #fff5f5;
    }
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  font-size: 14px;
  color: #666;
`;

export default function WishList() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { products, toggleLike } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  // 찜한 상품들 필터링
  const likedProducts = products.filter(product => product.isLikedByUser);

  useEffect(() => {
    // 사용자가 로그인했고 상품 로딩이 완료되면 로딩 해제
    if (!user.loading && products.length >= 0) {
      setLoading(false);
    }
  }, [user.loading, products]);

  // 로그인하지 않은 경우 로그인 페이지로 이동
  useEffect(() => {
    if (!user.loading && !user.isLoggedIn) {
      navigate('/login');
    }
  }, [user.loading, user.isLoggedIn, navigate]);

  const handleRemoveFromWishlist = async (e, productId) => {
    e.stopPropagation();
    try {
      await toggleLike(productId);
    } catch (error) {
      console.error('찜 해제 실패:', error);
    }
  };

  const formatPrice = (price) => {
    return price?.toLocaleString() || '가격 문의';
  };

  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return '';
    const now = new Date();
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return '오늘';
    if (diffDays === 1) return '어제';
    if (diffDays < 7) return `${diffDays}일 전`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`;
    return `${Math.floor(diffDays / 30)}개월 전`;
  };

  if (loading) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </BackButton>
          <Title>찜한 상품</Title>
          <div />
        </Header>
        <LoadingContainer>
          로딩 중...
        </LoadingContainer>
      </Container>
    );
  }

  if (likedProducts.length === 0) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </BackButton>
          <Title>찜한 상품</Title>
          <div />
        </Header>
        <Content>
          <EmptyState>
            <EmptyIcon>
              <FaRegHeart />
            </EmptyIcon>
            <EmptyTitle>찜한 상품이 없어요</EmptyTitle>
            <EmptyDescription>
              마음에 드는 악기를 찾아서<br />
              하트 버튼을 눌러보세요!
            </EmptyDescription>
            <ExploreButton onClick={() => navigate('/')}>
              악기 둘러보기
            </ExploreButton>
          </EmptyState>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </BackButton>
        <Title>찜한 상품 ({likedProducts.length})</Title>
        <div />
      </Header>
      <Content>
        {likedProducts.map((product) => (
          <WishItem 
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <ItemContent>
              <ItemImage 
                src={product.images?.[0] || '/placeholder-instrument.jpg'} 
                alt={product.title}
                onError={(e) => {
                  e.target.src = '/placeholder-instrument.jpg';
                }}
              />
              <ItemInfo>
                <ItemTitle>{product.title}</ItemTitle>
                <ItemPrice>{formatPrice(product.price)}원</ItemPrice>
                <ItemMeta>
                  <span>{product.location || '지역 미설정'}</span>
                  <span>•</span>
                  <span><FaEye /> {product.viewCount || 0}</span>
                  <span>•</span>
                  <span>{formatTimeAgo(product.createdAt)}</span>
                </ItemMeta>
                <ItemActions>
                  <ActionButton 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    <FaShoppingCart />
                    상품 보기
                  </ActionButton>
                  <ActionButton 
                    className="remove"
                    onClick={(e) => handleRemoveFromWishlist(e, product.id)}
                  >
                    <FaTimes />
                    찜 해제
                  </ActionButton>
                </ItemActions>
              </ItemInfo>
            </ItemContent>
          </WishItem>
        ))}
      </Content>
    </Container>
  );
}
