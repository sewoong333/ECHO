import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyBqQqQqQqQqQqQqQqQqQqQqQqQqQqQqQqQ",
  authDomain: "echo-5385e.firebaseapp.com",
  projectId: "echo-5385e",
  storageBucket: "echo-5385e.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdefghijklmnopqrstuv"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 특정 사용자 프로필 생성
async function createSpecificUser() {
  try {
    console.log('🔄 특정 사용자 프로필 생성 중...');
    
    const userId = 'gS2oXfAEKNTUGUbiBfCTBfTyfW72';
    const userData = {
      uid: userId,
      nickname: '최바이올린',
      profileImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=150&q=80',
      bio: '클래식 바이올린을 연주합니다. 오케스트라에서 활동 중이에요.',
      email: 'violinist@echo.com',
      address: "",
      region: "",
      district: "",
      mannerScore: 5.0,
      transactionCount: 0,
      reviewCount: 0,
      favoriteCount: 0,
      isVerified: false,
      isBusiness: false,
      preferences: {
        pushNotifications: true,
        emailNotifications: true,
        smsNotifications: false,
        marketingEmails: false,
      },
      blockedUsers: [],
      following: [],
      followers: [],
      createdAt: new Date(),
      lastLoginAt: new Date()
    };
    
    await setDoc(doc(db, 'users', userId), userData);
    
    console.log(`✅ 사용자 프로필 생성 완료: ${userId} -> ${userData.nickname}`);
    
  } catch (error) {
    console.error('❌ 사용자 프로필 생성 실패:', error);
    throw error;
  }
}

// 메인 실행 함수
async function main() {
  try {
    console.log('🚀 특정 사용자 프로필 생성 시작...');
    await createSpecificUser();
    console.log('🎉 작업 완료!');
  } catch (error) {
    console.error('❌ 작업 실패:', error);
    process.exit(1);
  }
}

// 스크립트 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { createSpecificUser };

