import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { designSystem2025 } from '../styles/designSystem2025';
import { useNavigate } from 'react-router-dom';
import { FiX, FiChevronRight, FiChevronLeft, FiCheck } from 'react-icons/fi';

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
`;

const GuideModal = styled.div`
  ${designSystem2025.glassmorphism.enhanced}
  max-width: 480px;
  width: 100%;
  border-radius: 24px;
  padding: 32px;
  position: relative;
  text-align: center;
  
  /* 애니메이션 */
  animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(40px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: ${designSystem2025.colors.neutral[600]};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: ${designSystem2025.colors.neutral[800]};
  }
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
    &:hover {
      color: ${designSystem2025.colors.neutral[200]};
    }
  }
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
`;

const StepDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active 
    ? designSystem2025.colors.mint[500] 
    : designSystem2025.colors.neutral[300]};
  transition: all 0.3s ease;
  
  ${props => props.active && `
    transform: scale(1.2);
    box-shadow: 0 0 12px ${designSystem2025.colors.mint[500]}40;
  `}
`;

const GuideIcon = styled.div`
  font-size: 64px;
  margin-bottom: 24px;
  opacity: 0;
  animation: fadeInScale 0.6s ease 0.2s forwards;
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const GuideTitle = styled.h2`
  font-size: ${designSystem2025.typography.sizes['2xl']};
  font-weight: ${designSystem2025.typography.weights.bold};
  color: ${designSystem2025.colors.neutral[900]};
  margin-bottom: 16px;
  line-height: 1.3;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const GuideDescription = styled.p`
  font-size: ${designSystem2025.typography.sizes.base};
  color: ${designSystem2025.colors.neutral[600]};
  line-height: 1.6;
  margin-bottom: 32px;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const NavButton = styled.button`
  ${designSystem2025.glassmorphism.base}
  ${designSystem2025.accessibility.focusRing}
  
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  font-size: ${designSystem2025.typography.sizes.sm};
  font-weight: ${designSystem2025.typography.weights.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.variant === 'primary' ? `
    background: ${designSystem2025.colors.mint[500]};
    color: white;
    
    &:hover {
      background: ${designSystem2025.colors.mint[600]};
      transform: translateY(-2px);
      box-shadow: 0 8px 25px ${designSystem2025.colors.mint[500]}40;
    }
  ` : `
    color: ${designSystem2025.colors.neutral[600]};
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      color: ${designSystem2025.colors.neutral[800]};
    }
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  
  [data-theme="dark"] & {
    ${props => props.variant !== 'primary' && `
      color: ${designSystem2025.colors.neutral[400]};
      &:hover {
        color: ${designSystem2025.colors.neutral[200]};
      }
    `}
  }
`;

const SkipButton = styled.button`
  background: none;
  border: none;
  color: ${designSystem2025.colors.neutral[500]};
  font-size: ${designSystem2025.typography.sizes.sm};
  cursor: pointer;
  padding: 8px;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${designSystem2025.colors.neutral[700]};
  }
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[500]};
    &:hover {
      color: ${designSystem2025.colors.neutral[300]};
    }
  }
`;

const onboardingSteps = [
  {
    icon: '🎸',
    title: 'ECHO에 오신 것을 환영합니다!',
    description: '악기를 사고팔고, 음악 커뮤니티에 참여해보세요. 안전하고 편리한 거래를 위한 모든 기능을 준비했습니다.',
    action: null
  },
  {
    icon: '📝',
    title: '첫 상품을 등록해보세요',
    description: '사용하지 않는 악기를 등록하여 다른 뮤지션들과 거래해보세요. 사진과 상세 정보를 추가하면 더 빠르게 판매할 수 있어요.',
    action: 'register-product'
  },
  {
    icon: '🔍',
    title: '원하는 악기를 찾아보세요',
    description: '다양한 필터와 검색 기능으로 원하는 악기를 쉽게 찾을 수 있어요. 찜하기 기능으로 관심 상품을 저장해두세요.',
    action: 'browse-products'
  },
  {
    icon: '💬',
    title: '안전한 거래를 시작하세요',
    description: '채팅으로 판매자와 소통하고, 안전결제 시스템으로 걱정 없이 거래하세요. 거래 후에는 리뷰를 남겨주세요.',
    action: null
  },
  {
    icon: '🎵',
    title: '음악생활 커뮤니티에 참여하세요',
    description: '다른 뮤지션들과 연주 팁을 공유하고, 합주 멤버를 찾고, 음악에 대한 이야기를 나눠보세요.',
    action: 'visit-community'
  }
];

const OnboardingGuide = ({ onComplete, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem('echo-onboarding-completed', 'true');
    onComplete?.();
  };

  const handleSkip = () => {
    localStorage.setItem('echo-onboarding-completed', 'true');
    onSkip?.();
  };

  const handleAction = () => {
    const step = onboardingSteps[currentStep];
    handleComplete();
    
    switch(step.action) {
      case 'register-product':
        navigate('/product-register');
        break;
      case 'browse-products':
        navigate('/');
        break;
      case 'visit-community':
        navigate('/musiclife');
        break;
      default:
        break;
    }
  };

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentStep < onboardingSteps.length - 1) {
        handleNext();
      } else if (e.key === 'ArrowLeft' && currentStep > 0) {
        handlePrev();
      } else if (e.key === 'Escape') {
        handleSkip();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentStep]);

  const currentStepData = onboardingSteps[currentStep];

  return (
    <OverlayContainer>
      <GuideModal>
        <CloseButton onClick={handleSkip} aria-label="가이드 건너뛰기">
          <FiX />
        </CloseButton>

        <StepIndicator>
          {onboardingSteps.map((_, index) => (
            <StepDot key={index} active={index === currentStep} />
          ))}
        </StepIndicator>

        <GuideIcon>{currentStepData.icon}</GuideIcon>
        <GuideTitle>{currentStepData.title}</GuideTitle>
        <GuideDescription>{currentStepData.description}</GuideDescription>

        <NavigationButtons>
          <div style={{ flex: 1 }}>
            {currentStep > 0 && (
              <NavButton onClick={handlePrev}>
                <FiChevronLeft />
                이전
              </NavButton>
            )}
          </div>

          <SkipButton onClick={handleSkip}>
            건너뛰기
          </SkipButton>

          <div style={{ flex: 1, textAlign: 'right' }}>
            {currentStepData.action ? (
              <NavButton variant="primary" onClick={handleAction}>
                시작하기
                <FiCheck />
              </NavButton>
            ) : (
              <NavButton variant="primary" onClick={handleNext}>
                {currentStep === onboardingSteps.length - 1 ? '완료' : '다음'}
                {currentStep === onboardingSteps.length - 1 ? <FiCheck /> : <FiChevronRight />}
              </NavButton>
            )}
          </div>
        </NavigationButtons>
      </GuideModal>
    </OverlayContainer>
  );
};

// 온보딩 가이드 표시 여부를 확인하는 훅
export const useOnboarding = () => {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(false);

  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem('echo-onboarding-completed');
    const isFirstVisit = !hasCompletedOnboarding;
    
    if (isFirstVisit) {
      // 약간의 지연을 두고 보여주기 (페이지 로딩 완료 후)
      setTimeout(() => {
        setShouldShowOnboarding(true);
      }, 1000);
    }
  }, []);

  const hideOnboarding = () => {
    setShouldShowOnboarding(false);
  };

  return {
    shouldShowOnboarding,
    hideOnboarding
  };
};

export default OnboardingGuide;