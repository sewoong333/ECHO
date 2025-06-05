import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../store/ProductContext';
import { UserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Collection() {
  const { products, likes } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [chatRooms, setChatRooms] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem('chatRooms');
    if (saved) setChatRooms(JSON.parse(saved));
  }, []);
  const myProducts = products.filter(p => p.author === user.nickname);
  const likedProducts = products.filter(p => likes.includes(p.id));
  const chatProducts = chatRooms.map(room => products.find(p => String(p.id) === String(room.id))).filter(Boolean);
  return (
    <div style={{padding:24, maxWidth:480, margin:'0 auto'}}>
      <h2 style={{fontSize:22, fontWeight:700, marginBottom:18}}>모아보기</h2>
      <div style={{marginBottom:18}}>
        <b>내가 등록한 상품</b>
        {myProducts.length === 0 && <div style={{color:'#bbb'}}>없음</div>}
        {myProducts.map(p => (
          <div key={p.id} onClick={()=>navigate(`/product/${p.id}`)} style={{background:'#fff',borderRadius:10,boxShadow:'0 1px 4px #b2f0e6',padding:12,marginBottom:8,cursor:'pointer'}}>{p.title}</div>
        ))}
      </div>
      <div style={{marginBottom:18}}>
        <b>찜한 상품</b>
        {likedProducts.length === 0 && <div style={{color:'#bbb'}}>없음</div>}
        {likedProducts.map(p => (
          <div key={p.id} onClick={()=>navigate(`/product/${p.id}`)} style={{background:'#fff',borderRadius:10,boxShadow:'0 1px 4px #b2f0e6',padding:12,marginBottom:8,cursor:'pointer'}}>{p.title}</div>
        ))}
      </div>
      <div style={{marginBottom:18}}>
        <b>채팅한 상품</b>
        {chatProducts.length === 0 && <div style={{color:'#bbb'}}>없음</div>}
        {chatProducts.map(p => (
          <div key={p.id} onClick={()=>navigate(`/product/${p.id}`)} style={{background:'#fff',borderRadius:10,boxShadow:'0 1px 4px #b2f0e6',padding:12,marginBottom:8,cursor:'pointer'}}>{p.title}</div>
        ))}
      </div>
    </div>
  );
} 