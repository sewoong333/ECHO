import React, { useContext, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { ProductContext } from '../store/ProductContext';
import { FaHeart, FaRegHeart, FaClock, FaRegCommentDots, FaCheckCircle, FaPlus, FaEllipsisV, FaPen, FaEdit } from 'react-icons/fa';
import getInstrumentImage from '../utils/getInstrumentImage';

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
  overflow-x: hidden;
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

export default function Home() {
  const navigate = useNavigate();
  const { products, likes, toggleLike, chatRooms } = useContext(ProductContext);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('latest');
  const [visibleCount, setVisibleCount] = useState(10);
  const loaderRef = useRef(null);
  const [hiddenIds, setHiddenIds] = useState([]);
  const [menuOpenId, setMenuOpenId] = useState(null);

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
  const visible = sorted.filter(p => !hiddenIds.includes(p.id)).slice(0, visibleCount);

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

  useEffect(() => {
    console.log('API_KEY:', import.meta.env.VITE_FIREBASE_API_KEY);
    console.log('AUTH_DOMAIN:', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
  }, []);

  return (
    <ListWrapper>
      <TopBar />
      <div style={{ width: '100vw', position: 'relative', minHeight: '80vh' }}>
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
              <Img src={product.image || getInstrumentImage(product.title)} alt={product.title} />
              <button
                style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', cursor: 'pointer', zIndex: 10, padding: 4 }}
                onClick={e => { e.stopPropagation(); setMenuOpenId(product.id === menuOpenId ? null : product.id); }}
                aria-label="더보기"
              >
                <FaEllipsisV size={18} color="#bbb" />
              </button>
              {menuOpenId === product.id && (
                <div style={{ position: 'absolute', top: 38, right: 12, background: '#fff', border: '1.5px solid #eee', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', zIndex: 20, minWidth: 120 }} onClick={e => e.stopPropagation()}>
                  <button style={{ width: '100%', padding: '12px 0', border: 'none', background: 'none', color: '#222', fontWeight: 600, fontSize: 15, cursor: 'pointer', borderBottom: '1px solid #f2f2f2' }} onClick={() => { setHiddenIds(ids => [...ids, product.id]); setMenuOpenId(null); }}>이 글 숨기기</button>
                  <button style={{ width: '100%', padding: '12px 0', border: 'none', background: 'none', color: '#ff7e36', fontWeight: 600, fontSize: 15, cursor: 'pointer', borderBottom: '1px solid #f2f2f2' }} onClick={() => { alert('신고가 접수되었습니다.'); setMenuOpenId(null); }}>신고하기</button>
                  <button style={{ width: '100%', padding: '12px 0', border: 'none', background: 'none', color: '#888', fontWeight: 500, fontSize: 15, cursor: 'pointer' }} onClick={() => setMenuOpenId(null)}>닫기</button>
                </div>
              )}
              <Info>
                <Title>{product.title}</Title>
                <Meta>{product.location}</Meta>
                <Price>판매가격: {Number(product.price).toLocaleString()}원</Price>
                <CardBottom>
                  <Stat><FaRegCommentDots size={15} /> {chatRooms?.[product.id]?.length || 0}</Stat>
                  <Stat><FaHeart size={14} /> {likes.filter(id => id === product.id).length}</Stat>
                  <Stat>👁 {product.views || 0}</Stat>
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
        <button
          onClick={() => navigate('/add')}
          style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(160px)',
            bottom: 80,
            zIndex: 200,
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#2ed8b6',
            color: '#fff',
            border: 'none',
            boxShadow: '0 4px 16px rgba(46,216,182,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            fontWeight: 900,
            cursor: 'pointer',
            padding: 0,
            minWidth: 56,
            minHeight: 56,
            maxWidth: 56,
            maxHeight: 56,
          }}
          aria-label="상품 등록"
        >
          <FaPen style={{fontSize:28, fontWeight:900}} />
        </button>
      </div>
    </ListWrapper>
  );
} 
