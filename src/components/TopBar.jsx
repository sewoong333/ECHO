import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaSearch, FaBell, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";

const Bar = styled.header`
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  flex-shrink: 0;
  margin: 0 auto;
  height: 56px;
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-sm);
  
  @supports not (backdrop-filter: blur(8px)) {
    background: rgba(255, 255, 255, 0.95);
  }
`;
const BarInner = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 100%;
  position: relative;
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
  margin-left: var(--space-md);
  color: var(--color-text-secondary);
  font-size: 1.25rem;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  padding: var(--space-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--color-mint-main);
    background: var(--color-mint-accent);
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-mint-main);
    outline-offset: 2px;
  }
  
  @media (max-width: 480px) {
    margin-left: var(--space-sm);
    font-size: 1.125rem;
  }
`;
const Badge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: #2ed8b6;
  border-radius: 50%;
`;
const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1.5px;
  margin-right: var(--space-lg);
  font-family: "Inter", "Pretendard", sans-serif;
  user-select: none;
  flex-shrink: 0;
  transition: all var(--transition-fast);
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-right: var(--space-sm);
  }
`;
const LoginBtn = styled.button`
  margin-left: var(--space-md);
  padding: var(--space-sm) var(--space-lg);
  background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  font-size: 0.875rem;
  white-space: nowrap;
  min-width: 70px;
  box-sizing: border-box;
  flex-shrink: 0;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
  
  &:hover {
    background: linear-gradient(135deg, var(--color-mint-dark), #00a085);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    font-size: 0.8125rem;
    padding: var(--space-sm) var(--space-md);
    min-width: 60px;
    margin-left: var(--space-sm);
  }
`;

const LogoutBtn = styled(LoginBtn)``;

const AddProductBtn = styled.button`
  margin-left: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: linear-gradient(135deg, var(--color-orange), var(--color-orange-light));
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  font-size: 0.875rem;
  white-space: nowrap;
  box-sizing: border-box;
  flex-shrink: 0;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: var(--space-xs) var(--space-sm);
    margin-left: var(--space-xs);
    
    span {
      display: none; /* 모바일에서는 텍스트 숨기고 아이콘만 표시 */
    }
  }
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
        right: window.innerWidth - rect.right,
      });
    }
  }, [menuOpen]);

  // 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuBtnRef.current && !menuBtnRef.current.contains(event.target)) {
        // 드롭다운 메뉴 영역을 클릭하지 않은 경우에만 닫기
        const dropdown = document.querySelector('[data-dropdown-menu]');
        if (!dropdown || !dropdown.contains(event.target)) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Bar>
      <BarInner>
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Logo style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            ECHO
          </Logo>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* 상품등록 버튼 제거 */}
          <IconBtn
            ref={menuBtnRef}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="메뉴 열기/닫기"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="#222"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </IconBtn>
          {menuOpen && (
            <div
              data-dropdown-menu
              style={{
                position: "fixed",
                top: dropdownPos.top,
                right: dropdownPos.right,
                background: "#fff",
                border: "1.5px solid #eee",
                borderRadius: 10,
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                zIndex: 9999,
                minWidth: 140,
                padding: "8px 0",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{
                  padding: "10px 18px",
                  background: "none",
                  border: "none",
                  color: "#1a4740",
                  fontWeight: 600,
                  fontSize: 16,
                  textAlign: "left",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/tuner/guitar");
                }}
              >
                🎸 기타 튜너
              </button>
              <button
                style={{
                  padding: "10px 18px",
                  background: "none",
                  border: "none",
                  color: "#1a4740",
                  fontWeight: 600,
                  fontSize: 16,
                  textAlign: "left",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/tuner/bass");
                }}
              >
                🎸 베이스 튜너
              </button>
            </div>
          )}
          <IconBtn>
            <FaSearch size={20} />
          </IconBtn>
          <IconBtn style={{ position: "relative" }}>
            <FaBell size={20} />
            <Badge />
          </IconBtn>
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
