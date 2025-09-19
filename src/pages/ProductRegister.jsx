import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { imageService, productService } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import { useToast } from "../store/ToastContext";
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
  const [detailAddress, setDetailAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [addressType, setAddressType] = useState("road"); // road, dong
  const [roadAddress, setRoadAddress] = useState("");
  const [dongAddress, setDongAddress] = useState("");
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { addToast } = useToast();

  // 지역 데이터
  const regions = [
    { value: "서울", label: "서울특별시", districts: ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"] },
    { value: "부산", label: "부산광역시", districts: ["중구", "서구", "동구", "영도구", "부산진구", "동래구", "남구", "북구", "해운대구", "사하구", "금정구", "강서구", "연제구", "수영구", "사상구", "기장군"] },
    { value: "인천", label: "인천광역시", districts: ["중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"] },
    { value: "대구", label: "대구광역시", districts: ["중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군"] },
    { value: "대전", label: "대전광역시", districts: ["동구", "중구", "서구", "유성구", "대덕구"] },
    { value: "광주", label: "광주광역시", districts: ["동구", "서구", "남구", "북구", "광산구"] },
    { value: "울산", label: "울산광역시", districts: ["중구", "남구", "동구", "북구", "울주군"] },
    { value: "세종", label: "세종특별자치시", districts: ["세종시"] },
    { value: "경기", label: "경기도", districts: ["수원시", "성남시", "의정부시", "안양시", "부천시", "광명시", "평택시", "과천시", "오산시", "시흥시", "군포시", "의왕시", "하남시", "용인시", "파주시", "이천시", "안성시", "김포시", "화성시", "광주시", "여주시", "양평군", "고양시", "의정부시", "동두천시", "가평군", "연천군"] },
    { value: "강원", label: "강원도", districts: ["춘천시", "원주시", "강릉시", "동해시", "태백시", "속초시", "삼척시", "홍천군", "횡성군", "영월군", "평창군", "정선군", "철원군", "화천군", "양구군", "인제군", "고성군", "양양군"] },
    { value: "충북", label: "충청북도", districts: ["청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "증평군", "진천군", "괴산군", "음성군", "단양군"] },
    { value: "충남", label: "충청남도", districts: ["천안시", "공주시", "보령시", "아산시", "서산시", "논산시", "계룡시", "당진시", "금산군", "부여군", "서천군", "청양군", "홍성군", "예산군", "태안군"] },
    { value: "전북", label: "전라북도", districts: ["전주시", "군산시", "익산시", "정읍시", "남원시", "김제시", "완주군", "진안군", "무주군", "장수군", "임실군", "순창군", "고창군", "부안군"] },
    { value: "전남", label: "전라남도", districts: ["목포시", "여수시", "순천시", "나주시", "광양시", "담양군", "곡성군", "구례군", "고흥군", "보성군", "화순군", "장흥군", "강진군", "해남군", "영암군", "무안군", "함평군", "영광군", "장성군", "완도군", "진도군", "신안군"] },
    { value: "경북", label: "경상북도", districts: ["포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시", "상주시", "문경시", "경산시", "군위군", "의성군", "청송군", "영양군", "영덕군", "청도군", "고령군", "성주군", "칠곡군", "예천군", "봉화군", "울진군", "울릉군"] },
    { value: "경남", label: "경상남도", districts: ["창원시", "진주시", "통영시", "사천시", "김해시", "밀양시", "거제시", "양산시", "의령군", "함안군", "창녕군", "고성군", "남해군", "하동군", "산청군", "함양군", "거창군", "합천군"] },
    { value: "제주", label: "제주특별자치도", districts: ["제주시", "서귀포시"] }
  ];

  // 선택된 지역의 구/군 목록
  const availableDistricts = regions.find(r => r.value === selectedRegion)?.districts || [];

  // 주소 검색 함수 (카카오 지도 API)
  const searchAddress = () => {
    if (!window.kakao || !window.kakao.maps) {
      addToast("지도 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요.", "warning");
      return;
    }

    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      
      const searchQuery = addressType === "road" ? roadAddress : dongAddress;
      
      if (!searchQuery.trim()) {
        addToast("주소를 입력해주세요.", "warning");
        return;
      }

      geocoder.addressSearch(searchQuery, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = result[0];
          setLatitude(coords.y);
          setLongitude(coords.x);
          setDetailAddress(coords.address_name);
          setLocation(`${selectedRegion} ${selectedDistrict}`);
          addToast("주소가 확인되었습니다.", "success");
        } else {
          addToast("주소를 찾을 수 없습니다. 다시 입력해주세요.", "error");
        }
      });
    });
  };

  // 로그인 확인
  useEffect(() => {
    if (!user.loading && !user.isLoggedIn) {
      addToast("상품 등록을 위해 로그인이 필요합니다.", "warning");
      navigate("/login");
    }
  }, [user.loading, user.isLoggedIn, navigate]);

  // 이미지 선택
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 10) {
      addToast("최대 10장까지만 업로드할 수 있습니다.", "warning");
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
      addToast(errorMsg, "warning");
      return;
    }

    setLoading(true);
    try {
      if (!user?.uid) throw new Error("로그인이 필요합니다.");
      
      console.log("🔄 상품 등록 시작:", { title, price, category, user: user.uid });
      
      // 이미지 업로드
      const imageUrls = [];
      if (images.length > 0) {
        console.log("📸 이미지 업로드 시작:", images.length, "개");
        for (const file of images) {
          const result = await imageService.uploadProductImage(file, user.uid);
          imageUrls.push(result.url);
          console.log("✅ 이미지 업로드 완료:", result.url);
        }
      }
      
      // 상품 데이터 준비 (Firebase 서비스와 호환되도록 수정)
      const productData = {
        title: title.trim(),
        price: Number(price),
        description: description.trim(),
        category,
        condition,
        region: location.split(' ')[0] || location, // 지역 추출
        district: location.split(' ')[1] || '', // 구/군 추출
        fullLocation: location,
        detailAddress: detailAddress || location,
        latitude: parseFloat(latitude) || null,
        longitude: parseFloat(longitude) || null,
        images: imageUrls,
        sellerId: user.uid,
        sellerNickname: user.nickname || user.displayName || "사용자",
        status: "active",
        viewCount: 0,
        likeCount: 0,
        chatCount: 0,
        isDeliveryAvailable: false,
        deliveryFee: 0,
        preferredTransactionType: "direct",
        isPriceNegotiable: false,
        tags: [],
        searchKeywords: [title.toLowerCase(), category.toLowerCase()],
        createdAt: new Date(),
        updatedAt: new Date(),
        lastBumpedAt: new Date()
      };
      
      console.log("📦 저장할 상품 데이터:", productData);
      
      // 상품 데이터 저장
      const result = await productService.createProduct(productData, user.uid);
      console.log("✅ 상품 등록 성공:", result);
      
      setSuccess(true);
      addToast("상품이 성공적으로 등록되었습니다!", "success");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error("❌ 상품 등록 실패:", err);
      console.error("❌ 에러 상세:", {
        message: err.message,
        code: err.code,
        stack: err.stack
      });
      addToast("상품 등록 실패: " + err.message, "error");
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
            
            {/* 지역 선택 */}
            <AddressSection>
              <AddressRow>
                <AddressLabel>시/도</AddressLabel>
                <Select 
                  value={selectedRegion} 
                  onChange={e => {
                    setSelectedRegion(e.target.value);
                    setSelectedDistrict("");
                  }}
                >
                  <option value="">시/도를 선택하세요</option>
                  {regions.map(region => (
                    <option key={region.value} value={region.value}>
                      {region.label}
                    </option>
                  ))}
                </Select>
              </AddressRow>
              
              <AddressRow>
                <AddressLabel>구/군</AddressLabel>
                <Select 
                  value={selectedDistrict} 
                  onChange={e => setSelectedDistrict(e.target.value)}
                  disabled={!selectedRegion}
                >
                  <option value="">구/군을 선택하세요</option>
                  {availableDistricts.map(district => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </Select>
              </AddressRow>
            </AddressSection>

            {/* 주소 타입 선택 */}
            <AddressTypeSection>
              <AddressTypeLabel>주소 입력 방식</AddressTypeLabel>
              <AddressTypeButtons>
                <AddressTypeButton 
                  active={addressType === "road"}
                  onClick={() => setAddressType("road")}
                >
                  도로명 주소
                </AddressTypeButton>
                <AddressTypeButton 
                  active={addressType === "dong"}
                  onClick={() => setAddressType("dong")}
                >
                  동/지번 주소
                </AddressTypeButton>
              </AddressTypeButtons>
            </AddressTypeSection>

            {/* 주소 입력 */}
            <AddressInputContainer>
              <Input 
                value={addressType === "road" ? roadAddress : dongAddress}
                onChange={e => {
                  if (addressType === "road") {
                    setRoadAddress(e.target.value);
                  } else {
                    setDongAddress(e.target.value);
                  }
                }}
                placeholder={addressType === "road" 
                  ? "예: 테헤란로 123" 
                  : "예: 논현동 123-45"
                }
              />
              <SearchAddressButton type="button" onClick={searchAddress}>
                주소 검색
              </SearchAddressButton>
            </AddressInputContainer>
            
            {detailAddress && (
              <AddressResult>
                📍 {detailAddress}
                {latitude && longitude && (
                  <CoordInfo>좌표: {latitude}, {longitude}</CoordInfo>
                )}
              </AddressResult>
            )}
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

const AddressInputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const SearchAddressButton = styled.button`
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: #26c4a8;
  }
`;

const AddressResult = styled.div`
  margin-top: 8px;
  padding: 12px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  font-size: 14px;
  color: #495057;
`;

const CoordInfo = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: #6c757d;
`;

const AddressSection = styled.div`
  margin-bottom: 16px;
`;

const AddressRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
`;

const AddressLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  min-width: 60px;
`;

const AddressTypeSection = styled.div`
  margin-bottom: 16px;
`;

const AddressTypeLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

const AddressTypeButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const AddressTypeButton = styled.button`
  padding: 8px 16px;
  border: 2px solid ${props => props.active ? '#2ed8b6' : '#e9ecef'};
  background: ${props => props.active ? '#2ed8b6' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #2ed8b6;
    background: ${props => props.active ? '#26c4a8' : '#f0fffe'};
  }
`;