#!/usr/bin/env node

/**
 * 사용자 데이터 정규화 스크립트
 * - 모든 사용자 데이터의 필드명 통일
 * - ID 구조 표준화
 * - 데이터 일관성 확보
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, updateDoc, setDoc, query, where, writeBatch, getDoc } from 'firebase/firestore';
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

// 표준 사용자 스키마 정의
const STANDARD_USER_SCHEMA = {
  // 기본 정보
  uid: '', // Firebase Auth UID
  email: '',
  nickname: '', // 표준 닉네임 필드
  profileImage: '', // 표준 프로필 이미지 필드
  bio: '', // 표준 자기소개 필드
  
  // 연락처 정보
  phoneNumber: '',
  
  // 주소 정보
  address: '',
  region: '',
  district: '',
  
  // 신뢰도 정보
  mannerScore: 100,
  transactionCount: 0,
  reviewCount: 0,
  favoriteCount: 0,
  
  // 인증 정보
  isVerified: false,
  isBusiness: false,
  businessInfo: null,
  
  // 계정 정보
  isVirtual: false, // 가상 계정 여부
  createdAt: null,
  lastLoginAt: null,
  updatedAt: null,
  
  // 설정
  preferences: {
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
  },
  
  // 소셜 기능
  blockedUsers: [],
  following: [],
  followers: [],
};

// 표준 게시글 작성자 정보 스키마
const STANDARD_AUTHOR_SCHEMA = {
  authorId: '', // 사용자 UID
  authorNickname: '', // 표준 닉네임
  authorProfileImage: '', // 표준 프로필 이미지
  authorBio: '', // 표준 자기소개
  authorEmail: '', // 이메일 (선택적)
  authorVerified: false, // 인증 여부
  authorMannerScore: 100, // 매너 점수
};

// 표준 상품 판매자 정보 스키마
const STANDARD_SELLER_SCHEMA = {
  sellerId: '', // 사용자 UID
  sellerNickname: '', // 표준 닉네임
  sellerProfileImage: '', // 표준 프로필 이미지
  sellerBio: '', // 표준 자기소개
  sellerEmail: '', // 이메일 (선택적)
  sellerVerified: false, // 인증 여부
  sellerMannerScore: 100, // 매너 점수
};

async function normalizeUserData() {
  console.log('🔄 사용자 데이터 정규화 시작...');
  
  try {
    // 1. 모든 사용자 데이터 조회
    const usersSnapshot = await getDocs(collection(db, 'users'));
    console.log(`📊 총 ${usersSnapshot.docs.length}명의 사용자 발견`);
    
    const batch = writeBatch(db);
    let updateCount = 0;
    
    for (const userDoc of usersSnapshot.docs) {
      const userData = userDoc.data();
      const userId = userDoc.id;
      
      console.log(`\n👤 사용자 처리 중: ${userId}`);
      console.log(`   현재 닉네임: ${userData.nickname || userData.displayName || '없음'}`);
      
      // 표준 스키마에 맞게 데이터 정규화
      const normalizedData = {
        ...userData,
        uid: userData.uid || userId, // uid 필드 보장
        nickname: userData.nickname || userData.displayName || userData.name || '사용자',
        profileImage: userData.profileImage || userData.photoURL || userData.avatar || '',
        bio: userData.bio || userData.description || userData.about || '',
        email: userData.email || '',
        phoneNumber: userData.phoneNumber || userData.phone || '',
        address: userData.address || '',
        region: userData.region || '',
        district: userData.district || '',
        mannerScore: userData.mannerScore || 100,
        transactionCount: userData.transactionCount || 0,
        reviewCount: userData.reviewCount || 0,
        favoriteCount: userData.favoriteCount || 0,
        isVerified: userData.isVerified || false,
        isBusiness: userData.isBusiness || false,
        businessInfo: userData.businessInfo || null,
        isVirtual: userData.isVirtual || false,
        createdAt: userData.createdAt || null,
        lastLoginAt: userData.lastLoginAt || null,
        updatedAt: new Date(),
        preferences: userData.preferences || {
          pushNotifications: true,
          emailNotifications: true,
          smsNotifications: false,
          marketingEmails: false,
        },
        blockedUsers: userData.blockedUsers || [],
        following: userData.following || [],
        followers: userData.followers || [],
      };
      
      // 불필요한 필드 제거
      delete normalizedData.displayName;
      delete normalizedData.name;
      delete normalizedData.photoURL;
      delete normalizedData.avatar;
      delete normalizedData.description;
      delete normalizedData.about;
      delete normalizedData.phone;
      
      // 배치 업데이트에 추가
      batch.update(doc(db, 'users', userId), normalizedData);
      updateCount++;
      
      console.log(`   ✅ 정규화 완료: ${normalizedData.nickname}`);
    }
    
    // 배치 업데이트 실행
    if (updateCount > 0) {
      await batch.commit();
      console.log(`\n✅ ${updateCount}명의 사용자 데이터 정규화 완료`);
    }
    
  } catch (error) {
    console.error('❌ 사용자 데이터 정규화 실패:', error);
    throw error;
  }
}

async function normalizeMusicLifePosts() {
  console.log('\n🔄 음악생활 게시글 작성자 정보 정규화 시작...');
  
  try {
    const postsSnapshot = await getDocs(collection(db, 'musiclife_posts'));
    console.log(`📊 총 ${postsSnapshot.docs.length}개의 음악생활 게시글 발견`);
    
    const batch = writeBatch(db);
    let updateCount = 0;
    
    for (const postDoc of postsSnapshot.docs) {
      const postData = postDoc.data();
      const postId = postDoc.id;
      
      if (!postData.authorId) {
        console.log(`⚠️ 게시글 ${postId}에 authorId가 없습니다. 건너뜁니다.`);
        continue;
      }
      
      // 작성자 정보 조회
      const authorDoc = await getDoc(doc(db, 'users', postData.authorId));
      if (!authorDoc.exists()) {
        console.log(`⚠️ 작성자 ${postData.authorId}를 찾을 수 없습니다. 건너뜁니다.`);
        continue;
      }
      
      const authorData = authorDoc.data();
      
      // 표준 작성자 정보로 업데이트
      const normalizedAuthorInfo = {
        authorId: postData.authorId,
        authorNickname: authorData.nickname || '사용자',
        authorProfileImage: authorData.profileImage || '',
        authorBio: authorData.bio || '',
        authorEmail: authorData.email || '',
        authorVerified: authorData.isVerified || false,
        authorMannerScore: authorData.mannerScore || 100,
        updatedAt: new Date(),
      };
      
      // 기존 필드 제거
      const updateData = { ...postData, ...normalizedAuthorInfo };
      delete updateData.authorName; // 구 필드명 제거
      
      batch.update(doc(db, 'musiclife_posts', postId), updateData);
      updateCount++;
      
      console.log(`   ✅ 게시글 ${postId} 작성자 정보 정규화: ${normalizedAuthorInfo.authorNickname}`);
    }
    
    if (updateCount > 0) {
      await batch.commit();
      console.log(`\n✅ ${updateCount}개의 음악생활 게시글 작성자 정보 정규화 완료`);
    }
    
  } catch (error) {
    console.error('❌ 음악생활 게시글 정규화 실패:', error);
    throw error;
  }
}

async function normalizeProducts() {
  console.log('\n🔄 상품 게시글 판매자 정보 정규화 시작...');
  
  try {
    const productsSnapshot = await getDocs(collection(db, 'products'));
    console.log(`📊 총 ${productsSnapshot.docs.length}개의 상품 발견`);
    
    const batch = writeBatch(db);
    let updateCount = 0;
    
    for (const productDoc of productsSnapshot.docs) {
      const productData = productDoc.data();
      const productId = productDoc.id;
      
      if (!productData.sellerId) {
        console.log(`⚠️ 상품 ${productId}에 sellerId가 없습니다. 건너뜁니다.`);
        continue;
      }
      
      // 판매자 정보 조회
      const sellerDoc = await getDoc(doc(db, 'users', productData.sellerId));
      if (!sellerDoc.exists()) {
        console.log(`⚠️ 판매자 ${productData.sellerId}를 찾을 수 없습니다. 건너뜁니다.`);
        continue;
      }
      
      const sellerData = sellerDoc.data();
      
      // 표준 판매자 정보로 업데이트
      const normalizedSellerInfo = {
        sellerId: productData.sellerId,
        sellerNickname: sellerData.nickname || '사용자',
        sellerProfileImage: sellerData.profileImage || '',
        sellerBio: sellerData.bio || '',
        sellerEmail: sellerData.email || '',
        sellerVerified: sellerData.isVerified || false,
        sellerMannerScore: sellerData.mannerScore || 100,
        updatedAt: new Date(),
      };
      
      // 기존 필드 제거
      const updateData = { ...productData, ...normalizedSellerInfo };
      delete updateData.sellerName; // 구 필드명 제거
      
      batch.update(doc(db, 'products', productId), updateData);
      updateCount++;
      
      console.log(`   ✅ 상품 ${productId} 판매자 정보 정규화: ${normalizedSellerInfo.sellerNickname}`);
    }
    
    if (updateCount > 0) {
      await batch.commit();
      console.log(`\n✅ ${updateCount}개의 상품 판매자 정보 정규화 완료`);
    }
    
  } catch (error) {
    console.error('❌ 상품 정규화 실패:', error);
    throw error;
  }
}

async function normalizeComments() {
  console.log('\n🔄 댓글 작성자 정보 정규화 시작...');
  
  try {
    // 음악생활 댓글 정규화
    const musiclifeCommentsSnapshot = await getDocs(collection(db, 'musiclife_comments'));
    console.log(`📊 총 ${musiclifeCommentsSnapshot.docs.length}개의 음악생활 댓글 발견`);
    
    const batch = writeBatch(db);
    let updateCount = 0;
    
    for (const commentDoc of musiclifeCommentsSnapshot.docs) {
      const commentData = commentDoc.data();
      const commentId = commentDoc.id;
      
      if (!commentData.authorId) {
        console.log(`⚠️ 댓글 ${commentId}에 authorId가 없습니다. 건너뜁니다.`);
        continue;
      }
      
      // 작성자 정보 조회
      const authorDoc = await getDoc(doc(db, 'users', commentData.authorId));
      if (!authorDoc.exists()) {
        console.log(`⚠️ 댓글 작성자 ${commentData.authorId}를 찾을 수 없습니다. 건너뜁니다.`);
        continue;
      }
      
      const authorData = authorDoc.data();
      
      // 표준 작성자 정보로 업데이트
      const normalizedAuthorInfo = {
        authorId: commentData.authorId,
        authorNickname: authorData.nickname || '사용자',
        authorProfileImage: authorData.profileImage || '',
        authorBio: authorData.bio || '',
        authorVerified: authorData.isVerified || false,
        authorMannerScore: authorData.mannerScore || 100,
        updatedAt: new Date(),
      };
      
      // 기존 필드 제거
      const updateData = { ...commentData, ...normalizedAuthorInfo };
      delete updateData.authorName; // 구 필드명 제거
      
      batch.update(doc(db, 'musiclife_comments', commentId), updateData);
      updateCount++;
      
      console.log(`   ✅ 댓글 ${commentId} 작성자 정보 정규화: ${normalizedAuthorInfo.authorNickname}`);
    }
    
    if (updateCount > 0) {
      await batch.commit();
      console.log(`\n✅ ${updateCount}개의 댓글 작성자 정보 정규화 완료`);
    }
    
  } catch (error) {
    console.error('❌ 댓글 정규화 실패:', error);
    throw error;
  }
}

async function main() {
  console.log('🚀 사용자 데이터 정규화 프로세스 시작');
  console.log('=====================================');
  
  try {
    // 익명 인증으로 로그인
    console.log('🔐 익명 인증 중...');
    await signInAnonymously(auth);
    console.log('✅ 익명 인증 완료');
    // 1. 사용자 데이터 정규화
    await normalizeUserData();
    
    // 2. 음악생활 게시글 작성자 정보 정규화
    await normalizeMusicLifePosts();
    
    // 3. 상품 판매자 정보 정규화
    await normalizeProducts();
    
    // 4. 댓글 작성자 정보 정규화
    await normalizeComments();
    
    console.log('\n🎉 모든 사용자 데이터 정규화 완료!');
    console.log('=====================================');
    console.log('✅ 사용자 스키마 표준화 완료');
    console.log('✅ 게시글 작성자 정보 일관성 확보');
    console.log('✅ 상품 판매자 정보 일관성 확보');
    console.log('✅ 댓글 작성자 정보 일관성 확보');
    console.log('✅ 필드명 통일 완료');
    
  } catch (error) {
    console.error('❌ 정규화 프로세스 실패:', error);
    process.exit(1);
  }
}

// 스크립트 실행
main();
