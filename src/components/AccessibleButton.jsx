import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* 기본 스타일 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${props => {
    switch(props.size) {
      case 'small': return '8px 16px';
      case 'large': return '16px 32px';
      default: return '12px 24px';
    }
  }};
  min-height: 44px; /* WCAG 권장 최소 터치 타겟 크기 */
  min-width: 44px;
  border: none;
  border-radius: 8px;
  font-size: ${props => {
    switch(props.size) {
      case 'small': return '14px';
      case 'large': return '18px';
      default: return '16px';
    }
  }};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  /* 색상 테마 */
  ${props => {
    switch(props.variant) {
      case 'primary':
        return `
          background: #2ed8b6;
          color: white;
          &:hover:not(:disabled) {
            background: #26c4a8;
            transform: translateY(-1px);
          }
          &:active {
            transform: translateY(0);
          }
        `;
      case 'secondary':
        return `
          background: #f8f9fa;
          color: #333;
          border: 1px solid #e9ecef;
          &:hover:not(:disabled) {
            background: #e9ecef;
            border-color: #dee2e6;
          }
        `;
      case 'danger':
        return `
          background: #dc3545;
          color: white;
          &:hover:not(:disabled) {
            background: #c82333;
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: #2ed8b6;
          border: 1px solid #2ed8b6;
          &:hover:not(:disabled) {
            background: #2ed8b6;
            color: white;
          }
        `;
      default:
        return `
          background: #2ed8b6;
          color: white;
        `;
    }
  }}

  /* 비활성화 상태 */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

  /* 포커스 상태 - 접근성 */
  &:focus-visible {
    outline: 2px solid #2ed8b6;
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(46, 216, 182, 0.2);
  }

  /* 로딩 상태 */
  ${props => props.loading && `
    pointer-events: none;
    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      margin: auto;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  `}

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* 아이콘만 있는 버튼 */
  ${props => props.iconOnly && `
    width: 44px;
    height: 44px;
    padding: 0;
  `}

  /* 전체 너비 */
  ${props => props.fullWidth && `
    width: 100%;
  `}

  /* 고대비 모드 지원 */
  @media (prefers-contrast: high) {
    border: 2px solid currentColor;
  }

  /* 모션 감소 설정 존중 */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

const AccessibleButton = forwardRef(({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  iconOnly = false,
  fullWidth = false,
  ariaLabel,
  ariaDescribedBy,
  onClick,
  type = 'button',
  ...props
}, ref) => {
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const handleKeyDown = (e) => {
    // Enter와 Space 키 모두 지원
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  // 접근성 속성 계산
  const accessibilityProps = {
    'aria-label': ariaLabel || (iconOnly ? '버튼' : undefined),
    'aria-describedby': ariaDescribedBy,
    'aria-disabled': disabled || loading,
    'aria-pressed': props['aria-pressed'],
    'role': 'button',
    'tabIndex': disabled ? -1 : 0
  };

  return (
    <StyledButton
      ref={ref}
      type={type}
      variant={variant}
      size={size}
      disabled={disabled}
      loading={loading}
      iconOnly={iconOnly}
      fullWidth={fullWidth}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...accessibilityProps}
      {...props}
    >
      {loading ? (
        <>
          <span className="sr-only">로딩 중</span>
          {children}
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
});

AccessibleButton.displayName = 'AccessibleButton';

export default AccessibleButton;