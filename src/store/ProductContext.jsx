import React, { createContext, useState } from 'react';

const initialProducts = [
  { id: 1, title: '야마하 어쿠스틱 기타', price: '300,000원', location: '서울 강남구', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80', time: '1시간 전', author: '나' },
  { id: 2, title: '커즈와일 신디사이저', price: '1,200,000원', location: '서울 마포구', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', time: '30분 전', author: '나' },
  { id: 3, title: '야마하 디지털 피아노', price: '800,000원', location: '서울 송파구', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', time: '2시간 전', author: '나' },
];

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);
  const [likes, setLikes] = useState([]); // 관심 상품 id 배열
  const addProduct = product => setProducts(prev => [{ ...product, author: product.author || '나' }, ...prev]);
  const toggleLike = id => setLikes(prev => prev.includes(id) ? prev.filter(lid => lid !== id) : [...prev, id]);
  return (
    <ProductContext.Provider value={{ products, addProduct, likes, toggleLike }}>
      {children}
    </ProductContext.Provider>
  );
} 