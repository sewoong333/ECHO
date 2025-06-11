import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

export default function PurchaseHistory() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchases = async () => {
      if (!user.isLoggedIn) return;
      setLoading(true);
      try {
        // 내가 참여한 채팅방 중 내가 판매자가 아닌 상품만
        const chatQ = query(
          collection(db, 'chatRooms'),
          where('participants', 'array-contains', user.nickname)
        );
        const chatSnap = await getDocs(chatQ);
        const productIds = [];
        chatSnap.forEach(doc => {
          const data = doc.data();
          if (data.seller !== user.nickname && data.productId) {
            productIds.push(data.productId);
          }
        });
        // 상품 정보 가져오기
        const productPromises = productIds.map(async pid => {
          const prodDoc = await getDoc(doc(db, 'products', pid));
          return prodDoc.exists() ? { id: pid, ...prodDoc.data() } : null;
        });
        const products = (await Promise.all(productPromises)).filter(Boolean);
        setPurchases(products);
      } catch (err) {
        console.error('구매내역 불러오기 실패:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPurchases();
  }, [user]);

  return (
    <div style={{padding:24, maxWidth:480, margin:'0 auto'}}>
      <h2 style={{fontSize:22, fontWeight:700, marginBottom:18}}>구매내역</h2>
      {loading && <div style={{color:'#bbb'}}>로딩중...</div>}
      {!loading && purchases.length === 0 && <div style={{color:'#bbb'}}>구매한 상품이 없습니다.</div>}
      {purchases.map(p => (
        <div key={p.id} onClick={()=>navigate(`/product/${p.id}`)} style={{background:'#fff',borderRadius:10,boxShadow:'0 1px 4px #b2f0e6',padding:16,marginBottom:14,cursor:'pointer'}}>
          <div style={{fontWeight:600, fontSize:17, marginBottom:6}}>{p.title}</div>
          <div style={{color:'#2ed8b6', fontWeight:700}}>{p.price}원</div>
        </div>
      ))}
    </div>
  );
} 