import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from '../store/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { SiKakaotalk } from 'react-icons/si';
import { FaN } from 'react-icons/fa6';
import { signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase';

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #fff;
  box-sizing: border-box;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: #2ed8b6;
  margin-bottom: 2em;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin-bottom: 2em;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 2em;
  box-sizing: border-box;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 1em 0 3em;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  transition: all 0.2s;
  background: #f8f9fa;
  box-sizing: border-box;

  &:focus {
    border-color: #2ed8b6;
    background: #fff;
    box-shadow: 0 0 0 2px rgba(46, 216, 182, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1em;
  box-sizing: border-box;

  &:hover {
    background: #25b89a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(46, 216, 182, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Divider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2em 0;
  color: #999;
  font-size: 14px;
  box-sizing: border-box;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
  }

  span {
    padding: 0 1em;
  }
`;

const SocialLoginButton = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 1em;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  &:active {
    transform: translateY(0);
  }

  &.google {
    color: #222;
    background: #fff;
  }

  &.kakao {
    background: #FEE500;
    border-color: #FEE500;
    color: #000000;
  }

  &.naver {
    background: #03C75A;
    border-color: #03C75A;
    color: white;
  }
`;

const SignupLink = styled.p`
  margin-top: 2em;
  color: #666;
  font-size: 14px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  a {
    color: #2ed8b6;
    text-decoration: none;
    font-weight: 600;
    margin-left: 0.5em;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 1em;
`;

const LoadingText = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-top: 2em;
`;

export default function Login() {
  const { user, loginWithEmail } = useContext(UserContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  // 리다이렉트 결과 확인
  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          console.log('Redirect login successful:', result.user);
          navigate('/', { replace: true });
        }
      } catch (error) {
        console.error('Redirect login error:', error);
        handleAuthError(error);
      }
    };

    checkRedirectResult();
  }, [navigate]);

  // 로그인 상태 체크
  useEffect(() => {
    if (!user.loading && user.isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [user.loading, user.isLoggedIn, navigate]);

  const handleAuthError = (error) => {
    console.error('Auth error details:', {
      code: error.code,
      message: error.message,
      email: error.email,
      credential: error.credential
    });

    switch (error.code) {
      case 'auth/popup-blocked':
        alert('팝업이 차단되어 구글 로그인을 진행할 수 없습니다. 브라우저의 팝업 차단을 해제해 주세요.');
        break;
      case 'auth/cancelled-popup-request':
      case 'auth/popup-closed-by-user':
        console.log('Login popup was cancelled by user');
        break;
      case 'auth/unauthorized-domain':
        alert('현재 도메인에서 구글 로그인이 허용되지 않았습니다. 개발자에게 문의해주세요.');
        break;
      default:
        alert(`구글 로그인 중 오류가 발생했습니다. (${error.code})`);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setError('');

    try {
      console.log('Starting Google login...');
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google login successful:', result);
      
      if (result.user) {
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.error('Google login error:', error);
      
      if (error.code === 'auth/popup-blocked') {
        alert('팝업이 차단되어 구글 로그인을 진행할 수 없습니다. 브라우저의 팝업 차단을 해제해 주세요.');
      } else if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
        console.log('Login popup was cancelled by user');
      } else if (error.code === 'auth/unauthorized-domain') {
        alert('현재 도메인에서 구글 로그인이 허용되지 않았습니다. 개발자에게 문의해주세요.');
      } else {
        alert(`구글 로그인 중 오류가 발생했습니다. (${error.code})`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setError('');

    try {
      await loginWithEmail(formData);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Login error:', error);
      setError('로그인에 실패했습니다: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (user.loading) {
    return (
      <Container>
        <Logo>ECHO</Logo>
        <LoadingText>로딩중...</LoadingText>
      </Container>
    );
  }

  if (user.isLoggedIn) {
    return null;
  }

  return (
    <Container>
      <Logo>ECHO</Logo>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <IconWrapper>
            <FiMail size={20} />
          </IconWrapper>
          <Input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
          />
        </InputGroup>
        <InputGroup>
          <IconWrapper>
            <FiLock size={20} />
          </IconWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
          />
          <PasswordToggle
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </PasswordToggle>
        </InputGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginButton type="submit" disabled={isLoading}>
          {isLoading ? '로그인 중...' : '로그인'}
        </LoginButton>
      </Form>

      <Divider><span>또는</span></Divider>

      <SocialLoginButton className="google" onClick={handleGoogleLogin}>
        <FcGoogle size={24} />
        Google로 로그인
      </SocialLoginButton>

      <SocialLoginButton className="kakao">
        <SiKakaotalk size={24} />
        카카오로 로그인
      </SocialLoginButton>

      <SocialLoginButton className="naver">
        <FaN size={24} />
        네이버로 로그인
      </SocialLoginButton>

      <SignupLink>
        계정이 없으신가요?
        <Link to="/signup">회원가입</Link>
      </SignupLink>
    </Container>
  );
} 