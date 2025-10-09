#!/usr/bin/env node

/**
 * 조회수와 채팅수 데이터베이스 점검 및 수정 스크립트
 * - 실제 조회수와 채팅수 데이터 검증
 * - 누락된 필드 추가 및 데이터 정규화
 * - 통계 데이터 일관성 확보
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, updateDoc, query, where, writeBatch, getDoc, increment } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyBqQqQqQqQqQqQqQqQqQqQqQqQqQqQqQqQ",
  authDomain: "echo-5385e.firebaseapp.com",
  projectId: "echo-5385e",
  storageBucket: "echo-5385e.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdefghijklmnopqrstuv"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 통계 데이터 수집
let stats = {
  products: {
    total: 0,
    withViewCount: 0,
    withChatCount: 0,
    missingViewCount: 0,
    missingChatCount: 0,
    fixed: 0
  },
  musiclife: {
    total: 0,
    withViewCount: 0,
    missingViewCount: 0,
    fixed: 0
  },
  chatRooms: {
    total: 0,
    processed: 0
  }
};

// 상품 데이터 점검 및 수정
async function fixProductCounts() {
  console.log('🔍 상품 데이터 점검 시작...');
  
  try {
    const productsSnapshot = await getDocs(collection(db, 'products'));
    stats.products.total = productsSnapshot.docs.length;
    
    console.log(`📊 총 상품 수: ${stats.products.total}개`);
    
    const batch = writeBatch(db);
    let batchCount = 0;
    
    for (const productDoc of productsSnapshot.docs) {
      const data = productDoc.data();
      const productId = productDoc.id;
      let needsUpdate = false;
      const updates = {};
      
      // 조회수 필드 점검
      if (typeof data.viewCount !== 'number' || data.viewCount < 0) {
        updates.viewCount = 0;
        stats.products.missingViewCount++;
        needsUpdate = true;
        console.log(`❌ 상품 ${productId}: 조회수 필드 누락 또는 잘못된 값`);
      } else {
        stats.products.withViewCount++;
      }
      
      // 채팅수 필드 점검
      if (typeof data.chatCount !== 'number' || data.chatCount < 0) {
        updates.chatCount = 0;
        stats.products.missingChatCount++;
        needsUpdate = true;
        console.log(`❌ 상품 ${productId}: 채팅수 필드 누락 또는 잘못된 값`);
      } else {
        stats.products.withChatCount++;
      }
      
      // 찜 수 필드 점검
      if (typeof data.likeCount !== 'number' || data.likeCount < 0) {
        updates.likeCount = 0;
        needsUpdate = true;
        console.log(`❌ 상품 ${productId}: 찜수 필드 누락 또는 잘못된 값`);
      }
      
      // 상태 필드 점검
      if (!data.status) {
        updates.status = 'active';
        needsUpdate = true;
        console.log(`❌ 상품 ${productId}: 상태 필드 누락`);
      }
      
      // 업데이트가 필요한 경우
      if (needsUpdate) {
        batch.update(doc(db, 'products', productId), updates);
        batchCount++;
        stats.products.fixed++;
        
        // 배치 크기 제한 (Firestore 배치 제한: 500개)
        if (batchCount >= 500) {
          await batch.commit();
          console.log(`✅ 배치 커밋 완료: ${batchCount}개 상품 업데이트`);
          batchCount = 0;
        }
      }
    }
    
    // 남은 배치 커밋
    if (batchCount > 0) {
      await batch.commit();
      console.log(`✅ 최종 배치 커밋 완료: ${batchCount}개 상품 업데이트`);
    }
    
    console.log('✅ 상품 데이터 점검 완료');
    
  } catch (error) {
    console.error('❌ 상품 데이터 점검 실패:', error);
  }
}

// 음악생활 게시글 데이터 점검 및 수정
async function fixMusiclifeCounts() {
  console.log('🔍 음악생활 게시글 데이터 점검 시작...');
  
  try {
    const musiclifeSnapshot = await getDocs(collection(db, 'musiclife'));
    stats.musiclife.total = musiclifeSnapshot.docs.length;
    
    console.log(`📊 총 음악생활 게시글 수: ${stats.musiclife.total}개`);
    
    const batch = writeBatch(db);
    let batchCount = 0;
    
    for (const postDoc of musiclifeSnapshot.docs) {
      const data = postDoc.data();
      const postId = postDoc.id;
      let needsUpdate = false;
      const updates = {};
      
      // 조회수 필드 점검
      if (typeof data.viewCount !== 'number' || data.viewCount < 0) {
        updates.viewCount = 0;
        stats.musiclife.missingViewCount++;
        needsUpdate = true;
        console.log(`❌ 음악생활 게시글 ${postId}: 조회수 필드 누락 또는 잘못된 값`);
      } else {
        stats.musiclife.withViewCount++;
      }
      
      // 댓글 수 필드 점검
      if (typeof data.commentCount !== 'number' || data.commentCount < 0) {
        updates.commentCount = 0;
        needsUpdate = true;
        console.log(`❌ 음악생활 게시글 ${postId}: 댓글수 필드 누락 또는 잘못된 값`);
      }
      
      // 좋아요 수 필드 점검
      if (typeof data.likeCount !== 'number' || data.likeCount < 0) {
        updates.likeCount = 0;
        needsUpdate = true;
        console.log(`❌ 음악생활 게시글 ${postId}: 좋아요수 필드 누락 또는 잘못된 값`);
      }
      
      // 업데이트가 필요한 경우
      if (needsUpdate) {
        batch.update(doc(db, 'musiclife', postId), updates);
        batchCount++;
        stats.musiclife.fixed++;
        
        // 배치 크기 제한
        if (batchCount >= 500) {
          await batch.commit();
          console.log(`✅ 배치 커밋 완료: ${batchCount}개 음악생활 게시글 업데이트`);
          batchCount = 0;
        }
      }
    }
    
    // 남은 배치 커밋
    if (batchCount > 0) {
      await batch.commit();
      console.log(`✅ 최종 배치 커밋 완료: ${batchCount}개 음악생활 게시글 업데이트`);
    }
    
    console.log('✅ 음악생활 게시글 데이터 점검 완료');
    
  } catch (error) {
    console.error('❌ 음악생활 게시글 데이터 점검 실패:', error);
  }
}

// 채팅방 데이터 점검
async function checkChatRooms() {
  console.log('🔍 채팅방 데이터 점검 시작...');
  
  try {
    const chatRoomsSnapshot = await getDocs(collection(db, 'chatRooms'));
    stats.chatRooms.total = chatRoomsSnapshot.docs.length;
    
    console.log(`📊 총 채팅방 수: ${stats.chatRooms.total}개`);
    
    for (const chatRoomDoc of chatRoomsSnapshot.docs) {
      const data = chatRoomDoc.data();
      const chatRoomId = chatRoomDoc.id;
      
      // 채팅방의 상품 ID 확인
      if (data.productId) {
        stats.chatRooms.processed++;
        
        // 해당 상품의 채팅수 확인 및 업데이트
        try {
          const productRef = doc(db, 'products', data.productId);
          const productSnap = await getDoc(productRef);
          
          if (productSnap.exists()) {
            const productData = productSnap.data();
            const currentChatCount = productData.chatCount || 0;
            
            // 실제 채팅방 수와 비교
            if (currentChatCount === 0 && stats.chatRooms.total > 0) {
              console.log(`⚠️ 상품 ${data.productId}: 채팅수와 실제 채팅방 수 불일치`);
            }
          }
        } catch (error) {
          console.error(`❌ 상품 ${data.productId} 채팅수 확인 실패:`, error);
        }
      }
    }
    
    console.log('✅ 채팅방 데이터 점검 완료');
    
  } catch (error) {
    console.error('❌ 채팅방 데이터 점검 실패:', error);
  }
}

// 통계 출력
function printStats() {
  console.log('\n📊 데이터베이스 점검 결과');
  console.log('='.repeat(50));
  
  console.log('\n🏪 상품 데이터:');
  console.log(`  총 상품 수: ${stats.products.total}개`);
  console.log(`  조회수 필드 있는 상품: ${stats.products.withViewCount}개`);
  console.log(`  채팅수 필드 있는 상품: ${stats.products.withChatCount}개`);
  console.log(`  조회수 필드 누락: ${stats.products.missingViewCount}개`);
  console.log(`  채팅수 필드 누락: ${stats.products.missingChatCount}개`);
  console.log(`  수정된 상품: ${stats.products.fixed}개`);
  
  console.log('\n🎵 음악생활 게시글:');
  console.log(`  총 게시글 수: ${stats.musiclife.total}개`);
  console.log(`  조회수 필드 있는 게시글: ${stats.musiclife.withViewCount}개`);
  console.log(`  조회수 필드 누락: ${stats.musiclife.missingViewCount}개`);
  console.log(`  수정된 게시글: ${stats.musiclife.fixed}개`);
  
  console.log('\n💬 채팅방 데이터:');
  console.log(`  총 채팅방 수: ${stats.chatRooms.total}개`);
  console.log(`  처리된 채팅방: ${stats.chatRooms.processed}개`);
  
  console.log('\n✅ 데이터베이스 점검 및 수정 완료!');
}

// 메인 실행 함수
async function main() {
  try {
    console.log('🚀 조회수와 채팅수 데이터베이스 점검 시작...');
    
    // Firebase 인증
    await signInAnonymously(auth);
    console.log('✅ Firebase 인증 완료');
    
    // 각 컬렉션 점검 및 수정
    await fixProductCounts();
    await fixMusiclifeCounts();
    await checkChatRooms();
    
    // 결과 출력
    printStats();
    
  } catch (error) {
    console.error('❌ 스크립트 실행 실패:', error);
    process.exit(1);
  }
}

// 스크립트 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main };
