import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../utils/firebase';
import { useUser } from '../store/UserContext';
import { designSystem2025 } from '../styles/designSystem2025';
import { toast } from 'react-hot-toast';
import { FiUpload, FiX, FiSave, FiArrowLeft } from 'react-icons/fi';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`;

const BackButton = styled.button`
  ${designSystem2025.accessibility.focusRing}
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  background: ${designSystem2025.glassmorphism.base};
  color: ${designSystem2025.colors.neutral[600]};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const Title = styled.h1`
  font-size: ${designSystem2025.typography.sizes['2xl']};
  font-weight: ${designSystem2025.typography.weights.bold};
  color: ${designSystem2025.colors.neutral[900]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const Form = styled.form`
  ${designSystem2025.glassmorphism.enhanced}
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: ${designSystem2025.typography.weights.semibold};
  color: ${designSystem2025.colors.neutral[700]};
  font-size: ${designSystem2025.typography.sizes.sm};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[300]};
  }
`;

const Input = styled.input`
  ${designSystem2025.accessibility.focusRing}
  
  padding: 16px 20px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.7);
  font-size: ${designSystem2025.typography.sizes.base};
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${designSystem2025.colors.mint[500]};
    background: rgba(255, 255, 255, 0.9);
    outline: none;
  }
  
  &::placeholder {
    color: ${designSystem2025.colors.neutral[400]};
  }
  
  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.3);
    color: ${designSystem2025.colors.neutral[100]};
    
    &:focus {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;

const TextArea = styled.textarea`
  ${designSystem2025.accessibility.focusRing}
  
  padding: 16px 20px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.7);
  font-size: ${designSystem2025.typography.sizes.base};
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${designSystem2025.colors.mint[500]};
    background: rgba(255, 255, 255, 0.9);
    outline: none;
  }
  
  &::placeholder {
    color: ${designSystem2025.colors.neutral[400]};
  }
  
  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.3);
    color: ${designSystem2025.colors.neutral[100]};
    
    &:focus {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;

const Select = styled.select`
  ${designSystem2025.accessibility.focusRing}
  
  padding: 16px 20px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.7);
  font-size: ${designSystem2025.typography.sizes.base};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${designSystem2025.colors.mint[500]};
    background: rgba(255, 255, 255, 0.9);
    outline: none;
  }
  
  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.3);
    color: ${designSystem2025.colors.neutral[100]};
    
    &:focus {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;

const ImageUploadArea = styled.div`
  border: 2px dashed ${designSystem2025.colors.neutral[300]};
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.5);
  
  &:hover {
    border-color: ${designSystem2025.colors.mint[500]};
    background: rgba(255, 255, 255, 0.7);
  }
  
  [data-theme="dark"] & {
    border-color: ${designSystem2025.colors.neutral[600]};
    background: rgba(0, 0, 0, 0.2);
    
    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  margin-top: 16px;
`;

const ImageItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  background: ${designSystem2025.colors.neutral[100]};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 0, 0, 0.8);
    transform: scale(1.1);
  }
`;

const PriceInput = styled(Input)`
  text-align: right;
  font-weight: ${designSystem2025.typography.weights.semibold};
  font-size: ${designSystem2025.typography.sizes.lg};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  ${designSystem2025.accessibility.focusRing}
  
  flex: 1;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  font-size: ${designSystem2025.typography.sizes.base};
  font-weight: ${designSystem2025.typography.weights.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  ${props => props.variant === 'primary' ? `
    background: ${designSystem2025.colors.mint[500]};
    color: white;
    
    &:hover {
      background: ${designSystem2025.colors.mint[600]};
      transform: translateY(-2px);
      box-shadow: 0 12px 24px ${designSystem2025.colors.mint[500]}40;
    }
    
    &:disabled {
      background: ${designSystem2025.colors.neutral[300]};
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  ` : `
    ${designSystem2025.glassmorphism.base}
    color: ${designSystem2025.colors.neutral[600]};
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
    }
    
    [data-theme="dark"] & {
      color: ${designSystem2025.colors.neutral[400]};
    }
  `}
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  color: white;
  font-size: ${designSystem2025.typography.sizes.lg};
`;

const categories = [
  { value: 'guitar', label: '기타' },
  { value: 'piano', label: '피아노/키보드' },
  { value: 'drums', label: '드럼' },
  { value: 'wind', label: '관악기' },
  { value: 'string', label: '현악기' },
  { value: 'audio', label: '오디오 장비' },
  { value: 'other', label: '기타' }
];

const conditions = [
  { value: 'excellent', label: '최상' },
  { value: 'good', label: '상' },
  { value: 'fair', label: '중' },
  { value: 'poor', label: '하' }
];

const ProductEdit = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();

  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    condition: '',
    images: []
  });
  const [newImages, setNewImages] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 상품 정보 불러오기
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, 'products', productId));
        
        if (!productDoc.exists()) {
          toast.error('존재하지 않는 상품입니다');
          navigate('/');
          return;
        }

        const productData = productDoc.data();
        
        // 소유자 확인
        if (productData.sellerId !== user?.uid) {
          toast.error('수정 권한이 없습니다');
          navigate('/');
          return;
        }

        setProduct(productData);
        setFormData({
          title: productData.title || '',
          description: productData.description || '',
          price: productData.price?.toString() || '',
          category: productData.category || '',
          condition: productData.condition || '',
          images: productData.images || []
        });
      } catch (error) {
        console.error('상품 정보 조회 실패:', error);
        toast.error('상품 정보를 불러오는데 실패했습니다');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    if (productId && user?.uid) {
      fetchProduct();
    }
  }, [productId, user, navigate]);

  // 입력값 변경 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 이미지 선택 처리
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const totalImages = formData.images.length + newImages.length + files.length;
    
    if (totalImages > 5) {
      toast.error('이미지는 최대 5개까지 업로드할 수 있습니다');
      return;
    }

    const imageUrls = files.map(file => ({
      file,
      url: URL.createObjectURL(file),
      isNew: true
    }));

    setNewImages(prev => [...prev, ...imageUrls]);
  };

  // 기존 이미지 제거
  const removeExistingImage = (imageUrl) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter(img => img !== imageUrl)
    }));
    setRemovedImages(prev => [...prev, imageUrl]);
  };

  // 새 이미지 제거
  const removeNewImage = (index) => {
    setNewImages(prev => {
      const newArray = [...prev];
      URL.revokeObjectURL(newArray[index].url);
      newArray.splice(index, 1);
      return newArray;
    });
  };

  // 이미지 업로드
  const uploadImages = async () => {
    const uploadPromises = newImages.map(async (imageItem) => {
      const fileName = `products/${Date.now()}_${Math.random().toString(36).substr(2, 9)}.jpg`;
      const imageRef = ref(storage, fileName);
      
      await uploadBytes(imageRef, imageItem.file);
      return await getDownloadURL(imageRef);
    });

    return Promise.all(uploadPromises);
  };

  // 제거된 이미지 삭제
  const deleteRemovedImages = async () => {
    const deletePromises = removedImages.map(async (imageUrl) => {
      try {
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      } catch (error) {
        console.warn('이미지 삭제 실패:', error);
      }
    });

    await Promise.all(deletePromises);
  };

  // 폼 제출
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 유효성 검사
    if (formData.title.length < 2) {
      toast.error('제목은 2글자 이상 입력해주세요');
      return;
    }
    
    if (formData.description.length < 10) {
      toast.error('설명은 10글자 이상 입력해주세요');
      return;
    }
    
    if (!formData.price || isNaN(formData.price) || Number(formData.price) < 1000) {
      toast.error('가격은 1,000원 이상 입력해주세요');
      return;
    }

    setSaving(true);

    try {
      // 새 이미지 업로드
      const uploadedImageUrls = await uploadImages();
      
      // 제거된 이미지 삭제
      await deleteRemovedImages();
      
      // 최종 이미지 배열
      const finalImages = [...formData.images, ...uploadedImageUrls];
      
      // Firestore 업데이트
      const productRef = doc(db, 'products', productId);
      await updateDoc(productRef, {
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        category: formData.category,
        condition: formData.condition,
        images: finalImages,
        updatedAt: new Date()
      });

      toast.success('상품이 성공적으로 수정되었습니다');
      navigate('/my-products');
    } catch (error) {
      console.error('상품 수정 실패:', error);
      toast.error('상품 수정에 실패했습니다');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Container>
        <div style={{ textAlign: 'center', padding: '64px' }}>
          상품 정보를 불러오는 중...
        </div>
      </Container>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <Container>
      {saving && (
        <LoadingOverlay>
          상품을 수정하는 중...
        </LoadingOverlay>
      )}

      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <FiArrowLeft />
          돌아가기
        </BackButton>
        <Title>상품 수정</Title>
      </Header>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>상품명 *</Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="상품명을 입력하세요"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>상품 설명 *</Label>
          <TextArea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="상품에 대한 자세한 설명을 입력하세요"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>가격 (원) *</Label>
          <PriceInput
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="0"
            min="1000"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>카테고리 *</Label>
          <Select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">카테고리를 선택하세요</option>
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>상태 *</Label>
          <Select
            name="condition"
            value={formData.condition}
            onChange={handleInputChange}
            required
          >
            <option value="">상태를 선택하세요</option>
            {conditions.map(condition => (
              <option key={condition.value} value={condition.value}>
                {condition.label}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>상품 이미지 (최대 5개)</Label>
          <ImageUploadArea onClick={() => document.getElementById('imageInput').click()}>
            <FiUpload size={32} color={designSystem2025.colors.neutral[400]} />
            <div style={{ marginTop: '12px', color: designSystem2025.colors.neutral[600] }}>
              클릭하여 이미지를 추가하세요
            </div>
          </ImageUploadArea>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />

          {(formData.images.length > 0 || newImages.length > 0) && (
            <ImageGrid>
              {/* 기존 이미지 */}
              {formData.images.map((imageUrl, index) => (
                <ImageItem key={`existing-${index}`}>
                  <Image src={imageUrl} alt={`상품 이미지 ${index + 1}`} />
                  <RemoveImageButton onClick={() => removeExistingImage(imageUrl)}>
                    <FiX />
                  </RemoveImageButton>
                </ImageItem>
              ))}
              
              {/* 새로 추가된 이미지 */}
              {newImages.map((imageItem, index) => (
                <ImageItem key={`new-${index}`}>
                  <Image src={imageItem.url} alt={`새 이미지 ${index + 1}`} />
                  <RemoveImageButton onClick={() => removeNewImage(index)}>
                    <FiX />
                  </RemoveImageButton>
                </ImageItem>
              ))}
            </ImageGrid>
          )}
        </FormGroup>

        <ButtonGroup>
          <Button type="button" onClick={() => navigate(-1)}>
            취소
          </Button>
          <Button type="submit" variant="primary" disabled={saving}>
            <FiSave />
            {saving ? '저장 중...' : '저장하기'}
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default ProductEdit;