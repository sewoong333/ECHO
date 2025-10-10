import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, updateDoc, doc, query, serverTimestamp, setDoc } from 'firebase/firestore';

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

// 가상 계정 데이터
const virtualAccounts = [
  {
    email: 'musiclover1@echo.com',
    password: 'music123!',
    nickname: '음악러버',
    profileImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=150&q=80',
    bio: '음악을 사랑하는 사람입니다. 기타와 피아노를 연주해요!'
  },
  {
    email: 'guitarist@echo.com',
    password: 'guitar123!',
    nickname: '기타리스트',
    profileImage: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=150&q=80',
    bio: '10년차 기타리스트입니다. 클래식부터 록까지 다양한 장르를 연주해요.'
  },
  {
    email: 'pianist@echo.com',
    password: 'piano123!',
    nickname: '피아니스트',
    profileImage: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=150&q=80',
    bio: '클래식 피아노를 전공했습니다. 레슨도 하고 있어요!'
  },
  {
    email: 'drummer@echo.com',
    password: 'drum123!',
    nickname: '드러머',
    profileImage: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=150&q=80',
    bio: '재즈 드럼을 주로 연주합니다. 밴드 활동도 하고 있어요.'
  },
  {
    email: 'violinist@echo.com',
    password: 'violin123!',
    nickname: '바이올리니스트',
    profileImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=150&q=80',
    bio: '클래식 바이올린을 연주합니다. 오케스트라에서 활동 중이에요.'
  }
];

// 가상 계정 생성 함수 (Firestore만 사용)
async function createVirtualAccount(accountData, index) {
  try {
    console.log(`🔄 가상 계정 생성 중: ${accountData.nickname}`);
    
    // 가상 UID 생성
    const virtualUid = `virtual_user_${index + 1}_${Date.now()}`;
    
    // Firestore에 사용자 정보 저장
    const userDoc = {
      uid: virtualUid,
      email: accountData.email,
      nickname: accountData.nickname,
      profileImage: accountData.profileImage,
      bio: accountData.bio,
      isVirtual: true, // 가상 계정 표시
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      // 기본 통계
      totalPosts: 0,
      totalLikes: 0,
      totalComments: 0,
      // 매너 점수
      mannerScore: 5.0,
      reviewCount: 0,
      // 활동 상태
      isActive: true,
      lastLoginAt: serverTimestamp()
    };
    
    // 문서 ID를 virtualUid로 설정하여 저장
    await setDoc(doc(db, 'users', virtualUid), userDoc);
    
    console.log(`✅ 가상 계정 생성 완료: ${accountData.nickname} (${virtualUid})`);
    return virtualUid;
    
  } catch (error) {
    console.error(`❌ 가상 계정 생성 실패: ${accountData.nickname}`, error);
    throw error;
  }
}

// 음악생활 게시글에 가상 계정 ID 할당
async function assignVirtualAccountsToPosts() {
  try {
    console.log('🔄 음악생활 게시글에 가상 계정 ID 할당 중...');
    
    // 음악생활 게시글 조회
    const musiclifeQuery = query(collection(db, 'musiclife_posts'));
    const musiclifeSnapshot = await getDocs(musiclifeQuery);
    
    console.log(`📝 총 ${musiclifeSnapshot.docs.length}개의 음악생활 게시글 발견`);
    
    let updatedCount = 0;
    
    for (let i = 0; i < musiclifeSnapshot.docs.length; i++) {
      const docSnapshot = musiclifeSnapshot.docs[i];
      const postData = docSnapshot.data();
      
      // authorId가 없는 게시글만 업데이트
      if (!postData.authorId) {
        const virtualAccountIndex = i % virtualAccounts.length;
        const virtualAccount = virtualAccounts[virtualAccountIndex];
        
        // 가상 계정 생성
        const virtualUserId = await createVirtualAccount(virtualAccount, virtualAccountIndex);
        
        // 게시글 업데이트 (기존 닉네임 보존)
        const updateData = {
          authorId: virtualUserId,
          authorProfileImage: virtualAccount.profileImage,
          updatedAt: new Date()
        };
        
        // 기존 닉네임이 없을 때만 가상 계정 닉네임 사용
        if (!postData.authorNickname) {
          updateData.authorNickname = virtualAccount.nickname;
        }
        
        await updateDoc(doc(db, 'musiclife_posts', docSnapshot.id), updateData);
        
        console.log(`✅ 게시글 업데이트: "${postData.title}" -> ${virtualAccount.nickname}`);
        updatedCount++;
      } else {
        console.log(`⏭️ 이미 authorId 있음: "${postData.title}" (${postData.authorId})`);
      }
    }
    
    console.log(`🎉 총 ${updatedCount}개 게시글에 가상 계정 ID 할당 완료`);
    
  } catch (error) {
    console.error('❌ 게시글 업데이트 실패:', error);
    throw error;
  }
}

// 메인 실행 함수
async function main() {
  try {
    console.log('🚀 가상 계정 생성 및 게시글 업데이트 시작...');
    
    // 1. 가상 계정 생성
    console.log('\n📝 1단계: 가상 계정 생성');
    for (let i = 0; i < virtualAccounts.length; i++) {
      try {
        await createVirtualAccount(virtualAccounts[i], i);
      } catch (error) {
        console.log(`⚠️ 계정 생성 건너뛰기: ${virtualAccounts[i].nickname}`, error.message);
      }
    }
    
    // 2. 게시글에 가상 계정 ID 할당
    console.log('\n📝 2단계: 게시글에 가상 계정 ID 할당');
    await assignVirtualAccountsToPosts();
    
    console.log('\n🎉 모든 작업 완료!');
    
  } catch (error) {
    console.error('❌ 작업 실패:', error);
    process.exit(1);
  }
}

// 스크립트 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { createVirtualAccount, assignVirtualAccountsToPosts };
