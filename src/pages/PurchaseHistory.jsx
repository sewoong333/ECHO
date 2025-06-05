import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../store/ProductContext';
import { UserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';

export default function PurchaseHistory() {
  const { products } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [chatRooms, setChatRooms] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem('chatRooms');
    if (saved) setChatRooms(JSON.parse(saved));
  }, []);
  // 내가 판매자가 아닌 채팅방만
  const myPurchases = chatRooms
    .map(room => products.find(p => String(p.id) === String(room.id)))
    .filter(p => p && p.author !== user.nickname);
  return (
    <div style={{padding:24, maxWidth:480, margin:'0 auto'}}>
      <h2 style={{fontSize:22, fontWeight:700, marginBottom:18}}>구매내역</h2>
      {myPurchases.length === 0 && <div style={{color:'#bbb'}}>구매한 상품이 없습니다.</div>}
      {myPurchases.map(p => (
        <div key={p.id} onClick={()=>navigate(`/product/${p.id}`)} style={{background:'#fff',borderRadius:10,boxShadow:'0 1px 4px #b2f0e6',padding:16,marginBottom:14,cursor:'pointer'}}>
          <div style={{fontWeight:600, fontSize:17, marginBottom:6}}>{p.title}</div>
          <div style={{color:'#2ed8b6', fontWeight:700}}>{p.price}원</div>
        </div>
      ))}
    </div>
  );
} 