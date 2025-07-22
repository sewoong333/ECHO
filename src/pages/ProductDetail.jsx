import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../store/ProductContext";
import { UserContext } from "../store/UserContext";
import { ChatContext } from "../store/ChatContext";
import { productService } from "../utils/firebase";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaRegStar,
  FaShare,
  FaEllipsisV,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaEye,
  FaComments,
  FaShoppingCart,
  FaUser,
  FaCheckCircle,
  FaStore,
  FaClock,
  FaCheck,
  FaFlag,
  FaPhone,
  FaEnvelope,
  FaChevronRight,
  FaChevronLeft,
  FaTimes,
  FaExclamationTriangle,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #ff7e36;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #ff7e36;
  }
`;

const ImageSection = styled.div`
  position: relative;
  margin-top: 56px;
  padding: 16px;
  background: #fff;
`;

const ImageSlider = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  touch-action: pan-y;
`;

const ImageContainer = styled.div`
  display: flex;
  width: ${props => props.imageCount * 100}%;
  height: 100%;
  transform: translateX(-${props => props.currentIndex * (100 / props.imageCount)}%);
  transition: transform 0.3s ease;
`;

const ProductImage = styled.img`
  width: ${props => 100 / props.imageCount}%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const ImagePlaceholder = styled.div`
  width: ${props => 100 / props.imageCount}%;
  height: 100%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 48px;
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'prev' ? 'left: 16px;' : 'right: 16px;'}
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
  transition: all 0.2s ease;
  
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(4px);
`;

const ImageDots = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background 0.2s;
`;

const ContentSection = styled.div`
  padding: 20px;
`;

const ProductInfo = styled.div`
  margin-bottom: 24px;
`;

const ProductTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const ProductMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #ff7e36;
  margin-bottom: 16px;
`;

const ProductStatus = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const StatusBadge = styled.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: ${props => {
    switch(props.type) {
      case 'condition': return '#e8f5e8';
      case 'negotiable': return '#fff3e0';
      case 'delivery': return '#e3f2fd';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch(props.type) {
      case 'condition': return '#2e7d32';
      case 'negotiable': return '#f57c00';
      case 'delivery': return '#1976d2';
      default: return '#666';
    }
  }};
`;

const ProductDescription = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
  margin-bottom: 24px;
`;

const ProductTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const Tag = styled.div`
  background: #f8f9fa;
  color: #666;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
`;

const Divider = styled.div`
  height: 8px;
  background: #f8f9fa;
  margin: 0 -20px 24px -20px;
`;

const SellerSection = styled.div`
  margin-bottom: 24px;
`;

const SellerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  
  &:hover {
    background: #f8f9fa;
  }
`;

const SellerAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.imageUrl 
    ? `url(${props.imageUrl})` 
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const SellerInfo = styled.div`
  flex: 1;
`;

const SellerName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const VerifiedBadge = styled.div`
  color: #4CAF50;
  font-size: 14px;
`;

const SellerLocation = styled.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MannerScore = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #ff7e36;
  font-weight: 600;
`;

const SellerStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
`;

const RelatedSection = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const RelatedItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    border-color: #ff7e36;
  }
`;

const RelatedImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

const RelatedInfo = styled.div`
  padding: 12px;
`;

const RelatedTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RelatedPrice = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #ff7e36;
`;

const BottomActions = styled.div`
  position: fixed;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  background: white;
  border-top: 1px solid #e0e0e0;
  padding: 16px 20px;
  display: flex;
  gap: 12px;
  z-index: 150;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.1);
`;

const LikeButton = styled.button`
  width: 48px;
  height: 48px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  color: ${props => props.liked ? '#FFD700' : '#666'};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #FFD700;
    color: #FFD700;
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const ChatButton = styled.button`
  flex: 1;
  height: 48px;
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const BuyButton = styled.button`
  flex: 1;
  height: 48px;
  background: #ff7e36;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #e66d2e;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 16px;
  color: #666;
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
  text-align: center;
`;

// 이미지 확대 모달
const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`;

// 옵션 메뉴 스타일
const OptionsMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  z-index: 200;
  min-width: 120px;
  overflow: hidden;
`;

const OptionItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: white;
  color: #333;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
  
  &.delete {
    color: #dc3545;
    
    &:hover {
      background: #fff5f5;
    }
  }
`;

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 150;
`;

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products, incrementViews, toggleLike, changeProductStatus, PRODUCT_STATUS } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const { createOrGetChatRoom } = useContext(ChatContext);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [creatingChat, setCreatingChat] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // 상품 찾기
  const product = products.find((p) => String(p.id) === String(id));

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
      // 디버깅을 위한 로그 추가
      console.log('🔍 상품 검색:', {
        searchId: id,
        totalProducts: products.length,
        foundProduct: product ? 'YES' : 'NO',
        productIds: products.slice(0, 5).map(p => p.id) // 처음 5개 상품 ID만 로그
      });
    }
  }, [products, id, product]);

  // 상품을 찾지 못했을 때 개별 조회 시도
  useEffect(() => {
    const fetchIndividualProduct = async () => {
      if (!product && !loading && products.length > 0) {
        console.log('🔍 개별 상품 조회 시도:', id);
        try {
          const individualProduct = await productService.getProduct(id);
          console.log('✅ 개별 상품 조회 성공:', individualProduct);
          // 개별 조회된 상품을 products 배열에 추가
          // 이는 임시 해결책이며, ProductContext에서 처리하는 것이 더 좋습니다
        } catch (error) {
          console.error('❌ 개별 상품 조회 실패:', error);
        }
      }
    };

    fetchIndividualProduct();
  }, [product, loading, products.length, id]);

  // 조회수 증가 - 별도 useEffect로 분리
  useEffect(() => {
    if (product && user?.uid && product.sellerId !== user.uid) {
      console.log('👀 조회수 증가 시도:', {
        productId: product.id,
        sellerId: product.sellerId,
        currentUserId: user.uid
      });
      incrementViews(product.id);
    }
  }, [product?.id, user?.uid]); // incrementViews 제거, 필수 값들만 의존성 추가

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? (product?.images?.length || 1) - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === (product?.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const handleImageClick = () => {
    setIsImageModalOpen(true);
  };

  // 터치 스와이프 핸들러
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe && currentImageIndex < (product?.images?.length || 1) - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
    
    if (isRightSwipe && currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const handleLike = async () => {
    if (!user?.isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    
    try {
      await toggleLike(product.id);
    } catch (error) {
      console.error('찜하기 실패:', error);
      alert('찜하기에 실패했습니다.');
    }
  };

  const handleChat = async () => {
    if (!user?.isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    
    if (product.sellerId === user.uid) {
      alert('본인 상품에는 채팅할 수 없습니다.');
      return;
    }
    
    if (creatingChat) return; // 중복 클릭 방지
    
    setCreatingChat(true);
    
    try {
      console.log('💬 채팅방 생성 시작...', {
        productId: product.id,
        sellerId: product.sellerId,
        buyerId: user.uid
      });
      
      // 채팅방 생성 또는 기존 채팅방 찾기
      const chatRoomId = await createOrGetChatRoom(
        product.id,
        product.sellerId,
        user.uid,
        {
          title: product.title,
          price: product.price,
          images: product.images,
          status: product.status
        }
      );
      
      console.log('✅ 채팅방 생성 성공:', chatRoomId);
      
      // 채팅방으로 이동
      navigate(`/chat/${chatRoomId}`);
    } catch (error) {
      console.error('❌ 채팅방 생성 실패:', error);
      alert('채팅방 생성에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setCreatingChat(false);
    }
  };

  const handleBuy = () => {
    if (!user?.isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    
    if (product.sellerId === user.uid) {
      alert('본인 상품은 구매할 수 없습니다.');
      return;
    }
    
    if (product.status !== PRODUCT_STATUS.ACTIVE) {
      alert('판매 완료된 상품입니다.');
      return;
    }
    
    // 구매 페이지로 이동 (추후 구현)
    navigate(`/purchase/${product.id}`);
  };

  // 옵션 메뉴 핸들러
  const handleOptionsMenu = (e) => {
    e.stopPropagation();
    setShowOptionsMenu(!showOptionsMenu);
  };

  const handleEditProduct = () => {
    setShowOptionsMenu(false);
    navigate(`/edit-product/${product.id}`);
  };

  const handleDeleteProduct = async () => {
    if (!user?.isLoggedIn || product.sellerId !== user.uid) {
      alert('권한이 없습니다.');
      return;
    }

    if (window.confirm('정말 이 상품을 삭제하시겠습니까?')) {
      try {
        await changeProductStatus(product.id, PRODUCT_STATUS.DELETED);
        alert('상품이 삭제되었습니다.');
        navigate('/');
      } catch (error) {
        console.error('상품 삭제 실패:', error);
        alert('상품 삭제에 실패했습니다.');
      }
    }
    setShowOptionsMenu(false);
  };

  const closeOptionsMenu = () => {
    setShowOptionsMenu(false);
  };

  const getConditionText = (condition) => {
    const conditions = {
      'excellent': '매우 좋음',
      'good': '좋음',
      'fair': '보통',
      'poor': '나쁨'
    };
    return conditions[condition] || condition;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const formatDate = (date) => {
    if (!date) return '';
    const d = date.toDate ? date.toDate() : new Date(date);
    const now = new Date();
    const diff = now - d;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return '방금 전';
    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    if (days < 7) return `${days}일 전`;
    
    return d.toLocaleDateString('ko-KR');
  };

  if (loading) {
    return (
      <Container>
        <LoadingContainer>
          상품 정보를 불러오는 중...
        </LoadingContainer>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <Header>
          <HeaderLeft>
            <BackButton onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </BackButton>
          </HeaderLeft>
        </Header>
        <NotFoundContainer>
          <FaExclamationTriangle size={48} color="#ddd" />
          <h3>상품을 찾을 수 없습니다</h3>
          <p>삭제되었거나 존재하지 않는 상품입니다.</p>
          <p style={{fontSize: '12px', color: '#999', marginTop: '8px'}}>
            상품 ID: {id} | 로드된 상품 수: {products.length}
          </p>
          <button 
            onClick={() => navigate('/')}
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              backgroundColor: '#ff7e36',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            홈으로 돌아가기
          </button>
        </NotFoundContainer>
      </Container>
    );
  }

  const isLiked = product.isLikedByUser || false;
  const images = product.images || [];
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </BackButton>
        </HeaderLeft>
        <HeaderRight>
          <IconButton>
            <FaShare />
          </IconButton>
          {user?.uid === product?.sellerId && (
            <>
              <IconButton onClick={handleOptionsMenu}>
                <FaEllipsisV />
              </IconButton>
              {showOptionsMenu && (
                <>
                  <MenuOverlay onClick={closeOptionsMenu} />
                  <OptionsMenu>
                    <OptionItem onClick={handleEditProduct}>
                      <FaEdit />
                      수정
                    </OptionItem>
                    <OptionItem className="delete" onClick={handleDeleteProduct}>
                      <FaTrash />
                      삭제
                    </OptionItem>
                  </OptionsMenu>
                </>
              )}
            </>
          )}
        </HeaderRight>
      </Header>

      <ImageSection>
        <ImageSlider
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.length > 0 ? (
            <>
              <ImageContainer 
                imageCount={images.length}
                currentIndex={currentImageIndex}
              >
                {images.map((image, index) => (
                  <ProductImage 
                    key={index}
                    src={image} 
                    alt={`상품 이미지 ${index + 1}`}
                    imageCount={images.length}
                    onClick={handleImageClick}
                  />
                ))}
              </ImageContainer>
              
              {images.length > 1 && (
                <>
                  <SliderButton 
                    direction="prev" 
                    onClick={handlePrevImage}
                    style={{ display: currentImageIndex === 0 ? 'none' : 'flex' }}
                  >
                    <FaChevronLeft />
                  </SliderButton>
                  <SliderButton 
                    direction="next" 
                    onClick={handleNextImage}
                    style={{ display: currentImageIndex === images.length - 1 ? 'none' : 'flex' }}
                  >
                    <FaChevronRight />
                  </SliderButton>
                  
                  <ImageCounter>
                    {currentImageIndex + 1}/{images.length}
                  </ImageCounter>
                  
                  <ImageDots>
                    {images.map((_, index) => (
                      <Dot 
                        key={index}
                        active={index === currentImageIndex}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </ImageDots>
                </>
              )}
            </>
          ) : (
            <ImagePlaceholder imageCount={1}>
              <FaUser />
            </ImagePlaceholder>
          )}
        </ImageSlider>
      </ImageSection>

      <ContentSection>
        <ProductInfo>
          <ProductMeta>
            <FaMapMarkerAlt />
            {product.region} {product.district}
            <span>•</span>
            <FaEye />
            {product.viewCount || 0}
            <span>•</span>
            <FaComments />
            {product.chatCount || 0}
            <span>•</span>
            <FaClock />
            {formatDate(product.createdAt)}
          </ProductMeta>
          
          <ProductTitle>{product.title}</ProductTitle>
          
          <ProductPrice>
            {formatPrice(product.price)}원
            {product.negotiable && <span style={{fontSize: '14px', color: '#666', marginLeft: '8px'}}>가격제안 가능</span>}
          </ProductPrice>
          
          <ProductStatus>
            <StatusBadge type="condition">
              {getConditionText(product.condition)}
            </StatusBadge>
            {product.negotiable && (
              <StatusBadge type="negotiable">가격제안 가능</StatusBadge>
            )}
            {product.delivery && (
              <StatusBadge type="delivery">택배거래 가능</StatusBadge>
            )}
          </ProductStatus>
        </ProductInfo>

        <ProductDescription>
          {product.description}
        </ProductDescription>

        {product.tags && product.tags.length > 0 && (
          <ProductTags>
            {product.tags.map((tag, index) => (
              <Tag key={index}>#{tag}</Tag>
            ))}
          </ProductTags>
        )}
      </ContentSection>

      <Divider />

      <ContentSection>
        <SellerSection>
          <SellerHeader onClick={() => navigate(`/user/${product.sellerId}`)}>
            <SellerAvatar imageUrl={product.sellerProfileImage}>
              {!product.sellerProfileImage && (product.sellerNickname?.[0] || '?')}
            </SellerAvatar>
            <SellerInfo>
              <SellerName>
                {product.sellerNickname || '익명'}
                {product.sellerVerified && (
                  <VerifiedBadge>
                    <FaCheckCircle />
                  </VerifiedBadge>
                )}
              </SellerName>
              <SellerLocation>
                <FaMapMarkerAlt />
                {product.region} {product.district}
              </SellerLocation>
            </SellerInfo>
            <MannerScore>
              <FaStar />
              {product.sellerMannerScore || 36.5}°C
            </MannerScore>
          </SellerHeader>

          <SellerStats>
            <StatItem>
              <StatNumber>{product.sellerTransactionCount || 0}</StatNumber>
              <StatLabel>거래</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{product.sellerReviewCount || 0}</StatNumber>
              <StatLabel>후기</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{product.sellerFollowerCount || 0}</StatNumber>
              <StatLabel>팔로워</StatLabel>
            </StatItem>
          </SellerStats>
        </SellerSection>
      </ContentSection>

      {relatedProducts.length > 0 && (
        <>
          <Divider />
          <ContentSection>
            <RelatedSection>
              <SectionTitle>이런 상품은 어떠세요?</SectionTitle>
              <RelatedGrid>
                {relatedProducts.map((item) => (
                  <RelatedItem 
                    key={item.id}
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <RelatedImage 
                      src={item.images?.[0] || '/placeholder.jpg'} 
                      alt={item.title}
                    />
                    <RelatedInfo>
                      <RelatedTitle>{item.title}</RelatedTitle>
                      <RelatedPrice>{formatPrice(item.price)}원</RelatedPrice>
                    </RelatedInfo>
                  </RelatedItem>
                ))}
              </RelatedGrid>
            </RelatedSection>
          </ContentSection>
        </>
      )}

      <div style={{ height: '144px' }} />

      <BottomActions>
        <LikeButton liked={isLiked} onClick={handleLike}>
          {isLiked ? <FaStar /> : <FaRegStar />}
        </LikeButton>
        <ChatButton 
          onClick={handleChat}
          disabled={creatingChat}
          style={{ opacity: creatingChat ? 0.7 : 1 }}
        >
          {creatingChat ? '채팅방 생성 중...' : '채팅하기'}
        </ChatButton>
        <BuyButton onClick={handleBuy}>
          구매하기
        </BuyButton>
      </BottomActions>

      {/* 이미지 확대 모달 */}
      {isImageModalOpen && (
        <ImageModal onClick={() => setIsImageModalOpen(false)}>
          <ModalCloseButton onClick={() => setIsImageModalOpen(false)}>
            <FaTimes />
          </ModalCloseButton>
          <ModalImage 
            src={images[currentImageIndex]} 
            alt={`상품 이미지 ${currentImageIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
        </ImageModal>
      )}
    </Container>
  );
}