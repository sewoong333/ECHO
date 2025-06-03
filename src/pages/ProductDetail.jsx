import React, { useContext } from 'react';
import TopBar from '../components/TopBar';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../store/ProductContext';
import { FaHeart, FaRegCommentDots, FaUserCircle, FaArrowLeft } from 'react-icons/fa';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find(p => String(p.id) === String(id));
  if (!product) return <div style={{ padding: 32 }}>상품을 찾을 수 없습니다.</div>;

  // 썸네일 매핑 함수 (제목에 맞는 실제 악기 Unsplash 이미지)
  function getThumbnail(title) {
    if (title.includes('기타')) return 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80'; // 기타
    if (title.includes('피아노')) return 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80'; // 피아노
    if (title.includes('드럼')) return 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'; // 드럼
    if (title.includes('바이올린')) return 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'; // 바이올린
    if (title.includes('플룻')) return 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=400&q=80'; // 플룻
    // 기본 이미지(중고거래/악기)
    return 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80';
  }

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#f8f9fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TopBar />
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto', padding: 0, boxSizing: 'border-box' }}>
        <div style={{ width: '100%', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px rgba(46,216,182,0.08)', padding: 0, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'stretch', margin: '32px 0', boxSizing: 'border-box' }}>
          {/* 뒤로가기 버튼 - 카드 상단 좌측, 이미지 위 */}
          <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.85)', border: '1.5px solid #b2f0e6', borderRadius: 20, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#2ed8b6', zIndex: 102, boxShadow: '0 1px 4px #b2f0e6', padding: 0 }}>
            <FaArrowLeft style={{ margin: 0, fontSize: 18 }} />
          </button>
          <img src={getThumbnail(product.title)} alt={product.title} style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: '14px 14px 0 0', borderBottom: '1.5px solid #b2f0e6' }} />
          <div style={{ width: '100%', padding: '22px 20px 18px 20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingBottom: 32, wordBreak: 'break-all', overflowWrap: 'break-word', boxSizing: 'border-box' }}>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1a4740', margin: 0, marginBottom: 8 }}>{product.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#888', marginBottom: 6 }}>
              <span><FaUserCircle style={{ marginRight: 3 }} />홍길동</span>
              <span>· {product.category || '기타'}</span>
              <span>· {product.time || '방금 전'}</span>
            </div>
            <div style={{ fontSize: 14, color: '#888', marginBottom: 10 }}>{product.location}</div>
            <div style={{ fontWeight: 700, fontSize: 20, color: '#2ed8b6', margin: '0 0 10px 0' }}>{product.price}</div>
            <div style={{ color: '#1a4740', fontSize: 16, lineHeight: 1.7, marginBottom: 18 }}>{product.description}</div>
            <div style={{ width: '100%', background: '#f8f9fa', borderRadius: 8, padding: '16px 14px', margin: '0 0 18px 0', border: '1.5px solid #e0e0e0', color: '#333', fontSize: 15, lineHeight: 1.7, boxSizing: 'border-box' }}>
              <div style={{ fontWeight: 600, marginBottom: 8, color: '#2ed8b6' }}>물건 상세 내용</div>
              <div>상태: <b>매우 양호</b></div>
              <div>거래방법: <b>직거래(현장)</b></div>
              <div>직거래장소: <b>구로디지털단지역 3번 출구 앞</b></div>
              <div>추가 설명: <span style={{ color: '#888' }}>구매 후 사용감 거의 없고, 구성품 모두 포함되어 있습니다. 에눌 문의 환영합니다!</span></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 14, color: '#bbb', marginBottom: 8 }}>
              <span><FaRegCommentDots style={{ marginRight: 2 }} />{product.views || 0} 조회</span>
              <span><FaHeart style={{ marginRight: 2, color: '#ff7e36' }} />{product.likes || 0} 찜</span>
            </div>
            <button
              style={{ width: '100%', margin: '10px 0 24px 0', padding: 14, fontSize: 18, background: '#2ed8b6', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, boxShadow: '0 2px 8px #b2f0e6', alignSelf: 'center', boxSizing: 'border-box' }}
              onClick={() => navigate(`/chat/${product.id}`)}
            >
              채팅하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 