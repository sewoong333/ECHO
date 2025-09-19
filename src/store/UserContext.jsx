import React, { createContext, useState, useEffect } from "react";
import { auth, googleProvider, db, kakaoAuthService } from "../utils/firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  onIdTokenChanged,
  updateProfile,
  sendPasswordResetEmail,
  PhoneAuthProvider,
} from "firebase/auth";
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  serverTimestamp, 
  arrayUnion,
  arrayRemove,
  increment,
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    nickname: "",
    email: "",
    uid: "",
    isLoggedIn: false,
    loading: true,
    emailVerified: false,
    phoneNumber: "",
    profileImage: "",
    address: "",
    region: "",
    district: "",
    mannerScore: 100,
    transactionCount: 0,
    reviewCount: 0,
    favoriteCount: 0,
    isVerified: false,
    isBusiness: false,
    businessInfo: null,
    lastLoginAt: null,
    createdAt: null,
    preferences: {
      pushNotifications: true,
      emailNotifications: true,
      smsNotifications: false,
      marketingEmails: false,
    },
    blockedUsers: [],
    following: [],
    followers: [],
  });
  const [authError, setAuthError] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    let unsubscribeAuth = null;
    let unsubscribeToken = null;

    const setupAuthListeners = async () => {
      try {
        // 초기화 시 카카오 로그인 상태 확인
        const savedKakaoUser = await kakaoAuthService.checkSavedKakaoLogin();
        if (savedKakaoUser) {
          console.log('🔄 저장된 카카오 로그인 상태로 복원');
          loginWithKakao(savedKakaoUser);
          return;
        }
      } catch (error) {
        console.warn('⚠️ 초기 카카오 로그인 확인 실패:', error);
      }

      // 인증 상태 변경 리스너
      unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
        try {
          if (firebaseUser) {
            // 사용자가 로그인한 경우
            console.log("✅ Firebase 사용자 인증됨:", firebaseUser.uid);
            
            let userProfile = {};
            
            try {
              // Firestore 작업에 타임아웃 적용 (10초)
              const firestoreTimeout = new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Firestore timeout')), 10000)
              );
              
              const firestoreWork = async () => {
                // Firestore에서 사용자 프로필 정보 가져오기
                const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
                const profileData = userDoc.exists() ? userDoc.data() : {};
                
                // 새 사용자이거나 프로필이 없는 경우 기본 프로필 생성
                if (!userDoc.exists()) {
                  console.log("🆕 새 사용자 프로필 생성 중...");
                  const defaultProfile = {
                    nickname: firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "사용자",
                    email: firebaseUser.email || "",
                    profileImage: firebaseUser.photoURL || "",
                    address: "",
                    region: "",
                    district: "",
                    mannerScore: 100,
                    transactionCount: 0,
                    reviewCount: 0,
                    favoriteCount: 0,
                    isVerified: false,
                    isBusiness: false,
                    businessInfo: null,
                    preferences: {
                      pushNotifications: true,
                      emailNotifications: true,
                      smsNotifications: false,
                      marketingEmails: false,
                    },
                    blockedUsers: [],
                    following: [],
                    followers: [],
                    createdAt: serverTimestamp(),
                    lastLoginAt: serverTimestamp(),
                  };
                  
                  await setDoc(doc(db, "users", firebaseUser.uid), defaultProfile);
                  console.log("✅ 새 사용자 프로필 생성 완료");
                  return defaultProfile;
                } else {
                  // 기존 사용자인 경우 마지막 로그인 시간 업데이트 (백그라운드에서)
                  updateDoc(doc(db, "users", firebaseUser.uid), {
                    lastLoginAt: serverTimestamp(),
                  }).catch(error => {
                    console.warn("⚠️ 로그인 시간 업데이트 실패 (무시됨):", error);
                  });
                  
                  return profileData;
                }
              };
              
              // Firestore 작업 실행 (타임아웃과 함께)
              userProfile = await Promise.race([firestoreWork(), firestoreTimeout]);
              
            } catch (firestoreError) {
              console.warn("⚠️ Firestore 작업 실패 또는 타임아웃:", firestoreError.message);
              // Firestore 오류가 있어도 Firebase Auth 정보로 기본 사용자 상태 설정
              userProfile = {
                nickname: firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "사용자",
                email: firebaseUser.email || "",
                profileImage: firebaseUser.photoURL || "",
                address: "",
                region: "",
                district: "",
                mannerScore: 100,
                transactionCount: 0,
                reviewCount: 0,
                favoriteCount: 0,
                isVerified: false,
                isBusiness: false,
                businessInfo: null,
                preferences: {
                  pushNotifications: true,
                  emailNotifications: true,
                  smsNotifications: false,
                  marketingEmails: false,
                },
                blockedUsers: [],
                following: [],
                followers: [],
                lastLoginAt: null,
                createdAt: null,
              };
            }
            
            // 사용자 상태 업데이트
            const userState = {
              nickname: userProfile.nickname || firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "사용자",
              email: firebaseUser.email || "",
              uid: firebaseUser.uid,
              isLoggedIn: true,
              loading: false,
              emailVerified: firebaseUser.emailVerified,
              phoneNumber: userProfile.phoneNumber || firebaseUser.phoneNumber || "",
              profileImage: userProfile.profileImage || firebaseUser.photoURL || "",
              address: userProfile.address || "",
              region: userProfile.region || "",
              district: userProfile.district || "",
              mannerScore: userProfile.mannerScore || 36.5,
              transactionCount: userProfile.transactionCount || 0,
              reviewCount: userProfile.reviewCount || 0,
              favoriteCount: userProfile.favoriteCount || 0,
              isVerified: userProfile.isVerified || false,
              isBusiness: userProfile.isBusiness || false,
              businessInfo: userProfile.businessInfo || null,
              lastLoginAt: userProfile.lastLoginAt,
              createdAt: userProfile.createdAt,
              preferences: userProfile.preferences || {
                pushNotifications: true,
                emailNotifications: true,
                smsNotifications: false,
                marketingEmails: false,
              },
              blockedUsers: userProfile.blockedUsers || [],
              following: userProfile.following || [],
              followers: userProfile.followers || [],
            };
            
            setUser(userState);
            setUserProfile(userProfile);
            setAuthError(null);

            console.log("✅ 사용자 상태 업데이트 완료:", {
              uid: userState.uid,
              nickname: userState.nickname,
              isLoggedIn: userState.isLoggedIn
            });

          } else {
            // 사용자가 로그아웃한 경우
            console.log("❌ 사용자 로그아웃됨");
            setUser({
              nickname: "",
              email: "",
              uid: "",
              isLoggedIn: false,
              loading: false,
              emailVerified: false,
              phoneNumber: "",
              profileImage: "",
              address: "",
              region: "",
              district: "",
              mannerScore: 100,
              transactionCount: 0,
              reviewCount: 0,
              favoriteCount: 0,
              isVerified: false,
              isBusiness: false,
              businessInfo: null,
              lastLoginAt: null,
              createdAt: null,
              preferences: {
                pushNotifications: true,
                emailNotifications: true,
                smsNotifications: false,
                marketingEmails: false,
              },
              blockedUsers: [],
              following: [],
              followers: [],
            });
            setUserProfile(null);
            setAuthError(null);
          }
        } catch (error) {
          console.error("❌ 인증 상태 변경 처리 실패:", error);
          setAuthError(error);
          
          // 인증 오류 시에도 로딩 상태는 반드시 해제
          setUser((prev) => ({ 
            ...prev, 
            loading: false,
            // 네트워크 오류가 아닌 경우에만 로그아웃 처리
            isLoggedIn: error.code === 'auth/network-request-failed' ? prev.isLoggedIn : false
          }));
        }
      });

      // 토큰 갱신 리스너 (타임아웃 추가)
      unsubscribeToken = onIdTokenChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          try {
            // 토큰 갱신에 5초 타임아웃 적용
            const tokenTimeout = new Promise((_, reject) => 
              setTimeout(() => reject(new Error('Token refresh timeout')), 5000)
            );
            
            const tokenRefresh = firebaseUser.getIdToken(true);
            await Promise.race([tokenRefresh, tokenTimeout]);
            
            console.log("✅ 토큰 갱신 성공");
          } catch (error) {
            console.warn("⚠️ 토큰 갱신 실패 (무시됨):", error.message);
            // 토큰 갱신 실패는 자동으로 재시도되므로 무시
          }
        }
      });
    };

    setupAuthListeners();
    
    // 초기 로딩 상태를 10초 후 자동으로 해제 (안전장치)
    const loadingTimeout = setTimeout(() => {
      setUser(prev => {
        if (prev.loading) {
          console.warn("⚠️ 로딩 타임아웃 - 강제 해제");
          return { ...prev, loading: false };
        }
        return prev;
      });
    }, 10000);

    // 클린업 함수
    return () => {
      clearTimeout(loadingTimeout);
      if (unsubscribeAuth) unsubscribeAuth();
      if (unsubscribeToken) unsubscribeToken();
    };
  }, []);

  const loginWithGoogle = async () => {
    try {
      console.log("🚀 Google 로그인 시작...");
      setAuthError(null);
      
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;
      
      console.log("✅ Google 로그인 성공:", {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName
      });
      
      // onAuthStateChanged에서 자동으로 처리하므로 여기서는 단순히 성공만 반환
      return firebaseUser;
      
    } catch (error) {
      console.error("❌ Google 로그인 실패:", error);
      setAuthError(error);
      throw error;
    }
  };

  // 카카오 사용자 정보를 UserContext 상태에 설정
  const loginWithKakao = (kakaoUserData) => {
    try {
      console.log("📱 카카오 사용자 정보를 UserContext에 설정:", kakaoUserData);
      
      setUser({
        nickname: kakaoUserData.nickname,
        email: kakaoUserData.email || "",
        uid: kakaoUserData.uid,
        isLoggedIn: true,
        loading: false,
        emailVerified: kakaoUserData.isVerified || false,
        phoneNumber: kakaoUserData.phoneNumber || "",
        profileImage: kakaoUserData.profileImage || "",
        providerId: 'kakao',
        mannerScore: kakaoUserData.mannerScore || 100,
        transactionCount: kakaoUserData.transactionCount || 0,
        reviewCount: kakaoUserData.reviewCount || 0,
        favoriteCount: kakaoUserData.favoriteCount || 0,
        isVerified: kakaoUserData.isVerified || false,
        isBusiness: false,
        businessInfo: null,
        lastLoginAt: new Date(),
        createdAt: kakaoUserData.createdAt || new Date(),
        preferences: {
          pushNotifications: true,
          emailNotifications: true,
          smsNotifications: false,
          marketingEmails: false,
        },
        blockedUsers: kakaoUserData.blockedUsers || [],
        following: kakaoUserData.following || [],
        followers: [],
        address: kakaoUserData.address || "",
        region: kakaoUserData.region || "",
        district: kakaoUserData.district || "",
      });
      
      setUserProfile(kakaoUserData);
      setAuthError(null);
      
      console.log("✅ 카카오 사용자 정보 설정 완료");
    } catch (error) {
      console.error("❌ 카카오 사용자 정보 설정 실패:", error);
      setAuthError(error);
    }
  };

  const loginWithEmail = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredential.user;
    } catch (error) {
      console.error("Email login error:", error);
      throw error;
    }
  };

  const signupWithEmail = async ({ email, password, nickname, phone, address, region, district }) => {
    try {
      // 닉네임 중복 확인
      const nicknameQuery = query(
        collection(db, "users"),
        where("nickname", "==", nickname)
      );
      const nicknameSnapshot = await getDocs(nicknameQuery);
      if (!nicknameSnapshot.empty) {
        throw new Error("이미 사용 중인 닉네임입니다.");
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      
      if (userCredential.user) {
        await sendEmailVerification(userCredential.user);
      }

      // 사용자 프로필 업데이트
      await updateProfile(userCredential.user, {
        displayName: nickname,
      });

      // Firestore에 사용자 정보 저장
      const userDoc = doc(db, "users", userCredential.user.uid);
      const userData = {
        nickname,
        phoneNumber: phone || "",
        email,
        address: address || "",
        region: region || "",
        district: district || "",
        profileImage: "",
        mannerScore: 100,
        transactionCount: 0,
        reviewCount: 0,
        favoriteCount: 0,
        isVerified: false,
        isBusiness: false,
        businessInfo: null,
        preferences: {
          pushNotifications: true,
          emailNotifications: true,
          smsNotifications: false,
          marketingEmails: false,
        },
        blockedUsers: [],
        following: [],
        followers: [],
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
      };
      
      await setDoc(userDoc, userData);
      
      console.log("✅ 회원가입 완료:", userData);
      return userCredential.user;
    } catch (error) {
      console.error("❌ 회원가입 실패:", error);
      throw error;
    }
  };

  // 사용자가 작성한 모든 게시글의 작성자 정보 업데이트 (정규화된 버전)
  const updateUserPostsInfo = async (userId, updates) => {
    try {
      console.log('🔄 사용자 게시글 작성자 정보 업데이트 중...', { userId, updates });
      
      // 표준 업데이트 데이터 준비
      const standardUpdates = {
        nickname: updates.nickname || updates.displayName || updates.name,
        profileImage: updates.profileImage || updates.photoURL || updates.avatar,
        bio: updates.bio || updates.description || updates.about,
        email: updates.email,
        isVerified: updates.isVerified,
        mannerScore: updates.mannerScore,
      };
      
      let updatedCount = 0;
      
      // 1. 음악생활 게시글 업데이트
      console.log('📝 음악생활 게시글 작성자 정보 업데이트 중...');
      const musiclifeQuery = query(
        collection(db, "musiclife_posts"),
        where("authorId", "==", userId)
      );
      const musiclifeSnapshot = await getDocs(musiclifeQuery);
      
      for (const docSnapshot of musiclifeSnapshot.docs) {
        const updateData = {};
        
        // 닉네임은 실시간 조회하므로 게시글에 저장하지 않음
        // if (standardUpdates.nickname) updateData.authorNickname = standardUpdates.nickname;
        if (standardUpdates.profileImage) updateData.authorProfileImage = standardUpdates.profileImage;
        if (standardUpdates.bio) updateData.authorBio = standardUpdates.bio;
        if (standardUpdates.email) updateData.authorEmail = standardUpdates.email;
        if (standardUpdates.isVerified !== undefined) updateData.authorVerified = standardUpdates.isVerified;
        if (standardUpdates.mannerScore !== undefined) updateData.authorMannerScore = standardUpdates.mannerScore;
        
        if (Object.keys(updateData).length > 0) {
          updateData.updatedAt = serverTimestamp();
          await updateDoc(doc(db, "musiclife_posts", docSnapshot.id), updateData);
          updatedCount++;
          console.log(`   ✅ 음악생활 게시글 ${docSnapshot.id} 업데이트`);
        }
      }
      
      // 2. 상품 게시글 업데이트
      console.log('🛍️ 상품 게시글 판매자 정보 업데이트 중...');
      const productQuery = query(
        collection(db, "products"),
        where("sellerId", "==", userId)
      );
      const productSnapshot = await getDocs(productQuery);
      
      for (const docSnapshot of productSnapshot.docs) {
        const updateData = {};
        
        // 닉네임은 실시간 조회하므로 게시글에 저장하지 않음
        // if (standardUpdates.nickname) updateData.sellerNickname = standardUpdates.nickname;
        if (standardUpdates.profileImage) updateData.sellerProfileImage = standardUpdates.profileImage;
        if (standardUpdates.bio) updateData.sellerBio = standardUpdates.bio;
        if (standardUpdates.email) updateData.sellerEmail = standardUpdates.email;
        if (standardUpdates.isVerified !== undefined) updateData.sellerVerified = standardUpdates.isVerified;
        if (standardUpdates.mannerScore !== undefined) updateData.sellerMannerScore = standardUpdates.mannerScore;
        
        if (Object.keys(updateData).length > 0) {
          updateData.updatedAt = serverTimestamp();
          await updateDoc(doc(db, "products", docSnapshot.id), updateData);
          updatedCount++;
          console.log(`   ✅ 상품 ${docSnapshot.id} 업데이트`);
        }
      }
      
      // 3. 음악생활 댓글 작성자 정보 업데이트
      console.log('💬 음악생활 댓글 작성자 정보 업데이트 중...');
      const musiclifeCommentQuery = query(
        collection(db, "musiclife_comments"),
        where("authorId", "==", userId)
      );
      const musiclifeCommentSnapshot = await getDocs(musiclifeCommentQuery);
      
      for (const docSnapshot of musiclifeCommentSnapshot.docs) {
        const updateData = {};
        
        // 닉네임은 실시간 조회하므로 게시글에 저장하지 않음
        // if (standardUpdates.nickname) updateData.authorNickname = standardUpdates.nickname;
        if (standardUpdates.profileImage) updateData.authorProfileImage = standardUpdates.profileImage;
        if (standardUpdates.bio) updateData.authorBio = standardUpdates.bio;
        if (standardUpdates.email) updateData.authorEmail = standardUpdates.email;
        if (standardUpdates.isVerified !== undefined) updateData.authorVerified = standardUpdates.isVerified;
        if (standardUpdates.mannerScore !== undefined) updateData.authorMannerScore = standardUpdates.mannerScore;
        
        if (Object.keys(updateData).length > 0) {
          updateData.updatedAt = serverTimestamp();
          await updateDoc(doc(db, "musiclife_comments", docSnapshot.id), updateData);
          updatedCount++;
          console.log(`   ✅ 음악생활 댓글 ${docSnapshot.id} 업데이트`);
        }
      }
      
      // 4. 일반 댓글 작성자 정보 업데이트 (상품 댓글 등)
      console.log('💬 일반 댓글 작성자 정보 업데이트 중...');
      const commentQuery = query(
        collection(db, "comments"),
        where("authorId", "==", userId)
      );
      const commentSnapshot = await getDocs(commentQuery);
      
      for (const docSnapshot of commentSnapshot.docs) {
        const updateData = {};
        
        // 닉네임은 실시간 조회하므로 게시글에 저장하지 않음
        // if (standardUpdates.nickname) updateData.authorNickname = standardUpdates.nickname;
        if (standardUpdates.profileImage) updateData.authorProfileImage = standardUpdates.profileImage;
        if (standardUpdates.bio) updateData.authorBio = standardUpdates.bio;
        if (standardUpdates.email) updateData.authorEmail = standardUpdates.email;
        if (standardUpdates.isVerified !== undefined) updateData.authorVerified = standardUpdates.isVerified;
        if (standardUpdates.mannerScore !== undefined) updateData.authorMannerScore = standardUpdates.mannerScore;
        
        if (Object.keys(updateData).length > 0) {
          updateData.updatedAt = serverTimestamp();
          await updateDoc(doc(db, "comments", docSnapshot.id), updateData);
          updatedCount++;
          console.log(`   ✅ 일반 댓글 ${docSnapshot.id} 업데이트`);
        }
      }
      
      console.log(`✅ 총 ${updatedCount}개 게시글/댓글 작성자 정보 업데이트 완료`);
      return updatedCount;
      
    } catch (error) {
      console.error('❌ 게시글 작성자 정보 업데이트 실패:', error);
      // 에러가 발생해도 프로필 업데이트는 계속 진행
      return 0;
    }
  };

  // 프로필 업데이트
  const updateUserProfile = async (updates) => {
    try {
      if (!user.uid) throw new Error("로그인이 필요합니다.");
      
      // 허용된 필드만 업데이트 가능 (보안)
      const allowedFields = ['nickname', 'bio', 'profileImage', 'address', 'region', 'district'];
      const sanitizedUpdates = {};
      
      Object.keys(updates).forEach(key => {
        if (allowedFields.includes(key)) {
          let value = updates[key];
          
          // XSS 방지를 위한 HTML 태그 제거
          if (typeof value === 'string') {
            value = value.replace(/<[^>]*>/g, '').trim();
          }
          
          // 필드별 검증
          if (key === 'nickname') {
            if (value.length < 2 || value.length > 20) {
              throw new Error("닉네임은 2-20자여야 합니다.");
            }
            value = value.replace(/[<>{}]/g, '');
          } else if (key === 'bio') {
            if (value.length > 200) {
              throw new Error("소개는 200자 이하여야 합니다.");
            }
          }
          
          sanitizedUpdates[key] = value;
        }
      });
      
      if (Object.keys(sanitizedUpdates).length === 0) {
        throw new Error("업데이트할 유효한 필드가 없습니다.");
      }
      
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        ...sanitizedUpdates,
        updatedAt: serverTimestamp(),
      });
      
      // 사용자가 작성한 모든 게시글의 작성자 정보도 업데이트 (실시간 조회를 위해 캐시 제거)
      if (sanitizedUpdates.nickname || sanitizedUpdates.profileImage || sanitizedUpdates.bio || 
          sanitizedUpdates.email || sanitizedUpdates.isVerified || sanitizedUpdates.mannerScore) {
        console.log('🔄 프로필 변경으로 인한 게시글 정보 동기화 시작...');
        const updatedCount = await updateUserPostsInfo(user.uid, sanitizedUpdates);
        console.log(`✅ ${updatedCount}개 게시글/댓글 정보 동기화 완료`);
        
        // 사용자 정보 캐시 무효화 (실시간 반영을 위해)
        if (typeof window !== 'undefined' && window.invalidateUserCache) {
          window.invalidateUserCache(user.uid);
        }
      }
      
      // 로컬 상태 업데이트
      setUser(prev => ({ ...prev, ...sanitizedUpdates }));
      setUserProfile(prev => ({ ...prev, ...sanitizedUpdates }));
      
      console.log("✅ 프로필 업데이트 완료:", sanitizedUpdates);
    } catch (error) {
      console.error("❌ 프로필 업데이트 실패:", error);
      throw error;
    }
  };

  // 주소 변경
  const updateAddress = async (address, region, district) => {
    await updateUserProfile({ address, region, district });
  };

  // 비밀번호 재설정
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("✅ 비밀번호 재설정 이메일 발송 완료");
    } catch (error) {
      console.error("❌ 비밀번호 재설정 실패:", error);
      throw error;
    }
  };

  // 매너점수 업데이트
  const updateMannerScore = async (userId, score) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        mannerScore: score,
        updatedAt: serverTimestamp(),
      });
      
      if (userId === user.uid) {
        setUser(prev => ({ ...prev, mannerScore: score }));
      }
    } catch (error) {
      console.error("❌ 매너점수 업데이트 실패:", error);
      throw error;
    }
  };

  // 거래횟수 증가
  const incrementTransactionCount = async (userId = null) => {
    try {
      const targetUserId = userId || user.uid;
      const userRef = doc(db, "users", targetUserId);
      await updateDoc(userRef, {
        transactionCount: increment(1),
        updatedAt: serverTimestamp(),
      });
      
      if (targetUserId === user.uid) {
        setUser(prev => ({ ...prev, transactionCount: prev.transactionCount + 1 }));
      }
    } catch (error) {
      console.error("❌ 거래횟수 업데이트 실패:", error);
      throw error;
    }
  };

  // 사용자 차단/차단해제
  const blockUser = async (targetUserId, block = true) => {
    try {
      if (!user.uid) throw new Error("로그인이 필요합니다.");
      
      const userRef = doc(db, "users", user.uid);
      const updateData = {
        blockedUsers: block 
          ? arrayUnion(targetUserId)
          : arrayRemove(targetUserId),
        updatedAt: serverTimestamp(),
      };
      
      await updateDoc(userRef, updateData);
      
      // 로컬 상태 업데이트
      setUser(prev => ({
        ...prev,
        blockedUsers: block
          ? [...prev.blockedUsers, targetUserId]
          : prev.blockedUsers.filter(id => id !== targetUserId)
      }));
      
      console.log(block ? "✅ 사용자 차단 완료" : "✅ 사용자 차단해제 완료");
    } catch (error) {
      console.error("❌ 사용자 차단 처리 실패:", error);
      throw error;
    }
  };

  // 팔로우/언팔로우
  const followUser = async (targetUserId, follow = true) => {
    try {
      if (!user.uid) throw new Error("로그인이 필요합니다.");
      
      const userRef = doc(db, "users", user.uid);
      const targetUserRef = doc(db, "users", targetUserId);
      
      // 현재 사용자의 following 업데이트
      await updateDoc(userRef, {
        following: follow 
          ? arrayUnion(targetUserId)
          : arrayRemove(targetUserId),
        updatedAt: serverTimestamp(),
      });
      
      // 대상 사용자의 followers 업데이트
      await updateDoc(targetUserRef, {
        followers: follow
          ? arrayUnion(user.uid)
          : arrayRemove(user.uid),
        updatedAt: serverTimestamp(),
      });
      
      // 로컬 상태 업데이트
      setUser(prev => ({
        ...prev,
        following: follow
          ? [...prev.following, targetUserId]
          : prev.following.filter(id => id !== targetUserId)
      }));
      
      console.log(follow ? "✅ 팔로우 완료" : "✅ 언팔로우 완료");
    } catch (error) {
      console.error("❌ 팔로우 처리 실패:", error);
      throw error;
    }
  };

  // 사용자 정보 조회 (개선된 버전)
  const getUserInfo = async (userId) => {
    try {
      if (!userId) {
        console.warn('⚠️ 사용자 ID가 제공되지 않았습니다.');
        return null;
      }

      console.log(`🔍 사용자 정보 조회 시작: ${userId}`);

      // 1. 먼저 문서 ID로 직접 조회 시도 (표준 방식)
      try {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log(`✅ 문서 ID로 사용자 정보 조회 성공: ${userData.nickname || '닉네임 없음'}`);
          return { 
            id: userId, 
            ...userData,
            // 표준 필드명 보장
            nickname: userData.nickname || userData.displayName || userData.name || '사용자',
            profileImage: userData.profileImage || userData.photoURL || userData.avatar || '',
            bio: userData.bio || userData.description || userData.about || '',
            email: userData.email || '',
            isVerified: userData.isVerified || false,
            mannerScore: userData.mannerScore || 100,
            transactionCount: userData.transactionCount || 0,
            reviewCount: userData.reviewCount || 0,
            createdAt: userData.createdAt,
            lastLoginAt: userData.lastLoginAt,
          };
        }
      } catch (docError) {
        console.warn(`⚠️ 문서 ID 조회 실패: ${docError.message}`);
      }
      
      // 2. 문서 ID로 찾지 못한 경우, uid 필드로 조회 시도 (가상 계정용)
      try {
        console.log(`🔍 uid 필드로 조회 시도: ${userId}`);
        const uidQuery = query(
          collection(db, "users"),
          where("uid", "==", userId)
        );
        const uidSnapshot = await getDocs(uidQuery);
        
        if (!uidSnapshot.empty) {
          const userData = uidSnapshot.docs[0].data();
          console.log(`✅ uid 필드로 사용자 정보 찾음: ${userData.nickname || '닉네임 없음'}`);
          return { 
            id: uidSnapshot.docs[0].id, 
            ...userData,
            // 표준 필드명 보장
            nickname: userData.nickname || userData.displayName || userData.name || '사용자',
            profileImage: userData.profileImage || userData.photoURL || userData.avatar || '',
            bio: userData.bio || userData.description || userData.about || '',
            email: userData.email || '',
            isVerified: userData.isVerified || false,
            mannerScore: userData.mannerScore || 100,
            transactionCount: userData.transactionCount || 0,
            reviewCount: userData.reviewCount || 0,
            createdAt: userData.createdAt,
            lastLoginAt: userData.lastLoginAt,
          };
        }
      } catch (uidError) {
        console.warn(`⚠️ uid 필드 조회 실패: ${uidError.message}`);
      }
      
      // 3. 이메일로 조회 시도 (최후의 수단)
      if (userId.includes('@')) {
        try {
          console.log(`🔍 이메일로 사용자 조회 시도: ${userId}`);
          const emailQuery = query(
            collection(db, "users"),
            where("email", "==", userId)
          );
          const emailSnapshot = await getDocs(emailQuery);
          
          if (!emailSnapshot.empty) {
            const userData = emailSnapshot.docs[0].data();
            console.log(`✅ 이메일로 사용자 정보 찾음: ${userData.nickname || '닉네임 없음'}`);
            return { 
              id: emailSnapshot.docs[0].id, 
              ...userData,
              // 표준 필드명 보장
              nickname: userData.nickname || userData.displayName || userData.name || '사용자',
              profileImage: userData.profileImage || userData.photoURL || userData.avatar || '',
              bio: userData.bio || userData.description || userData.about || '',
              email: userData.email || '',
              isVerified: userData.isVerified || false,
              mannerScore: userData.mannerScore || 100,
              transactionCount: userData.transactionCount || 0,
              reviewCount: userData.reviewCount || 0,
              createdAt: userData.createdAt,
              lastLoginAt: userData.lastLoginAt,
            };
          }
        } catch (emailError) {
          console.warn(`⚠️ 이메일 조회 실패: ${emailError.message}`);
        }
      }
      
      // 4. 모든 방법이 실패한 경우, 기본 사용자 정보 반환
      console.warn(`⚠️ 사용자 정보를 찾을 수 없음: ${userId}`);
      return {
        id: userId,
        nickname: '익명',
        profileImage: '',
        bio: '',
        email: '',
        isVerified: false,
        mannerScore: 100,
        transactionCount: 0,
        reviewCount: 0,
        createdAt: null,
        lastLoginAt: null,
      };
    } catch (error) {
      console.error("❌ 사용자 정보 조회 실패:", error);
      // 에러가 발생해도 기본 사용자 정보 반환
      return {
        id: userId,
        nickname: '익명',
        profileImage: '',
        bio: '',
        email: '',
        isVerified: false,
        mannerScore: 100,
        transactionCount: 0,
        reviewCount: 0,
        createdAt: null,
        lastLoginAt: null,
      };
    }
  };

  // 닉네임 중복 확인
  const checkNicknameAvailability = async (nickname) => {
    try {
      const nicknameQuery = query(
        collection(db, "users"),
        where("nickname", "==", nickname)
      );
      const snapshot = await getDocs(nicknameQuery);
      return snapshot.empty;
    } catch (error) {
      console.error("❌ 닉네임 중복 확인 실패:", error);
      throw error;
    }
  };

  // 로그아웃
  const logout = async () => {
    try {
      console.log("🚪 로그아웃 시작...");
      
      // 카카오 로그아웃 처리
      if (user.providerId === 'kakao') {
        console.log("📱 카카오 로그아웃 처리 중...");
        await kakaoAuthService.logout();
        
        // 카카오 관련 로컬 스토리지 정리
        localStorage.removeItem('kakao_login_status');
        localStorage.removeItem('kakao_user_info');
      }
      
      // Firebase 로그아웃
      await signOut(auth);
      
      // 모든 인증 관련 스토리지 정리
      localStorage.removeItem('kakao_login_status');
      localStorage.removeItem('kakao_user_info');
      sessionStorage.removeItem('kakao_login_attempt');
      sessionStorage.removeItem('kakao_login_time');
      
      console.log("✅ 로그아웃 완료");
    } catch (error) {
      console.error("❌ 로그아웃 실패:", error);
      // 에러가 발생해도 로컬 상태는 정리
      localStorage.removeItem('kakao_login_status');
      localStorage.removeItem('kakao_user_info');
      sessionStorage.removeItem('kakao_login_attempt');
      sessionStorage.removeItem('kakao_login_time');
      throw error;
    }
  };

  // 더미 유저 20명 생성
  const dummyNicknames = [
    "음악왕",
    "기타소년",
    "피아노소녀",
    "드럼짱",
    "베이스킹",
    "색소폰러버",
    "플룻마스터",
    "신디장인",
    "보컬리더",
    "밴드캡틴",
    "재즈러버",
    "락스타",
    "힙합보이",
    "클래식걸",
    "EDM매니아",
    "트로트신",
    "포크싱어",
    "뮤지션A",
    "뮤지션B",
    "뮤지션C",
  ];
  const users = Array.from({ length: 20 }).map((_, i) => ({
    nickname: dummyNicknames[i],
    email: `user${i + 1}@test.com`,
    password: `testpw${i + 1}`,
  }));

  const value = {
    user,
    userProfile,
    authError,
    users,
    loginWithGoogle,
    loginWithKakao,
    loginWithEmail,
    signupWithEmail,
    logout,
    updateUserProfile,
    updateAddress,
    resetPassword,
    updateMannerScore,
    incrementTransactionCount,
    blockUser,
    followUser,
    getUserInfo,
    checkNicknameAvailability,
    setAuthError,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}