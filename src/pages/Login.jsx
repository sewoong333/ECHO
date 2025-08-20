import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "../store/UserContext";
import { useToast } from "../store/ToastContext";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { SiKakaotalk } from "react-icons/si";
import { FaN } from "react-icons/fa6";
import {
  signInWithPopup,
  getRedirectResult,
} from "firebase/auth";
import { auth, googleProvider } from "../utils/firebase";

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: var(--color-bg-primary);
  box-sizing: border-box;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-2xl);
  
  @media (max-width: 480px) {
    box-shadow: none;
    border-radius: 0;
    padding: var(--space-lg);
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-mint-main);
  margin-bottom: var(--space-xl);
  background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  padding: 0 1rem 0 3rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  font-size: 1rem;
  outline: none;
  transition: all var(--transition-fast);
  background: var(--color-bg-secondary);
  box-sizing: border-box;
  color: var(--color-text-primary);

  &:focus {
    border-color: var(--color-mint-main);
    background: var(--color-bg-primary);
    box-shadow: 0 0 0 3px rgba(0, 217, 182, 0.1);
  }

  &::placeholder {
    color: var(--color-text-tertiary);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
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
  background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--radius-xl);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  margin-top: var(--space-md);
  box-sizing: border-box;
  box-shadow: var(--shadow-md);

  &:hover {
    background: linear-gradient(135deg, var(--color-mint-dark), #00a085);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
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
    content: "";
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
    background: #fee500;
    border-color: #fee500;
    color: #000000;
  }

  &.naver {
    background: #03c75a;
    border-color: #03c75a;
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
    color: var(--color-mint-main);
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
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  // 리다이렉트 결과 확인
  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          console.log("Redirect login successful:", result.user);
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.error("Redirect login error:", error);
        handleAuthError(error);
      }
    };

    checkRedirectResult();
  }, [navigate]);

  // 로그인 상태 체크 (개선된 로직)
  useEffect(() => {
    // 로딩이 끝나고 로그인된 상태라면 리다이렉트
    if (!user.loading && user.isLoggedIn && user.uid) {
      console.log("✅ 이미 로그인됨 - 홈으로 리다이렉트");
      navigate("/", { replace: true });
    }
  }, [user.loading, user.isLoggedIn, user.uid, navigate]);

  const handleAuthError = (error) => {
    console.error("Auth error details:", {
      code: error.code,
      message: error.message,
      email: error.email,
      credential: error.credential,
    });

    switch (error.code) {
      case "auth/popup-blocked":
        addToast("팝업이 차단되었습니다. 브라우저 설정을 확인해주세요.", "error");
        break;
      case "auth/cancelled-popup-request":
      case "auth/popup-closed-by-user":
        console.log("Login popup was cancelled by user");
        break;
      case "auth/unauthorized-domain":
        addToast("현재 도메인에서 구글 로그인이 허용되지 않습니다.", "error");
        break;
      default:
        addToast(`로그인 중 오류가 발생했습니다. (${error.code})`, "error");
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      console.log("🚀 Google 로그인 시작...");
      
      // 타임아웃 설정 (30초)
      const loginTimeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('로그인 시간 초과')), 30000)
      );
      
      const loginPromise = signInWithPopup(auth, googleProvider);
      const result = await Promise.race([loginPromise, loginTimeout]);
      
      console.log("✅ Google 로그인 성공:", result.user?.uid);
      
      if (result.user) {
        addToast("로그인이 완료되었습니다!", "success");
        
        // UserContext의 onAuthStateChanged가 처리하므로 여기서는 기다리기만
        console.log("⏳ 사용자 상태 동기화 대기 중...");
        
        // 최대 5초까지 대기하다가 강제 리다이렉트
        setTimeout(() => {
          if (window.location.pathname === "/login") {
            console.log("🔄 강제 리다이렉트 실행");
            navigate("/", { replace: true });
          }
        }, 5000);
      }
    } catch (error) {
      console.error("❌ Google 로그인 실패:", error);
      handleAuthError(error);
    } finally {
      // 로딩 상태를 조금 더 유지하여 깜빡임 방지
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      console.log("📧 이메일 로그인 시작...");
      
      // 타임아웃 설정 (20초)
      const loginTimeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('로그인 시간 초과')), 20000)
      );
      
      const loginPromise = loginWithEmail(formData);
      await Promise.race([loginPromise, loginTimeout]);
      
      console.log("✅ 이메일 로그인 성공");
      addToast("로그인이 완료되었습니다!", "success");
      
      // UserContext가 리다이렉트를 처리하므로 여기서는 기다리기만
      setTimeout(() => {
        if (window.location.pathname === "/login") {
          console.log("🔄 강제 리다이렉트 실행");
          navigate("/", { replace: true });
        }
      }, 3000);
      
    } catch (error) {
      console.error("❌ 이메일 로그인 실패:", error);
      
      let errorMsg = "로그인에 실패했습니다.";
      
      if (error.message === '로그인 시간 초과') {
        errorMsg = "로그인 시간이 초과되었습니다. 인터넷 연결을 확인하고 다시 시도해주세요.";
      } else {
        switch (error.code) {
          case "auth/user-not-found":
            errorMsg = "등록되지 않은 이메일입니다.";
            break;
          case "auth/wrong-password":
            errorMsg = "비밀번호가 올바르지 않습니다.";
            break;
          case "auth/invalid-email":
            errorMsg = "올바른 이메일 형식이 아닙니다.";
            break;
          case "auth/too-many-requests":
            errorMsg = "너무 많은 시도가 있었습니다. 잠시 후 다시 시도해주세요.";
            break;
          case "auth/network-request-failed":
            errorMsg = "네트워크 연결을 확인해주세요.";
            break;
        }
      }
      
      setError(errorMsg);
      addToast(errorMsg, "error");
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  // 로딩 상태 처리 개선
  if (user.loading) {
    return (
      <Container>
        <Logo>ECHO</Logo>
        <LoadingText>🔄 로딩중...</LoadingText>
      </Container>
    );
  }

  // 이미 로그인된 경우 null 반환 (리다이렉트는 useEffect에서 처리)
  if (user.isLoggedIn && user.uid) {
    return (
      <Container>
        <Logo>ECHO</Logo>
        <LoadingText>✅ 로그인 완료! 이동 중...</LoadingText>
      </Container>
    );
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
          {isLoading ? "로그인 중..." : "로그인"}
        </LoginButton>
      </Form>

      <Divider>
        <span>또는</span>
      </Divider>

      <SocialLoginButton className="google" onClick={handleGoogleLogin}>
        <FcGoogle size={24} />
        Google로 로그인
      </SocialLoginButton>

      <SocialLoginButton 
        className="kakao" 
        disabled={true}
        style={{ opacity: 0.5, cursor: 'not-allowed' }}
      >
        <SiKakaotalk size={24} />
        카카오로 로그인 (준비중)
      </SocialLoginButton>

      <SocialLoginButton 
        className="naver"
        disabled={true}
        style={{ opacity: 0.5, cursor: 'not-allowed' }}
      >
        <FaN size={24} />
        네이버로 로그인 (준비중)
      </SocialLoginButton>

      <SignupLink>
        계정이 없으신가요?
        <Link to="/signup">회원가입</Link>
      </SignupLink>
    </Container>
  );
}
