import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaRegCommentDots, FaUser, FaPlusCircle } from 'react-icons/fa';

const Bar = styled.nav`
  position: fixed;
  left: 0; right: 0; bottom: 0;
  max-width: 480px;
  margin: 0 auto;
  height: 56px;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  box-shadow: 0 -1px 8px rgba(0,0,0,0.04);
`;
const Item = styled.button`
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.active ? '#ff7e36' : '#888'};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Bar>
      <Item active={pathname === '/'} onClick={() => navigate('/')}> <FaHome size={22} /> <span>홈</span> </Item>
      <Item active={pathname === '/register'} onClick={() => navigate('/register')}> <FaPlusCircle size={22} /> <span>등록</span> </Item>
      <Item active={pathname.startsWith('/chat')} onClick={() => navigate('/chat/1')}> <FaRegCommentDots size={22} /> <span>채팅</span> </Item>
      <Item active={pathname === '/mypage'} onClick={() => navigate('/mypage')}> <FaUser size={22} /> <span>마이</span> </Item>
    </Bar>
  );
} 