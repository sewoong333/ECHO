#!/usr/bin/env node

/**
 * 실제 조회수와 채팅수 적용 스크립트
 * - 실제 조회 기록을 기반으로 조회수 계산
 * - 실제 채팅방 수를 기반으로 채팅수 계산
 * - 데이터 일관성 확보
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, updateDoc, query, where, writeBatch, getDoc, increment, serverTimestamp } from 'firebase/firestore';
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

// 통계 데이터
let updateStats = {
  products: {
    total: 0,
    updated: 0,
    errors: 0
  },
  musiclife: {
    total: 0,
    updated: 0,
    errors: 0
  }
};

// 상품의 실제 채팅수 계산
async function calculateRealChatCount(productId) {
  try {
    // 해당 상품과 관련된 채팅방 수 계산
    const chatRoomsQuery = query(
      collection(db, 'chatRooms'),
      where('productId', '==', productId)
    );
    
    const chatRoomsSnapshot = await getDocs(chatRoomsQuery);
    return chatRoomsSnapshot.docs.length;
    
  } catch (error) {
    console.error(`❌ 상품 ${productId} 채팅수 계산 실패:`, error);
    return 0;
  }
}

// 상품 데이터 실제 카운트 적용
async function updateProductRealCounts() {
  console.log('🔍 상품 실제 카운트 적용 시작...');
  
  try {
    const productsSnapshot = await getDocs(collection(db, 'products'));
    updateStats.products.total = productsSnapshot.docs.length;
    
    console.log(`📊 총 상품 수: ${updateStats.products.total}개`);
    
    const batch = writeBatch(db);
    let batchCount = 0;
    
    for (const productDoc of productsSnapshot.docs) {
      const productId = productDoc.id;
      const data = productDoc.data();
      
      try {
        // 실제 채팅수 계산
        const realChatCount = await calculateRealChatCount(productId);
        const currentChatCount = data.chatCount || 0;
        
        // 채팅수가 다르면 업데이트
        if (realChatCount !== currentChatCount) {
          console.log(`📝 상품 ${productId}: 채팅수 ${currentChatCount} → ${realChatCount}`);
          
          batch.update(doc(db, 'products', productId), {
            chatCount: realChatCount,
            lastChatCountUpdate: serverTimestamp()
          });
          
          batchCount++;
          updateStats.products.updated++;
          
          // 배치 크기 제한
          if (batchCount >= 500) {
            await batch.commit();
            console.log(`✅ 배치 커밋 완료: ${batchCount}개 상품 업데이트`);
            batchCount = 0;
          }
        }
        
        // 조회수가 0이거나 음수인 경우 기본값 설정
        if (!data.viewCount || data.viewCount < 0) {
          batch.update(doc(db, 'products', productId), {
            viewCount: 0
          });
          
          if (batchCount === 0) {
            batchCount++;
            updateStats.products.updated++;
          }
        }
        
      } catch (error) {
        console.error(`❌ 상품 ${productId} 처리 실패:`, error);
        updateStats.products.errors++;
      }
    }
    
    // 남은 배치 커밋
    if (batchCount > 0) {
      await batch.commit();
      console.log(`✅ 최종 배치 커밋 완료: ${batchCount}개 상품 업데이트`);
    }
    
    console.log('✅ 상품 실제 카운트 적용 완료');
    
  } catch (error) {
    console.error('❌ 상품 실제 카운트 적용 실패:', error);
  }
}

// 음악생활 게시글 카운트 정규화
async function updateMusiclifeRealCounts() {
  console.log('🔍 음악생활 게시글 카운트 정규화 시작...');
  
  try {
    const musiclifeSnapshot = await getDocs(collection(db, 'musiclife'));
    updateStats.musiclife.total = musiclifeSnapshot.docs.length;
    
    console.log(`📊 총 음악생활 게시글 수: ${updateStats.musiclife.total}개`);
    
    const batch = writeBatch(db);
    let batchCount = 0;
    
    for (const postDoc of musiclifeSnapshot.docs) {
      const postId = postDoc.id;
      const data = postDoc.data();
      
      try {
        const updates = {};
        let needsUpdate = false;
        
        // 조회수 정규화
        if (typeof data.viewCount !== 'number' || data.viewCount < 0) {
          updates.viewCount = 0;
          needsUpdate = true;
        }
        
        // 댓글수 정규화
        if (typeof data.commentCount !== 'number' || data.commentCount < 0) {
          updates.commentCount = 0;
          needsUpdate = true;
        }
        
        // 좋아요수 정규화
        if (typeof data.likeCount !== 'number' || data.likeCount < 0) {
          updates.likeCount = 0;
          needsUpdate = true;
        }
        
        // 업데이트가 필요한 경우
        if (needsUpdate) {
          batch.update(doc(db, 'musiclife', postId), updates);
          batchCount++;
          updateStats.musiclife.updated++;
          
          // 배치 크기 제한
          if (batchCount >= 500) {
            await batch.commit();
            console.log(`✅ 배치 커밋 완료: ${batchCount}개 음악생활 게시글 업데이트`);
            batchCount = 0;
          }
        }
        
      } catch (error) {
        console.error(`❌ 음악생활 게시글 ${postId} 처리 실패:`, error);
        updateStats.musiclife.errors++;
      }
    }
    
    // 남은 배치 커밋
    if (batchCount > 0) {
      await batch.commit();
      console.log(`✅ 최종 배치 커밋 완료: ${batchCount}개 음악생활 게시글 업데이트`);
    }
    
    console.log('✅ 음악생활 게시글 카운트 정규화 완료');
    
  } catch (error) {
    console.error('❌ 음악생활 게시글 카운트 정규화 실패:', error);
  }
}

// 조회수 증가 함수 개선
async function improveViewCountSystem() {
  console.log('🔍 조회수 시스템 개선 시작...');
  
  try {
    // 조회 기록 컬렉션 생성 (없는 경우)
    const viewLogsCollection = collection(db, 'viewLogs');
    
    // 기존 상품들의 조회수 검증
    const productsSnapshot = await getDocs(collection(db, 'products'));
    
    for (const productDoc of productsSnapshot.docs) {
      const productId = productDoc.id;
      const data = productDoc.data();
      
      // 조회 기록이 있는지 확인
      const viewLogsQuery = query(
        collection(db, 'viewLogs'),
        where('productId', '==', productId)
      );
      
      const viewLogsSnapshot = await getDocs(viewLogsQuery);
      const actualViewCount = viewLogsSnapshot.docs.length;
      const storedViewCount = data.viewCount || 0;
      
      // 실제 조회수와 저장된 조회수가 다르면 업데이트
      if (actualViewCount !== storedViewCount) {
        console.log(`📝 상품 ${productId}: 조회수 ${storedViewCount} → ${actualViewCount}`);
        
        await updateDoc(doc(db, 'products', productId), {
          viewCount: actualViewCount,
          lastViewCountUpdate: serverTimestamp()
        });
      }
    }
    
    console.log('✅ 조회수 시스템 개선 완료');
    
  } catch (error) {
    console.error('❌ 조회수 시스템 개선 실패:', error);
  }
}

// 통계 출력
function printUpdateStats() {
  console.log('\n📊 실제 카운트 적용 결과');
  console.log('='.repeat(50));
  
  console.log('\n🏪 상품 데이터:');
  console.log(`  총 상품 수: ${updateStats.products.total}개`);
  console.log(`  업데이트된 상품: ${updateStats.products.updated}개`);
  console.log(`  오류 발생: ${updateStats.products.errors}개`);
  
  console.log('\n🎵 음악생활 게시글:');
  console.log(`  총 게시글 수: ${updateStats.musiclife.total}개`);
  console.log(`  업데이트된 게시글: ${updateStats.musiclife.updated}개`);
  console.log(`  오류 발생: ${updateStats.musiclife.errors}개`);
  
  console.log('\n✅ 실제 카운트 적용 완료!');
}

// 메인 실행 함수
async function main() {
  try {
    console.log('🚀 실제 조회수와 채팅수 적용 시작...');
    
    // Firebase 인증
    await signInAnonymously(auth);
    console.log('✅ Firebase 인증 완료');
    
    // 각 컬렉션 실제 카운트 적용
    await updateProductRealCounts();
    await updateMusiclifeRealCounts();
    await improveViewCountSystem();
    
    // 결과 출력
    printUpdateStats();
    
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
