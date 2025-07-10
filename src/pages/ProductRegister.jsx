import React, { useState, useContext } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../store/ProductContext";
import { UserContext } from "../store/UserContext";
import { imageService } from "../utils/firebase";

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0;
  background: #e0f7f3;
  min-height: 100vh;
  overflow-x: hidden;
`;

const FormContainer = styled.div`
  padding: 24px;
  max-width: 480px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-bottom: 90px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--color-mint-main);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #1a4740;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1.5px solid #b2f0e6;
  border-radius: 8px;
  background: #fff;
  outline: none;
  transition: border-color 0.2s;
  color: #222;
  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border-color: var(--color-mint-main);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1.5px solid #b2f0e6;
  border-radius: 8px;
  background: #fff;
  outline: none;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.2s;
  color: #222;
  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border-color: var(--color-mint-main);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1.5px solid #b2f0e6;
  border-radius: 8px;
  background: #fff;
  outline: none;
  transition: border-color 0.2s;
  color: #222;
  &:focus {
    border-color: var(--color-mint-main);
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px dashed #b2f0e6;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-mint-main);
    background: #f0fffd;
  }
`;

const ImagePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const PreviewImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #b2f0e6;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ff4757;
  color: white;
  border: none;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  font-size: 18px;
  background: var(--color-mint-main);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 16px;

  &:hover {
    background: #25b8a0;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4757;
  font-size: 14px;
  margin-top: 8px;
`;

const LoadingMessage = styled.div`
  color: var(--color-mint-main);
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
`;

const CATEGORIES = [
  "기타",
  "피아노",
  "드럼",
  "신디사이저",
  "관악기",
  "현악기",
  "오디오 장비",
  "기타",
];

const LOCATIONS = [
  "서울 강남구",
  "서울 마포구",
  "서울 구로구",
  "서울 송파구",
  "서울 강서구",
  "부산 부산진구",
  "부산 해운대구",
  "인천 부평구",
  "대구 중구",
  "대전 유성구",
  "광주 서구",
  "울산 남구",
  "기타",
];

export default function ProductRegister() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    category: "",
    model: "",
    condition: "양호",
  });
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { addProduct } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // 가격 입력 유효성(0 이하, 숫자 이외 방지)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      // 숫자만 허용, 0 이하 방지
      const num = value.replace(/[^0-9]/g, "");
      if (num === "" || parseInt(num) <= 0) {
        setForm((prev) => ({ ...prev, [name]: "" }));
        setError("가격은 1원 이상 숫자만 입력 가능합니다.");
        return;
      }
      setForm((prev) => ({ ...prev, [name]: num }));
      setError("");
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  // 이미지 업로드 개수 제한(5개)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // 파일 크기 및 타입 검증
    const validFiles = files.filter((file) => {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB 제한
        setError("이미지 파일은 5MB 이하여야 합니다.");
        return false;
      }
      if (!file.type.startsWith("image/")) {
        setError("이미지 파일만 업로드 가능합니다.");
        return false;
      }
      return true;
    });

    if (images.length + validFiles.length > 5) {
      setError("이미지는 최대 5개까지 업로드 가능합니다.");
      return;
    }

    setImages((prev) => [...prev, ...validFiles]);
    setError("");
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // 등록 성공 시 폼 리셋
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("로그인이 필요합니다.");
      return;
    }

    if (!form.title.trim() || !form.description.trim() || !form.price) {
      setError("필수 항목을 모두 입력해주세요.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      let imageUrls = [];

      // 이미지가 있으면 업로드 시도
      if (images.length > 0) {
        try {
          setUploading(true);
          imageUrls = await imageService.uploadMultipleImages(images, user.uid);
          setUploading(false);
        } catch (uploadError) {
          console.warn("이미지 업로드 실패, 기본 이미지 사용:", uploadError);
          setUploading(false);
          // 업로드 실패 시 기본 이미지 사용
          imageUrls = [
            "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
          ];
          setError(
            "이미지 업로드에 실패했지만 기본 이미지로 상품을 등록합니다.",
          );
        }
      } else {
        // 이미지가 없으면 기본 이미지 사용
        imageUrls = [
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        ];
      }

      // 상품 데이터 준비
      const productData = {
        ...form,
        price: parseInt(form.price),
        images: imageUrls,
        image: imageUrls[0], // 메인 이미지
        condition: form.condition || "양호",
      };

      // 상품 등록
      await addProduct(productData);

      // 폼 리셋
      setForm({
        title: "",
        description: "",
        price: "",
        location: "",
        category: "",
        model: "",
        condition: "양호",
      });
      setImages([]);

      // 성공 시 홈으로 이동
      navigate("/", {
        state: { message: "상품이 성공적으로 등록되었습니다!" },
      });
    } catch (err) {
      console.error("상품 등록 실패:", err);
      setError(err.message || "상품 등록에 실패했습니다. 다시 시도해주세요.");
      setUploading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TopBar />
      <FormContainer>
        <Title>악기 등록</Title>

        <Form onSubmit={handleSubmit}>
          {/* 이미지 업로드 */}
          <FormGroup>
            <Label>사진 (최대 5개)</Label>
            <FileInput
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              id="image-upload"
            />
            <FileLabel htmlFor="image-upload">
              {images.length === 0 ? (
                <div>
                  <div>📷 클릭하여 이미지 선택</div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#888",
                      marginTop: "4px",
                    }}
                  >
                    최대 5개, 각 5MB 이하
                  </div>
                </div>
              ) : (
                <div>📷 추가 이미지 선택</div>
              )}
            </FileLabel>

            {images.length > 0 && (
              <ImagePreview>
                {images.map((image, index) => (
                  <ImageContainer key={index}>
                    <PreviewImage
                      src={URL.createObjectURL(image)}
                      alt={`미리보기 ${index + 1}`}
                    />
                    <RemoveButton onClick={() => removeImage(index)}>
                      ×
                    </RemoveButton>
                  </ImageContainer>
                ))}
              </ImagePreview>
            )}
          </FormGroup>

          {/* 제목 */}
          <FormGroup>
            <Label>제목 *</Label>
            <Input
              type="text"
              name="title"
              value={form.title}
              onChange={handleInputChange}
              placeholder="예: 야마하 FG800 통기타"
              required
            />
          </FormGroup>

          {/* 모델명 */}
          <FormGroup>
            <Label>모델명</Label>
            <Input
              type="text"
              name="model"
              value={form.model}
              onChange={handleInputChange}
              placeholder="예: FG800"
            />
          </FormGroup>

          {/* 카테고리 */}
          <FormGroup>
            <Label>카테고리</Label>
            <Select
              name="category"
              value={form.category}
              onChange={handleInputChange}
            >
              <option value="">선택하세요</option>
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </FormGroup>

          {/* 상태 */}
          <FormGroup>
            <Label>상태</Label>
            <Select
              name="condition"
              value={form.condition}
              onChange={handleInputChange}
            >
              <option value="최상">최상</option>
              <option value="양호">양호</option>
              <option value="보통">보통</option>
              <option value="하">하</option>
            </Select>
          </FormGroup>

          {/* 설명 */}
          <FormGroup>
            <Label>설명 *</Label>
            <Textarea
              name="description"
              value={form.description}
              onChange={handleInputChange}
              placeholder="악기의 상세한 설명을 입력해주세요..."
              required
            />
          </FormGroup>

          {/* 가격 */}
          <FormGroup>
            <Label>가격 (원) *</Label>
            <Input
              type="number"
              name="price"
              value={form.price}
              onChange={handleInputChange}
              placeholder="예: 230000"
              min="0"
              required
            />
          </FormGroup>

          {/* 위치 */}
          <FormGroup>
            <Label>거래 지역</Label>
            <Select
              name="location"
              value={form.location}
              onChange={handleInputChange}
            >
              <option value="">선택하세요</option>
              {LOCATIONS.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </FormGroup>

          {/* 에러 메시지 */}
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {/* 로딩 메시지 */}
          {uploading && <LoadingMessage>이미지 업로드 중...</LoadingMessage>}

          {/* 제출 버튼 */}
          <SubmitButton type="submit" disabled={loading || uploading}>
            {loading ? "등록 중..." : "등록하기"}
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
}
