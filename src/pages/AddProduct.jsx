import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { 
  FaTimes, 
  FaCamera, 
  FaChevronDown, 
  FaMapMarkerAlt,
  FaDollarSign,
  FaTag,
  FaInfo,
  FaCheck,
  FaPlus,
  FaMinus,
  FaExclamationTriangle,
} from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import { ProductContext } from "../store/ProductContext";
import { UserContext } from "../store/UserContext";
import { INSTRUMENT_CATEGORIES, REGIONS, auth } from "../utils/firebase";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  box-sizing: border-box;
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

const CloseButton = styled.button`
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

const CompleteButton = styled.button`
  background: ${props => props.disabled ? 'var(--color-bg-tertiary)' : 'linear-gradient(135deg, var(--color-mint-main) 0%, var(--color-mint-dark) 100%)'};
  color: ${props => props.disabled ? 'var(--color-text-tertiary)' : 'var(--color-text-inverse)'};
  border: none;
  border-radius: var(--radius-xl);
  padding: var(--space-lg) var(--space-xl);
  font-size: 1rem;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all var(--transition-fast);
  box-shadow: ${props => props.disabled ? 'none' : 'var(--shadow-md)'};
  width: 100%;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: ${props => props.disabled ? '#f5f5f5' : 'linear-gradient(135deg, #25b89a 0%, #1ea085 100%)'};
    transform: ${props => props.disabled ? 'none' : 'translateY(-1px)'};
    box-shadow: ${props => props.disabled ? 'none' : '0 4px 16px rgba(46, 216, 182, 0.3)'};
  }
  
  &:hover:before {
    left: 100%;
  }
  
  &:active {
    transform: ${props => props.disabled ? 'none' : 'translateY(0)'};
  }
`;

const ScrollContainer = styled.div`
  padding: 16px;
  padding-bottom: 100px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Required = styled.span`
  color: #2ed8b6;
  font-size: 14px;
`;

const ImageUploadSection = styled.div`
  margin-bottom: 24px;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`;

const ImageSlot = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid ${props => props.hasImage ? '#e0e0e0' : '#d1d5db'};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background: ${props => props.hasImage ? 'transparent' : '#f9fafb'};
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #2ed8b6;
    background: ${props => props.hasImage ? 'transparent' : '#f0fffe'};
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ImagePlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #9ca3af;
  text-align: center;
  padding: 8px;
`;

const ImageCounter = styled.div`
  font-size: 13px;
  color: #666;
  text-align: left;
  font-weight: 500;
  margin-bottom: 4px;
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  box-sizing: border-box;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #333;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.08);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #333;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s ease;
  line-height: 1.5;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.08);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 16px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.08);
  }
`;

const PriceInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PriceInput = styled(Input)`
  text-align: left;
  padding-left: 16px;
`;

const CurrencySymbol = styled.div`
  position: absolute;
  right: 16px;
  color: #666;
  font-weight: 600;
  display: none;
`;

const ConditionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const ConditionButton = styled.button`
  padding: 16px 12px;
  border: 2px solid ${props => props.selected ? '#2ed8b6' : '#e0e0e0'};
  border-radius: 12px;
  background: ${props => props.selected ? '#f0fffe' : 'white'};
  color: ${props => props.selected ? '#2ed8b6' : '#666'};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  
  &:hover {
    border-color: #2ed8b6;
    color: #2ed8b6;
    background: #f0fffe;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(46, 216, 182, 0.15);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`;

const Tag = styled.div`
  background: #f0f0f0;
  color: #666;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TagInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  color: #333;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
  }
`;

const InfoBox = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 16px;
  margin-top: 12px;
`;

const InfoText = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;
  line-height: 1.4;
`;

const ErrorText = styled.div`
  color: #f44336;
  font-size: 12px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ProgressBar = styled.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 460px;
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid #f0f0f0;
  backdrop-filter: blur(10px);
`;

const ProgressLabel = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #2ed8b6 0%, #25b89a 100%);
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

const HiddenInput = styled.input`
  display: none;
`;

const conditions = [
  { value: 'excellent', label: '매우 좋음', description: '거의 새 제품' },
  { value: 'good', label: '좋음', description: '사용감 적음' },
  { value: 'fair', label: '보통', description: '사용감 있음' },
  { value: 'poor', label: '나쁨', description: '수리 필요' },
];

export default function AddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [imageUrlInput, setImageUrlInput] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    condition: '',
    region: user.region || '',
    district: user.district || '',
    negotiable: true,
    delivery: false,
    pickup: true,
  });

  // 입력값 변경 핸들러
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // 에러 제거
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    
    files.forEach(file => {
      if (images.length >= 10) {
        alert('사진은 최대 10장까지 등록할 수 있습니다.');
        return;
      }
      
      if (file.size > 10 * 1024 * 1024) { // 10MB까지 허용
        alert('파일 크기는 10MB를 초과할 수 없습니다.');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        // 이미지를 압축하여 저장
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          // 해상도 개선 - 더 큰 크기로 압축 (800px)
          const maxSize = 800;
          let { width, height } = img;
          
          if (width > height) {
            if (width > maxSize) {
              height = (height * maxSize) / width;
              width = maxSize;
            }
          } else {
            if (height > maxSize) {
              width = (width * maxSize) / height;
              height = maxSize;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          
          ctx.drawImage(img, 0, 0, width, height);
          
          // 품질 개선 - JPEG 품질 75%로 설정
          let compressedDataUrl = canvas.toDataURL('image/jpeg', 0.75);
          
          // 파일 크기가 너무 크면 품질을 60%로 줄임
          if (compressedDataUrl.length > 400000) { // 약 300KB
            compressedDataUrl = canvas.toDataURL('image/jpeg', 0.6);
          }
          
          // 그래도 크다면 품질을 45%로 줄임
          if (compressedDataUrl.length > 600000) { // 약 450KB
            compressedDataUrl = canvas.toDataURL('image/jpeg', 0.45);
          }
          
          setImages(prev => [...prev, {
            id: Date.now() + Math.random(),
            file: file,
            url: compressedDataUrl,
            uploaded: false,
          }]);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  // 이미지 제거
  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  // 태그 추가
  const _addTag = () => {
    const tag = tagInput.trim();
    if (tag && !tags.includes(tag) && tags.length < 5) {
      setTags(prev => [...prev, tag]);
      setTagInput('');
    } else if (tags.length >= 5) {
      alert('태그는 최대 5개까지 추가할 수 있습니다.');
    }
  };

  // 태그 제거
  const _removeTag = (tag) => {
    setTags(prev => prev.filter(t => t !== tag));
  };

  // 이미지 URL 추가
  const addImageFromUrl = () => {
    const url = imageUrlInput.trim();
    if (!url) return;
    
    if (images.length >= 10) {
      alert('사진은 최대 10장까지 등록할 수 있습니다.');
      return;
    }
    
    // URL 유효성 검사
    if (!url.match(/\.(jpeg|jpg|gif|png|webp)$/i) && !url.includes('imgur') && !url.includes('cloudinary')) {
      alert('올바른 이미지 URL을 입력해주세요. (jpg, png, gif, webp 확장자)');
      return;
    }
    
    setImages(prev => [...prev, {
      id: Date.now() + Math.random(),
      file: null,
      url: url,
      uploaded: true,
    }]);
    
    setImageUrlInput('');
  };

  // 폼 유효성 검사
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = '제목을 입력해주세요.';
    } else if (formData.title.length < 2) {
      newErrors.title = '제목은 2글자 이상 입력해주세요.';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = '상품 설명을 입력해주세요.';
    } else if (formData.description.length < 10) {
      newErrors.description = '상품 설명은 10글자 이상 입력해주세요.';
    }
    
    if (!formData.category) {
      newErrors.category = '카테고리를 선택해주세요.';
    }
    
    if (!formData.price) {
      newErrors.price = '가격을 입력해주세요.';
    } else if (isNaN(formData.price) || parseInt(formData.price) < 0) {
      newErrors.price = '올바른 가격을 입력해주세요.';
    }
    
    if (!formData.condition) {
      newErrors.condition = '상품 상태를 선택해주세요.';
    }
    
    if (images.length === 0) {
      newErrors.images = '사진을 최소 1장 이상 등록해주세요.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 진행률 계산
  const calculateProgress = () => {
    let completed = 0;
    const total = 7;
    
    if (formData.title.trim()) completed++;
    if (formData.description.trim()) completed++;
    if (formData.category) completed++;
    if (formData.price) completed++;
    if (formData.condition) completed++;
    if (images.length > 0) completed++;
    if (formData.region && formData.district) completed++;
    
    return Math.round((completed / total) * 100);
  };

  // 상품 등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    console.log('🔍 현재 사용자 상태 확인:', {
      user: user,
      isLoggedIn: user?.isLoggedIn,
      uid: user?.uid,
      email: user?.email,
      nickname: user?.nickname
    });
    
    if (!user?.isLoggedIn || !user?.uid) {
      console.log('❌ 로그인 체크 실패:', { 
        isLoggedIn: user?.isLoggedIn, 
        uid: user?.uid,
        userObject: user
      });
      alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
      navigate('/login');
      return;
    }
    
    console.log('✅ 사용자 인증 확인됨 - 상품 등록 진행');
    
    setLoading(true);
    
    try {
      const productData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        price: parseInt(formData.price),
        condition: formData.condition,
        region: formData.region || "",
        district: formData.district || "",
        images: images.slice(0, 3).map(img => img.url), // 최대 3개, 압축된 이미지
        tags: tags,
        isPriceNegotiable: formData.negotiable || false,
        isDeliveryAvailable: formData.delivery || false,
        preferredTransactionType: formData.pickup ? "direct" : "delivery",
      };
      
      console.log('📦 전송할 상품 데이터:', productData);
      console.log('👤 현재 사용자:', user);
      console.log('🔐 Firebase Auth 상태:', {
        currentUser: auth.currentUser,
        uid: auth.currentUser?.uid,
        email: auth.currentUser?.email
      });
      
      const newProduct = await addProduct(productData);
      
      console.log('✅ 상품 등록 성공:', newProduct);
      alert('상품이 성공적으로 등록되었습니다!');
      navigate('/');
      
    } catch (error) {
      console.error('❌ 상품 등록 실패:', error);
      console.error('❌ 에러 스택:', error.stack);
      alert(`상품 등록에 실패했습니다: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const progress = calculateProgress();
  const isFormValid = formData.title.trim().length >= 2 && 
                       formData.description.trim().length >= 10 && 
                       formData.category && 
                       formData.price && 
                       parseInt(formData.price) > 0 && 
                       formData.condition && 
                       images.length > 0;

  return (
    <Container>
      <Inner>
        <Header>
          <CloseButton onClick={() => navigate(-1)}>
            <FaTimes />
          </CloseButton>
          <HeaderTitle>상품등록 ({progress}%)</HeaderTitle>
          <div></div>
        </Header>

        <form onSubmit={handleSubmit}>
          <ScrollContainer>
            {/* 사진 업로드 */}
          <Section>
            <SectionTitle>
              <FaCamera />
              사진 <Required>*</Required>
            </SectionTitle>
            
            <ImageGrid>
              {images.map((image, index) => (
                <ImageSlot key={image.id} hasImage={true}>
                  <ImagePreview src={image.url} alt={`상품 이미지 ${index + 1}`} />
                  <RemoveImageButton onClick={(e) => {
                    e.stopPropagation();
                    removeImage(image.id);
                  }}>
                    <FaTimes />
                  </RemoveImageButton>
                  {index === 0 && (
                    <div style={{
                      position: 'absolute',
                      bottom: '4px',
                      left: '4px',
                      background: 'rgba(46, 216, 182, 0.9)',
                      color: 'white',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '10px',
                      fontWeight: '600',
                    }}>
                      대표
                    </div>
                  )}
                </ImageSlot>
              ))}
              
              {images.length < 10 && (
                <ImageSlot 
                  hasImage={false}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <ImagePlaceholder>
                    <FaCamera size={24} />
                    <div style={{ fontSize: '10px', fontWeight: '500', lineHeight: 1.2 }}>
                      {images.length === 0 ? '사진 추가' : `${images.length}/10`}
                    </div>
                  </ImagePlaceholder>
                </ImageSlot>
              )}
            </ImageGrid>
            
            <ImageCounter>사진은 최대 10장까지 등록 가능해요.</ImageCounter>
            
            {/* 이미지 URL 입력 */}
            <div style={{ marginTop: '16px', padding: '16px', background: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                또는 이미지 URL로 추가하기
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={imageUrlInput}
                  onChange={(e) => setImageUrlInput(e.target.value)}
                  style={{ flex: 1 }}
                />
                <button
                  type="button"
                  onClick={addImageFromUrl}
                  style={{
                    padding: '8px 16px',
                    background: 'var(--color-mint-main)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  추가
                </button>
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                무료 이미지 호스팅: imgur.com, cloudinary.com 등 사용 권장
              </div>
            </div>
            
            {errors.images && (
              <ErrorText>
                <FaExclamationTriangle />
                {errors.images}
              </ErrorText>
            )}
            
            <HiddenInput
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
          </Section>

          {/* 제목 */}
          <FormGroup>
            <Label>제목 <Required>*</Required></Label>
            <Input
              type="text"
              placeholder="상품 제목을 입력하세요"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              maxLength={40}
            />
            <div style={{ textAlign: 'right', fontSize: '12px', color: '#999', marginTop: '4px' }}>
              {formData.title.length}/40
            </div>
            {errors.title && (
              <ErrorText>
                <FaExclamationTriangle />
                {errors.title}
              </ErrorText>
            )}
          </FormGroup>

          {/* 카테고리 */}
          <FormGroup>
            <Label>카테고리 <Required>*</Required></Label>
            <Select
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
            >
              <option value="">카테고리를 선택하세요</option>
              {Object.values(INSTRUMENT_CATEGORIES).map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
            {errors.category && (
              <ErrorText>
                <FaExclamationTriangle />
                {errors.category}
              </ErrorText>
            )}
          </FormGroup>

          {/* 가격 */}
          <FormGroup>
            <Label>가격 <Required>*</Required></Label>
            <PriceInputContainer>
              <PriceInput
                type="number"
                placeholder="₩ 가격을 입력해주세요."
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
              />
            </PriceInputContainer>
            
            {errors.price && (
              <ErrorText>
                <FaExclamationTriangle />
                {errors.price}
              </ErrorText>
            )}
          </FormGroup>

          {/* 상품 상태 */}
          <FormGroup>
            <Label>상품 상태 <Required>*</Required></Label>
            <ConditionGrid>
              {conditions.map(condition => (
                <ConditionButton
                  key={condition.value}
                  type="button"
                  selected={formData.condition === condition.value}
                  onClick={() => handleInputChange('condition', condition.value)}
                >
                  <div>{condition.label}</div>
                  <div style={{ fontSize: '11px', opacity: 0.7, marginTop: '4px' }}>
                    {condition.description}
                  </div>
                </ConditionButton>
              ))}
            </ConditionGrid>
            {errors.condition && (
              <ErrorText>
                <FaExclamationTriangle />
                {errors.condition}
              </ErrorText>
            )}
          </FormGroup>

          {/* 상품 설명 */}
          <FormGroup>
            <Label>자세한 설명 <Required>*</Required></Label>
            <TextArea
              placeholder="구로동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)\n\n신뢰할 수 있는 거래를 위해 자세히 적어주세요. 과학기술정보통신부, 한국 인터넷진흥원과 함께 해요."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              maxLength={1000}
              rows={8}
            />
            <div style={{ textAlign: 'right', fontSize: '12px', color: '#999', marginTop: '4px' }}>
              {formData.description.length}/1000
            </div>
            {errors.description && (
              <ErrorText>
                <FaExclamationTriangle />
                {errors.description}
              </ErrorText>
            )}
          </FormGroup>

          {/* 거래 희망 장소 */}
          <FormGroup>
            <Label>거래 희망 장소 <span style={{ color: '#999', fontSize: '12px' }}>삭제</span></Label>
            <div style={{
              padding: '16px',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              background: '#f8f9fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}>
              <div>
                <div style={{ fontSize: '16px', color: '#333', fontWeight: '500' }}>구로동</div>
                <div style={{ fontSize: '12px', color: '#666' }}>서울특별시 구로구 구로동</div>
              </div>
              <FaChevronDown color="#666" />
            </div>
            
            <div style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
              보여줄 동네 선택 &gt;
            </div>
            
            <div style={{ 
              marginTop: '16px',
              padding: '12px',
              background: '#fff7e6',
              borderRadius: '8px',
              border: '1px solid #ffe0b3',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px'
            }}>
              <FaExclamationTriangle color="#ff8c00" style={{ marginTop: '2px', fontSize: '12px' }} />
              <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.4' }}>
                예일음에서 동네인증이 필요해요. 지금은 글을 작성중인 구로동에만 글을 올릴 수 있어요.
              </div>
            </div>
          </FormGroup>
          </ScrollContainer>
        </form>

        {/* 등록 완료 버튼 */}
        <div style={{
          position: 'fixed',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '500px',
          padding: '16px 20px',
          background: 'white',
          borderTop: '1px solid #f0f0f0',
          boxSizing: 'border-box',
          zIndex: 100
        }}>
          <CompleteButton
            type="submit"
            disabled={!isFormValid || loading}
            onClick={handleSubmit}
            style={{
              opacity: isFormValid ? 1 : 0.5,
              cursor: isFormValid ? 'pointer' : 'not-allowed',
              width: '60% !important'
            }}
          >
            {loading ? '등록 중...' : '상품등록 완료'}
          </CompleteButton>
        </div>
      </Inner>
    </Container>
  );
}