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
  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: 0, background: '#f8f9fa', minHeight: '100vh' }}>
      <TopBar />
      <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: 60, left: 16, background: '#fff', border: '1px solid #eee', borderRadius: 20, width: 36, height: 36, fontSize: 20, color: '#888', zIndex: 102 }}>←</button>
      <div style={{ padding: 24 }}>
        <img src={product.image} alt={product.title} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 8, marginBottom: 24 }} />
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>{product.title}</h1>
        <p style={{ color: '#888', margin: '8px 0' }}>{product.location}</p>
        <p style={{ fontWeight: 600, fontSize: 22 }}>{product.price}</p>
        <p style={{ margin: '16px 0' }}>{product.description}</p>
        <div style={{ margin: '16px 0', color: '#555' }}>판매자: 홍길동</div>
        <button style={{ width: '100%', padding: 14, fontSize: 18, background: '#ff7e36', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 600 }}>채팅하기</button>
      </div>
    </div>
  );
} 