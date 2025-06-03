import React, { createContext, useState } from 'react';

const initialProducts = [
  { id: 1, title: '야마하 어쿠스틱 기타', price: '300,000원', location: '서울 강남구', time: '1시간 전', author: '나' },
  { id: 2, title: '커즈와일 신디사이저', price: '1,200,000원', location: '서울 마포구', time: '30분 전', author: '나' },
  { id: 3, title: '야마하 디지털 피아노', price: '800,000원', location: '서울 송파구', time: '2시간 전', author: '나' },
  { id: 4, title: '펜더 일렉 기타', price: '950,000원', location: '서울 구로구', time: '3시간 전', author: '나' },
  { id: 5, title: '롤랜드 전자 드럼', price: '1,500,000원', location: '서울 동작구', time: '4시간 전', author: '나' },
  { id: 6, title: '셀마 알토 색소폰', price: '2,000,000원', location: '서울 서초구', time: '5시간 전', author: '나' },
  { id: 7, title: '야마하 플룻', price: '400,000원', location: '서울 은평구', time: '6시간 전', author: '나' },
  { id: 8, title: '깁슨 레스폴', price: '2,500,000원', location: '서울 강서구', time: '7시간 전', author: '나' },
  { id: 9, title: '야마하 업라이트 피아노', price: '1,800,000원', location: '서울 종로구', time: '8시간 전', author: '나' },
  { id: 10, title: '마틴 통기타', price: '1,100,000원', location: '서울 노원구', time: '9시간 전', author: '나' },
  { id: 11, title: '야마하 베이스 기타', price: '600,000원', location: '서울 성동구', time: '10시간 전', author: '나' },
  { id: 12, title: '프리소너스 오디오 인터페이스', price: '350,000원', location: '서울 용산구', time: '11시간 전', author: '나' },
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