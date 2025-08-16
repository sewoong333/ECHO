import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../store/UserContext";
import { useToast } from "../store/ToastContext";
import { useNavigate } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { sendVerificationSMS } from "../utils/smsService";

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
  color: var(--color-mint-main);
  margin-bottom: 1em;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.5em;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 2em;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
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

  &:focus {
    border-color: var(--color-mint-main);
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
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background: ${(props) => (props.disabled ? "#ccc" : "var(--color-mint-main)")};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#28c6a6")};
  }
`;

const VerifyButton = styled(Button)`
  width: auto;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  height: 36px;
  padding: 0 1em;
  font-size: 14px;
  background: ${(props) => (props.verified ? "#28c6a6" : "var(--color-mint-main)")};
`;

const ErrorMessage = styled.div`
  color: #2ed8b6;
  font-size: 14px;
  margin-top: 0.5em;
`;

const SuccessMessage = styled.div`
  color: var(--color-mint-main);
  font-size: 14px;
  margin-top: 0.5em;
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
`;

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [phoneVerification, setPhoneVerification] = useState({
    sent: false,
    code: "",
    verified: false,
    verificationCode: "",
  });
  const { user, signupWithEmail } = useContext(UserContext);
  const { addToast } = useToast();
  const navigate = useNavigate();

  // 비밀번호 유효성 검사
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  };

  // 휴대폰 번호 형식 검사
  const validatePhone = (phone) => {
    const regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    return regex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setError("");
  };

  // 인증번호 발송
  const handleSendVerification = async (e) => {
    e.preventDefault();
    if (!validatePhone(form.phone)) {
      setError("올바른 휴대폰 번호를 입력해주세요.");
      return;
    }

    try {
      const verificationCode = Math.random().toString().slice(2, 8);
      await sendVerificationSMS(form.phone, verificationCode);
      setPhoneVerification((prev) => ({
        ...prev,
        sent: true,
        verificationCode,
      }));
      setSuccess("인증번호가 발송되었습니다. 3분 이내에 입력해주세요.");
      addToast("인증번호가 발송되었습니다!", "success");
      setError("");
    } catch (err) {
      setError("인증번호 발송에 실패했습니다. " + err.message);
      addToast("인증번호 발송에 실패했습니다.", "error");
    }
  };

  // 인증번호 확인
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (phoneVerification.code === phoneVerification.verificationCode) {
      setPhoneVerification((prev) => ({ ...prev, verified: true }));
      setSuccess("휴대폰 인증이 완료되었습니다.");
      addToast("휴대폰 인증이 완료되었습니다!", "success");
      setError("");
    } else {
      setError("인증번호가 일치하지 않습니다.");
      addToast("인증번호가 일치하지 않습니다.", "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // 유효성 검사
    if (
      !form.email ||
      !form.password ||
      !form.passwordConfirm ||
      !form.nickname ||
      !form.phone
    ) {
      setError("모든 필드를 입력해주세요.");
      return;
    }

    if (!validatePassword(form.password)) {
      setError(
        "비밀번호는 8자 이상이며, 영문, 숫자, 특수문자를 포함해야 합니다.",
      );
      return;
    }

    if (form.password !== form.passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!phoneVerification.verified) {
      setError("휴대폰 인증을 완료해주세요.");
      return;
    }

    try {
      await signupWithEmail({
        email: form.email,
        password: form.password,
        nickname: form.nickname,
        phone: form.phone,
      });
      setSuccess(
        "회원가입이 완료되었습니다! 이메일로 인증 링크가 발송되었습니다. 인증 후 로그인해 주세요.",
      );
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      setError("회원가입에 실패했습니다. " + err.message);
    }
  };

  if (user.isLoggedIn) {
    navigate("/");
    return null;
  }

  return (
    <Container>
      <Logo>ECHO</Logo>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <IconWrapper>
            <FiMail size={20} />
          </IconWrapper>
          <Input
            type="email"
            name="email"
            placeholder="이메일"
            value={form.email}
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup>
          <IconWrapper>
            <FiLock size={20} />
          </IconWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="비밀번호 (영문, 숫자, 특수문자 포함 8자 이상)"
            value={form.password}
            onChange={handleChange}
          />
          <PasswordToggle
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </PasswordToggle>
        </InputGroup>

        <InputGroup>
          <IconWrapper>
            <FiLock size={20} />
          </IconWrapper>
          <Input
            type={showPasswordConfirm ? "text" : "password"}
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            value={form.passwordConfirm}
            onChange={handleChange}
          />
          <PasswordToggle
            type="button"
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
          >
            {showPasswordConfirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </PasswordToggle>
        </InputGroup>

        <InputGroup>
          <IconWrapper>
            <FiUser size={20} />
          </IconWrapper>
          <Input
            type="text"
            name="nickname"
            placeholder="닉네임"
            value={form.nickname}
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup>
          <IconWrapper>
            <FiPhone size={20} />
          </IconWrapper>
          <Input
            type="tel"
            name="phone"
            placeholder="휴대폰 번호 (- 없이 입력)"
            value={form.phone}
            onChange={handleChange}
            disabled={phoneVerification.verified}
          />
          <VerifyButton
            type="button"
            onClick={
              phoneVerification.sent ? handleVerifyCode : handleSendVerification
            }
            verified={phoneVerification.verified}
            disabled={phoneVerification.verified}
          >
            {phoneVerification.verified
              ? "인증완료"
              : phoneVerification.sent
                ? "인증확인"
                : "인증번호 발송"}
          </VerifyButton>
        </InputGroup>

        {phoneVerification.sent && !phoneVerification.verified && (
          <InputGroup>
            <IconWrapper>
              <FiLock size={20} />
            </IconWrapper>
            <Input
              type="text"
              placeholder="인증번호 6자리"
              value={phoneVerification.code}
              onChange={(e) =>
                setPhoneVerification((prev) => ({
                  ...prev,
                  code: e.target.value,
                }))
              }
            />
          </InputGroup>
        )}

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <Button type="submit" disabled={phoneVerification.verified === false}>
          회원가입
        </Button>
      </Form>
    </Container>
  );
}
