import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiBookmark, FiShoppingBag, FiHeart, FiTag, FiStar, FiChevronRight, FiSettings, FiHome, FiMessageSquare, FiMapPin, FiUsers, FiUser } from 'react-icons/fi';
import TopBar from '../components/TopBar';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/UserContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../utils/firebase';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
  padding-bottom: 80px;
`;
const TopBarWrap = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0 18px 0;
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 800;
  color: #222;
  margin: 0 0 0 24px;
  flex: 1;
  text-align: left;
`;
const Section = styled.div`
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: 18px;
  margin: 16px 0 0 0;
  box-shadow: none;
  padding: 10px 0 2px 0;
`;
const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #222;
  margin: 0 0 10px 24px;
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 24px;
  cursor: pointer;
  background: none;
  &:active { background: #f0f2f4; }
`;
const MenuLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
const MenuText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #222;
`;
const NavBar = styled.div`
  position: fixed;
  left: 0; right: 0; bottom: 0;
  width: 100vw;
  max-width: 480px;
  margin: 0 auto;
  background: #fff;
  border-top: 1.5px solid #e0e2e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 62px;
  z-index: 10;
`;
const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #b0b3b8;
  font-weight: 600;
  &.active { color: #1976d2; }
`;
const ProfileSection = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto 18px auto;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 18px;
  box-shadow: none;
  padding: 10px 0 2px 0;
  gap: 20px;
  position: relative;
`;
const ProfileImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  background: #e0e2e6;
  flex-shrink: 0;
  position: relative;
  top: -4px;
  left: 4px;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;
const ProfileName = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #222;
  margin-bottom: 4px;
`;
const ProfileEmail = styled.div`
  font-size: 15px;
  color: #888;
`;
const EditBtn = styled.button`
  position: absolute;
  right: 24px;
  top: 18px;
  background: #2ed8b6;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 16px;
  cursor: pointer;
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalBox = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px 28px 24px 28px;
  min-width: 320px;
  box-shadow: 0 4px 24px rgba(46,216,182,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ModalTitle = styled.div`
  font-size: 19px;
  font-weight: 800;
  color: #222;
  margin-bottom: 18px;
`;
const ModalInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 8px 12px;
  border: 1.5px solid #b2f0e6;
  border-radius: 8px;
  margin-bottom: 16px;
`;
const ModalImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
`;
const ModalBtnRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
const ModalBtn = styled.button`
  background: #2ed8b6;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  padding: 8px 18px;
  cursor: pointer;
`;
const ModalCancelBtn = styled(ModalBtn)`
  background: #bbb;
`;

export default function MyEcho() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const defaultImg = 'https://i.ibb.co/3y0Qw1K/profile-demo.jpg';
  const [editOpen, setEditOpen] = useState(false);
  const [profileImg, setProfileImg] = useState(user.photoURL || defaultImg);
  const [nickname, setNickname] = useState(user.nickname || '');
  const [loading, setLoading] = useState(false);
  const fileInputRef = React.useRef();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user.isLoggedIn) return;

      try {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setProfileImg(userData.photoURL || defaultImg);
          setNickname(userData.nickname || '');
        }
      } catch (err) {
        console.error('프로필 불러오기 실패:', err);
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleImgChange = async e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    try {
      setLoading(true);
      // Storage에 이미지 업로드
      const imageRef = ref(storage, `profiles/${user.uid}_${Date.now()}`);
      await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(imageRef);
      setProfileImg(downloadURL);
    } catch (err) {
      console.error('프로필 이미지 업로드 실패:', err);
      alert('프로필 이미지 업로드에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditSave = async () => {
    if (!user.isLoggedIn) return;

    try {
      setLoading(true);
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        nickname,
        photoURL: profileImg,
        updatedAt: new Date().toISOString()
      });
      setEditOpen(false);
    } catch (err) {
      console.error('프로필 업데이트 실패:', err);
      alert('프로필 업데이트에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar />
      <Wrapper>
        <ProfileSection>
          <ProfileImg src={profileImg} alt="프로필" />
          <ProfileInfo>
            <ProfileName>{nickname}</ProfileName>
            <ProfileEmail>{user.email || ''}</ProfileEmail>
          </ProfileInfo>
          <EditBtn onClick={() => setEditOpen(true)}>프로필 편집</EditBtn>
        </ProfileSection>
        {editOpen && (
          <ModalOverlay>
            <ModalBox>
              <ModalTitle>프로필 편집</ModalTitle>
              <ModalImg src={profileImg} alt="프로필 미리보기" />
              <ModalBtn 
                style={{background:'#e0e2e6',color:'#222',marginBottom:12}}
                onClick={() => fileInputRef.current.click()}
                disabled={loading}
              >
                {loading ? '업로드중...' : '프로필 사진 변경'}
              </ModalBtn>
              <input 
                type="file" 
                accept="image/*" 
                style={{display:'none'}} 
                ref={fileInputRef} 
                onChange={handleImgChange}
                disabled={loading}
              />
              <ModalInput 
                value={nickname} 
                onChange={e => setNickname(e.target.value)} 
                maxLength={16} 
                placeholder="닉네임 입력"
                disabled={loading}
              />
              <ModalBtnRow>
                <ModalBtn onClick={handleEditSave} disabled={loading}>
                  {loading ? '저장중...' : '저장'}
                </ModalBtn>
                <ModalCancelBtn onClick={() => setEditOpen(false)} disabled={loading}>
                  취소
                </ModalCancelBtn>
              </ModalBtnRow>
            </ModalBox>
          </ModalOverlay>
        )}
        <Section>
          <SectionTitle>나의 거래</SectionTitle>
          <MenuList>
            <MenuItem onClick={() => navigate('/mypage/sales')}>
              <MenuLeft><FiBookmark size={22} /><MenuText>판매내역</MenuText></MenuLeft>
              <FiChevronRight size={22} color="#bbb" />
            </MenuItem>
            <MenuItem onClick={() => navigate('/mypage/purchases')}>
              <MenuLeft><FiShoppingBag size={22} /><MenuText>구매내역</MenuText></MenuLeft>
              <FiChevronRight size={22} color="#bbb" />
            </MenuItem>
          </MenuList>
        </Section>
        <Section>
          <SectionTitle>나의 관심</SectionTitle>
          <MenuList>
            <MenuItem>
              <MenuLeft><FiHeart size={22} /><MenuText>관심목록</MenuText></MenuLeft>
              <FiChevronRight size={22} color="#bbb" />
            </MenuItem>
            <MenuItem>
              <MenuLeft><FiTag size={22} /><MenuText>키워드 알림 설정</MenuText></MenuLeft>
              <FiChevronRight size={22} color="#bbb" />
            </MenuItem>
            <MenuItem>
              <MenuLeft><FiStar size={22} /><MenuText>모아보기</MenuText></MenuLeft>
              <FiChevronRight size={22} color="#bbb" />
            </MenuItem>
          </MenuList>
        </Section>
        <NavBar>
          <NavItem><FiHome size={24} /><div>홈</div></NavItem>
          <NavItem><FiUsers size={24} /><div>동네생활</div></NavItem>
          <NavItem><FiMapPin size={24} /><div>동네지도</div></NavItem>
          <NavItem><FiMessageSquare size={24} /><div>채팅</div></NavItem>
          <NavItem className="active"><FiUser size={24} /><div>나의 에코</div></NavItem>
        </NavBar>
      </Wrapper>
    </>
  );
} 