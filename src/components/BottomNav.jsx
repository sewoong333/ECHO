import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { ChatContext } from "../store/ChatContext";
import {
  FaHome,
  FaRegCommentDots,
  FaUser,
  FaPlusCircle,
  FaMusic,
  FaShareAlt,
} from "react-icons/fa";

const Bar = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  height: 72px;
  background: var(--color-bg-glass);
  border-top: 1px solid var(--color-border-light);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: var(--shadow-xl);
  box-sizing: border-box;
  overflow-x: hidden;
  flex-shrink: 0;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  
  /* 2025 글래스 효과 강화 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      transparent 100%);
    pointer-events: none;
  }
  
  @supports not (backdrop-filter: blur(24px)) {
    background: rgba(255, 255, 255, 0.98);
  }
`;
const BarInner = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  flex-shrink: 0;
`;
const Item = styled.button`
  background: ${props => props.$active ? 'var(--color-mint-glass)' : 'none'};
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.$active ? "var(--color-mint-main)" : "var(--color-text-tertiary)")};
  font-size: var(--text-xs);
  font-weight: 600;
  cursor: pointer;
  flex: 1;
  padding: var(--space-2) var(--space-1);
  min-width: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  position: relative;
  transition: all var(--transition-normal);
  border-radius: var(--radius-2xl);
  gap: var(--space-1);
  transform: ${props => props.$active ? 'translateY(-2px)' : 'translateY(0)'};
  
  /* 활성 상태 글로우 효과 */
  ${props => props.$active && `
    box-shadow: var(--glow-mint);
    background: linear-gradient(135deg, 
      var(--color-mint-glass) 0%, 
      rgba(255, 255, 255, 0.1) 100%);
  `}

  /* 아이콘 스타일 강화 */
  svg {
    font-size: 20px;
    transition: all var(--transition-normal);
    transform: ${props => props.$active ? 'scale(1.1)' : 'scale(1)'};
    filter: ${props => props.$active ? 'drop-shadow(0 0 8px var(--color-mint-glow))' : 'none'};
  }

  &:hover:not(:disabled) {
    color: var(--color-mint-main);
    background: var(--color-mint-glass);
    transform: translateY(-1px);
    
    svg {
      transform: scale(1.05);
      filter: drop-shadow(0 0 6px var(--color-mint-glow));
    }
  }

  &:active {
    transform: translateY(0);
    transition: all var(--transition-micro);
  }

  &:focus-visible {
    outline: 2px solid var(--color-mint-main);
    outline-offset: 2px;
  }
  
  @media (max-width: 480px) {
    font-size: var(--text-xs);
    svg {
      font-size: 18px;
    }
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -2px;
  right: 50%;
  transform: translateX(50%);
  background: var(--color-red);
  color: var(--color-text-inverse);
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 0.625rem;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: var(--shadow-sm);
  border: 2px solid var(--color-bg-primary);
`;

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { unreadCount } = useContext(ChatContext);
  return (
    <Bar>
      <BarInner>
        <Item $active={pathname === "/"} onClick={() => navigate("/")}>
          {" "}
          <FaHome size={22} /> <span>홈</span>{" "}
        </Item>
        <Item
          $active={pathname === "/musiclife"}
          onClick={() => navigate("/musiclife")}
        >
          {" "}
          <FaMusic size={22} /> <span>음악생활</span>{" "}
        </Item>
        <Item $active={pathname === "/map"} onClick={() => navigate("/map")}>
          {" "}
          <FaUser size={22} /> <span>동네지도</span>{" "}
        </Item>
        <Item
          $active={pathname.startsWith("/chat")}
          onClick={() => navigate("/chat")}
        >
          <FaRegCommentDots size={22} />
          <span>채팅</span>
          {unreadCount > 0 && (
            <Badge>
              {unreadCount > 99 ? '99+' : unreadCount}
            </Badge>
          )}
        </Item>
        <Item
          $active={pathname === "/echo-share"}
          onClick={() => navigate("/echo-share")}
        >
          {" "}
          <FaShareAlt size={22} /> <span>에코쉐어</span>{" "}
        </Item>
        <Item
          $active={pathname === "/mypage"}
          onClick={() => navigate("/mypage")}
        >
          {" "}
          <FaUser size={22} /> <span>나의에코</span>{" "}
        </Item>
      </BarInner>
    </Bar>
  );
}
