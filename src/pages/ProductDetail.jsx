import React, { useContext } from 'react';
import TopBar from '../components/TopBar';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../store/ProductContext';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find(p => String(p.id) === String(id));
  if (!product) return <div style={{ padding: 32 }}>상품을 찾을 수 없습니다.</div>;

  // 썸네일 매핑 함수 (Home.jsx와 동일)
  function getThumbnail(title) {
    if (title.includes('기타')) return 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80';
    if (title.includes('피아노')) return 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80';
    if (title.includes('드럼')) return 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80';
    if (title.includes('바이올린')) return 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80';
    if (title.includes('플룻')) return 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=400&q=80';
    // 기본 이미지
    return 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80';
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: 0, background: '#e0f7f3', minHeight: '100vh' }}>
      <TopBar />
      <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: 60, left: 16, background: '#e0f7f3', border: '1.5px solid #2ed8b6', borderRadius: 20, width: 36, height: 36, fontSize: 20, color: '#2ed8b6', zIndex: 102 }}>←</button>
      <div style={{ padding: 24 }}>
        <img src={getThumbnail(product.title)} alt={product.title} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 8, marginBottom: 24, border: '2px solid #b2f0e6' }} />
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#1a4740' }}>{product.title}</h1>
        <p style={{ color: '#3bbfa6', margin: '8px 0' }}>{product.location}</p>
        <p style={{ fontWeight: 700, fontSize: 22, color: '#2ed8b6', margin: 0 }}>{product.price}</p>
        <p style={{ margin: '16px 0', color: '#1a4740' }}>{product.description}</p>
        <div style={{ margin: '16px 0', color: '#3bbfa6' }}>판매자: 홍길동</div>
        <button style={{ width: '100%', padding: 14, fontSize: 18, background: '#2ed8b6', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, boxShadow: '0 2px 8px #b2f0e6' }}>채팅하기</button>
      </div>
    </div>
  );
} 