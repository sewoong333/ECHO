import React, { createContext, useState } from 'react';

// 더미 유저 닉네임(유저컨텍스트와 동일하게)
const dummyNicknames = [
  '음악왕', '기타소년', '피아노소녀', '드럼짱', '베이스킹', '색소폰러버', '플룻마스터', '신디장인', '보컬리더', '밴드캡틴',
  '재즈러버', '락스타', '힙합보이', '클래식걸', 'EDM매니아', '트로트신', '포크싱어', '뮤지션A', '뮤지션B', '뮤지션C'
];

// 더미 상품 데이터(모델/상품명에 맞는 실제 악기/음향기기 사진 매칭, 1~3장)
const dummyProducts = [
  {
    title: '야마하 FG800 통기타',
    model: 'FG800',
    description: '2021년 구매, 집에서만 연습용으로 사용했습니다. 생활기스 약간 있지만 소리 깨끗합니다. 오리지널 소프트케이스 포함, 직거래만 원해요.',
    price: 230000,
    location: '서울 마포구',
    images: [
      'https://m.media-amazon.com/images/I/41fGV5DxOcL._AC_.jpg',
      'https://peacemusic.kr/web/product/big/202104/3875_shop1_161845.jpg'
    ]
  },
  {
    title: '롤랜드 TD-1K 전자드럼',
    model: 'TD-1K',
    description: '2020년 구매, 연습용으로만 사용. 패드 반응 좋고 소음 적음. 스틱/의자 포함, 직거래만.',
    price: 410000,
    location: '서울 구로구',
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    title: '롤랜드 TD-1KV 전자드럼 세트',
    model: 'TD-1KV',
    description: '2021년 구매, 집에서 연습용으로만 사용한 롤랜드 TD-1KV 전자드럼입니다. 모든 패드 정상 작동, 킥 페달 부드럽게 잘 됩니다. 드럼 스틱, 헤드폰 포함. 인천 부평역 근처 직거래.',
    price: 420000,
    location: '인천 부평구',
    images: [
      'https://static.roland.com/assets/images/products/gallery/td-1kv_angle_gal.jpg'
    ]
  },
  {
    title: '펜더 Player 텔레캐스터 일렉기타',
    model: 'Player Telecaster',
    description: '2020년 구매, 펜더 Player 텔레캐스터 일렉기타입니다. 바디에 미세한 스크래치 있으나 연주에는 문제 없습니다. 오리지널 소프트케이스 포함, 부산 서면 직거래.',
    price: 750000,
    location: '부산 부산진구',
    images: [
      'https://www.fmicassets.com/Damroot/ZoomJpg/10001/0145212500_gtr_frt_001_rr.jpg'
    ]
  }
];

// 유저별로 1개씩만 등록, 중복 없이
const initialProducts = dummyProducts.map((base, i) => ({
  ...base,
  id: Date.now() + Math.random(),
  author: dummyNicknames[i],
  time: `${Math.floor(Math.random()*12)+1}시간 전`,
  views: Math.floor(Math.random()*100),
  image: base.images[0], // 대표사진
}));

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);
  const [likes, setLikes] = useState([]); // 관심 상품 id 배열
  const [chatRooms, setChatRooms] = useState({}); // { [productId]: [chatRoomId, ...] }
  const addProduct = product => setProducts(prev => [{ ...product, author: product.author || '나' }, ...prev]);
  const toggleLike = id => setLikes(prev => prev.includes(id) ? prev.filter(lid => lid !== id) : [...prev, id]);
  const addChatRoom = (productId, chatRoomId) => {
    setChatRooms(prev => ({
      ...prev,
      [productId]: [...(prev[productId] || []), chatRoomId]
    }));
  };
  return (
    <ProductContext.Provider value={{ products, setProducts, addProduct, likes, toggleLike, chatRooms, addChatRoom }}>
      {children}
    </ProductContext.Provider>
  );
} 