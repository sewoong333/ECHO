import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase';

const GoogleLoginButton = ({ onLoginSuccess }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        onLoginSuccess && onLoginSuccess();
      }
    } catch (error) {
      console.error('Google login error:', error);
      alert('로그인 실패: ' + error.message);
    }
  };

  return (
    <button 
      onClick={handleLogin} 
      style={{ 
        width: '100%', 
        padding: '1em', 
        background: '#2ed8b6', 
        color: '#fff', 
        border: 'none', 
        borderRadius: '8px', 
        fontSize: '1.1em',
        cursor: 'pointer'
      }}
    >
      Google로 로그인
    </button>
  );
};

export default GoogleLoginButton; 