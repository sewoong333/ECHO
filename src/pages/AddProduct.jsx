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
  &:focus {
    border: 1.5px solid #ff7e36;
    background: #fff;
  }
`;
const Label = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 7px;
`;
const Row = styled.div`
  margin-bottom: 18px;
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

  return (
    <Wrapper>
      <Inner>
        <TopBar>
          <CloseBtn onClick={() => navigate(-1)}><FaTimes /></CloseBtn>
          <Title>내 물건 팔기</Title>
        </TopBar>
        <Form onSubmit={handleSubmit}>
          <ImgUploadBox>
            {images.map((img, i) => (
              <ImgPreview key={i}>
                <Img src={img.url} alt="preview" />
                <CloseBtn style={{position:'absolute',top:2,right:2,fontSize:14}} type="button" onClick={()=>removeImage(i)}><FaTimes /></CloseBtn>
              </ImgPreview>
            ))}
            {images.length < 10 && (
              <ImgAddBtn>
                <input type="file" accept="image/*" multiple hidden ref={fileInput} onChange={handleImageChange} />
                <FaCamera />
                <div style={{fontSize:12,marginTop:2}}>{images.length}/10</div>
              </ImgAddBtn>
            )}
          </ImgUploadBox>
          {touched.images && images.length === 0 && <ErrorMsg>이미지를 1장 이상 등록해 주세요.</ErrorMsg>}
          <Row>
            <Label>제목</Label>
            <Input name="title" placeholder="글 제목" value={title} onChange={e=>setTitle(e.target.value)} onBlur={handleBlur} maxLength={40} style={touched.title && !title ? {borderColor:'#ff4d4f'} : {}} />
            {touched.title && !title && <ErrorMsg>제목을 입력해 주세요.</ErrorMsg>}
          </Row>
          <Row>
            <Label>자세한 설명</Label>
            <Textarea name="desc" placeholder={`구로동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)\n\n신뢰할 수 있는 거래를 위해 자세히 적어주세요. 과학기술정보통신부, 한국 인터넷진흥원과 함께 해요.`} value={desc} onChange={e=>setDesc(e.target.value)} onBlur={handleBlur} maxLength={1000} style={touched.desc && !desc ? {borderColor:'#ff4d4f'} : {}} />
            {touched.desc && !desc && <ErrorMsg>상세 설명을 입력해 주세요.</ErrorMsg>}
          </Row>
          <Row>
            <Label>거래 방식</Label>
            <TradeTypeWrap>
              <TradeTypeBtn type="button" $active={tradeType==='sell'} onClick={()=>setTradeType('sell')}>판매하기</TradeTypeBtn>
              <TradeTypeBtn type="button" $active={tradeType==='give'} onClick={()=>setTradeType('give')}>나눔하기</TradeTypeBtn>
            </TradeTypeWrap>
          </Row>
          {tradeType==='sell' && (
            <Row>
              <Input name="price" type="number" placeholder="₩ 가격을 입력해 주세요." value={price} onChange={e=>setPrice(e.target.value.replace(/[^0-9]/g,''))} onBlur={handleBlur} min={0} style={touched.price && !price ? {borderColor:'#ff4d4f'} : {}} />
              {touched.price && !price && <ErrorMsg>가격을 입력해 주세요.</ErrorMsg>}
              <CheckboxLabel>
                <input type="checkbox" checked={allowOffer} onChange={e=>setAllowOffer(e.target.checked)} />
                가격 제안 받기
              </CheckboxLabel>
            </Row>
          )}
          <Row>
            <Label>거래 희망 장소</Label>
            <PlaceInput name="place" placeholder="예: 구로디지털단지역 3번 출구 앞" value={place} onChange={e=>setPlace(e.target.value)} maxLength={30} />
          </Row>
          <div style={{margin:'18px 0 0 0'}}>
            <label style={{fontSize:15, color:'#2ed8b6', fontWeight:600}}>
              <input type="checkbox" checked={echoAuthRequested} onChange={e=>setEchoAuthRequested(e.target.checked)} style={{marginRight:8}} />
              ECHO 인증 신청(관리자 승인 시 인증마크 부여)
            </label>
          </div>
          <SubmitBtn type="submit" disabled={!isValid}>등록 완료</SubmitBtn>
          {!isValid && Object.values(touched).some(Boolean) && <ErrorMsg style={{textAlign:'center',marginTop:10}}>필수 입력값을 모두 입력해 주세요.</ErrorMsg>}
        </Form>
      </Inner>
    </Wrapper>
  );
} 