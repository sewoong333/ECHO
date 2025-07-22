import React, { useState, useContext } from "react";
import styled from "styled-components";
import { musiclifeService, imageService } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import TopBar from "../components/TopBar";
import { FiCamera, FiX, FiCheck, FiArrowLeft } from "react-icons/fi";

const categories = [
  { value: "gear-review", label: "장비 리뷰" },
  { value: "performance", label: "연주/공연" },
  { value: "lesson", label: "강습/레슨" },
  { value: "collaboration", label: "합주/콜라보" },
  { value: "tips", label: "연주 팁" },
  { value: "music-share", label: "음악 공유" },
  { value: "free", label: "자유게시판" }
];

export default function MusicLifeWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("free");
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 5) {
      alert("최대 5장까지만 업로드할 수 있습니다.");
      return;
    }
    const newImages = [...images, ...files];
    const newPreviewUrls = [...previewUrls, ...files.map(file => URL.createObjectURL(file))];
    setImages(newImages);
    setPreviewUrls(newPreviewUrls);
  };

  const handleRemoveImage = (idx) => {
    setImages(images.filter((_, i) => i !== idx));
    setPreviewUrls(previewUrls.filter((_, i) => i !== idx));
  };

  const validateForm = () => {
    if (title.length < 2) return "제목을 2글자 이상 입력해주세요.";
    if (content.length < 10) return "내용을 10글자 이상 입력해주세요.";
    if (!category) return "카테고리를 선택해주세요.";
    return null;
  };

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

      // 게시글 작성
      await musiclifeService.createPost({
        title,
        content,
        category,
        images: imageUrls,
        authorId: user.uid,
        authorName: user.nickname || user.displayName || "익명",
        createdAt: new Date(),
        viewCount: 0,
        commentCount: 0,
        likes: 0
      });

      setSuccess(true);
      setTimeout(() => {
        navigate("/musiclife");
      }, 1500);
    } catch (error) {
      console.error("게시글 작성 실패:", error);
      alert("게시글 작성 실패: " + error.message);
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
          <h2>게시글이 성공적으로 작성되었습니다!</h2>
          <p>잠시 후 게시판으로 이동합니다.</p>
        </SuccessMessage>
      </Container>
    );
  }

  return (
    <Container>
      <TopBar />
      
      <Header>
        <HeaderTop>
          <BackButton onClick={() => navigate("/musiclife")}>
            <FiArrowLeft size={20} />
          </BackButton>
          <h1>게시글 작성</h1>
          <div></div>
        </HeaderTop>
        <p>음악과 관련된 이야기를 자유롭게 나눠보세요</p>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>기본 정보</SectionTitle>
          
          <InputGroup>
            <Label>카테고리 *</Label>
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>제목 *</Label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              maxLength={100}
            />
            <CharCount>{title.length}/100</CharCount>
          </InputGroup>
        </Section>

        <Section>
          <SectionTitle>내용</SectionTitle>
          
          <InputGroup>
            <Label>본문 *</Label>
            <TextArea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요&#10;&#10;• 음악 관련 정보나 경험을 공유해주세요&#10;• 서로 존중하는 마음으로 소통해주세요&#10;• 상업적 홍보는 자제해주세요"
              rows={12}
              maxLength={2000}
            />
            <CharCount>{content.length}/2000</CharCount>
          </InputGroup>
        </Section>

        <Section>
          <SectionTitle>이미지 첨부</SectionTitle>
          
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
                <small>{images.length}/5</small>
              </label>
            </ImageUpload>

            {previewUrls.length > 0 && (
              <ImagePreview>
                {previewUrls.map((url, idx) => (
                  <ImageItem key={idx}>
                    <img src={url} alt={`첨부 이미지 ${idx + 1}`} />
                    <RemoveButton onClick={() => handleRemoveImage(idx)}>
                      <FiX size={16} />
                    </RemoveButton>
                  </ImageItem>
                ))}
              </ImagePreview>
            )}
          </ImageSection>
        </Section>

        <ButtonSection>
          <CancelButton type="button" onClick={() => navigate("/musiclife")}>
            취소
          </CancelButton>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "작성 중..." : "게시글 작성"}
          </SubmitButton>
        </ButtonSection>
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
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  h1 {
    font-size: 22px;
    font-weight: 700;
    color: #333;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s ease;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const Form = styled.form`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  background: white;
  margin-bottom: 20px;
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
  
  &:last-child {
    margin-bottom: 0;
  }
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
  padding: 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  transition: border-color 0.2s ease;
  line-height: 1.6;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
  
  &::placeholder {
    color: #999;
    line-height: 1.6;
  }
`;

const CharCount = styled.div`
  font-size: 12px;
  color: #999;
  text-align: right;
  margin-top: 4px;
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
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
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

const ButtonSection = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 32px;
`;

const CancelButton = styled.button`
  padding: 14px 24px;
  background: #f8f9fa;
  color: #666;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e9ecef;
    color: #333;
  }
`;

const SubmitButton = styled.button`
  padding: 14px 24px;
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