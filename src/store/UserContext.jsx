import React, { createContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../utils/firebase';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification
} from 'firebase/auth';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ nickname: '', email: '', isLoggedIn: false, loading: true });

  // Firebase 인증 상태 동기화
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          nickname: firebaseUser.displayName || '',
          email: firebaseUser.email,
          isLoggedIn: true,
          loading: false,
          emailVerified: firebaseUser.emailVerified,
        });
      } else {
        setUser({ nickname: '', email: '', isLoggedIn: false, loading: false });
      }
    });
    return () => unsubscribe();
  }, []);

  // 구글 로그인
  const loginWithGoogle = async () => {
    try {
      const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      alert('구글 로그인 에러: ' + (err && err.message ? err.message : JSON.stringify(err)));
      throw err;
    }
  };

  // 이메일 로그인
  const loginWithEmail = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // 이메일 회원가입 + 인증메일 발송
  const signupWithEmail = async ({ email, password, nickname }) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (result.user) {
      await sendEmailVerification(result.user);
      // displayName 업데이트는 별도 필요
    }
  };

  // 로그아웃
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <UserContext.Provider value={{ user, loginWithGoogle, loginWithEmail, signupWithEmail, logout }}>
      {children}
    </UserContext.Provider>
  );
} 