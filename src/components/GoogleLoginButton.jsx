import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase';

const GoogleLoginButton = ({ loginWithGoogle }) => {
  const handleLogin = async () => {
    try {
      if (loginWithGoogle) {
        await loginWithGoogle();
      } else {
        await signInWithPopup(auth, googleProvider);
      }
      alert('로그인 성공!');
    } catch (error) {
      alert('로그인 실패: ' + error.message);
    }
  };

  return (
    <button onClick={handleLogin} style={{ width: '100%', padding: '1em', background: '#2ed8b6', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.1em' }}>
      Google로 로그인
    </button>
  );
};

export default GoogleLoginButton; 