import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { ProductContext } from '../store/ProductContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ListWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding-bottom: 60px;
  background: #f8f9fa;
  min-height: 100vh;
`;
const SearchBox = styled.div`
  padding: 16px 16px 0 16px;
  background: #f8f9fa;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  font-size: 16px;
  border-radius: 16px;
  border: 1px solid #ddd;
  margin-bottom: 8px;
`;
const Card = styled.div`
  display: flex;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  margin-bottom: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  cursor: pointer;
  transition: box-shadow 0.15s;
  &:active { box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
`;
const Img = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  background: #eee;
`;
const Info = styled.div`
  flex: 1;
  padding: 16px 16px 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #222;
  line-height: 1.3;
`;
const Meta = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 4px;
`;
const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #ff7e36;
`;
const Time = styled.div`
  font-size: 13px;
  color: #bbb;
  margin-top: 8px;
`;
const LikeBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  font-size: 22px;
  color: ${props => props.liked ? '#ff7e36' : '#bbb'};
  cursor: pointer;
`;
const CardWrap = styled.div`
  position: relative;
`;

// 민트 그린 컬러 팔레트
const colors = {
  bg: '#e0f7f3',
  card: '#fff',
  border: '#b2f0e6',
  shadow: 'rgba(46,216,182,0.08)',
  accent: '#2ed8b6',
  accentLight: '#b2f0e6',
  text: '#1a4740',
  sub: '#3bbfa6',
  time: '#7ad9c2',
};

// 썸네일 매핑 함수 (Unsplash 등 무료 이미지)
function getThumbnail(title) {
  if (title.includes('기타')) return 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80';
  if (title.includes('피아노')) return 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80';
  if (title.includes('드럼')) return 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80';
  if (title.includes('바이올린')) return 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80';
  if (title.includes('플룻')) return 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=400&q=80';
  // 기본 이미지
  return 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80';
}

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
          <LikeBtn liked={likes.includes(product.id)} onClick={e => { e.stopPropagation(); toggleLike(product.id); }} aria-label="찜">
            {likes.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
          </LikeBtn>
          <Card onClick={() => navigate(`/product/${product.id}`)}>
            <Img src={getThumbnail(product.title)} alt={product.title} />
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
      {filtered.length === 0 && <div style={{ color: '#888', textAlign: 'center', marginTop: 40 }}>검색 결과가 없습니다.</div>}
    </ListWrapper>
  );
} 
