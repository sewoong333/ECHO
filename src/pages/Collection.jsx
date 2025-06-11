import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

export default function Collection() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [myProducts, setMyProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [chatProducts, setChatProducts] = useState([]);
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
          const prodDoc = await getDoc(doc(db, 'products', pid));
          return prodDoc.exists() ? { id: pid, ...prodDoc.data() } : null;
        });
        setLikedProducts((await Promise.all(likedProdPromises)).filter(Boolean));
        // 채팅한 상품
        const chatQ = query(collection(db, 'chatRooms'), where('participants', 'array-contains', user.nickname));
        const chatSnap = await getDocs(chatQ);
        const chatProdIds = chatSnap.docs.map(doc => doc.data().productId);
        const chatProdPromises = chatProdIds.map(async pid => {
          const prodDoc = await getDoc(doc(db, 'products', pid));
          return prodDoc.exists() ? { id: pid, ...prodDoc.data() } : null;
        });
        setChatProducts((await Promise.all(chatProdPromises)).filter(Boolean));
      } catch (err) {
        console.error('모아보기 데이터 불러오기 실패:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div style={{padding:24, maxWidth:480, margin:'0 auto'}}>
      <h2 style={{fontSize:22, fontWeight:700, marginBottom:18}}>모아보기</h2>
      <div style={{marginBottom:18}}>
        <b>내가 등록한 상품</b>
        {loading && <div style={{color:'#bbb'}}>로딩중...</div>}
        {!loading && myProducts.length === 0 && <div style={{color:'#bbb'}}>없음</div>}
        {myProducts.map(p => (
          <div key={p.id} onClick={()=>navigate(`/product/${p.id}`)} style={{background:'#fff',borderRadius:10,boxShadow:'0 1px 4px #b2f0e6',padding:12,marginBottom:8,cursor:'pointer'}}>{p.title}</div>
        ))}
      </div>
      <div style={{marginBottom:18}}>
        <b>찜한 상품</b>
        {loading && <div style={{color:'#bbb'}}>로딩중...</div>}
        {!loading && likedProducts.length === 0 && <div style={{color:'#bbb'}}>없음</div>}
        {likedProducts.map(p => (
          <div key={p.id} onClick={()=>navigate(`/product/${p.id}`)} style={{background:'#fff',borderRadius:10,boxShadow:'0 1px 4px #b2f0e6',padding:12,marginBottom:8,cursor:'pointer'}}>{p.title}</div>
        ))}
      </div>
      <div style={{marginBottom:18}}>
        <b>채팅한 상품</b>
        {loading && <div style={{color:'#bbb'}}>로딩중...</div>}
        {!loading && chatProducts.length === 0 && <div style={{color:'#bbb'}}>없음</div>}
        {chatProducts.map(p => (
          <div key={p.id} onClick={()=>navigate(`/product/${p.id}`)} style={{background:'#fff',borderRadius:10,boxShadow:'0 1px 4px #b2f0e6',padding:12,marginBottom:8,cursor:'pointer'}}>{p.title}</div>
        ))}
      </div>
    </div>
  );
} 