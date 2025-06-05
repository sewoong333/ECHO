import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaSearch, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/UserContext';

const Bar = styled.header`
  width: 100%;
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
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 100%;
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
`;

export default function TopBar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconBtn><svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg></IconBtn>
          <IconBtn><FaSearch size={20} /></IconBtn>
          <IconBtn style={{ position: 'relative' }}><FaBell size={20} /><Badge /></IconBtn>
          {user.isLoggedIn ? (
            <button onClick={handleLogout} style={{ marginLeft: 16, padding: '6px 14px', background: '#2ed8b6', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}>로그아웃</button>
          ) : (
            <button onClick={handleLogin} style={{ marginLeft: 16, padding: '6px 14px', background: '#ff7e36', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}>로그인</button>
          )}
        </div>
      </BarInner>
    </Bar>
  );
} 