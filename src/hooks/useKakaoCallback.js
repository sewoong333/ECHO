import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/UserContext';
import { useToast } from '../store/ToastContext';
import { kakaoAuthService } from '../utils/firebase';

export const useKakaoCallback = () => {
  const { loginWithKakao } = useContext(UserContext);
  const { addToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKakaoCallback = async () => {
      console.log('🔍 useKakaoCallback 실행됨 - 전역 훅에서 실행');
      console.log('현재 URL:', window.location.href);
      console.log('Search params:', window.location.search);
      console.log('Document ready state:', document.readyState);
      
      // URL에서 카카오 인증 코드 확인
      const urlParams = new URLSearchParams(window.location.search);
      const kakaoCode = urlParams.get('code');
      
      if (!kakaoCode) {
        console.log('❌ 카카오 인증 코드 없음');
        return;
      }
      
      console.log('✅ 카카오 인증 코드 발견:', kakaoCode.substring(0, 20) + '...');
      
      try {
        // 카카오 SDK 상태 확인
        if (!window.Kakao || !window.Kakao.isInitialized()) {
          console.log('⏳ 카카오 SDK 대기 중...');
          // 최대 5초까지 SDK 초기화 대기
          let attempts = 0;
          while (attempts < 10 && (!window.Kakao || !window.Kakao.isInitialized())) {
            await new Promise(resolve => setTimeout(resolve, 500));
            attempts++;
          }
          
          if (!window.Kakao || !window.Kakao.isInitialized()) {
            throw new Error('카카오 SDK 초기화 실패');
          }
        }
        
        console.log('✅ 카카오 SDK 준비됨');
        console.log('🔄 카카오 콜백 처리 시작...');
        
        const kakaoUser = await kakaoAuthService.handleKakaoCallback();
        
        if (kakaoUser) {
          console.log('✅ 카카오 사용자 정보 획득:', {
            uid: kakaoUser.uid,
            nickname: kakaoUser.nickname,
            email: kakaoUser.email
          });
          
          // UserContext에 로그인 정보 설정
          loginWithKakao(kakaoUser);
          
          // 성공 메시지
          addToast(`${kakaoUser.nickname}님, 환영합니다!`, 'success');
          
          // URL 정리
          window.history.replaceState({}, document.title, window.location.pathname);
          
          // 홈으로 리다이렉트
          console.log('🏠 홈으로 리다이렉트...');
          setTimeout(() => {
            navigate('/', { replace: true });
          }, 1500);
          
        } else {
          throw new Error('카카오 사용자 정보 획득 실패');
        }
        
      } catch (error) {
        console.error('❌ 카카오 콜백 처리 실패:', error);
        
        // 이메일 중복 오류 처리
        if (error.code === 'DUPLICATE_EMAIL') {
          const { email, existingProvider } = error;
          addToast(
            `이미 ${email}로 ${existingProvider === 'google' ? '구글' : '다른'} 계정이 가입되어 있습니다. 해당 계정으로 로그인해주세요.`,
            'warning'
          );
        } else {
          addToast('카카오 로그인 중 오류가 발생했습니다.', 'error');
        }
        
        // URL 정리
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };

    // DOM이 완전히 로드된 후 실행
    if (document.readyState === 'complete') {
      handleKakaoCallback();
    } else {
      window.addEventListener('load', handleKakaoCallback);
      return () => window.removeEventListener('load', handleKakaoCallback);
    }
  }, [loginWithKakao, addToast, navigate]);
};