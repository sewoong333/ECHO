import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';

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

// 사용자 데이터 감사 함수
async function auditUserData() {
  try {
    console.log('🔍 사용자 데이터 감사 시작...');
    
    // 1. 모든 사용자 조회
    console.log('\n📝 1단계: 사용자 프로필 감사');
    const usersSnapshot = await getDocs(collection(db, 'users'));
    console.log(`📊 총 ${usersSnapshot.docs.length}명의 사용자 발견`);
    
    const userIssues = [];
    
    for (const userDoc of usersSnapshot.docs) {
      const userData = userDoc.data();
      const userId = userDoc.id;
      
      // 문제점 체크
      const issues = [];
      
      // 닉네임 검증
      if (!userData.nickname || userData.nickname.trim().length === 0) {
        issues.push('닉네임이 없음');
      } else if (userData.nickname.length < 2) {
        issues.push('닉네임이 너무 짧음');
      } else if (userData.nickname.length > 50) {
        issues.push('닉네임이 너무 김');
      } else if (/[<>"']/.test(userData.nickname)) {
        issues.push('닉네임에 특수문자 포함');
      } else if (/(admin|test|user\d+|temp)/i.test(userData.nickname)) {
        issues.push('의심스러운 닉네임 패턴');
      }
      
      // 이메일 검증
      if (!userData.email || !userData.email.includes('@')) {
        issues.push('유효하지 않은 이메일');
      }
      
      // 가상 계정 확인
      if (userData.isVirtual) {
        issues.push('가상 계정');
      }
      
      if (issues.length > 0) {
        userIssues.push({
          userId,
          nickname: userData.nickname,
          email: userData.email,
          issues
        });
      }
    }
    
    console.log(`⚠️ 문제가 있는 사용자: ${userIssues.length}명`);
    userIssues.forEach(user => {
      console.log(`  - ${user.nickname} (${user.email}): ${user.issues.join(', ')}`);
    });
    
    // 2. 음악생활 게시글 감사
    console.log('\n📝 2단계: 음악생활 게시글 감사');
    const musiclifeSnapshot = await getDocs(collection(db, 'musiclife_posts'));
    console.log(`📊 총 ${musiclifeSnapshot.docs.length}개의 음악생활 게시글 발견`);
    
    const postIssues = [];
    
    for (const postDoc of musiclifeSnapshot.docs) {
      const postData = postDoc.data();
      const postId = postDoc.id;
      
      // 문제점 체크
      const issues = [];
      
      // 작성자 ID 확인
      if (!postData.authorId) {
        issues.push('작성자 ID 없음');
      } else {
        // 작성자 프로필 존재 확인
        try {
          const authorDoc = await getDoc(doc(db, 'users', postData.authorId));
          if (!authorDoc.exists()) {
            issues.push('작성자 프로필 없음');
          } else {
            const authorData = authorDoc.data();
            // 닉네임 일치성 확인
            if (postData.authorNickname && authorData.nickname && 
                postData.authorNickname !== authorData.nickname) {
              issues.push(`닉네임 불일치: 게시글(${postData.authorNickname}) vs 프로필(${authorData.nickname})`);
            }
          }
        } catch (error) {
          issues.push('작성자 프로필 조회 실패');
        }
      }
      
      // 닉네임 검증
      if (postData.authorNickname) {
        if (postData.authorNickname.length < 2) {
          issues.push('작성자 닉네임이 너무 짧음');
        } else if (postData.authorNickname.length > 50) {
          issues.push('작성자 닉네임이 너무 김');
        } else if (/[<>"']/.test(postData.authorNickname)) {
          issues.push('작성자 닉네임에 특수문자 포함');
        }
      }
      
      if (issues.length > 0) {
        postIssues.push({
          postId,
          title: postData.title,
          authorId: postData.authorId,
          authorNickname: postData.authorNickname,
          issues
        });
      }
    }
    
    console.log(`⚠️ 문제가 있는 게시글: ${postIssues.length}개`);
    postIssues.forEach(post => {
      console.log(`  - "${post.title}" (${post.authorNickname}): ${post.issues.join(', ')}`);
    });
    
    // 3. 상품 감사
    console.log('\n📝 3단계: 상품 감사');
    const productsSnapshot = await getDocs(collection(db, 'products'));
    console.log(`📊 총 ${productsSnapshot.docs.length}개의 상품 발견`);
    
    const productIssues = [];
    
    for (const productDoc of productsSnapshot.docs) {
      const productData = productDoc.data();
      const productId = productDoc.id;
      
      // 문제점 체크
      const issues = [];
      
      // 판매자 ID 확인
      if (!productData.sellerId) {
        issues.push('판매자 ID 없음');
      } else {
        // 판매자 프로필 존재 확인
        try {
          const sellerDoc = await getDoc(doc(db, 'users', productData.sellerId));
          if (!sellerDoc.exists()) {
            issues.push('판매자 프로필 없음');
          } else {
            const sellerData = sellerDoc.data();
            // 닉네임 일치성 확인
            if (productData.sellerNickname && sellerData.nickname && 
                productData.sellerNickname !== sellerData.nickname) {
              issues.push(`닉네임 불일치: 상품(${productData.sellerNickname}) vs 프로필(${sellerData.nickname})`);
            }
          }
        } catch (error) {
          issues.push('판매자 프로필 조회 실패');
        }
      }
      
      if (issues.length > 0) {
        productIssues.push({
          productId,
          title: productData.title,
          sellerId: productData.sellerId,
          sellerNickname: productData.sellerNickname,
          issues
        });
      }
    }
    
    console.log(`⚠️ 문제가 있는 상품: ${productIssues.length}개`);
    productIssues.forEach(product => {
      console.log(`  - "${product.title}" (${product.sellerNickname}): ${product.issues.join(', ')}`);
    });
    
    // 4. 요약 보고서
    console.log('\n📊 감사 결과 요약');
    console.log(`👥 사용자: ${usersSnapshot.docs.length}명 (문제: ${userIssues.length}명)`);
    console.log(`📝 음악생활 게시글: ${musiclifeSnapshot.docs.length}개 (문제: ${postIssues.length}개)`);
    console.log(`🛍️ 상품: ${productsSnapshot.docs.length}개 (문제: ${productIssues.length}개)`);
    
    const totalIssues = userIssues.length + postIssues.length + productIssues.length;
    if (totalIssues === 0) {
      console.log('✅ 모든 데이터가 정상입니다!');
    } else {
      console.log(`⚠️ 총 ${totalIssues}개의 문제가 발견되었습니다.`);
    }
    
    return {
      users: userIssues,
      posts: postIssues,
      products: productIssues,
      summary: {
        totalUsers: usersSnapshot.docs.length,
        totalPosts: musiclifeSnapshot.docs.length,
        totalProducts: productsSnapshot.docs.length,
        userIssues: userIssues.length,
        postIssues: postIssues.length,
        productIssues: productIssues.length
      }
    };
    
  } catch (error) {
    console.error('❌ 감사 실패:', error);
    throw error;
  }
}

// 메인 실행 함수
async function main() {
  try {
    console.log('🚀 사용자 데이터 감사 시작...');
    const results = await auditUserData();
    console.log('\n🎉 감사 완료!');
  } catch (error) {
    console.error('❌ 감사 실패:', error);
    process.exit(1);
  }
}

// 스크립트 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { auditUserData };








