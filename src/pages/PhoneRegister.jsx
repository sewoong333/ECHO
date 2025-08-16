import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaPhone, 
  FaCheckCircle, 
  FaExclamationTriangle,
  FaClock 
} from "react-icons/fa";
import { UserContext } from "../store/UserContext";
import { useToast } from "../store/ToastContext";
import { phoneAuthService } from "../utils/firebase";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary, #f8f9fa);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 500px;
  background: var(--color-bg-primary, #ffffff);
  min-height: 100vh;
  position: relative;
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 500px) {
    box-shadow: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #333;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Content = styled.div`
  padding: 32px 20px;
`;

const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const Step = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.active ? '#2ed8b6' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : '#999'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -20px;
    width: 16px;
    height: 2px;
    background: ${props => props.completed ? '#2ed8b6' : '#e0e0e0'};
  }
`;

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const FormSection = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SectionDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

const PhoneInputContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`;

const Input = styled.input`
  flex: 1;
  padding: 16px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #333;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.08);
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:disabled {
    background: #f5f5f5;
    color: #999;
  }
`;

const VerifyButton = styled.button`
  padding: 16px 20px;
  background: ${props => props.disabled ? '#e0e0e0' : '#2ed8b6'};
  color: ${props => props.disabled ? '#999' : 'white'};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover:not(:disabled) {
    background: #26c4a8;
  }
`;

const CodeInputContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Timer = styled.div`
  font-size: 14px;
  color: #ff4757;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CompleteButton = styled.button`
  width: 100%;
  padding: 16px;
  background: ${props => props.disabled ? '#e0e0e0' : 'linear-gradient(135deg, #2ed8b6 0%, #26c4a8 100%)'};
  color: ${props => props.disabled ? '#999' : 'white'};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  margin-top: 24px;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(46, 216, 182, 0.3);
  }
`;

const InfoBox = styled.div`
  background: #fff7e6;
  border: 1px solid #ffe0b3;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const SuccessBox = styled.div`
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #2d7738;
`;

export default function PhoneRegister() {
  const navigate = useNavigate();
  const { updateUserProfile } = useContext(UserContext);
  const { showSuccess, showError } = useToast();
  
  const [step, setStep] = useState(1); // 1: 전화번호 입력, 2: 인증코드 입력
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(180); // 3분
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  // 타이머 카운트다운
  useEffect(() => {
    let interval;
    if (isCodeSent && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCodeSent, timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/[^\d]/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneNumberChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const sendVerificationCode = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      showError('올바른 전화번호 형식이 아닙니다. (010-0000-0000)');
      return;
    }

    setLoading(true);
    try {
      // Firebase Phone Auth 사용
      const confirmation = await phoneAuthService.sendVerificationCode(phoneNumber);
      setConfirmationResult(confirmation);
      
      setIsCodeSent(true);
      setStep(2);
      setTimer(180); // 3분 리셋
      showSuccess('인증번호가 전송되었습니다.');
    } catch (error) {
      console.error('인증번호 전송 실패:', error);
      let errorMessage = '인증번호 전송에 실패했습니다.';
      
      if (error.code === 'auth/too-many-requests') {
        errorMessage = '너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.';
      } else if (error.code === 'auth/invalid-phone-number') {
        errorMessage = '올바르지 않은 전화번호입니다.';
      }
      
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async () => {
    if (verificationCode.length !== 6) {
      showError('6자리 인증번호를 입력해주세요.');
      return;
    }

    if (!confirmationResult) {
      showError('먼저 인증번호를 요청해주세요.');
      return;
    }

    setLoading(true);
    try {
      // Firebase Phone Auth 검증
      await phoneAuthService.verifyCode(confirmationResult, verificationCode);
      setVerified(true);
      showSuccess('전화번호 인증이 완료되었습니다!');
    } catch (error) {
      console.error('인증번호 확인 실패:', error);
      let errorMessage = '인증번호가 올바르지 않습니다.';
      
      if (error.code === 'auth/invalid-verification-code') {
        errorMessage = '인증번호가 올바르지 않습니다.';
      } else if (error.code === 'auth/code-expired') {
        errorMessage = '인증번호가 만료되었습니다. 다시 요청해주세요.';
      }
      
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const completeRegistration = async () => {
    setLoading(true);
    try {
      // 사용자 정보 업데이트
      await updateUserProfile({
        phoneNumber: phoneNumber.replace(/-/g, ''),
        phoneVerified: true
      });
      
      showSuccess('전화번호가 성공적으로 등록되었습니다!');
      navigate('/mypage');
    } catch (error) {
      showError('전화번호 등록에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Inner>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </BackButton>
          <HeaderTitle>전화번호 등록</HeaderTitle>
          <div></div>
        </Header>

        <Content>
          {/* reCAPTCHA 컨테이너 */}
          <div id="recaptcha-container"></div>
          
          <StepIndicator>
            <StepContainer>
              <Step active={step >= 1} completed={step > 1}>1</Step>
              <Step active={step >= 2} completed={verified}>2</Step>
            </StepContainer>
          </StepIndicator>

          {step === 1 && (
            <FormSection>
              <SectionTitle>
                <FaPhone />
                전화번호 입력
              </SectionTitle>
              <SectionDescription>
                안전한 거래를 위해 전화번호를 등록해주세요. 등록된 번호는 안전번호로 제공됩니다.
              </SectionDescription>

              <InputGroup>
                <Label>전화번호</Label>
                <PhoneInputContainer>
                  <Input
                    type="tel"
                    placeholder="010-0000-0000"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    maxLength={13}
                  />
                  <VerifyButton
                    onClick={sendVerificationCode}
                    disabled={!validatePhoneNumber(phoneNumber) || loading}
                  >
                    {loading ? '전송중...' : '인증번호 전송'}
                  </VerifyButton>
                </PhoneInputContainer>
              </InputGroup>

              <InfoBox>
                <FaExclamationTriangle color="#ff8c00" />
                <div>
                  <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.4' }}>
                    • 인증번호는 SMS로 전송됩니다<br />
                    • 본인 명의의 휴대폰 번호만 등록 가능합니다<br />
                    • 등록된 번호는 안전번호로 제공되어 개인정보가 보호됩니다
                  </div>
                </div>
              </InfoBox>
            </FormSection>
          )}

          {step === 2 && (
            <FormSection>
              <SectionTitle>
                <FaCheckCircle />
                인증번호 입력
              </SectionTitle>
              <SectionDescription>
                {phoneNumber}로 전송된 6자리 인증번호를 입력해주세요.
              </SectionDescription>

              <InputGroup>
                <Label>인증번호 (6자리)</Label>
                <CodeInputContainer>
                  <Input
                    type="number"
                    placeholder="123456"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    maxLength={6}
                    disabled={verified}
                  />
                  {!verified && timer > 0 && (
                    <Timer>
                      <FaClock />
                      {formatTime(timer)}
                    </Timer>
                  )}
                </CodeInputContainer>
                
                {!verified && timer > 0 && (
                  <VerifyButton
                    onClick={verifyCode}
                    disabled={verificationCode.length !== 6 || loading}
                    style={{ marginTop: '12px', width: '100%' }}
                  >
                    {loading ? '인증중...' : '인증하기'}
                  </VerifyButton>
                )}
                
                {timer === 0 && !verified && (
                  <VerifyButton
                    onClick={() => {
                      setStep(1);
                      setIsCodeSent(false);
                      setVerificationCode('');
                    }}
                    style={{ marginTop: '12px', width: '100%', background: '#666' }}
                  >
                    인증번호 재전송
                  </VerifyButton>
                )}
              </InputGroup>

              {verified && (
                <SuccessBox>
                  <FaCheckCircle />
                  <div>전화번호 인증이 완료되었습니다!</div>
                </SuccessBox>
              )}

              <CompleteButton
                onClick={completeRegistration}
                disabled={!verified || loading}
              >
                {loading ? '등록중...' : '등록 완료'}
              </CompleteButton>
            </FormSection>
          )}
        </Content>
      </Inner>
    </Container>
  );
}