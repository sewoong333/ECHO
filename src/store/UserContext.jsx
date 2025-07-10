import React, { createContext, useState, useEffect } from "react";
import { auth, googleProvider, db } from "../utils/firebase";
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
  signInWithCredential,
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
    mannerScore: 36.5,
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

    const setupAuthListeners = () => {
      // 인증 상태 변경 리스너
      unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
        try {
          if (firebaseUser) {
            // 사용자가 로그인한 경우
            console.log("User authenticated:", firebaseUser);
            
            // Firestore에서 사용자 프로필 정보 가져오기
            const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
            const userProfile = userDoc.exists() ? userDoc.data() : {};
            
            // 마지막 로그인 시간 업데이트
            await updateDoc(doc(db, "users", firebaseUser.uid), {
              lastLoginAt: serverTimestamp(),
            });
            
            setUser({
              nickname: userProfile.nickname || firebaseUser.displayName || "",
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
            });
            
            setUserProfile(userProfile);

            // 현재 URL이 로그인 페이지인 경우 메인 페이지로 리다이렉트
            if (window.location.pathname === "/login") {
              window.location.href = "/";
            }
          } else {
            // 사용자가 로그아웃한 경우
            console.log("User signed out");
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
              mannerScore: 36.5,
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
          }
        } catch (error) {
          console.error("Auth state change error:", error);
          setAuthError(error);
          setUser((prev) => ({ ...prev, loading: false }));
        }
      });

      // 토큰 갱신 리스너
      unsubscribeToken = onIdTokenChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          try {
            const token = await firebaseUser.getIdToken(true);
            console.log("Token refreshed successfully");
          } catch (error) {
            console.error("Token refresh error:", error);
            setAuthError(error);
          }
        }
      });
    };

    setupAuthListeners();

    // 클린업 함수
    return () => {
      if (unsubscribeAuth) unsubscribeAuth();
      if (unsubscribeToken) unsubscribeToken();
    };
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
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
        mannerScore: 36.5,
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

  // 프로필 업데이트
  const updateUserProfile = async (updates) => {
    try {
      if (!user.uid) throw new Error("로그인이 필요합니다.");
      
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        ...updates,
        updatedAt: serverTimestamp(),
      });
      
      // 로컬 상태 업데이트
      setUser(prev => ({ ...prev, ...updates }));
      setUserProfile(prev => ({ ...prev, ...updates }));
      
      console.log("✅ 프로필 업데이트 완료:", updates);
    } catch (error) {
      console.error("❌ 프로필 업데이트 실패:", error);
      throw error;
    }
  };

  // 주소 변경
  const updateAddress = async (address, region, district) => {
    try {
      await updateUserProfile({ address, region, district });
    } catch (error) {
      throw error;
    }
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

  // 사용자 정보 조회
  const getUserInfo = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        return { id: userId, ...userDoc.data() };
      }
      return null;
    } catch (error) {
      console.error("❌ 사용자 정보 조회 실패:", error);
      throw error;
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
      await signOut(auth);
      console.log("✅ 로그아웃 완료");
    } catch (error) {
      console.error("❌ 로그아웃 실패:", error);
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
