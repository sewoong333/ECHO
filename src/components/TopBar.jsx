import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaBell } from 'react-icons/fa';

const Bar = styled.header`
  position: sticky;
  top: 0;
  left: 0; right: 0;
  max-width: 480px;
  margin: 0 auto;
  height: 52px;
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 101;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #222;
`;
const IconBtn = styled.button`
  background: none;
  border: none;
  margin-left: 12px;
  color: #888;
  font-size: 18px;
  cursor: pointer;
`;

export default function TopBar() {
  return (
    <Bar>
      <Title>내 동네</Title>
      <div>
        <IconBtn><FaSearch size={18} /></IconBtn>
        <IconBtn><FaBell size={18} /></IconBtn>
      </div>
    </Bar>
  );
} 