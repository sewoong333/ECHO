import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { imageService, productService } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import TopBar from "../components/TopBar";
import { FiCamera, FiX, FiCheck } from "react-icons/fi";

const categories = [
  { value: "guitar", label: "기타" },
  { value: "bass", label: "베이스" },
  { value: "drums", label: "드럼" },
  { value: "keyboard", label: "키보드/피아노" },
  { value: "violin", label: "바이올린" },
  { value: "saxophone", label: "색소폰" },
  { value: "amplifier", label: "앰프" },
  { value: "effects", label: "이펙터" },
  { value: "accessories", label: "액세서리" },
  { value: "other", label: "기타" }
];

const conditions = [
  { value: "new", label: "새 제품" },
  { value: "like-new", label: "거의 새 제품" },
  { value: "good", label: "양호" },
  { value: "fair", label: "보통" },
  { value: "poor", label: "수리 필요" }
];

export default function ProductRegister() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  // 로그인 확인
  useEffect(() => {
    if (!user.loading && !user.isLoggedIn) {
      alert("상품 등록을 위해 로그인이 필요합니다.");
      navigate("/login");
    }
  }, [user.loading, user.isLoggedIn, navigate]);

  // 이미지 선택
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 10) {
      alert("최대 10장까지만 업로드할 수 있습니다.");
      return;
    }
    const newImages = [...images, ...files];
    const newPreviewUrls = [...previewUrls, ...files.map(file => URL.createObjectURL(file))];
    setImages(newImages);
    setPreviewUrls(newPreviewUrls);
  };

  // 이미지 삭제
  const handleRemoveImage = (idx) => {
    setImages(images.filter((_, i) => i !== idx));
    setPreviewUrls(previewUrls.filter((_, i) => i !== idx));
  };

  // 폼 검증
  const validateForm = () => {
    if (title.length < 2) return "제목을 2글자 이상 입력해주세요.";
    if (!price || Number(price) < 1000) return "가격을 1,000원 이상 입력해주세요.";
    if (description.length < 10) return "상품 설명을 10글자 이상 입력해주세요.";
    if (!category) return "카테고리를 선택해주세요.";
    if (!condition) return "상품 상태를 선택해주세요.";
    if (!location.trim()) return "거래 지역을 입력해주세요.";
    return null;
  };

  // 상품 등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errorMsg = validateForm();
    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    setLoading(true);
    try {
      if (!user?.uid) throw new Error("로그인이 필요합니다.");
      
      // 이미지 업로드
      const imageUrls = [];
      for (const file of images) {
        const result = await imageService.uploadProductImage(file, user.uid);
        imageUrls.push(result.url);
      }
      
      // 상품 데이터 저장
      await productService.createProduct({
        title,
        price: Number(price),
        description,
        category,
        condition,
        location,
        images: imageUrls,
        createdAt: new Date(),
        sellerId: user.uid,
        status: "active",
        views: 0,
        likes: 0
      }, user.uid);
      
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error("상품 등록 실패:", err);
      alert("상품 등록 실패: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Container>
        <TopBar />
        <SuccessMessage>
          <FiCheck size={48} color="#2ed8b6" />
          <h2>상품이 성공적으로 등록되었습니다!</h2>
          <p>잠시 후 메인 페이지로 이동합니다.</p>
        </SuccessMessage>
      </Container>
    );
  }

  return (
    <Container>
      <TopBar />
      <Header>
        <h1>상품 등록</h1>
        <p>판매하실 악기 정보를 입력해주세요</p>
      </Header>
      
      <Form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>기본 정보</SectionTitle>
          <InputGroup>
            <Label>상품명 *</Label>
            <Input 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              placeholder="예: Gibson Les Paul Standard" 
            />
          </InputGroup>
          
          <InputGroup>
            <Label>가격 *</Label>
            <PriceInput>
              <Input 
                value={price} 
                onChange={e => setPrice(e.target.value.replace(/[^0-9]/g, ''))} 
                placeholder="예: 1500000"
                type="text"
              />
              <PriceUnit>원</PriceUnit>
            </PriceInput>
          </InputGroup>
          
          <InputGroup>
            <Label>카테고리 *</Label>
            <Select value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">카테고리를 선택하세요</option>
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </Select>
          </InputGroup>
          
          <InputGroup>
            <Label>상품 상태 *</Label>
            <Select value={condition} onChange={e => setCondition(e.target.value)}>
              <option value="">상태를 선택하세요</option>
              {conditions.map(cond => (
                <option key={cond.value} value={cond.value}>{cond.label}</option>
              ))}
            </Select>
          </InputGroup>
          
          <InputGroup>
            <Label>거래 지역 *</Label>
            <Input 
              value={location} 
              onChange={e => setLocation(e.target.value)} 
              placeholder="예: 서울 강남구" 
            />
          </InputGroup>
        </Section>
        
        <Section>
          <SectionTitle>상품 설명</SectionTitle>
          <InputGroup>
            <Label>상세 설명 *</Label>
            <TextArea 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              placeholder="상품의 상태, 구매 시기, 사용 빈도 등을 자세히 적어주세요."
              rows={6}
            />
            <CharCount>{description.length}/1000</CharCount>
          </InputGroup>
        </Section>
        
        <Section>
          <SectionTitle>상품 이미지</SectionTitle>
          <ImageSection>
            <ImageUpload>
              <input 
                type="file" 
                accept="image/*" 
                multiple 
                onChange={handleImageChange} 
                id="image-upload"
                style={{ display: 'none' }}
              />
              <label htmlFor="image-upload">
                <FiCamera size={24} />
                <span>사진 추가</span>
                <small>{images.length}/10</small>
              </label>
            </ImageUpload>
            
            <ImagePreview>
              {previewUrls.map((url, idx) => (
                <ImageItem key={idx}>
                  <img src={url} alt={`미리보기 ${idx + 1}`} />
                  <RemoveButton onClick={() => handleRemoveImage(idx)}>
                    <FiX size={16} />
                  </RemoveButton>
                  {idx === 0 && <MainBadge>대표</MainBadge>}
                </ImageItem>
              ))}
            </ImagePreview>
          </ImageSection>
        </Section>
        
        <SubmitButton type="submit" disabled={loading}>
          {loading ? "등록 중..." : "상품 등록하기"}
        </SubmitButton>
      </Form>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding-bottom: 80px;
`;

const Header = styled.div`
  background: white;
  padding: 24px;
  border-bottom: 1px solid #eee;
  text-align: center;
  
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin-bottom: 8px;
  }
  
  p {
    color: #666;
    font-size: 14px;
  }
`;

const Form = styled.form`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.div`
  background: white;
  margin: 16px 0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #2ed8b6;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const CharCount = styled.div`
  font-size: 12px;
  color: #999;
  text-align: right;
  margin-top: 4px;
`;

const PriceInput = styled.div`
  position: relative;
`;

const PriceUnit = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 16px;
`;

const ImageSection = styled.div`
  margin-top: 12px;
`;

const ImageUpload = styled.div`
  margin-bottom: 16px;
  
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
    border: 2px dashed #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #fafafa;
    
    &:hover {
      border-color: #2ed8b6;
      background: #f0fffe;
    }
    
    span {
      margin-top: 8px;
      font-size: 14px;
      color: #666;
    }
    
    small {
      margin-top: 4px;
      font-size: 12px;
      color: #999;
    }
  }
`;

const ImagePreview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
`;

const ImageItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(0,0,0,0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(0,0,0,0.9);
  }
`;

const MainBadge = styled.span`
  position: absolute;
  bottom: 4px;
  left: 4px;
  background: #2ed8b6;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  max-width: 600px;
  margin: 32px auto 0;
  display: block;
  padding: 16px 24px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover:not(:disabled) {
    background: #26c4a8;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  
  h2 {
    margin: 16px 0 8px;
    color: #333;
    font-size: 20px;
  }
  
  p {
    color: #666;
    font-size: 14px;
  }
`;