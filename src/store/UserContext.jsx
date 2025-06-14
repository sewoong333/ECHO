import React, { createContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../utils/firebase';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  onIdTokenChanged
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    nickname: '',
    email: '',
    uid: '',
    isLoggedIn: false,
    loading: true,
    emailVerified: false
  });
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    let unsubscribeAuth = null;
    let unsubscribeToken = null;

    const setupAuthListeners = () => {
      // 인증 상태 변경 리스너
      unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
        try {
          if (firebaseUser) {
            // 사용자가 로그인한 경우
            setUser({
              nickname: firebaseUser.displayName || '',
              email: firebaseUser.email || '',
              uid: firebaseUser.uid,
              isLoggedIn: true,
              loading: false,
              emailVerified: firebaseUser.emailVerified
            });
          } else {
            // 사용자가 로그아웃한 경우
            setUser({
              nickname: '',
              email: '',
              uid: '',
              isLoggedIn: false,
              loading: false,
              emailVerified: false
            });
          }
        } catch (error) {
          console.error('Auth state change error:', error);
          setAuthError(error);
          setUser(prev => ({ ...prev, loading: false }));
        }
      });

      // 토큰 갱신 리스너
      unsubscribeToken = onIdTokenChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          try {
            const token = await firebaseUser.getIdToken(true);
            console.log('Token refreshed successfully');
          } catch (error) {
            console.error('Token refresh error:', error);
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
      console.error('Google login error:', error);
      throw error;
    }
  };

  const loginWithEmail = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Email login error:', error);
      throw error;
    }
  };

  const signupWithEmail = async ({ email, password, nickname, phone }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        await sendEmailVerification(userCredential.user);
      }
      
      // 사용자 프로필 업데이트
      await userCredential.user.updateProfile({
        displayName: nickname
      });

      // Firestore에 추가 정보 저장
      const userDoc = doc(db, 'users', userCredential.user.uid);
      await setDoc(userDoc, {
        nickname,
        phone,
        email,
        createdAt: serverTimestamp()
      });

      return userCredential.user;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  // 더미 유저 20명 생성
  const dummyNicknames = [
    '음악왕', '기타소년', '피아노소녀', '드럼짱', '베이스킹', '색소폰러버', '플룻마스터', '신디장인', '보컬리더', '밴드캡틴',
    '재즈러버', '락스타', '힙합보이', '클래식걸', 'EDM매니아', '트로트신', '포크싱어', '뮤지션A', '뮤지션B', '뮤지션C'
  ];
  const users = Array.from({length: 20}).map((_, i) => ({
    nickname: dummyNicknames[i],
    email: `user${i+1}@test.com`,
    password: `testpw${i+1}`
  }));

  const value = {
    user,
    authError,
    users,
    loginWithGoogle,
    loginWithEmail,
    signupWithEmail,
    logout
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
} 