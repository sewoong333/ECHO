import React, { createContext, useState, useEffect } from 'react';
import { db, storage, auth } from '../utils/firebase';
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc, updateDoc, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
  const [products, setProducts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [chatRooms, setChatRooms] = useState({});
  const [loading, setLoading] = useState(true);

  // 상품 목록 불러오기
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const productList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productList);
      } catch (err) {
        console.error('상품 목록 불러오기 실패:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // 상품 추가
  const addProduct = async (product) => {
    try {
      // 이미지가 base64인 경우 Storage에 업로드
      let imageUrls = [];
      if (product.images && product.images.length > 0) {
        imageUrls = await Promise.all(
          product.images.map(async (img) => {
            if (img.startsWith('data:')) {
              try {
                const imageRef = ref(storage, `products/${Date.now()}_${Math.random().toString(36).substring(7)}`);
                const response = await fetch(img);
                const blob = await response.blob();
                await uploadBytes(imageRef, blob);
                return await getDownloadURL(imageRef);
              } catch (err) {
                console.error('이미지 업로드 실패:', err);
                throw new Error('이미지 업로드에 실패했습니다.');
              }
            }
            return img;
          })
        );
      }

      const productData = {
        ...product,
        images: imageUrls,
        image: imageUrls[0] || '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const docRef = await addDoc(collection(db, 'products'), productData);
      setProducts(prev => [{ ...productData, id: docRef.id }, ...prev]);
      return docRef.id;
    } catch (err) {
      console.error('상품 추가 실패:', err);
      throw err;
    }
  };

  // 상품 삭제
  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      setProducts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      console.error('상품 삭제 실패:', err);
      throw err;
    }
  };

  // 상품 수정
  const updateProduct = async (id, updates) => {
    try {
      const productRef = doc(db, 'products', id);
      await updateDoc(productRef, {
        ...updates,
        updatedAt: new Date().toISOString()
      });
      setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    } catch (err) {
      console.error('상품 수정 실패:', err);
      throw err;
    }
  };

  // 관심 상품 토글
  const toggleLike = async (id) => {
    try {
      const newLikes = likes.includes(id) 
        ? likes.filter(lid => lid !== id)
        : [...likes, id];
      setLikes(newLikes);
      
      // Firestore에 likes 컬렉션 업데이트
      const likesRef = doc(db, 'likes', auth.currentUser.uid);
      await updateDoc(likesRef, { productIds: newLikes });
    } catch (err) {
      console.error('관심 상품 토글 실패:', err);
      throw err;
    }
  };

  // 채팅방 추가
  const addChatRoom = async (productId, chatRoomId) => {
    try {
      const newChatRooms = {
        ...chatRooms,
        [productId]: [...(chatRooms[productId] || []), chatRoomId]
      };
      setChatRooms(newChatRooms);
      
      // Firestore에 chatRooms 컬렉션 업데이트
      const chatRoomsRef = doc(db, 'chatRooms', auth.currentUser.uid);
      await updateDoc(chatRoomsRef, { [productId]: newChatRooms[productId] });
    } catch (err) {
      console.error('채팅방 추가 실패:', err);
      throw err;
    }
  };

  return (
    <ProductContext.Provider value={{ 
      products, 
      setProducts, 
      addProduct, 
      deleteProduct, 
      updateProduct,
      likes, 
      toggleLike, 
      chatRooms, 
      addChatRoom,
      loading 
    }}>
      {children}
    </ProductContext.Provider>
  );
} 