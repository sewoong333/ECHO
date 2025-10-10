import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, updateDoc, doc, query, getDoc, setDoc } from 'firebase/firestore';

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

// 실제 사용자 ID들 (콘솔에서 확인된 ID들)
const realUserIds = [
  'gS2oXfAEKNTUGUbiBfCTBfTyfW72', // 테스트 게시글 작성자
  'LgqbpwRPq0h8HaXyijEa4mmbpGr2'  // 다른 실제 사용자
];

// 실제 사용자 프로필 정보
const realUserProfiles = {
  'gS2oXfAEKNTUGUbiBfCTBfTyfW72': {
    nickname: '최바이올린',
    profileImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=150&q=80',
    bio: '클래식 바이올린을 연주합니다. 오케스트라에서 활동 중이에요.',
    email: 'violinist@echo.com'
  },
  'LgqbpwRPq0h8HaXyijEa4mmbpGr2': {
    nickname: '음악마니아',
    profileImage: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=150&q=80',
    bio: '다양한 악기를 연주하는 음악 애호가입니다.',
    email: 'musiclover@echo.com'
  }
};

// 실제 사용자 프로필 수정
async function fixRealUserProfiles() {
  try {
    console.log('🔄 실제 사용자 프로필 수정 중...');
    
    let updatedCount = 0;
    
    for (const userId of realUserIds) {
      const profileInfo = realUserProfiles[userId];
      if (!profileInfo) continue;
      
      try {
        // 사용자 문서 확인
        const userDoc = await getDoc(doc(db, 'users', userId));
        
        if (userDoc.exists()) {
          // 기존 사용자 정보 업데이트
          console.log(`🔄 기존 사용자 프로필 업데이트: ${userId} -> ${profileInfo.nickname}`);
          
          await updateDoc(doc(db, 'users', userId), {
            nickname: profileInfo.nickname,
            profileImage: profileInfo.profileImage,
            bio: profileInfo.bio,
            email: profileInfo.email,
            updatedAt: new Date()
          });
          
          updatedCount++;
        } else {
          // 새 사용자 프로필 생성
          console.log(`🆕 새 사용자 프로필 생성: ${userId} -> ${profileInfo.nickname}`);
          
          await setDoc(doc(db, 'users', userId), {
            uid: userId,
            nickname: profileInfo.nickname,
            profileImage: profileInfo.profileImage,
            bio: profileInfo.bio,
            email: profileInfo.email,
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
          });
          
          updatedCount++;
        }
        
      } catch (error) {
        console.error(`❌ 사용자 ${userId} 프로필 수정 실패:`, error);
      }
    }
    
    console.log(`🎉 총 ${updatedCount}개 실제 사용자 프로필 수정 완료`);
    
  } catch (error) {
    console.error('❌ 실제 사용자 프로필 수정 실패:', error);
    throw error;
  }
}

// 음악생활 게시글의 작성자 정보도 업데이트
async function updateMusicLifePostAuthors() {
  try {
    console.log('🔄 음악생활 게시글 작성자 정보 업데이트 중...');
    
    // 음악생활 게시글 조회
    const musiclifeQuery = query(collection(db, 'musiclife_posts'));
    const musiclifeSnapshot = await getDocs(musiclifeQuery);
    
    console.log(`📝 총 ${musiclifeSnapshot.docs.length}개의 음악생활 게시글 발견`);
    
    let updatedCount = 0;
    
    for (const docSnapshot of musiclifeSnapshot.docs) {
      const postData = docSnapshot.data();
      
      // 실제 사용자 ID인 경우 프로필 정보 업데이트
      if (postData.authorId && realUserProfiles[postData.authorId]) {
        const profileInfo = realUserProfiles[postData.authorId];
        
        console.log(`🔄 게시글 작성자 정보 업데이트: "${postData.title}" -> ${profileInfo.nickname}`);
        
        await updateDoc(doc(db, 'musiclife_posts', docSnapshot.id), {
          authorNickname: profileInfo.nickname,
          authorProfileImage: profileInfo.profileImage,
          authorBio: profileInfo.bio,
          updatedAt: new Date()
        });
        
        updatedCount++;
      }
    }
    
    console.log(`🎉 총 ${updatedCount}개 게시글 작성자 정보 업데이트 완료`);
    
  } catch (error) {
    console.error('❌ 게시글 작성자 정보 업데이트 실패:', error);
    throw error;
  }
}

// 메인 실행 함수
async function main() {
  try {
    console.log('🚀 실제 사용자 프로필 수정 시작...');
    
    // 1. 실제 사용자 프로필 수정
    await fixRealUserProfiles();
    
    // 2. 음악생활 게시글 작성자 정보 업데이트
    await updateMusicLifePostAuthors();
    
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

export { fixRealUserProfiles, updateMusicLifePostAuthors };
