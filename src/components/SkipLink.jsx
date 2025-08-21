import React from 'react';
import styled from 'styled-components';

const SkipLinkContainer = styled.div`
  position: absolute;
  top: -40px;
  left: 6px;
  z-index: 9999;

  &:focus-within {
    top: 6px;
  }
`;

const SkipLinkButton = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background: #2ed8b6;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
    transform: translateY(-1px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background: #26c4a8;
    transform: translateY(-1px);
  }

  /* 고대비 모드 지원 */
  @media (prefers-contrast: high) {
    border: 2px solid white;
  }
`;

const SkipLink = ({ targetId = 'main-content', children = '본문으로 건너뛰기' }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <SkipLinkContainer>
      <SkipLinkButton 
        href={`#${targetId}`}
        onClick={handleClick}
        tabIndex="1" // 첫 번째 탭 순서
      >
        {children}
      </SkipLinkButton>
    </SkipLinkContainer>
  );
};

export default SkipLink;