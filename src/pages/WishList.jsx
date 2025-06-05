import React, { useContext } from 'react';
import { ProductContext } from '../store/ProductContext';
import { useNavigate } from 'react-router-dom';

export default function WishList() {
  const { products, likes } = useContext(ProductContext);
  const navigate = useNavigate();
  const likedProducts = products.filter(p => likes.includes(p.id));
  return (
    <div style={{padding:24, maxWidth:480, margin:'0 auto'}}>
      <h2 style={{fontSize:22, fontWeight:700, marginBottom:18}}>관심목록</h2>
      {likedProducts.length === 0 && <div style={{color:'#bbb'}}>관심 상품이 없습니다.</div>}
      {likedProducts.map(p => (
        <div key={p.id} onClick={()=>navigate(`/product/${p.id}`)} style={{background:'#fff',borderRadius:10,boxShadow:'0 1px 4px #b2f0e6',padding:16,marginBottom:14,cursor:'pointer'}}>
          <div style={{fontWeight:600, fontSize:17, marginBottom:6}}>{p.title}</div>
          <div style={{color:'#2ed8b6', fontWeight:700}}>{p.price}원</div>
        </div>
      ))}
    </div>
  );
} 