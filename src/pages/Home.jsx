import React, { useContext, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { ProductContext } from '../store/ProductContext';
import { FaHeart, FaRegHeart, FaClock, FaRegCommentDots, FaCheckCircle } from 'react-icons/fa';

const colors = {
  bg: '#f8f9fa',
  border: '#ddd',
  text: '#222',
  sub: '#888',
  accent: '#ff7e36',
  shadow: '0 1px 4px rgba(0,0,0,0.03)',
  accentLight: '0 2px 12px rgba(255,126,54,0.2)',
  time: '#bbb',
  card: '#fff'
};

const ListWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchBox = styled.div`
  padding: 18px 18px 0 18px;
  background: ${colors.bg};
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 480px) {
    padding: 14px 10px 0 10px;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 14px 18px;
  font-size: 17px;
  border-radius: 16px;
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
  @media (max-width: 480px) {
    font-size: 15px;
    padding: 12px 12px;
  }
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 16px 0 16px 16px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  transition: background 0.12s;
  &:active { background: #f2f2f2; }
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  background: #eee;
  border-radius: 12px;
  flex-shrink: 0;
`;
const Info = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 14px;
`;
const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #222;
  margin: 0 0 4px 0;
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
  font-size: 16px;
  font-weight: 700;
  color: #222;
  margin-top: 2px;
`;
const CardBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;
const Stat = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #bbb;
  gap: 3px;
`;
const LikeBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  font-size: 20px;
  color: ${props => props.$liked ? colors.accent : colors.sub};
  cursor: pointer;
  touch-action: manipulation;
  transition: color 0.18s, transform 0.13s;
  &:active {
    transform: scale(1.18);
    color: ${colors.accent};
  }
  @media (max-width: 480px) {
    font-size: 17px;
    top: 7px;
    right: 7px;
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
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 40px;
  }
`;
const SortSelect = styled.select`
  height: 32px;
  border-radius: 7px;
  border: 1.5px solid #b2f0e6;
  background: #fff;
  color: #1a4740;
  font-size: 14px;
  font-weight: 600;
  padding: 0 10px;
  margin-left: 8px;
  outline: none;
  box-shadow: 0 1px 4px #b2f0e6;
  transition: border 0.15s;
  &:focus {
    border: 1.5px solid #2ed8b6;
  }
`;

function getInstrumentImage(title) {
  if (title.includes('기타')) return 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80';
  if (title.includes('신디사이저')) return 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80';
  if (title.includes('피아노')) return 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80';
  if (title.includes('드럼')) return 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80';
  if (title.includes('색소폰')) return 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=400&q=80';
  if (title.includes('플룻')) return 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80';
  if (title.includes('오디오 인터페이스')) return 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80';
  return 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80';
}

export default function Home() {
  const navigate = useNavigate();
  const { products, likes, toggleLike } = useContext(ProductContext);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('latest');
  const [visibleCount, setVisibleCount] = useState(10);
  const loaderRef = useRef(null);

  const filtered = products.filter(product => {
    const q = search.toLowerCase();
    return (
      product.title.toLowerCase().includes(q) ||
      (product.description && product.description.toLowerCase().includes(q)) ||
      (product.category && product.category.toLowerCase().includes(q)) ||
      (product.location && product.location.toLowerCase().includes(q))
    );
  });
  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'latest') return b.id - a.id;
    if (sort === 'price') return (b.price || 0) - (a.price || 0);
    return 0;
  });
  const visible = sorted.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(10); // 검색/정렬 바뀌면 초기화
  }, [search, sort]);

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting && visible.length < sorted.length) {
        setVisibleCount(v => Math.min(v + 10, sorted.length));
      }
    }, { threshold: 1 });
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visible.length, sorted.length]);

  return (
    <ListWrapper>
      <TopBar />
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto' }}>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요 (제목, 설명, 카테고리, 위치)"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
            <SortSelect value={sort} onChange={e => setSort(e.target.value)}>
              <option value="latest">최신순</option>
              <option value="price">가격순</option>
            </SortSelect>
          </div>
        </SearchBox>
        {visible.map(product => (
          <CardWrap key={product.id}>
            <Card onClick={() => navigate(`/product/${product.id}`)} style={{ position: 'relative' }}>
              <Img src={getInstrumentImage(product.title)} alt={product.title} />
              <Info>
                <Title>{product.title}</Title>
                <Meta>{product.location}</Meta>
                <Price>{product.price}</Price>
                <CardBottom>
                  <Stat><FaRegCommentDots size={15} /> {product.views || 0}</Stat>
                  <Stat><FaHeart size={14} /> {likes.filter(id => id === product.id).length}</Stat>
                </CardBottom>
              </Info>
              {(
                product.title.includes('커즈와일 신디사이저') ||
                product.title.includes('프리소너스 오디오 인터페이스')
              ) && (
                <span style={{ position: 'absolute', top: 14, right: 18, display: 'inline-flex', alignItems: 'center', color: '#2ed8b6', fontSize: 14, fontWeight: 700, background: '#fff', borderRadius: 12, boxShadow: '0 1px 4px #b2f0e6', padding: '2px 10px', zIndex: 3 }}>
                  <FaCheckCircle style={{ marginRight: 3, color: '#2ed8b6', fontSize: 15 }} />ECHO 인증
                </span>
              )}
            </Card>
          </CardWrap>
        ))}
        <div ref={loaderRef} style={{ height: 30 }} />
        {sorted.length === 0 && <EmptyMsg>검색 결과가 없습니다.</EmptyMsg>}
      </div>
    </ListWrapper>
  );
} 
