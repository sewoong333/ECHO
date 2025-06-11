import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaCamera } from 'react-icons/fa';
import { ProductContext } from '../store/ProductContext';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../utils/firebase';

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
`;
const AIToggleWrap = styled.div`
  background: #f6f3ff;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  margin: 18px 18px 0 18px;
`;
const AIToggleLabel = styled.span`
  font-weight: 700;
  color: #7c4dff;
  font-size: 15px;
`;
const AIToggleDesc = styled.span`
  font-size: 14px;
  color: #7c4dff;
  margin-left: 8px;
`;
const Switch = styled.label`
  margin-left: auto;
  display: inline-block;
  width: 38px;
  height: 22px;
  background: ${props => props.checked ? '#7c4dff' : '#ddd'};
  border-radius: 12px;
  position: relative;
  vertical-align: middle;
  transition: background 0.2s;
  input { width: 0; height: 0; opacity: 0; }
`;
const SwitchCircle = styled.span`
  position: absolute;
  left: ${props => props.checked ? '18px' : '2px'};
  top: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px #bbb;
  transition: left 0.2s;
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
`;
const ImgPreview = styled.div`
  width: 64px;
  height: 64px;
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ImgAddBtn = styled.label`
  width: 64px;
  height: 64px;
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
  font-size: 13px;
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
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  min-height: 90px;
  padding: 13px 14px;
  font-size: 15px;
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
  }
`;
const Row = styled.div`
  margin-bottom: 26px;
`;
const TradeTypeWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;
const TradeTypeBtn = styled.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 8px;
  border: 1.5px solid ${props => props.$active ? '#222' : '#eee'};
  background: ${props => props.$active ? '#222' : '#fafafa'};
  color: ${props => props.$active ? '#fff' : '#888'};
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
`;
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 7px;
  margin-bottom: 12px;
  cursor: pointer;
`;
const PlaceInput = styled(Input)`
  margin-bottom: 0;
`;
const SubmitBtn = styled.button`
  width: 100%;
  max-width: 480px;
  padding: 18px 0 18px 0;
  background: #2ed8b6;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 16px;
  margin: 32px auto 0 auto;
  display: block;
  opacity: ${props => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  box-shadow: 0 4px 16px rgba(46,216,182,0.12);
  transition: opacity 0.2s, background 0.18s;
`;
const ErrorMsg = styled.div`
  color: #ff4d4f;
  font-size: 13px;
  margin: 4px 0 0 2px;
`;
const FrequentBtn = styled.button`
  margin-top: 0;
  margin-bottom: 18px;
  padding: 7px 14px;
  border: 1.5px solid #e0e2e6;
  border-radius: 8px;
  background: #fff;
  font-weight: 600;
  font-size: 14px;
  color: #222;
  cursor: pointer;
`;
const PlaceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
`;
const PlaceDeleteBtn = styled.button`
  background: none;
  border: none;
  color: #bbb;
  font-size: 18px;
  cursor: pointer;
`;
const LinkBtn = styled.button`
  background: none;
  border: none;
  color: #2ed8b6;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 4px;
`;
const EchoAuthLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 7px;
  margin-bottom: 12px;
  cursor: pointer;
  color: #2ed8b6;
  font-weight: 600;
`;

export default function AddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useContext(ProductContext);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tradeType, setTradeType] = useState('sell');
  const [price, setPrice] = useState('');
  const [allowOffer, setAllowOffer] = useState(true);
  const [place, setPlace] = useState('');
  const [touched, setTouched] = useState({});
  const fileInput = useRef();
  const [aiWrite, setAiWrite] = useState(false);
  const [echoAuthRequested, setEchoAuthRequested] = useState(false);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [neighborhoodModalOpen, setNeighborhoodModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [suggestedNeighborhood, setSuggestedNeighborhood] = useState('');
  const dummyNeighborhoods = [
    '구로동', '신도림동', '가산동', '대림동', '구로디지털단지', '구로시장', '구로아트밸리', '구로역', '신도림역', '롯데백화점 구로점'
  ];

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
  const removeImage = idx => {
    setImages(images.filter((_, i) => i !== idx));
  };

  const isValid = title && desc && (tradeType === 'give' || price) && images.length > 0;

  const handleBlur = e => {
    setTouched(t => ({ ...t, [e.target.name]: true }));
  };

  const handleNeighborhoodModalOpen = () => {
    setNeighborhoodModalOpen(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          // 실제 서비스에서는 좌표 → 동네명 변환 API 필요
          // 1차는 더미로 '구로동' 추천
          setSuggestedNeighborhood('구로동');
        },
        err => setSuggestedNeighborhood('위치 권한 거부됨')
      );
    } else {
      setSuggestedNeighborhood('위치 기능 미지원');
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!isValid) {
      setTouched({ title: true, desc: true, price: true, images: true });
      return;
    }

    try {
      const productData = {
        title,
        description: desc,
        price: tradeType === 'sell' ? price : '나눔',
        allowOffer,
        tradeType,
        place,
        images: images.map(img => img.url),
        location: place,
        neighborhood: selectedNeighborhood,
        time: '방금 전',
        author: '나', // TODO: 실제 유저 닉네임
        echoAuthRequested,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      await addProduct(productData);
      navigate('/');
    } catch (err) {
      console.error('상품 등록 실패:', err);
      alert('상품 등록에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // AI로 작성하기 동작: 토글 ON 시 상세설명 안내문구 입력 (수동 입력 시에는 덮어쓰지 않음)
  React.useEffect(() => {
    if (aiWrite && !desc) {
      setDesc('AI 기능은 준비중입니다. 곧 로컬 LLM 기반으로 제공될 예정입니다.');
    }
  }, [aiWrite]);

  // 상세설명 입력 시작 시 안내/AI 텍스트 자동 삭제
  const handleDescFocus = () => {
    if (
      desc === 'AI 기능은 준비중입니다. 곧 로컬 LLM 기반으로 제공될 예정입니다.' ||
      desc.startsWith('이 악기는 사용감이 적고 상태가 매우 좋습니다.') ||
      desc.startsWith('상세설명에 채울 게시글 내용을 작성해 주세요')
    ) {
      setDesc('');
    }
  };

  return (
    <Wrapper>
      <Inner>
        <TopBar>
          <CloseBtn onClick={() => navigate(-1)} aria-label="닫기"><FaTimes /></CloseBtn>
          <Title>내 물건 팔기</Title>
          <TempSave>임시저장</TempSave>
        </TopBar>
        <AIToggleWrap>
          <AIToggleLabel><span style={{border:'1px solid #b39ddb',borderRadius:6,padding:'2px 7px',fontSize:13,marginRight:6,background:'#ede7f6'}}>Beta</span>AI로 작성하기</AIToggleLabel>
          <AIToggleDesc>AI가 게시글을 대신 작성해줘요</AIToggleDesc>
          <Switch checked={aiWrite}>
            <input type="checkbox" checked={aiWrite} onChange={e=>setAiWrite(e.target.checked)} />
            <SwitchCircle checked={aiWrite} />
          </Switch>
        </AIToggleWrap>
        {neighborhoodModalOpen && (
          <div style={{
            position:'fixed',top:0,left:0,right:0,bottom:0,zIndex:1000,background:'rgba(0,0,0,0.18)',display:'flex',alignItems:'center',justifyContent:'center'
          }}>
            <div style={{
              background:'#fff',borderRadius:16,padding:24,minWidth:320,maxWidth:400,boxShadow:'0 4px 24px rgba(46,216,182,0.10)'
            }}>
              <div style={{fontWeight:700,fontSize:17,marginBottom:12}}>동네 선택</div>
              <div style={{marginBottom:10,color:'#2ed8b6',fontWeight:600}}>
                {suggestedNeighborhood && (
                  <div>
                    <span>현재 위치 추천: </span>
                    <button style={{color:'#2ed8b6',fontWeight:700}} onClick={()=>{
                      setSelectedNeighborhood(suggestedNeighborhood);
                      setNeighborhoodModalOpen(false);
                    }}>{suggestedNeighborhood}</button>
                  </div>
                )}
              </div>
              <input
                type="text"
                placeholder="동네, 주소, 건물명 검색"
                value={searchInput}
                onChange={e=>setSearchInput(e.target.value)}
                style={{width:'100%',padding:8,marginBottom:10,border:'1.5px solid #e0e2e6',borderRadius:8}}
              />
              <div style={{maxHeight:180,overflowY:'auto'}}>
                {dummyNeighborhoods.filter(n=>n.includes(searchInput)).map(n=>(
                  <div key={n} style={{padding:'8px 0',cursor:'pointer',color:'#222'}} onClick={()=>{
                    setSelectedNeighborhood(n);
                    setNeighborhoodModalOpen(false);
                  }}>{n}</div>
                ))}
              </div>
              <button style={{marginTop:12,padding:'7px 18px',background:'#2ed8b6',color:'#fff',border:'none',borderRadius:8,fontWeight:700}} onClick={()=>setNeighborhoodModalOpen(false)}>닫기</button>
            </div>
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <ImgUploadBox>
            {images.map((img, i) => (
              <ImgPreview key={i} style={{boxShadow:'0 2px 8px #eee',position:'relative'}}>
                <Img src={img.url} alt="preview" />
                {i === 0 && (
                  <span style={{position:'absolute',bottom:4,left:4,background:'#2ed8b6',color:'#fff',fontSize:12,padding:'2px 8px',borderRadius:7,fontWeight:700,boxShadow:'0 1px 4px #bbb'}}>대표사진</span>
                )}
                <CloseBtn style={{position:'absolute',top:3,left:3,fontSize:13,background:'#fff',borderRadius:'50%',boxShadow:'0 1px 4px #bbb',width:22,height:22,display:'flex',alignItems:'center',justifyContent:'center',padding:0}} type="button" onClick={()=>removeImage(i)} aria-label="사진 삭제"><FaTimes /></CloseBtn>
              </ImgPreview>
            ))}
            {images.length < 10 && (
              <ImgAddBtn>
                <input type="file" accept="image/*" multiple hidden ref={fileInput} onChange={handleImageChange} />
                <FaCamera />
                <ImgCount>{images.length}/10</ImgCount>
              </ImgAddBtn>
            )}
          </ImgUploadBox>
          {touched.images && images.length === 0 && <ErrorMsg>이미지를 1장 이상 등록해 주세요.</ErrorMsg>}
          <Row>
            <Label htmlFor="title">제목</Label>
            <Input id="title" name="title" placeholder="글 제목" value={title} onChange={e=>setTitle(e.target.value)} onBlur={handleBlur} maxLength={40} style={{borderColor:touched.title&&!title?'#ff4d4f':'#e0e2e6',background:'#fafafa',fontSize:17}} />
            {touched.title && !title && <ErrorMsg>제목을 입력해 주세요.</ErrorMsg>}
          </Row>
          <Row>
            <Label htmlFor="desc">자세한 설명</Label>
            <Textarea id="desc" name="desc" placeholder={`구로동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)\n\n신뢰할 수 있는 거래를 위해 자세히 적어주세요. 과학기술정보통신부, 한국 인터넷진흥원과 함께 해요.`} value={desc} onChange={e=>setDesc(e.target.value)} onBlur={handleBlur} onFocus={handleDescFocus} maxLength={1000} style={{borderColor:touched.desc&&!desc?'#ff4d4f':'#e0e2e6',background:'#fafafa',fontSize:16}} />
            {touched.desc && !desc && <ErrorMsg>상세설명을 입력해 주세요.</ErrorMsg>}
            <FrequentBtn type="button" onClick={()=>alert('자주 쓰는 문구 기능은 추후 지원 예정입니다.')}>자주 쓰는 문구</FrequentBtn>
          </Row>
          <Row>
            <Label>거래 방식</Label>
            <TradeTypeWrap>
              <TradeTypeBtn type="button" $active={tradeType==='sell'} onClick={()=>setTradeType('sell')}>판매하기</TradeTypeBtn>
              <TradeTypeBtn type="button" $active={tradeType==='give'} onClick={()=>setTradeType('give')}>나눔하기</TradeTypeBtn>
            </TradeTypeWrap>
            {tradeType==='sell' && (
              <>
                <Input id="price" name="price" type="number" placeholder="₩ 가격을 입력해 주세요." value={price} onChange={e=>setPrice(e.target.value.replace(/[^0-9]/g,''))} onBlur={handleBlur} min={0} style={{borderColor:touched.price&&!price?'#ff4d4f':'#2ed8b6',background:'#fafafa',fontSize:16}} />
                {touched.price && !price && <ErrorMsg>가격을 입력해 주세요.</ErrorMsg>}
                <EchoAuthLabel>
                  <input type="checkbox" checked={echoAuthRequested} onChange={e=>setEchoAuthRequested(e.target.checked)} style={{width:18,height:18,accentColor:'#2ed8b6',marginRight:8}} />
                  ECHO 인증 신청(관리자 승인 시 인증마크 부여)
                </EchoAuthLabel>
              </>
            )}
          </Row>
          <Row>
            <Label>거래 희망 장소</Label>
            <PlaceRow>
              <PlaceInput id="place" name="place" placeholder="예: 구로디지털단지역 3번 출구 앞" value={place} onChange={e=>setPlace(e.target.value)} maxLength={30} />
              {place && <PlaceDeleteBtn type="button" onClick={()=>setPlace('')} aria-label="장소 입력 삭제"><FaTimes /></PlaceDeleteBtn>}
              <LinkBtn type="button" onClick={handleNeighborhoodModalOpen}>
                {selectedNeighborhood ? selectedNeighborhood : '보여줄 동네 선택 >'}
              </LinkBtn>
            </PlaceRow>
          </Row>
          <SubmitBtn type="submit" disabled={!isValid}>작성 완료</SubmitBtn>
        </Form>
      </Inner>
    </Wrapper>
  );
} 