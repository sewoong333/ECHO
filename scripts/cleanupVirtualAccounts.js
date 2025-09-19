import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';

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

// 기존 가상 계정들 정리
async function cleanupVirtualAccounts() {
  try {
    console.log('🔄 기존 가상 계정들 정리 중...');
    
    // isVirtual: true인 사용자들 조회
    const virtualUsersQuery = query(
      collection(db, 'users'),
      where('isVirtual', '==', true)
    );
    
    const virtualUsersSnapshot = await getDocs(virtualUsersQuery);
    
    console.log(`📝 총 ${virtualUsersSnapshot.docs.length}개의 가상 계정 발견`);
    
    let deletedCount = 0;
    
    for (const userDoc of virtualUsersSnapshot.docs) {
      const userData = userDoc.data();
      console.log(`🗑️ 가상 계정 삭제: ${userData.nickname} (${userData.uid})`);
      
      await deleteDoc(doc(db, 'users', userDoc.id));
      deletedCount++;
    }
    
    console.log(`🎉 총 ${deletedCount}개 가상 계정 삭제 완료`);
    
  } catch (error) {
    console.error('❌ 가상 계정 정리 실패:', error);
    throw error;
  }
}

// 메인 실행 함수
async function main() {
  try {
    console.log('🚀 가상 계정 정리 시작...');
    await cleanupVirtualAccounts();
    console.log('🎉 모든 작업 완료!');
  } catch (error) {
    console.error('❌ 작업 실패:', error);
    process.exit(1);
  }
}

// 스크립트 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { cleanupVirtualAccounts };

