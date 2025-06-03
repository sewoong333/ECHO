import React, { useContext } from 'react';
import TopBar from '../components/TopBar';
import { ProductContext } from '../store/ProductContext';
import { UserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';

const myChats = [
  { id: 1, with: '홍길동', lastMessage: '네, 가능합니다!' },
  { id: 2, with: '이순신', lastMessage: '언제 거래할까요?' },
];

export default function MyPage() {
  const { products } = useContext(ProductContext);
  const { user, logout } = useContext(UserContext);
  const myProducts = products.filter(p => p.author === user.nickname);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: 0, background: '#f8f9fa', minHeight: '100vh' }}>
      <TopBar />
      <div style={{ padding: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: '#2ed8b6' }}>마이페이지</h1>
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#3bbfa6' }}>내 정보</h2>
          <div style={{ marginBottom: 8 }}>닉네임: <b style={{ color: '#1a4740' }}>{user.nickname || '-'}</b></div>
          <div style={{ marginBottom: 8 }}>이메일: <b style={{ color: '#1a4740' }}>{user.email || '-'}</b></div>
          {user.isLoggedIn && <button onClick={handleLogout} style={{ marginTop: 8, padding: '8px 18px', background: '#2ed8b6', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}>로그아웃</button>}
        </section>
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#3bbfa6' }}>내가 등록한 상품</h2>
          <ul>
            {myProducts.length === 0 && <li style={{ color: '#7ad9c2' }}>등록한 상품이 없습니다.</li>}
            {myProducts.map(p => (
              <li key={p.id} style={{ marginBottom: 6 }}><span style={{ color: '#1a4740' }}>{p.title}</span> <span style={{ color: '#2ed8b6', fontWeight: 700 }}>{p.price}</span></li>
            ))}
          </ul>
        </section>
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#3bbfa6' }}>채팅 목록</h2>
          <ul>
            {myChats.map(c => (
              <li key={c.id} style={{ marginBottom: 6 }}><span style={{ color: '#1a4740' }}>{c.with}</span>: <span style={{ color: '#7ad9c2' }}>{c.lastMessage}</span></li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
} 