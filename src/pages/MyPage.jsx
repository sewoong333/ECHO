import React, { useContext, useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import { UserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';

export default function MyPage() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [myProducts, setMyProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [myChats, setMyChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user.isLoggedIn) return;
      setLoading(true);
      try {
        // 내가 등록한 상품
        const prodQ = query(collection(db, 'products'), where('author', '==', user.nickname));
        const prodSnap = await getDocs(prodQ);
        setMyProducts(prodSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        // 찜한 상품
        const likesQ = query(collection(db, 'likes'), where('userId', '==', user.uid));
        const likesSnap = await getDocs(likesQ);
        const likedIds = likesSnap.docs.map(doc => doc.data().productId);
        const likedProdPromises = likedIds.map(async pid => {
          const prodDoc = await getDocs(query(collection(db, 'products'), where('__name__', '==', pid)));
          return prodDoc.docs.length ? { id: pid, ...prodDoc.docs[0].data() } : null;
        });
        setLikedProducts((await Promise.all(likedProdPromises)).filter(Boolean));
        // 채팅 목록
        const chatQ = query(collection(db, 'chatRooms'), where('participants', 'array-contains', user.nickname));
        const chatSnap = await getDocs(chatQ);
        setMyChats(chatSnap.docs.map(doc => doc.data()));
      } catch (err) {
        console.error('마이페이지 데이터 불러오기 실패:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: '#f8f9fa', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      <TopBar />
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: '#2ed8b6', textAlign: 'center' }}>마이페이지</h1>
        <section style={{ marginBottom: 32, width: '100%' }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#3bbfa6' }}>내 정보</h2>
          <div style={{ marginBottom: 8 }}>닉네임: <b style={{ color: '#1a4740' }}>{user.nickname || '-'}</b></div>
          <div style={{ marginBottom: 8 }}>이메일: <b style={{ color: '#1a4740' }}>{user.email || '-'}</b></div>
          {user.isLoggedIn && <button onClick={handleLogout} style={{ marginTop: 8, padding: '8px 18px', background: '#2ed8b6', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}>로그아웃</button>}
        </section>
        <section style={{ marginBottom: 32, width: '100%' }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#3bbfa6' }}>내가 등록한 상품</h2>
          <ul>
            {loading && <li style={{ color: '#bbb' }}>로딩중...</li>}
            {!loading && myProducts.length === 0 && <li style={{ color: '#7ad9c2' }}>등록한 상품이 없습니다.</li>}
            {myProducts.map(p => (
              <li key={p.id} style={{ marginBottom: 6 }}><span style={{ color: '#1a4740' }}>{p.title}</span> <span style={{ color: '#2ed8b6', fontWeight: 700 }}>{p.price}</span></li>
            ))}
          </ul>
        </section>
        <section style={{ marginBottom: 32, width: '100%' }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#3bbfa6' }}>찜한 상품</h2>
          <ul>
            {loading && <li style={{ color: '#bbb' }}>로딩중...</li>}
            {!loading && likedProducts.length === 0 && <li style={{ color: '#7ad9c2' }}>찜한 상품이 없습니다.</li>}
            {likedProducts.map(p => (
              <li key={p.id} style={{ marginBottom: 6 }}><span style={{ color: '#1a4740' }}>{p.title}</span> <span style={{ color: '#2ed8b6', fontWeight: 700 }}>{p.price}</span></li>
            ))}
          </ul>
        </section>
        <section style={{ width: '100%' }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#3bbfa6' }}>채팅 목록</h2>
          <ul>
            {loading && <li style={{ color: '#bbb' }}>로딩중...</li>}
            {!loading && myChats.length === 0 && <li style={{ color: '#7ad9c2' }}>채팅 내역이 없습니다.</li>}
            {myChats.map((c, i) => (
              <li key={i} style={{ marginBottom: 6 }}><span style={{ color: '#1a4740' }}>{c.productTitle || c.productId}</span>: <span style={{ color: '#7ad9c2' }}>{c.lastMessage || ''}</span></li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
} 