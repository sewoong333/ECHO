import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import { UserContext } from "../store/UserContext";
import {
  FaCamera,
  FaUser,
  FaMapMarkerAlt,
  FaSave,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Content = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  min-height: calc(100vh - 56px);
  padding: 24px 20px;
`;

const ProfileImageSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${props => props.imageUrl 
    ? `url(${props.imageUrl})` 
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: bold;
  border: 4px solid white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
`;

const CameraButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #2ed8b6;
  border: 3px solid white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(46, 216, 182, 0.3);
  
  &:hover {
    background: #26c4a8;
    transform: scale(1.05);
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const FormSection = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  background: #fafafa;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  background: #fafafa;
  transition: all 0.2s;
  min-height: 80px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
    background: white;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const CharCount = styled.div`
  font-size: 12px;
  color: #666;
  text-align: right;
  margin-top: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;
`;

const SaveButton = styled.button`
  flex: 1;
  padding: 16px;
  background: linear-gradient(135deg, #2ed8b6 0%, #26c4a8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(46, 216, 182, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  flex: 1;
  padding: 16px;
  background: #f5f5f5;
  color: #666;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: #e0e0e0;
    color: #333;
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  color: white;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
`;

export default function ProfileEdit() {
  const { user, updateUserProfile } = useContext(UserContext);
  const navigate = useNavigate();
  const fileInputRef = useRef();
  
  const [formData, setFormData] = useState({
    nickname: user.nickname || '',
    bio: user.bio || '',
    profileImage: user.profileImage || '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // 입력값 검증 및 정제
    let sanitizedValue = value;
    
    if (name === 'nickname') {
      // 닉네임: 특수문자 제거, 20자 제한
      sanitizedValue = value.replace(/[<>{}]/g, '').slice(0, 20);
    } else if (name === 'bio') {
      // 소개: HTML 태그 제거, 200자 제한
      sanitizedValue = value.replace(/<[^>]*>/g, '').slice(0, 200);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 파일 크기 검증 (5MB 제한)
    if (file.size > 5 * 1024 * 1024) {
      alert('파일 크기는 5MB 이하여야 합니다.');
      return;
    }

    // 파일 형식 검증
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    try {
      // 이미지를 base64로 변환하여 임시 표시
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          profileImage: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('이미지 업로드 오류:', error);
      alert('이미지 업로드에 실패했습니다.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 입력값 검증
    if (!formData.nickname.trim()) {
      alert('닉네임을 입력해주세요.');
      return;
    }

    if (formData.nickname.trim().length < 2) {
      alert('닉네임은 2글자 이상이어야 합니다.');
      return;
    }

    setLoading(true);
    
    try {
      // 안전한 업데이트 데이터만 전송
      const updateData = {
        nickname: formData.nickname.trim(),
        bio: formData.bio.trim(),
      };

      // 프로필 이미지가 변경된 경우에만 추가
      if (formData.profileImage !== user.profileImage) {
        updateData.profileImage = formData.profileImage;
      }

      await updateUserProfile(updateData);
      
      setSuccess(true);
      setTimeout(() => {
        navigate('/mypage');
      }, 1500);
      
    } catch (error) {
      console.error('프로필 업데이트 오류:', error);
      alert('프로필 수정에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const getInitials = (name) => {
    if (!name) return '?';
    return name.charAt(0).toUpperCase();
  };

  return (
    <Container>
      <TopBar title="프로필 수정" />
      
      <Content>
        {success && (
          <SuccessMessage>
            <FaCheckCircle />
            프로필이 성공적으로 수정되었습니다!
          </SuccessMessage>
        )}

        <ProfileImageSection>
          <ProfileImageContainer>
            <ProfileImage imageUrl={formData.profileImage}>
              {!formData.profileImage && getInitials(formData.nickname)}
            </ProfileImage>
            <CameraButton onClick={() => fileInputRef.current?.click()}>
              <FaCamera />
            </CameraButton>
            <HiddenInput
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </ProfileImageContainer>
        </ProfileImageSection>

        <form onSubmit={handleSubmit}>
          <FormSection>
            <Label>
              <FaUser />
              닉네임
            </Label>
            <Input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
              placeholder="닉네임을 입력하세요"
              maxLength={20}
              required
            />
            <CharCount>{formData.nickname.length}/20</CharCount>
          </FormSection>

          <FormSection>
            <Label>
              소개
            </Label>
            <TextArea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="자신을 간단히 소개해주세요"
              maxLength={200}
            />
            <CharCount>{formData.bio.length}/200</CharCount>
          </FormSection>

          <ButtonGroup>
            <CancelButton
              type="button"
              onClick={() => navigate('/mypage')}
              disabled={loading}
            >
              <FaTimes />
              취소
            </CancelButton>
            <SaveButton type="submit" disabled={loading}>
              <FaSave />
              {loading ? '저장 중...' : '저장'}
            </SaveButton>
          </ButtonGroup>
        </form>
      </Content>
    </Container>
  );
}