import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../store/ProductContext';
import { UserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiMoreHorizontal, FiHeart, FiMessageCircle } from 'react-icons/fi';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../utils/firebase';
import TopBar from '../components/TopBar';

const dummyUser = {
  profile: 'https://i.ibb.co/3y0Qw1K/profile-demo.jpg',
};
const dummyItems = [
  {
    img: 'https://i.ibb.co/6bQyQw1/amp-demo.jpg',
    title: 'labgruppen 랩그루펜 pdx3000 2채널 파워앰프 테스트만해본 제품…',
    meta: '구로동 · 끌올 3주 전 · 끌올 13회',
    price: '590,000원',
    chat: 1,
    like: 5,
  },
  {
    img: 'https://i.ibb.co/3kQyQw1/bike-demo.jpg',
    title: '다혼 보드워크 전기자전거 팝니다',
    meta: '구로동 · 끌올 3주 전 · 끌올 7회',
    price: '370,000원',
    chat: 2,
    like: 14,
  },
  {
    img: 'https://i.ibb.co/2tQyQw1/earring-demo.jpg',
    title: '반클리프아펠 프리볼 귀걸이',
    meta: '구로동 · 끌올 3주 전 · 끌올 6회',
    price: '439만원',
    chat: 0,
    like: 15,
  },
];

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
`;
const StyledTopBar = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 18px 0 18px;
`;
const BackBtn = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #222;
  cursor: pointer;
  margin-right: 8px;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #222;
  flex: 1;
`;
const ProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 8px;
`;
const WriteBtn = styled.button`
  background: #2ed8b6;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 7px 18px;
  margin: 0;
  cursor: pointer;
  align-self: flex-start;
`;
const Tabs = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0 0 0;
  width: 100%;
  max-width: 480px;
  border-bottom: 1.5px solid #eee;
`;
const Tab = styled.div`
  flex: 1;
  text-align: center;
  font-size: 17px;
  font-weight: ${({ $active }) => ($active ? 800 : 600)};
  color: ${({ $active }) => ($active ? '#222' : '#bbb')};
  padding-bottom: 12px;
  border-bottom: ${({ $active }) => ($active ? '2.5px solid #222' : 'none')};
  cursor: pointer;
`;
const FilterRow = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  padding: 12px 18px 0 18px;
`;
const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
const FilterLabel = styled.label`
  font-size: 16px;
  color: #222;
  font-weight: 500;
`;
const List = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 8px;
`;
const Item = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 18px 0 0 0;
  border-bottom: 1.5px solid #f2f2f2;
`;
const Thumb = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;
  object-fit: cover;
  margin-left: 18px;
  margin-right: 16px;
`;
const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const ItemTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #222;
  margin-bottom: 6px;
  margin-top: 2px;
  line-height: 1.3;
`;
const ItemMeta = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 2px;
`;
const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #222;
  margin-bottom: 2px;
`;
const ItemStats = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 2px;
`;
const Stat = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #bbb;
  gap: 3px;
`;
const ItemBtns = styled.div`
  display: flex;
  gap: 10px;
  margin: 14px 0 18px 124px;
`;
const ActionBtn = styled.button`
  flex: 1;
  background: #f7f8fa;
  color: #222;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  padding: 13px 0;
  cursor: pointer;
`;
const MoreBtn = styled(ActionBtn)`
  width: 48px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterBtn = styled.button`
  background: ${({ $active }) => ($active ? '#222' : 'none')};
  color: ${({ $active }) => ($active ? '#fff' : '#222')};
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 7px 18px;
  margin: 0;
  cursor: pointer;
  align-self: flex-start;
`;

export default function SalesHistory() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { likes, chatRooms } = useContext(ProductContext);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchSalesHistory = async () => {
      try {
        const q = query(
          collection(db, 'products'),
          where('author', '==', user.nickname),
          orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const salesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setList(salesList);
      } catch (err) {
        console.error('판매내역 불러오기 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    if (user.isLoggedIn) {
      fetchSalesHistory();
    }
  }, [user]);

  const filteredList = list.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'active') return !item.sold;
    if (filter === 'sold') return item.sold;
    return true;
  });

  if (loading) {
    return (
      <Wrapper>
        <TopBar />
        <div style={{ textAlign: 'center', padding: '40px 0' }}>로딩중...</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <StyledTopBar>
        <BackBtn onClick={() => navigate(-1)}>
          <FiChevronLeft />
        </BackBtn>
        <Title>판매내역</Title>
        <ProfileImg src={dummyUser.profile} alt="profile" />
      </StyledTopBar>
      <FilterRow>
        <FilterBtn $active={filter === 'all'} onClick={() => setFilter('all')}>전체</FilterBtn>
        <FilterBtn $active={filter === 'active'} onClick={() => setFilter('active')}>판매중</FilterBtn>
        <FilterBtn $active={filter === 'sold'} onClick={() => setFilter('sold')}>판매완료</FilterBtn>
      </FilterRow>
      <List>
        {filteredList.length === 0 && <div style={{color:'#bbb',textAlign:'center',marginTop:40}}>상품이 없습니다.</div>}
        {filteredList.map((item, i) => (
          <div key={i}>
            <Item>
              <Thumb src={item.image || 'https://via.placeholder.com/90'} alt="썸네일" />
              <Info>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemMeta>{item.location} · {item.time || '방금 전'}</ItemMeta>
                <ItemPrice>{Number(item.price).toLocaleString('ko-KR')}원</ItemPrice>
                <ItemStats>
                  <Stat><FiMessageCircle size={16} />{chatRooms?.[item.id]?.length || 0}</Stat>
                  <Stat><FiHeart size={16} />{likes.filter(id=>id===item.id).length}</Stat>
                  <Stat>👁{item.views || 0}</Stat>
                </ItemStats>
              </Info>
              <MoreBtn><FiMoreHorizontal size={22} /></MoreBtn>
            </Item>
            <ItemBtns>
              <ActionBtn>끌어올리기</ActionBtn>
              <ActionBtn>홍보하기</ActionBtn>
              <MoreBtn><FiMoreHorizontal size={22} /></MoreBtn>
            </ItemBtns>
          </div>
        ))}
      </List>
    </Wrapper>
  );
} 