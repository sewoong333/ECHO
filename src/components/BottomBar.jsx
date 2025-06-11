import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaPlus, FaUser, FaShareAlt } from 'react-icons/fa';

const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const MenuItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${props => props.active ? '#ff7e36' : '#666'};
  font-size: 0.8rem;
  
  svg {
    font-size: 1.2rem;
    margin-bottom: 4px;
  }
`;

function BottomBar() {
  const location = useLocation();
  
  return (
    <BottomBarContainer>
      <MenuItem to="/" active={location.pathname === '/' ? 1 : 0}>
        <FaHome />
        홈
      </MenuItem>
      <MenuItem to="/post" active={location.pathname === '/post' ? 1 : 0}>
        <FaPlus />
        등록
      </MenuItem>
      <MenuItem to="/echo-share" active={location.pathname === '/echo-share' ? 1 : 0}>
        <FaShareAlt />
        에코쉐어
      </MenuItem>
      <MenuItem to="/mypage" active={location.pathname === '/mypage' ? 1 : 0}>
        <FaUser />
        마이
      </MenuItem>
    </BottomBarContainer>
  );
}

export default BottomBar; 