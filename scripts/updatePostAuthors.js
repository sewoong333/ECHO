import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, updateDoc, doc, query, where } from 'firebase/firestore';

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

// 새로운 가상 계정 매핑
const virtualAccountMapping = {
  'virtual_user_1_1757512125176': 'virtual_user_1_1757513153557', // 음악러버
  'virtual_user_2_1757512125745': 'virtual_user_2_1757513153976', // 기타리스트
  'virtual_user_3_1757512125313': 'virtual_user_3_1757513154061', // 피아니스트
  'virtual_user_4_1757512125469': 'virtual_user_4_1757513154138', // 드러머
  'virtual_user_5_1757512125600': 'virtual_user_5_1757513154223', // 바이올리니스트
  'virtual_user_3_1757512125892': 'virtual_user_3_1757513154061', // 피아니스트
  'virtual_user_5_1757512126015': 'virtual_user_5_1757513154223', // 바이올리니스트
  'virtual_user_1_1757512126133': 'virtual_user_1_1757513153557', // 음악러버
  'virtual_user_2_1757512126293': 'virtual_user_2_1757513153976', // 기타리스트
  'virtual_user_3_1757512126452': 'virtual_user_3_1757513154061', // 피아니스트
};

// 가상 계정 정보
const virtualAccountInfo = {
  'virtual_user_1_1757513153557': { 
    nickname: '음악러버', 
    profileImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=150&q=80',
    bio: '음악을 사랑하는 사람입니다. 기타와 피아노를 연주해요!'
  },
  'virtual_user_2_1757513153976': { 
    nickname: '기타리스트', 
    profileImage: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=150&q=80',
    bio: '10년차 기타리스트입니다. 클래식부터 록까지 다양한 장르를 연주해요.'
  },
  'virtual_user_3_1757513154061': { 
    nickname: '피아니스트', 
    profileImage: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=150&q=80',
    bio: '클래식 피아노를 전공했습니다. 레슨도 하고 있어요!'
  },
  'virtual_user_4_1757513154138': { 
    nickname: '드러머', 
    profileImage: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=150&q=80',
    bio: '재즈 드럼을 주로 연주합니다. 밴드 활동도 하고 있어요.'
  },
  'virtual_user_5_1757513154223': { 
    nickname: '바이올리니스트', 
    profileImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=150&q=80',
    bio: '클래식 바이올린을 연주합니다. 오케스트라에서 활동 중이에요.'
  }
};

// 게시글 작성자 정보 업데이트
async function updatePostAuthors() {
  try {
    console.log('🔄 음악생활 게시글 작성자 정보 업데이트 중...');
    
    // 음악생활 게시글 조회
    const musiclifeQuery = query(collection(db, 'musiclife_posts'));
    const musiclifeSnapshot = await getDocs(musiclifeQuery);
    
    console.log(`📝 총 ${musiclifeSnapshot.docs.length}개의 음악생활 게시글 발견`);
    
    let updatedCount = 0;
    
    for (const docSnapshot of musiclifeSnapshot.docs) {
      const postData = docSnapshot.data();
      
      // 가상 계정 ID가 매핑에 있는 경우 업데이트
      if (postData.authorId && virtualAccountMapping[postData.authorId]) {
        const newAuthorId = virtualAccountMapping[postData.authorId];
        const accountInfo = virtualAccountInfo[newAuthorId];
        
        console.log(`🔄 게시글 업데이트: "${postData.title}"`);
        console.log(`   기존: ${postData.authorId} (${postData.authorNickname})`);
        console.log(`   신규: ${newAuthorId} (${accountInfo.nickname})`);
        
        await updateDoc(doc(db, 'musiclife_posts', docSnapshot.id), {
          authorId: newAuthorId,
          authorNickname: accountInfo.nickname,
          authorProfileImage: accountInfo.profileImage,
          authorBio: accountInfo.bio,
          updatedAt: new Date()
        });
        
        updatedCount++;
      } else {
        console.log(`⏭️ 업데이트 불필요: "${postData.title}" (${postData.authorId})`);
      }
    }
    
    console.log(`🎉 총 ${updatedCount}개 게시글 작성자 정보 업데이트 완료`);
    
  } catch (error) {
    console.error('❌ 게시글 업데이트 실패:', error);
    throw error;
  }
}

// 메인 실행 함수
async function main() {
  try {
    console.log('🚀 게시글 작성자 정보 업데이트 시작...');
    await updatePostAuthors();
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

export { updatePostAuthors };
