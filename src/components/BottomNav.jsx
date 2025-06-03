import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaRegCommentDots, FaUser, FaPlusCircle, FaMusic } from 'react-icons/fa';

const Bar = styled.nav`
  position: fixed;
  left: 0; right: 0; bottom: 0;
  width: 100%;
  height: 64px;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0 -1px 8px rgba(0,0,0,0.04);
`;
const BarInner = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  position: relative;
`;
const Item = styled.button`
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.active ? '#2ed8b6' : '#888'};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  padding: 0;
`;

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Bar>
      <BarInner>
        <Item active={pathname === '/'} onClick={() => navigate('/')}> <FaHome size={22} /> <span>홈</span> </Item>
        <Item active={pathname === '/musiclife'} onClick={() => navigate('/musiclife')}> <FaMusic size={22} /> <span>음악생활</span> </Item>
        <Item active={pathname === '/map'} onClick={() => navigate('/map')}> <FaUser size={22} /> <span>동네지도</span> </Item>
        <Item active={pathname.startsWith('/chat')} onClick={() => navigate('/chat')}> <FaRegCommentDots size={22} /> <span>채팅</span> </Item>
        <Item active={pathname === '/mypage'} onClick={() => navigate('/mypage')}> <FaUser size={22} /> <span>나의 당근</span> </Item>
      </BarInner>
    </Bar>
  );
} 