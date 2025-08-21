import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { designSystem2025 } from '../styles/designSystem2025';
import { FiX, FiPhone, FiCheck, FiRefreshCw } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

const ModalOverlay = styled.div`
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

const Modal = styled.div`
  ${designSystem2025.glassmorphism.enhanced}
  max-width: 400px;
  width: 100%;
  border-radius: 20px;
  padding: 32px;
  position: relative;
  text-align: center;
  animation: slideInUp 0.3s ease-out;
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 20px;
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

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  color: ${designSystem2025.colors.mint[500]};
`;

const Title = styled.h2`
  font-size: ${designSystem2025.typography.sizes.xl};
  font-weight: ${designSystem2025.typography.weights.bold};
  color: ${designSystem2025.colors.neutral[900]};
  margin-bottom: 12px;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const Description = styled.p`
  font-size: ${designSystem2025.typography.sizes.sm};
  color: ${designSystem2025.colors.neutral[600]};
  line-height: 1.5;
  margin-bottom: 24px;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`;

const PhoneInput = styled.input`
  ${designSystem2025.accessibility.focusRing}
  flex: 1;
  padding: 14px 16px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.7);
  font-size: ${designSystem2025.typography.sizes.base};
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${designSystem2025.colors.mint[500]};
    background: rgba(255, 255, 255, 0.9);
    outline: none;
  }
  
  &::placeholder {
    color: ${designSystem2025.colors.neutral[400]};
  }
  
  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.3);
    color: ${designSystem2025.colors.neutral[100]};
    
    &:focus {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;

const SendButton = styled.button`
  ${designSystem2025.accessibility.focusRing}
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  background: ${designSystem2025.colors.mint[500]};
  color: white;
  font-size: ${designSystem2025.typography.sizes.sm};
  font-weight: ${designSystem2025.typography.weights.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background: ${designSystem2025.colors.mint[600]};
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: ${designSystem2025.colors.neutral[300]};
    cursor: not-allowed;
    transform: none;
  }
`;

const VerificationInput = styled.input`
  ${designSystem2025.accessibility.focusRing}
  width: 100%;
  padding: 14px 16px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.7);
  font-size: ${designSystem2025.typography.sizes.base};
  text-align: center;
  letter-spacing: 0.5em;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${designSystem2025.colors.mint[500]};
    background: rgba(255, 255, 255, 0.9);
    outline: none;
  }
  
  &::placeholder {
    color: ${designSystem2025.colors.neutral[400]};
    letter-spacing: normal;
  }
  
  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.3);
    color: ${designSystem2025.colors.neutral[100]};
    
    &:focus {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;

const Timer = styled.div`
  font-size: ${designSystem2025.typography.sizes.sm};
  color: ${designSystem2025.colors.red[500]};
  margin-top: 8px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const Button = styled.button`
  ${designSystem2025.accessibility.focusRing}
  flex: 1;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  font-size: ${designSystem2025.typography.sizes.base};
  font-weight: ${designSystem2025.typography.weights.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  ${props => props.variant === 'primary' ? `
    background: ${designSystem2025.colors.mint[500]};
    color: white;
    
    &:hover {
      background: ${designSystem2025.colors.mint[600]};
      transform: translateY(-2px);
      box-shadow: 0 8px 25px ${designSystem2025.colors.mint[500]}40;
    }
    
    &:disabled {
      background: ${designSystem2025.colors.neutral[300]};
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  ` : `
    ${designSystem2025.glassmorphism.base}
    color: ${designSystem2025.colors.neutral[600]};
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
    }
    
    [data-theme="dark"] & {
      color: ${designSystem2025.colors.neutral[400]};
    }
  `}
`;

const SMSAuthModal = ({ isOpen, onClose, onComplete, phoneNumber: initialPhone = '' }) => {
  const [step, setStep] = useState('phone'); // 'phone' | 'verification'
  const [phoneNumber, setPhoneNumber] = useState(initialPhone);
  const [verificationCode, setVerificationCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  // 인증번호 생성 함수
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // SMS 서비스 모의 구현
  const simulateSMSService = async (phoneNumber) => {
    // 실제 환경에서는 여기서 SMS API 호출
    // Twilio: client.messages.create()
    // AWS SNS: sns.publish()
    // NHN Cloud SMS: 해당 API 호출
    console.log(`SMS 전송 모의: ${phoneNumber}로 인증번호 전송`);
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  // 타이머 효과
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // 휴대폰 번호 포맷팅
  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/[^\d]/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  // 인증번호 전송
  const handleSendCode = async (e) => {
    e.preventDefault();
    
    const cleanPhone = phoneNumber.replace(/[^\d]/g, '');
    if (cleanPhone.length !== 11) {
      toast.error('올바른 휴대폰 번호를 입력해주세요');
      return;
    }

    setIsLoading(true);
    
    try {
      // SMS 서비스 연동 (실제 운영 환경에서는 Twilio, AWS SNS, NHN Cloud SMS 등 사용)
      // 개발 환경에서는 모의 구현으로 동작
      await simulateSMSService(cleanPhone);
      
      // 실제 인증번호 생성 및 저장
      const actualVerificationCode = generateVerificationCode();
      setGeneratedCode(actualVerificationCode);
      
      setStep('verification');
      setTimeLeft(180); // 3분
      toast.success(`인증번호가 전송되었습니다. (개발용: ${actualVerificationCode})`);
    } catch (error) {
      console.error('SMS 전송 실패:', error);
      toast.error('인증번호 전송에 실패했습니다');
    } finally {
      setIsLoading(false);
    }
  };

  // 인증번호 확인
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    
    if (verificationCode.length !== 6) {
      toast.error('6자리 인증번호를 입력해주세요');
      return;
    }

    setIsLoading(true);
    
    try {
      // 실제 인증번호 검증
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (verificationCode === generatedCode) {
        toast.success('휴대폰 인증이 완료되었습니다');
        onComplete?.(phoneNumber);
        onClose();
      } else {
        toast.error('인증번호가 일치하지 않습니다');
      }
    } catch (error) {
      console.error('인증번호 검증 실패:', error);
      toast.error('인증번호 확인에 실패했습니다');
    } finally {
      setIsLoading(false);
    }
  };

  // 인증번호 재전송
  const handleResendCode = () => {
    if (timeLeft > 0) return;
    handleSendCode({ preventDefault: () => {} });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <Modal>
        <CloseButton onClick={onClose}>
          <FiX />
        </CloseButton>

        <Icon>
          <FiPhone />
        </Icon>

        {step === 'phone' ? (
          <>
            <Title>휴대폰 인증</Title>
            <Description>
              안전한 거래를 위해 휴대폰 번호 인증이 필요합니다.
            </Description>

            <Form onSubmit={handleSendCode}>
              <InputGroup>
                <PhoneInput
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                  placeholder="010-0000-0000"
                  maxLength={13}
                  required
                />
                <SendButton type="submit" disabled={isLoading}>
                  {isLoading ? <FiRefreshCw className="spin" /> : '전송'}
                </SendButton>
              </InputGroup>
            </Form>
          </>
        ) : (
          <>
            <Title>인증번호 입력</Title>
            <Description>
              {phoneNumber}로 전송된 인증번호를 입력해주세요.
            </Description>

            <Form onSubmit={handleVerifyCode}>
              <VerificationInput
                type="number"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.slice(0, 6))}
                placeholder="000000"
                maxLength={6}
                required
              />
              
              {timeLeft > 0 && (
                <Timer>
                  남은 시간: {formatTime(timeLeft)}
                </Timer>
              )}

              <ActionButtons>
                <Button type="button" onClick={handleResendCode} disabled={timeLeft > 0}>
                  <FiRefreshCw />
                  재전송
                </Button>
                <Button type="submit" variant="primary" disabled={isLoading}>
                  {isLoading ? <FiRefreshCw className="spin" /> : <><FiCheck /> 인증</>}
                </Button>
              </ActionButtons>
            </Form>
          </>
        )}
      </Modal>
    </ModalOverlay>
  );
};

export default SMSAuthModal;