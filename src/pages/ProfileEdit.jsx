import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../store/UserContext';
import TopBar from '../components/TopBar';
import { 
  FaArrowLeft, 
  FaUser, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCamera,
  FaSave
} from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  background: var(--color-background);
`;

const Inner = styled.div`
  padding-bottom: 2rem;
`;

const ProfileSection = styled.div`
  background: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 8px solid var(--color-background);
`;

const ProfileImageContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-mint-main);
  background: var(--color-background);
`;

const ImageUploadButton = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--color-mint-main);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-mint-dark);
    transform: scale(1.05);
  }

  input {
    display: none;
  }
`;

const FormSection = styled.div`
  background: white;
  margin-bottom: 1rem;
  border-bottom: 8px solid var(--color-background);
`;

const FormGroup = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: 0.75rem;

  svg {
    color: var(--color-mint-main);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-mint-main);
    box-shadow: 0 0 0 2px rgba(72, 187, 120, 0.1);
  }

  &:disabled {
    background: var(--color-background);
    color: var(--color-text-secondary);
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.875rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-mint-main);
    box-shadow: 0 0 0 2px rgba(72, 187, 120, 0.1);
  }
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--color-mint-main);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 1rem;

  &:hover {
    background: var(--color-mint-dark);
    transform: translateY(-2px);
  }

  &:disabled {
    background: var(--color-border);
    cursor: not-allowed;
    transform: none;
  }
`;

const InfoText = styled.p`
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
  line-height: 1.4;
`;

export default function ProfileEdit() {
  const navigate = useNavigate();
  const { user, updateUserProfile } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    profileImage: '',
    address: '',
    bio: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nickname: user.nickname || '',
        email: user.email || '',
        profileImage: user.profileImage || '',
        address: user.address || '',
        bio: user.bio || ''
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 이미지 파일을 URL로 변환하여 미리보기
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          profileImage: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!formData.nickname.trim()) {
      alert('닉네임을 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      await updateUserProfile({
        nickname: formData.nickname,
        profileImage: formData.profileImage,
        address: formData.address,
        bio: formData.bio
      });
      
      alert('프로필이 성공적으로 수정되었습니다!');
      navigate('/mypage');
    } catch (error) {
      console.error('프로필 수정 실패:', error);
      alert('프로필 수정에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TopBar 
        title="프로필 수정"
        leftIcon={<FaArrowLeft />}
        onLeftClick={() => navigate(-1)}
      />
      
      <Inner>
        <ProfileSection>
          <ProfileImageContainer>
            <ProfileImage 
              src={formData.profileImage || '/default-avatar.png'} 
              alt="프로필 이미지"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23f0f0f0"/><text x="60" y="65" text-anchor="middle" fill="%23666" font-size="16">이미지</text></svg>';
              }}
            />
            <ImageUploadButton>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <FaCamera size={14} />
            </ImageUploadButton>
          </ProfileImageContainer>
        </ProfileSection>

        <FormSection>
          <FormGroup>
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
            />
            <InfoText>다른 사용자에게 보여질 이름입니다. (최대 20자)</InfoText>
          </FormGroup>

          <FormGroup>
            <Label>
              <FaEnvelope />
              이메일
            </Label>
            <Input
              type="email"
              value={formData.email}
              disabled
              placeholder="이메일"
            />
            <InfoText>이메일은 수정할 수 없습니다.</InfoText>
          </FormGroup>

          <FormGroup>
            <Label>
              <FaMapMarkerAlt />
              지역
            </Label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="지역을 입력하세요 (예: 서울시 강남구)"
            />
            <InfoText>거래 지역 정보로 활용됩니다.</InfoText>
          </FormGroup>

          <FormGroup>
            <Label>
              자기소개
            </Label>
            <TextArea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="자신을 소개하는 글을 작성해보세요&#10;(선택사항)"
              maxLength={200}
            />
            <InfoText>프로필에 표시될 자기소개입니다. (최대 200자)</InfoText>
          </FormGroup>
        </FormSection>

        <SaveButton 
          onClick={handleSave}
          disabled={loading}
        >
          <FaSave />
          {loading ? '저장 중...' : '저장하기'}
        </SaveButton>
      </Inner>
    </Container>
  );
}