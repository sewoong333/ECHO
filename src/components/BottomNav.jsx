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
  height: 64px;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  overflow-x: hidden;
  flex-shrink: 0;
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
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.$active ? "var(--color-mint-main)" : "#888")};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  padding: 0;
  min-width: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  position: relative;
  @media (max-width: 480px) {
    font-size: 11px;
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
  background: #ff4757;
  color: white;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 10px;
  font-weight: 600;
  min-width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
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
