// Firebase에 테스트 상품 추가 스크립트
// node scripts/test-product-add.cjs

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');
const dotenv = require('dotenv');
const path = require('path');

// 환경 변수 로드
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

async function addTestProduct() {
  try {
    console.log('🔥 Firebase 초기화...');
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const productsCollection = collection(db, 'products');

    console.log('📦 테스트 상품 추가 중...');
    
    const testProduct = {
      title: '테스트 악기 - 기타',
      description: 'Firebase 테스트용 상품입니다. 이 상품이 보이면 Firebase 연결이 성공한 것입니다.',
      price: 150000,
      location: '서울 강남구',
      category: '기타',
      model: '테스트 모델',
      condition: '양호',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
      images: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80'],
      author: '테스트 사용자',
      time: '방금 전',
      views: 0,
      likes: 0,
      status: 'active',
      userId: 'test-user-123',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const docRef = await addDoc(productsCollection, testProduct);
    console.log('✅ 테스트 상품 추가 성공!');
    console.log('📄 문서 ID:', docRef.id);
    console.log('🌐 웹에서 확인해보세요!');

  } catch (error) {
    console.error('❌ 테스트 상품 추가 실패:', error);
    process.exit(1);
  }
}

addTestProduct(); 