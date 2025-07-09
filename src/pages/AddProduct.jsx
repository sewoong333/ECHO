import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaCamera, FaChevronDown, FaDragHandle } from 'react-icons/fa';
import { ProductContext } from '../store/ProductContext';
import { UserContext } from '../store/UserContext';
import { INSTRUMENT_CATEGORIES, REGIONS } from '../utils/firebase';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Inner = styled.div`
  width: 100%;
  max-width: 480px;
  background: #fff;
  min-height: 100vh;
  padding-bottom: 80px;
`;
const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
`;
const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  margin: 0 16px 0 8px;
  color: #222;
  cursor: pointer;
`;
const Title = styled.div`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;
const TempSave = styled.div`
  color: #ccc;
  font-weight: 600;
  font-size: 15px;
  margin-right: 16px;
  cursor: pointer;
  
  &:hover {
    color: #2ed8b6;
  }
`;

const Form = styled.form`
  padding: 28px 18px 0 18px;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 2px 16px rgba(46,216,182,0.08);
  margin: 22px 0;
`;
const ImgUploadBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
  overflow-x: auto;
  padding-bottom: 8px;
`;
const ImgPreview = styled.div`
  min-width: 80px;
  width: 80px;
  height: 80px;
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: move;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ImgAddBtn = styled.label`
  min-width: 80px;
  width: 80px;
  height: 80px;
  background: #fafafa;
  border: 1.5px dashed #bbb;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 22px;
  color: #bbb;
  flex-direction: column;
`;
const ImgCount = styled.div`
  font-size: 12px;
  margin-top: 2px;
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
  display: block;
  letter-spacing: -0.5px;
`;

const RequiredMark = styled.span`
  color: #ff4d4f;
  margin-left: 4px;
`;
const Input = styled.input`
  width: 100%;
  padding: 13px 14px;
  font-size: 16px;
  border-radius: 10px;
  border: 1.5px solid #eee;
  margin-bottom: 16px;
  background: #fafafa;
  box-sizing: border-box;
  color: #222;
  
  &:focus {
    border: 1.5px solid #ff7e36;
    background: #fff;
    outline: none;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 13px 14px;
  font-size: 16px;
  border-radius: 10px;
  border: 1.5px solid #eee;
  margin-bottom: 16px;
  background: #fafafa;
  box-sizing: border-box;
  color: #222;
  cursor: pointer;
  
  &:focus {
    border: 1.5px solid #ff7e36;
    background: #fff;
    outline: none;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  min-height: 90px;
  padding: 13px 14px;
  font-size: 16px;
  border-radius: 10px;
  border: 1.5px solid #eee;
  margin-bottom: 16px;
  background: #fafafa;
  box-sizing: border-box;
  resize: vertical;
  color: #222;
  
  &:focus {
    border: 1.5px solid #ff7e36;
    background: #fff;
    outline: none;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px;
    min-height: 80px;
  }
`;
const Row = styled.div`
  margin-bottom: 26px;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 12px;
  
  > * {
    flex: 1;
  }
`;
const TradeTypeWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;
const TradeTypeBtn = styled.button`
  flex: 1;
  padding: 12px 0;
  border-radius: 8px;
  border: 1.5px solid ${props => props.$active ? '#2ed8b6' : '#eee'};
  background: ${props => props.$active ? '#2ed8b6' : '#fafafa'};
  color: ${props => props.$active ? '#fff' : '#888'};
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
`;

const ConditionWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const ConditionBtn = styled.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 8px;
  border: 1.5px solid ${props => props.$active ? '#2ed8b6' : '#eee'};
  background: ${props => props.$active ? '#2ed8b6' : '#fafafa'};
  color: ${props => props.$active ? '#fff' : '#666'};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
`;
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 8px;
  margin-bottom: 12px;
  cursor: pointer;
  
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #2ed8b6;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  max-width: 480px;
  padding: 18px 0;
  background: ${props => props.disabled ? '#ccc' : '#2ed8b6'};
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 16px;
  margin: 32px auto 0 auto;
  display: block;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  box-shadow: 0 4px 16px rgba(46,216,182,0.12);
  transition: all 0.2s;
  position: relative;
  z-index: 10;
  min-height: 48px;

  &:hover:not(:disabled) {
    background: #26c4a5;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    padding: 16px 0;
    margin: 24px auto 0 auto;
  }
`;
const ErrorMsg = styled.div`
  color: #ff4d4f;
  font-size: 13px;
  margin: 4px 0 0 2px;
`;

const SuccessMsg = styled.div`
  color: #52c41a;
  font-size: 13px;
  margin: 4px 0 0 2px;
`;

const InfoText = styled.div`
  color: #666;
  font-size: 12px;
  margin-top: 4px;
  line-height: 1.4;
`;

const PriceHelp = styled.div`
  background: #f0f9ff;
  border: 1px solid #e1f5fe;
  border-radius: 8px;
  padding: 12px;
  margin-top: 8px;
  font-size: 13px;
  color: #0277bd;
`;

const TagInput = styled.div`
  min-height: 40px;
  padding: 8px 12px;
  border: 1.5px solid #eee;
  border-radius: 10px;
  background: #fafafa;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  
  &:focus-within {
    border-color: #ff7e36;
    background: #fff;
  }
`;

const Tag = styled.span`
  background: #2ed8b6;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TagDeleteBtn = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 10px;
  cursor: pointer;
`;

const TagInputField = styled.input`
  border: none;
  background: none;
  flex: 1;
  min-width: 80px;
  padding: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  max-width: 400px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 700;
`;

const ModalButton = styled.button`
  width: 100%;
  padding: 12px;
  margin: 4px 0;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fff;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #f8f9fa;
    border-color: #2ed8b6;
  }
`;

const CloseModalBtn = styled.button`
  width: 100%;
  padding: 12px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  cursor: pointer;
  font-weight: 600;
`;

export default function AddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const fileInput = useRef();
  
  // 기본 상품 정보
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [condition, setCondition] = useState('상');
  const [conditionDescription, setConditionDescription] = useState('');
  const [yearOfManufacture, setYearOfManufacture] = useState('');
  
  // 가격 및 거래 정보
  const [tradeType, setTradeType] = useState('sell');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [isPriceNegotiable, setIsPriceNegotiable] = useState(true);
  const [isDeliveryAvailable, setIsDeliveryAvailable] = useState(false);
  const [deliveryFee, setDeliveryFee] = useState('');
  const [preferredTransactionType, setPreferredTransactionType] = useState('direct');
  
  // 위치 정보
  const [region, setRegion] = useState('');
  const [district, setDistrict] = useState('');
  
  // 추가 정보
  const [accessories, setAccessories] = useState([]);
  const [defects, setDefects] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  
  // 이미지
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  
  // UI 상태
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [touched, setTouched] = useState({});
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showRegionModal, setShowRegionModal] = useState(false);
  
  // 카테고리 데이터
  const categories = Object.values(INSTRUMENT_CATEGORIES);
  const regions = Object.values(REGIONS);

  // 이미지 관리
  const handleImageChange = e => {
    const files = Array.from(e.target.files).slice(0, 10 - images.length);
    const readers = files.map(file => {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = ev => resolve({ url: ev.target.result, file });
        reader.readAsDataURL(file);
      });
    });
    Promise.all(readers).then(newImgs => setImages([...images, ...newImgs]));
    fileInput.current.value = '';
  };

  // 임시저장 기능
  const handleTempSave = () => {
    const tempData = {
      title, description, category, subcategory, brand, model,
      condition, conditionDescription, yearOfManufacture,
      tradeType, price, originalPrice, isPriceNegotiable,
      region, district, accessories, defects, tags,
      isUrgent, isDeliveryAvailable, deliveryFee
    };
    
    localStorage.setItem('echo_temp_product', JSON.stringify(tempData));
    setSuccess('임시저장되었습니다.');
    setTimeout(() => setSuccess(''), 2000);
  };

  // 임시저장 데이터 불러오기
  React.useEffect(() => {
    const tempData = localStorage.getItem('echo_temp_product');
    if (tempData) {
      try {
        const parsed = JSON.parse(tempData);
        setTitle(parsed.title || '');
        setDescription(parsed.description || '');
        setCategory(parsed.category || '');
        setSubcategory(parsed.subcategory || '');
        setBrand(parsed.brand || '');
        setModel(parsed.model || '');
        setCondition(parsed.condition || '상');
        setConditionDescription(parsed.conditionDescription || '');
        setYearOfManufacture(parsed.yearOfManufacture || '');
        setTradeType(parsed.tradeType || 'sell');
        setPrice(parsed.price || '');
        setOriginalPrice(parsed.originalPrice || '');
        setIsPriceNegotiable(parsed.isPriceNegotiable ?? true);
        setRegion(parsed.region || '');
        setDistrict(parsed.district || '');
        setAccessories(parsed.accessories || []);
        setDefects(parsed.defects || []);
        setTags(parsed.tags || []);
        setIsUrgent(parsed.isUrgent || false);
        setIsDeliveryAvailable(parsed.isDeliveryAvailable || false);
        setDeliveryFee(parsed.deliveryFee || '');
      } catch (error) {
        console.error('임시저장 데이터 복원 실패:', error);
      }
    }
  }, []);

  const removeImage = idx => {
    setImages(images.filter((_, i) => i !== idx));
  };

  const addImageFromUrl = () => {
    if (imageUrl && images.length < 10) {
      const newImage = { url: imageUrl, file: null };
      setImages([...images, newImage]);
      setImageUrl('');
    }
  };

  // 태그 관리
  const addTag = (tag) => {
    if (tag && !tags.includes(tag) && tags.length < 10) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      addTag(tagInput.trim());
      setTagInput('');
    }
  };

  // 폼 검증
  const isValid = () => {
    const isTitleValid = title && title.trim().length >= 2;
    const isDescValid = description && description.trim().length >= 10;
    const isCategoryValid = category;
    const isPriceValid = tradeType === 'give' || (price && parseInt(price) > 0);
    const isLocationValid = region && district;
    
    return isTitleValid && isDescValid && isCategoryValid && isPriceValid && isLocationValid;
  };

  const handleBlur = e => {
    setTouched(t => ({ ...t, [e.target.name]: true }));
  };

  // 서브카테고리 업데이트
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setSubcategory(''); // 카테고리 변경 시 서브카테고리 초기화
    setShowCategoryModal(false);
  };

  // 지역 선택 처리
  const handleRegionChange = (selectedRegion) => {
    setRegion(selectedRegion);
    setDistrict(''); // 지역 변경 시 구 초기화
  };

  // 상품 등록 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid()) {
      setTouched({ 
        title: true, 
        description: true, 
        category: true, 
        price: true,
        region: true,
        district: true 
      });
      
      if (!title || title.trim().length < 2) {
        setError('제목을 2글자 이상 입력해주세요.');
      } else if (!description || description.trim().length < 10) {
        setError('상세설명을 10글자 이상 입력해주세요.');
      } else if (!category) {
        setError('카테고리를 선택해주세요.');
      } else if (tradeType === 'sell' && (!price || parseInt(price) <= 0)) {
        setError('올바른 가격을 입력해주세요.');
      } else if (!region || !district) {
        setError('거래 지역을 선택해주세요.');
      }
      return;
    }

    if (!user || !user.uid) {
      setError('로그인이 필요합니다.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // 이미지 처리 (간소화된 버전)
      let imageUrls = images.map(img => img.url).filter(url => url);
      if (imageUrls.length === 0) {
        imageUrls = ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80'];
      }

      // 상품 데이터 구성 (기존 구조와 호환)
      const productData = {
        title: title.trim(),
        description: description.trim(),
        category,
        subcategory,
        brand: brand.trim(),
        model: model.trim(),
        condition,
        conditionDescription: conditionDescription.trim(),
        yearOfManufacture: yearOfManufacture ? parseInt(yearOfManufacture) : null,
        price: tradeType === 'sell' ? parseInt(price) : 0,
        originalPrice: originalPrice ? parseInt(originalPrice) : null,
        isPriceNegotiable,
        images: imageUrls,
        region,
        district,
        isDeliveryAvailable,
        deliveryFee: deliveryFee ? parseInt(deliveryFee) : 0,
        isUrgent,
        tradeType,
        // 기존 필드들과의 호환성
        allowOffer: isPriceNegotiable,
        place: `${region} ${district}`,
        location: `${region} ${district}`,
        time: '방금 전',
        author: user.nickname || user.displayName || '나',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      await addProduct(productData);
      
      setSuccess('상품이 성공적으로 등록되었습니다!');
      setError('');
      
      setTimeout(() => {
        navigate('/', { 
          state: { 
            message: '상품이 성공적으로 등록되었습니다!',
            type: 'success'
          }
        });
      }, 1500);
      
    } catch (err) {
      console.error('상품 등록 실패:', err);
      setError('상품 등록에 실패했습니다. 다시 시도해주세요.');
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Inner>
        <TopBar>
          <CloseBtn onClick={() => navigate(-1)} aria-label="닫기">
            <FaTimes />
          </CloseBtn>
          <Title>상품 등록</Title>
          <TempSave onClick={handleTempSave}>임시저장</TempSave>
        </TopBar>

        <Form onSubmit={handleSubmit}>
          {/* 이미지 업로드 섹션 */}
          <Row>
            <Label>
              상품 사진<RequiredMark>*</RequiredMark>
            </Label>
            <ImgUploadBox>
              {images.map((img, i) => (
                <ImgPreview key={i} style={{position: 'relative'}}>
                  <Img src={img.url} alt="preview" />
                  {i === 0 && (
                    <span style={{
                      position: 'absolute',
                      bottom: 4,
                      left: 4,
                      background: '#2ed8b6',
                      color: '#fff',
                      fontSize: 11,
                      padding: '2px 6px',
                      borderRadius: 4,
                      fontWeight: 600
                    }}>대표</span>
                  )}
                  <CloseBtn 
                    style={{
                      position: 'absolute',
                      top: 4,
                      right: 4,
                      fontSize: 12,
                      background: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      borderRadius: '50%',
                      width: 20,
                      height: 20,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 0,
                      margin: 0
                    }} 
                    type="button" 
                    onClick={() => removeImage(i)} 
                    aria-label="사진 삭제"
                  >
                    <FaTimes />
                  </CloseBtn>
                </ImgPreview>
              ))}
              {images.length < 10 && (
                <ImgAddBtn>
                  <input 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    hidden 
                    ref={fileInput} 
                    onChange={handleImageChange} 
                  />
                  <FaCamera />
                  <ImgCount>{images.length}/10</ImgCount>
                </ImgAddBtn>
              )}
            </ImgUploadBox>
            
            {/* URL 이미지 추가 */}
            <Label>이미지 URL 직접 입력 (선택사항)</Label>
            <FlexRow>
              <Input 
                type="url" 
                placeholder="https://example.com/image.jpg" 
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
              />
              <button 
                type="button" 
                onClick={addImageFromUrl}
                disabled={!imageUrl || images.length >= 10}
                style={{
                  padding: '12px 16px',
                  background: imageUrl && images.length < 10 ? '#2ed8b6' : '#ccc',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: imageUrl && images.length < 10 ? 'pointer' : 'not-allowed',
                  minWidth: 80
                }}
              >
                추가
              </button>
            </FlexRow>
            <InfoText>
              첫 번째 사진이 대표 사진으로 설정됩니다. 최대 10장까지 등록 가능합니다.
            </InfoText>
          </Row>

          {/* 카테고리 선택 */}
          <Row>
            <Label>
              카테고리<RequiredMark>*</RequiredMark>
            </Label>
            <Select 
              value={category} 
              onChange={e => handleCategoryChange(e.target.value)}
              name="category"
              onBlur={handleBlur}
              style={{
                borderColor: touched.category && !category ? '#ff4d4f' : '#eee'
              }}
            >
              <option value="">카테고리를 선택하세요</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </Select>
            {touched.category && !category && (
              <ErrorMsg>카테고리를 선택해주세요.</ErrorMsg>
            )}
            
            {/* 서브카테고리 */}
            {category && (
              <Select 
                value={subcategory} 
                onChange={e => setSubcategory(e.target.value)}
              >
                <option value="">세부 카테고리 (선택사항)</option>
                {categories.find(cat => cat.id === category)?.subcategories.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </Select>
            )}
          </Row>

          {/* 제목 */}
          <Row>
            <Label htmlFor="title">
              제목<RequiredMark>*</RequiredMark>
            </Label>
            <Input 
              id="title" 
              name="title" 
              placeholder="예: 야마하 FG800 통기타, 거의 새제품" 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              onBlur={handleBlur} 
              maxLength={50}
              style={{
                borderColor: touched.title && (!title || title.trim().length < 2) ? '#ff4d4f' : '#eee'
              }}
            />
            {touched.title && (!title || title.trim().length < 2) && (
              <ErrorMsg>제목을 2글자 이상 입력해주세요. ({title.trim().length}/2)</ErrorMsg>
            )}
            <InfoText>상품명, 브랜드, 모델명을 포함해서 작성하면 더 많은 관심을 받을 수 있어요.</InfoText>
          </Row>

          {/* 브랜드 및 모델 */}
          <Row>
            <FlexRow>
              <div>
                <Label htmlFor="brand">브랜드</Label>
                <Input 
                  id="brand"
                  placeholder="예: 야마하, 펜더"
                  value={brand}
                  onChange={e => setBrand(e.target.value)}
                  maxLength={30}
                />
              </div>
              <div>
                <Label htmlFor="model">모델명</Label>
                <Input 
                  id="model"
                  placeholder="예: FG800, Stratocaster"
                  value={model}
                  onChange={e => setModel(e.target.value)}
                  maxLength={30}
                />
              </div>
            </FlexRow>
          </Row>

          {/* 상품 상태 */}
          <Row>
            <Label>상품 상태</Label>
            <ConditionWrap>
              <ConditionBtn 
                type="button" 
                $active={condition === '상'} 
                onClick={() => setCondition('상')}
              >
                상 (거의 새제품)
              </ConditionBtn>
              <ConditionBtn 
                type="button" 
                $active={condition === '중'} 
                onClick={() => setCondition('중')}
              >
                중 (사용감 있음)
              </ConditionBtn>
              <ConditionBtn 
                type="button" 
                $active={condition === '하'} 
                onClick={() => setCondition('하')}
              >
                하 (수리 필요)
              </ConditionBtn>
            </ConditionWrap>
            
            <Textarea
              placeholder="상품 상태에 대한 자세한 설명을 입력해주세요. (선택사항)"
              value={conditionDescription}
              onChange={e => setConditionDescription(e.target.value)}
              maxLength={200}
              style={{ minHeight: '60px' }}
            />
          </Row>

          {/* 제조년도 */}
          <Row>
            <Label htmlFor="year">제조년도 (선택사항)</Label>
            <Input 
              id="year"
              type="number"
              placeholder="예: 2020"
              value={yearOfManufacture}
              onChange={e => setYearOfManufacture(e.target.value)}
              min="1900"
              max={new Date().getFullYear()}
            />
          </Row>

          {/* 상세 설명 */}
          <Row>
            <Label htmlFor="description">
              상세 설명<RequiredMark>*</RequiredMark>
            </Label>
            <Textarea 
              id="description" 
              name="description" 
              placeholder={`악기의 상세한 설명을 작성해주세요.

• 구매 시기와 사용 빈도
• 관리 상태와 보관 환경  
• 포함된 구성품 (케이스, 픽 등)
• 교환/환불 불가 사유
• 직거래 가능 시간대

예시: 2021년 구매했고 집에서만 연습용으로 사용했습니다. 
케이스와 여분 현이 포함되어 있고, 생활기스 약간 있지만 소리는 깨끗합니다.`} 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              onBlur={handleBlur} 
              maxLength={2000}
              style={{
                minHeight: '120px',
                borderColor: touched.description && (!description || description.trim().length < 10) ? '#ff4d4f' : '#eee'
              }}
            />
            {touched.description && (!description || description.trim().length < 10) && (
              <ErrorMsg>상세설명을 10글자 이상 입력해주세요. ({description.trim().length}/10)</ErrorMsg>
            )}
            <InfoText>
              자세한 설명일수록 신뢰도가 높아져요. 사진으로 보여주기 어려운 부분을 글로 설명해주세요.
            </InfoText>
          </Row>

          {/* 거래 방식 */}
          <Row>
            <Label>
              거래 방식<RequiredMark>*</RequiredMark>
            </Label>
            <TradeTypeWrap>
              <TradeTypeBtn 
                type="button" 
                $active={tradeType === 'sell'} 
                onClick={() => setTradeType('sell')}
              >
                💰 판매하기
              </TradeTypeBtn>
              <TradeTypeBtn 
                type="button" 
                $active={tradeType === 'give'} 
                onClick={() => setTradeType('give')}
              >
                🎁 나눔하기
              </TradeTypeBtn>
            </TradeTypeWrap>
          </Row>

          {/* 가격 정보 (판매하기일 때만) */}
          {tradeType === 'sell' && (
            <Row>
              <Label htmlFor="price">
                판매 가격<RequiredMark>*</RequiredMark>
              </Label>
              <Input 
                id="price" 
                name="price" 
                type="number" 
                placeholder="₩ 가격을 입력하세요" 
                value={price} 
                onChange={e => setPrice(e.target.value)} 
                onBlur={handleBlur} 
                min={0}
                style={{
                  borderColor: touched.price && (!price || parseInt(price) <= 0) ? '#ff4d4f' : '#eee'
                }}
              />
              {touched.price && (!price || parseInt(price) <= 0) && (
                <ErrorMsg>올바른 가격을 입력해주세요.</ErrorMsg>
              )}
              
              <Label htmlFor="originalPrice">정가 (선택사항)</Label>
              <Input 
                id="originalPrice"
                type="number" 
                placeholder="₩ 구매했을 때 가격" 
                value={originalPrice} 
                onChange={e => setOriginalPrice(e.target.value)} 
                min={0}
              />
              
              <CheckboxLabel>
                <input 
                  type="checkbox" 
                  checked={isPriceNegotiable} 
                  onChange={e => setIsPriceNegotiable(e.target.checked)} 
                />
                가격 제안 받기
              </CheckboxLabel>
              
              <PriceHelp>
                💡 <strong>가격 책정 팁</strong><br/>
                • 비슷한 상품의 시세를 확인해보세요<br/>
                • 상태가 좋다면 정가의 60-80% 정도가 적정해요<br/>
                • 가격 제안을 받으면 더 빨리 거래될 수 있어요
              </PriceHelp>
            </Row>
          )}

          {/* 거래 희망 지역 */}
          <Row>
            <Label>
              거래 희망 지역<RequiredMark>*</RequiredMark>
            </Label>
            <FlexRow>
              <Select 
                value={region} 
                onChange={e => handleRegionChange(e.target.value)}
                name="region"
                onBlur={handleBlur}
                style={{
                  borderColor: touched.region && !region ? '#ff4d4f' : '#eee'
                }}
              >
                <option value="">시/도 선택</option>
                {regions.map(reg => (
                  <option key={reg.id} value={reg.id}>{reg.name}</option>
                ))}
              </Select>
              
              <Select 
                value={district} 
                onChange={e => setDistrict(e.target.value)}
                name="district"
                onBlur={handleBlur}
                disabled={!region}
                style={{
                  borderColor: touched.district && !district ? '#ff4d4f' : '#eee'
                }}
              >
                <option value="">구/군 선택</option>
                {region && regions.find(reg => reg.id === region)?.districts.map(dist => (
                  <option key={dist} value={dist}>{dist}</option>
                ))}
              </Select>
            </FlexRow>
            {(touched.region && !region) || (touched.district && !district) && (
              <ErrorMsg>거래 지역을 선택해주세요.</ErrorMsg>
            )}
          </Row>

          {/* 거래 옵션 */}
          <Row>
            <Label>거래 옵션</Label>
            <CheckboxLabel>
              <input 
                type="checkbox" 
                checked={isDeliveryAvailable} 
                onChange={e => setIsDeliveryAvailable(e.target.checked)} 
              />
              택배 거래 가능
            </CheckboxLabel>
            
            {isDeliveryAvailable && (
              <Input 
                type="number"
                placeholder="택배비 (원)"
                value={deliveryFee}
                onChange={e => setDeliveryFee(e.target.value)}
                min={0}
              />
            )}
            
            <CheckboxLabel>
              <input 
                type="checkbox" 
                checked={isUrgent} 
                onChange={e => setIsUrgent(e.target.checked)} 
              />
              🔥 급매 (빠른 거래 희망)
            </CheckboxLabel>
          </Row>

          {/* 에러/성공 메시지 */}
          {error && <ErrorMsg>{error}</ErrorMsg>}
          {success && <SuccessMsg>{success}</SuccessMsg>}

          {/* 등록 버튼 */}
          <SubmitBtn type="submit" disabled={!isValid() || loading}>
            {loading ? '등록 중...' : '작성 완료'}
          </SubmitBtn>
        </Form>
      </Inner>
    </Wrapper>
  );
} 