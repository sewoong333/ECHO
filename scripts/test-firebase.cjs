// Firebase 연결 테스트 스크립트
// node scripts/test-firebase.cjs

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
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

console.log('🔥 Firebase 연결 테스트 시작...');
console.log('Config:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain
});

async function testFirebase() {
  try {
    // Firebase 초기화
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    console.log('✅ Firebase 초기화 성공');

    // Firestore 연결 테스트 (인증 없이)
    console.log('📊 Firestore 연결 테스트...');
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    console.log(`✅ Firestore 연결 성공. 상품 개수: ${snapshot.size}`);

    // 상품 데이터 출력
    if (snapshot.size > 0) {
      console.log('\n📦 등록된 상품:');
      snapshot.forEach((doc) => {
        const data = doc.data();
        console.log(`- ${data.title} (${data.price?.toLocaleString()}원)`);
      });
    } else {
      console.log('📝 등록된 상품이 없습니다.');
    }

    console.log('\n🎉 Firestore 연결 테스트 통과!');
    console.log('💡 이제 웹에서 상품을 등록하면 Firebase에 저장됩니다.');

  } catch (error) {
    console.error('❌ Firebase 연결 실패:', error.message);
    console.error('상세 에러:', error);
    
    if (error.code === 'permission-denied') {
      console.log('\n💡 해결 방법:');
      console.log('1. Firebase Console > Firestore Database > 규칙에서 읽기 권한 확인');
      console.log('2. 현재 규칙: allow read: if true; (모든 사용자 읽기 허용)');
    }
    
    process.exit(1);
  }
}

testFirebase(); 