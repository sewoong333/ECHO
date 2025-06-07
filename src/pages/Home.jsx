import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { ProductContext } from '../store/ProductContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// 컬러 팔레트
const colors = {
  bg: '#f6f7f9',
  card: '#fff',
  border: '#e5e8eb',
  shadow: 'rgba(0,0,0,0.06)',
  accent: '#ff7e36',
  accentLight: '#ffe3d1',
  text: '#222',
  sub: '#888',
  time: '#bbb',
};

const ListWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding-bottom: 80px;
  background: ${colors.bg};
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const SearchBox = styled.div`
  padding: 18px 18px 0 18px;
  background: ${colors.bg};
  position: sticky;
  top: 0;
  z-index: 10;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 14px 18px;
  font-size: 18px;
  border-radius: 18px;
  border: 1.5px solid ${colors.border};
  margin-bottom: 10px;
  background: #fff;
  box-sizing: border-box;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
  font-weight: 500;
  color: ${colors.text};
  box-shadow: 0 1px 6px ${colors.shadow};
  &:focus {
    border: 1.5px solid ${colors.accent};
    box-shadow: 0 2px 12px ${colors.accentLight};
  }
`;
const Card = styled.div`
  display: flex;
  background: ${colors.card};
  border-radius: 18px;
  overflow: hidden;
  border: 1.5px solid ${colors.border};
  margin: 0 auto 18px auto;
  box-shadow: 0 2px 16px ${colors.shadow};
  cursor: pointer;
  transition: box-shadow 0.18s, transform 0.13s;
  min-height: 110px;
  width: 100%;
  max-width: 480px;
  &:active {
    box-shadow: 0 4px 24px ${colors.accentLight};
    transform: scale(0.98);
  }
  &:hover {
    box-shadow: 0 6px 32px ${colors.accentLight};
    transform: translateY(-2px) scale(1.01);
  }
`;
const Img = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  background: #eee;
  border-radius: 16px 0 0 16px;
  @media (max-width: 400px) {
    width: 90px;
    height: 90px;
  }
`;
const Info = styled.div`
  flex: 1;
  padding: 18px 18px 14px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`;
const Title = styled.h2`
  font-size: 19px;
  font-weight: 800;
  margin: 0 0 10px 0;
  color: ${colors.text};
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Meta = styled.div`
  font-size: 15px;
  color: ${colors.sub};
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Price = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: ${colors.accent};
`;
const Time = styled.div`
  font-size: 14px;
  color: ${colors.time};
  margin-top: 10px;
`;
const LikeBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  font-size: 25px;
  color: ${props => props.$liked ? colors.accent : colors.sub};
  cursor: pointer;
  touch-action: manipulation;
  transition: color 0.18s, transform 0.13s;
  &:active {
    transform: scale(1.18);
    color: ${colors.accent};
  }
`;
const CardWrap = styled.div`
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0.05);
`;
const EmptyMsg = styled.div`
  color: ${colors.sub};
  text-align: center;
  margin-top: 60px;
  font-size: 18px;
  font-weight: 500;
`;

export default function Home() {
  const navigate = useNavigate();
  const { products, likes, toggleLike } = useContext(ProductContext);
  const [search, setSearch] = useState('');
  const filtered = products.filter(product => {
    const q = search.toLowerCase();
    return (
      product.title.toLowerCase().includes(q) ||
      (product.description && product.description.toLowerCase().includes(q)) ||
      (product.category && product.category.toLowerCase().includes(q)) ||
      (product.location && product.location.toLowerCase().includes(q))
    );
  });
  return (
    <ListWrapper>
      <TopBar />
      <SearchBox>
        <SearchInput
          type="text"
          placeholder="검색어를 입력하세요 (제목, 설명, 카테고리, 위치)"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </SearchBox>
      {filtered.map(product => (
        <CardWrap key={product.id}>
          <LikeBtn $liked={likes.includes(product.id)} onClick={e => { e.stopPropagation(); toggleLike(product.id); }} aria-label="찜">
            {likes.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
          </LikeBtn>
          <Card onClick={() => navigate(`/product/${product.id}`)}>
            <Img src={product.image} alt={product.title} />
            <Info>
              <div>
                <Title>{product.title}</Title>
                <Meta>{product.location}</Meta>
                <Price>{product.price}</Price>
              </div>
              <Time>{product.time}</Time>
            </Info>
          </Card>
        </CardWrap>
      ))}
      {filtered.length === 0 && <EmptyMsg>검색 결과가 없습니다.</EmptyMsg>}
    </ListWrapper>
  );
} 