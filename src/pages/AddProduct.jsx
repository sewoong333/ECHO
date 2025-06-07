import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaCamera } from 'react-icons/fa';
import { ProductContext } from '../store/ProductContext';

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
const Form = styled.form`
  padding: 18px 18px 0 18px;
`;
const ImgUploadBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
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
  /* 스크롤바 색상 통일 */
  &::-webkit-scrollbar {
    width: 7px;
    background: #e6fcf7;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b2f0e6;
    border-radius: 8px;
  }
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
  display: block;
  letter-spacing: -0.5px;
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
  border: 1.5px solid ${props => props.$active ? '#ff7e36' : '#eee'};
  background: ${props => props.$active ? '#fff3eb' : '#fafafa'};
  color: ${props => props.$active ? '#ff7e36' : '#888'};
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
  margin: 32px auto 80px auto;
  display: block;
  opacity: ${props => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  box-shadow: 0 4px 16px rgba(46,216,182,0.12);
  transition: opacity 0.2s, background 0.18s;
  &:active { background: #3be6c2; }
`;
const ErrorMsg = styled.div`
  color: #ff4d4f;
  font-size: 13px;
  margin: 4px 0 0 2px;
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
  const [echoAuthRequested, setEchoAuthRequested] = useState(false);
  const [aiWrite, setAiWrite] = useState(false);
  const [neighborhood, setNeighborhood] = useState('');

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

  const handleSubmit = e => {
    e.preventDefault();
    if (!isValid) {
      setTouched({ title: true, desc: true, price: true, images: true });
      return;
    }
    addProduct({
      id: Date.now(),
      title,
      description: desc,
      price: tradeType === 'sell' ? price : '나눔',
      allowOffer,
      tradeType,
      place,
      image: images[0]?.url || '',
      location: place,
      time: '방금 전',
      echoAuthRequested,
      echoAuthApproved: false,
    });
    navigate('/');
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
          <div style={{color:'#ccc',fontWeight:600,fontSize:15,marginRight:16}}>임시저장</div>
        </TopBar>
        <div style={{background:'#f6f3ff',padding:'16px 18px',display:'flex',alignItems:'center',gap:12,borderRadius:12,margin:'18px 18px 0 18px'}}>
          <span style={{fontWeight:700,color:'#7c4dff',fontSize:15}}><span style={{border:'1px solid #b39ddb',borderRadius:6,padding:'2px 7px',fontSize:13,marginRight:6,background:'#ede7f6'}}>Beta</span>AI로 작성하기</span>
          <span style={{fontSize:14,color:'#7c4dff',marginLeft:8}}>AI가 게시글을 대신 작성해줘요</span>
          <label style={{marginLeft:'auto'}}>
            <input type="checkbox" checked={aiWrite} onChange={e=>setAiWrite(e.target.checked)} style={{width:0,height:0,opacity:0}} />
            <span style={{display:'inline-block',width:38,height:22,background:aiWrite?'#7c4dff':'#ddd',borderRadius:12,position:'relative',verticalAlign:'middle',transition:'background 0.2s'}}>
              <span style={{position:'absolute',left:aiWrite?18:2,top:2,width:18,height:18,borderRadius:'50%',background:'#fff',boxShadow:'0 1px 4px #bbb',transition:'left 0.2s'}}></span>
            </span>
          </label>
        </div>
        <Form onSubmit={handleSubmit} style={{padding:'28px 18px 0 18px',background:'#fff',borderRadius:22,boxShadow:'0 2px 16px rgba(46,216,182,0.08)',margin:'22px 0'}}>
          <ImgUploadBox style={{marginBottom:28}}>
            {images.map((img, i) => (
              <ImgPreview key={i} style={{boxShadow:'0 2px 8px #eee',position:'relative'}}>
                <Img src={img.url} alt="preview" />
                {/* 대표사진 표시 */}
                {i === 0 && (
                  <span style={{position:'absolute',bottom:4,left:4,background:'#2ed8b6',color:'#fff',fontSize:12,padding:'2px 8px',borderRadius:7,fontWeight:700,boxShadow:'0 1px 4px #bbb'}}>대표사진</span>
                )}
                {/* 삭제 버튼 좌상단, 작게 */}
                <CloseBtn style={{position:'absolute',top:3,left:3,fontSize:13,background:'#fff',borderRadius:'50%',boxShadow:'0 1px 4px #bbb',width:22,height:22,display:'flex',alignItems:'center',justifyContent:'center',padding:0}} type="button" onClick={()=>removeImage(i)} aria-label="사진 삭제"><FaTimes /></CloseBtn>
              </ImgPreview>
            ))}
            {images.length < 10 && (
              <ImgAddBtn style={{border:'2px dashed #b2f0e6',background:'#f8f9fa',color:'#2ed8b6',borderRadius:12}}>
                <input type="file" accept="image/*" multiple hidden ref={fileInput} onChange={handleImageChange} />
                <FaCamera />
                <div style={{fontSize:13,marginTop:2}}>{images.length}/10</div>
              </ImgAddBtn>
            )}
          </ImgUploadBox>
          {touched.images && images.length === 0 && <ErrorMsg>이미지를 1장 이상 등록해 주세요.</ErrorMsg>}
          <Row>
            <Label htmlFor="title">제목</Label>
            <Input id="title" name="title" placeholder="글 제목" value={title} onChange={e=>setTitle(e.target.value)} onBlur={handleBlur} maxLength={40} style={{borderColor:touched.title&&!title?'#ff4d4f':'#b2f0e6',background:'#f8f9fa',fontSize:17}} />
            {touched.title && !title && <ErrorMsg>제목을 입력해 주세요.</ErrorMsg>}
          </Row>
          <Row>
            <Label htmlFor="desc">상세설명</Label>
            <Textarea id="desc" name="desc" placeholder={`상세설명에 채울 게시글 내용을 작성해 주세요.(판매금지 물품은 게시가 제한될 수 있어요)\n\n신뢰할 수 있는 거래를 위해 자세히 적어주세요. 중소벤처기업부, 한국콘텐츠진흥원과 함께 해요`} value={desc} onChange={e=>setDesc(e.target.value)} onBlur={handleBlur} onFocus={handleDescFocus} maxLength={1000} style={{borderColor:touched.desc&&!desc?'#ff4d4f':'#b2f0e6',background:'#f8f9fa',fontSize:16}} />
            {touched.desc && !desc && <ErrorMsg>상세설명을 입력해 주세요.</ErrorMsg>}
            <button type="button" style={{marginTop:8,padding:'7px 14px',border:'1.5px solid #b2f0e6',borderRadius:8,background:'#f8f9fa',fontWeight:600,fontSize:14,color:'#2ed8b6',cursor:'pointer'}} onClick={()=>alert('자주 쓰는 문구 기능은 추후 지원 예정입니다.')}>자주 쓰는 문구</button>
          </Row>
          <Row>
            <Label>거래 방식</Label>
            <TradeTypeWrap>
              <TradeTypeBtn type="button" $active={tradeType==='sell'} onClick={()=>setTradeType('sell')} style={{borderColor:tradeType==='sell'?'#2ed8b6':'#eee',background:tradeType==='sell'?'#e6fcf7':'#fafafa',color:tradeType==='sell'?'#2ed8b6':'#888',fontWeight:700}}>판매하기</TradeTypeBtn>
              <TradeTypeBtn type="button" $active={tradeType==='give'} onClick={()=>setTradeType('give')} style={{borderColor:tradeType==='give'?'#2ed8b6':'#eee',background:tradeType==='give'?'#e6fcf7':'#fafafa',color:tradeType==='give'?'#2ed8b6':'#888',fontWeight:700}}>나눔하기</TradeTypeBtn>
            </TradeTypeWrap>
          </Row>
          {tradeType==='sell' && (
            <Row>
              <Label htmlFor="price">가격</Label>
              <Input id="price" name="price" type="number" placeholder="₩ 가격을 입력해 주세요." value={price} onChange={e=>setPrice(e.target.value.replace(/[^0-9]/g,''))} onBlur={handleBlur} min={0} style={{borderColor:touched.price&&!price?'#ff4d4f':'#b2f0e6',background:'#f8f9fa',fontSize:16}} />
              {touched.price && !price && <ErrorMsg>가격을 입력해 주세요.</ErrorMsg>}
            </Row>
          )}
          <Row>
            <Label htmlFor="place">거래 희망 장소</Label>
            <PlaceInput id="place" name="place" placeholder="예: 구로디지털단지역 3번 출구 앞" value={place} onChange={e=>setPlace(e.target.value)} maxLength={30} style={{borderColor:'#b2f0e6',background:'#f8f9fa',fontSize:16}} />
            {place && <button type="button" style={{background:'none',border:'none',color:'#bbb',fontSize:18,cursor:'pointer',marginLeft:4}} onClick={()=>setPlace('')} aria-label="장소 입력 삭제"><FaTimes /></button>}
          </Row>
          <div style={{margin:'18px 0 0 0'}}>
            <label style={{fontSize:15, color:'#2ed8b6', fontWeight:600}}>
              <input type="checkbox" checked={echoAuthRequested} onChange={e=>setEchoAuthRequested(e.target.checked)} style={{marginRight:8}} />
              ECHO 인증 신청(관리자 승인 시 인증마크 부여)
            </label>
          </div>
          <SubmitBtn type="submit" disabled={!isValid} style={{background:'#2ed8b6',borderRadius:14,margin:'32px 0 24px 0',fontSize:19,boxShadow:'0 4px 16px rgba(46,216,182,0.10)'}}>작성 완료</SubmitBtn>
          {!isValid && Object.values(touched).some(Boolean) && <ErrorMsg style={{textAlign:'center',marginTop:10}}>필수 입력값을 모두 입력해 주세요.</ErrorMsg>}
        </Form>
      </Inner>
    </Wrapper>
  );
} 