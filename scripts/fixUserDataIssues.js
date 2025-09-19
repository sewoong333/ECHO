import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

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

// 데이터 수정 함수들
async function fixNicknameMismatches() {
  try {
    console.log('🔧 닉네임 불일치 문제 수정 시작...');
    
    // 음악생활 게시글 조회
    const musiclifeSnapshot = await getDocs(collection(db, 'musiclife_posts'));
    let fixedCount = 0;
    
    for (const postDoc of musiclifeSnapshot.docs) {
      const postData = postDoc.data();
      const postId = postDoc.id;
      
      if (postData.authorId && postData.authorNickname) {
        try {
          // 작성자 프로필 조회
          const authorDoc = await getDoc(doc(db, 'users', postData.authorId));
          
          if (authorDoc.exists()) {
            const authorData = authorDoc.data();
            const actualNickname = authorData.nickname;
            
            // 닉네임 불일치 확인
            if (postData.authorNickname !== actualNickname) {
              console.log(`🔧 닉네임 수정: "${postData.title}"`);
              console.log(`  게시글 닉네임: ${postData.authorNickname}`);
              console.log(`  실제 닉네임: ${actualNickname}`);
              
              // 게시글의 닉네임을 실제 프로필 닉네임으로 수정
              await updateDoc(doc(db, 'musiclife_posts', postId), {
                authorNickname: actualNickname,
                updatedAt: new Date()
              });
              
              console.log(`✅ 수정 완료: ${actualNickname}`);
              fixedCount++;
            }
          }
        } catch (error) {
          console.error(`❌ 게시글 수정 실패: ${postData.title}`, error);
        }
      }
    }
    
    console.log(`🎉 닉네임 불일치 수정 완료: ${fixedCount}개 게시글`);
    return fixedCount;
    
  } catch (error) {
    console.error('❌ 닉네임 불일치 수정 실패:', error);
    throw error;
  }
}

async function fixProductSellerIssues() {
  try {
    console.log('🔧 상품 판매자 문제 수정 시작...');
    
    // 상품 조회
    const productsSnapshot = await getDocs(collection(db, 'products'));
    let fixedCount = 0;
    let deletedCount = 0;
    
    for (const productDoc of productsSnapshot.docs) {
      const productData = productDoc.data();
      const productId = productDoc.id;
      
      // 판매자 ID가 없는 상품 처리
      if (!productData.sellerId) {
        console.log(`🔧 판매자 ID 없는 상품 발견: "${productData.title}"`);
        
        // 테스트 상품인지 확인
        if (productData.title.includes('테스트') || productData.title.includes('test')) {
          console.log(`🗑️ 테스트 상품 삭제: "${productData.title}"`);
          await deleteDoc(doc(db, 'products', productId));
          deletedCount++;
        } else {
          // 실제 상품인 경우 기본 판매자 할당 (관리자 계정 등)
          console.log(`🔧 기본 판매자 할당: "${productData.title}"`);
          await updateDoc(doc(db, 'products', productId), {
            sellerId: 'admin_user',
            sellerNickname: '관리자',
            updatedAt: new Date()
          });
          fixedCount++;
        }
      }
    }
    
    console.log(`🎉 상품 문제 수정 완료: ${fixedCount}개 수정, ${deletedCount}개 삭제`);
    return { fixed: fixedCount, deleted: deletedCount };
    
  } catch (error) {
    console.error('❌ 상품 문제 수정 실패:', error);
    throw error;
  }
}

async function cleanUpVirtualAccounts() {
  try {
    console.log('🔧 가상 계정 정리 시작...');
    
    // 가상 계정 조회
    const usersSnapshot = await getDocs(collection(db, 'users'));
    let deletedCount = 0;
    
    for (const userDoc of usersSnapshot.docs) {
      const userData = userDoc.data();
      const userId = userDoc.id;
      
      // 가상 계정 확인
      if (userData.isVirtual) {
        console.log(`🗑️ 가상 계정 삭제: ${userData.nickname} (${userId})`);
        await deleteDoc(doc(db, 'users', userId));
        deletedCount++;
      }
    }
    
    console.log(`🎉 가상 계정 정리 완료: ${deletedCount}개 삭제`);
    return deletedCount;
    
  } catch (error) {
    console.error('❌ 가상 계정 정리 실패:', error);
    throw error;
  }
}

async function removeCachedNicknames() {
  try {
    console.log('🔧 캐시된 닉네임 제거 시작...');
    
    // 음악생활 게시글에서 캐시된 닉네임 제거
    const musiclifeSnapshot = await getDocs(collection(db, 'musiclife_posts'));
    let updatedCount = 0;
    
    for (const postDoc of musiclifeSnapshot.docs) {
      const postData = postDoc.data();
      const postId = postDoc.id;
      
      // 캐시된 닉네임 필드 제거
      if (postData.authorNickname) {
        console.log(`🔧 캐시된 닉네임 제거: "${postData.title}"`);
        await updateDoc(doc(db, 'musiclife_posts', postId), {
          authorNickname: null,
          updatedAt: new Date()
        });
        updatedCount++;
      }
    }
    
    // 상품에서 캐시된 닉네임 제거
    const productsSnapshot = await getDocs(collection(db, 'products'));
    
    for (const productDoc of productsSnapshot.docs) {
      const productData = productDoc.data();
      const productId = productDoc.id;
      
      // 캐시된 닉네임 필드 제거
      if (productData.sellerNickname) {
        console.log(`🔧 캐시된 닉네임 제거: "${productData.title}"`);
        await updateDoc(doc(db, 'products', productId), {
          sellerNickname: null,
          updatedAt: new Date()
        });
        updatedCount++;
      }
    }
    
    console.log(`🎉 캐시된 닉네임 제거 완료: ${updatedCount}개 업데이트`);
    return updatedCount;
    
  } catch (error) {
    console.error('❌ 캐시된 닉네임 제거 실패:', error);
    throw error;
  }
}

// 메인 실행 함수
async function main() {
  try {
    console.log('🚀 사용자 데이터 문제 수정 시작...');
    
    // 1. 닉네임 불일치 수정
    console.log('\n📝 1단계: 닉네임 불일치 수정');
    const nicknameFixes = await fixNicknameMismatches();
    
    // 2. 상품 판매자 문제 수정
    console.log('\n📝 2단계: 상품 판매자 문제 수정');
    const productFixes = await fixProductSellerIssues();
    
    // 3. 가상 계정 정리
    console.log('\n📝 3단계: 가상 계정 정리');
    const virtualAccountCleanup = await cleanUpVirtualAccounts();
    
    // 4. 캐시된 닉네임 제거
    console.log('\n📝 4단계: 캐시된 닉네임 제거');
    const cacheCleanup = await removeCachedNicknames();
    
    // 5. 요약 보고서
    console.log('\n📊 수정 결과 요약');
    console.log(`🔧 닉네임 불일치 수정: ${nicknameFixes}개`);
    console.log(`🔧 상품 문제 수정: ${productFixes.fixed}개 수정, ${productFixes.deleted}개 삭제`);
    console.log(`🗑️ 가상 계정 정리: ${virtualAccountCleanup}개 삭제`);
    console.log(`🔧 캐시된 닉네임 제거: ${cacheCleanup}개 업데이트`);
    
    console.log('\n🎉 모든 데이터 수정 완료!');
    
  } catch (error) {
    console.error('❌ 데이터 수정 실패:', error);
    process.exit(1);
  }
}

// 스크립트 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixNicknameMismatches, fixProductSellerIssues, cleanUpVirtualAccounts, removeCachedNicknames };




