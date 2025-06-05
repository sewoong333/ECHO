import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../store/ProductContext';
import { UserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaHeart, FaRegHeart, FaEllipsisH } from 'react-icons/fa';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #f8f9fa;
`;
const SectionBox = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;
const Header = styled.div`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 18px 0 0 0;
  border-bottom: 1.5px solid #f2f2f2;
  box-sizing: border-box;
`;
const Title = styled.h1`
  font-size: 22px;
  font-weight: 800;
  margin: 0;
`;
const ProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 8px;
`;
const WriteBtn = styled.button`
  background: #fff3eb;
  color: #ff7e36;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 7px 18px;
  font-size: 15px;
  margin-left: 12px;
  cursor: pointer;
`;
const Tabs = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 18px 0;
  box-sizing: border-box;
  padding: 0;
`;
const Tab = styled.button`
  flex: 1;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.active ? '#2ed8b6' : '#bbb'};
  background: ${props => props.active ? '#e6fcf7' : 'transparent'};
  border-bottom: 3px solid ${props => props.active ? '#2ed8b6' : 'transparent'};
  padding: 14px 0 12px 0;
  cursor: pointer;
  transition: color 0.18s, background 0.18s, border-bottom 0.18s;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0; top: 25%; bottom: 25%;
    width: 1px;
    background: #f2f2f2;
  }
`;
const List = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 0 40px 0;
  box-sizing: border-box;
`;
const Item = styled.div`
  display: flex;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 1px 4px #b2f0e6;
  margin-bottom: 18px;
  padding: 16px 0;
  align-items: flex-start;
  width: 100%;
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  background: #eee;
  margin-right: 14px;
`;
const Info = styled.div`
  flex: 1;
  min-width: 0;
`;
const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Meta = styled.div`
  font-size: 13px;
  color: #888;
  margin-bottom: 2px;
`;
const Price = styled.div`
  font-size: 17px;
  font-weight: 800;
  color: #222;
  margin-bottom: 6px;
`;
const ItemBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 12px;
`;
const Stat = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #bbb;
  gap: 3px;
`;
const BtnRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
const ActionBtn = styled.button`
  flex: 1;
  background: #fafafa;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #222;
  padding: 10px 0;
  cursor: pointer;
  box-shadow: 0 1px 2px #eee;
`;
const MoreBtn = styled.button`
  background: none;
  border: none;
  color: #bbb;
  font-size: 22px;
  margin-left: 4px;
  cursor: pointer;
`;

const dummyProfile = 'https://randomuser.me/api/portraits/women/44.jpg';

export default function SalesHistory() {
  const { products, likes, toggleLike } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // 더미: 거래완료/숨김 구분
  const [tab, setTab] = useState('sale');
  const myProducts = products.filter(p => p.author === user.nickname);
  const saleList = myProducts.filter(p => !p.sold && !p.hidden);
  const doneList = myProducts.filter(p => p.sold);
  const hiddenList = myProducts.filter(p => p.hidden);
  const list = tab === 'sale' ? saleList : tab === 'done' ? doneList : hiddenList;

  return (
    <Wrapper>
      <SectionBox>
        <Header>
          <FaChevronLeft size={22} style={{cursor:'pointer'}} onClick={()=>navigate(-1)} />
          <Title>나의 판매내역</Title>
          <div style={{display:'flex',alignItems:'center'}}>
            <WriteBtn onClick={()=>navigate('/add')}>글쓰기</WriteBtn>
            <ProfileImg src={dummyProfile} alt="profile" />
          </div>
        </Header>
        <Tabs>
          <Tab active={tab==='sale'} onClick={()=>setTab('sale')}>판매중 {saleList.length}</Tab>
          <Tab active={tab==='done'} onClick={()=>setTab('done')}>거래완료 {doneList.length}</Tab>
          <Tab active={tab==='hidden'} onClick={()=>setTab('hidden')}>숨김 {hiddenList.length}</Tab>
        </Tabs>
        <List>
          {list.length === 0 && <div style={{color:'#bbb',textAlign:'center',marginTop:40}}>상품이 없습니다.</div>}
          {list.map(p => (
            <Item key={p.id}>
              <Img src={p.image || 'https://via.placeholder.com/80'} alt={p.title} />
              <Info>
                <ItemTitle>{p.title}</ItemTitle>
                <Meta>{p.location} · {p.time || '방금 전'}</Meta>
                <Price>{Number(p.price).toLocaleString('ko-KR')}원</Price>
                <ItemBottom>
                  <Stat><FaRegHeart size={15} style={{marginRight:2}} />{likes.filter(id=>id===p.id).length}</Stat>
                  <Stat>💬 {p.views || 0}</Stat>
                </ItemBottom>
                <BtnRow>
                  <ActionBtn>끌어올리기</ActionBtn>
                  <ActionBtn>홍보하기</ActionBtn>
                  <MoreBtn><FaEllipsisH /></MoreBtn>
                </BtnRow>
              </Info>
            </Item>
          ))}
        </List>
      </SectionBox>
    </Wrapper>
  );
} 