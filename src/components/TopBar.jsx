import React, { useContext, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/UserContext';

const Bar = styled.header`
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  margin: 0 auto;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;
  z-index: 101;
`;
const BarInner = styled.div`
  width: 100vw;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  height: 100%;
  box-sizing: border-box;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Dropdown = styled.span`
  font-size: 18px;
  color: #888;
  margin-left: 2px;
`;
const IconBtn = styled.button`
  background: none;
  border: none;
  margin-left: 16px;
  color: #222;
  font-size: 20px;
  cursor: pointer;
  position: relative;
`;
const Badge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: #ff7e36;
  border-radius: 50%;
`;
const Logo = styled.span`
  font-size: 25px;
  font-weight: 900;
  color: #2ed8b6;
  letter-spacing: 1.5px;
  margin-right: 16px;
  font-family: 'Montserrat', 'Pretendard', sans-serif;
  user-select: none;
  @media (max-width: 480px) {
    font-size: 20px;
    margin-right: 8px;
  }
`;
const LoginBtn = styled.button`
  margin-left: 16px;
  padding: 6px 14px;
  background: #ff7e36;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  white-space: nowrap;
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 10px;
  }
`;
const LogoutBtn = styled(LoginBtn)`
  background: #2ed8b6;
`;

export default function TopBar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 44, right: 0 });

  useEffect(() => {
    if (menuOpen && menuBtnRef.current) {
      const rect = menuBtnRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 4,
        right: window.innerWidth - rect.right
      });
    }
  }, [menuOpen]);

  const handleLogin = () => navigate('/login');
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <Bar>
      <BarInner>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <Logo style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>ECHO</Logo>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <IconBtn ref={menuBtnRef} onClick={() => setMenuOpen(v => !v)} aria-label="메뉴 열기/닫기">
            <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </IconBtn>
          {menuOpen && (
            <div style={{ position: 'fixed', top: dropdownPos.top, right: dropdownPos.right, background: '#fff', border: '1.5px solid #eee', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', zIndex: 200, minWidth: 140, padding: '8px 0', display: 'flex', flexDirection: 'column' }} onClick={e => e.stopPropagation()}>
              <button style={{ padding: '10px 18px', background: 'none', border: 'none', color: '#1a4740', fontWeight: 600, fontSize: 16, textAlign: 'left', cursor: 'pointer' }} onClick={() => { setMenuOpen(false); navigate('/tuner/guitar'); }}>🎸 기타 튜너</button>
              <button style={{ padding: '10px 18px', background: 'none', border: 'none', color: '#1a4740', fontWeight: 600, fontSize: 16, textAlign: 'left', cursor: 'pointer' }} onClick={() => { setMenuOpen(false); navigate('/tuner/bass'); }}>🎸 베이스 튜너</button>
            </div>
          )}
          <IconBtn><FaSearch size={20} /></IconBtn>
          <IconBtn style={{ position: 'relative' }}><FaBell size={20} /><Badge /></IconBtn>
          {user.isLoggedIn ? (
            <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
          ) : (
            <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
          )}
        </div>
      </BarInner>
    </Bar>
  );
} 