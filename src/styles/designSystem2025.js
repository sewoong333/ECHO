// 2025 글래스모피즘 및 뉴모피즘 디자인 시스템
import { css } from 'styled-components';

// 2025 컬러 시스템
export const colors2025 = {
  // 민트 계열 확장 (기존 브랜드 컬러 유지하면서 확장)
  mint: {
    50: '#f0fdfa',
    100: '#ccfbf1', 
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf', // 기존 메인 컬러
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a'
  },
  
  // 확장된 뉴트럴 팔레트
  neutral: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a'
  },
  
  // 상태별 컬러 (접근성 고려)
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  
  // 그라데이션 시스템
  gradients: {
    mint: 'linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.10) 100%)',
    darkGlass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
    soft: 'linear-gradient(145deg, #f0f0f0 0%, #ffffff 100%)',
    darkSoft: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)'
  }
};

// 글래스모피즘 2.0 스타일
export const glassmorphism = {
  // 기본 글래스 효과
  base: css`
    background: ${colors2025.gradients.glass};
    backdrop-filter: blur(32px) saturate(180%);
    -webkit-backdrop-filter: blur(32px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 
      0 8px 32px rgba(45, 212, 191, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
  `,
  
  // 강화된 글래스 효과
  enhanced: css`
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.3) 0%, 
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.05) 100%);
    backdrop-filter: blur(40px) saturate(200%) brightness(1.1);
    -webkit-backdrop-filter: blur(40px) saturate(200%) brightness(1.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 
      0 16px 64px rgba(45, 212, 191, 0.12),
      0 4px 16px rgba(45, 212, 191, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8),
      inset 0 -1px 0 rgba(255, 255, 255, 0.2);
  `,
  
  // 다크모드 글래스
  dark: css`
    background: ${colors2025.gradients.darkGlass};
    backdrop-filter: blur(32px) saturate(180%);
    -webkit-backdrop-filter: blur(32px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  `
};

// 뉴모피즘 스타일
export const neomorphism = {
  // 라이트 모드 뉴모피즘
  light: css`
    background: #f0f0f0;
    border-radius: 20px;
    box-shadow: 
      12px 12px 24px rgba(163, 177, 198, 0.6),
      -12px -12px 24px rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
  `,
  
  // 다크 모드 뉴모피즘
  dark: css`
    background: #2a2a2a;
    border-radius: 20px;
    box-shadow: 
      12px 12px 24px rgba(0, 0, 0, 0.5),
      -12px -12px 24px rgba(60, 60, 60, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.05);
  `,
  
  // 인세트 효과 (눌린 버튼)
  inset: css`
    box-shadow: 
      inset 8px 8px 16px rgba(163, 177, 198, 0.4),
      inset -8px -8px 16px rgba(255, 255, 255, 0.9);
  `,
  
  // 부드러운 효과
  soft: css`
    background: linear-gradient(145deg, #f0f0f0, #ffffff);
    box-shadow: 
      6px 6px 12px rgba(163, 177, 198, 0.4),
      -6px -6px 12px rgba(255, 255, 255, 0.9);
  `
};

// 마이크로 인터랙션 애니메이션
export const microInteractions = {
  // 부드러운 호버 효과
  hover: css`
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 
        0 20px 40px rgba(45, 212, 191, 0.15),
        0 8px 16px rgba(45, 212, 191, 0.1);
    }
  `,
  
  // 클릭 효과
  press: css`
    &:active {
      transform: translateY(-2px) scale(0.98);
      transition: all 0.1s ease;
    }
  `,
  
  // 페이드 인 애니메이션
  fadeIn: css`
    animation: fadeIn 0.6s ease-out;
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  
  // 스케일 애니메이션
  scaleIn: css`
    animation: scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
  
  // 좋아요 버튼 애니메이션
  heartPop: css`
    @keyframes heartPop {
      0% { transform: scale(1); }
      50% { transform: scale(1.3) rotate(15deg); }
      100% { transform: scale(1) rotate(0deg); }
    }
    &.animate {
      animation: heartPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  `
};

// 3D 효과 시스템
export const effects3D = {
  // 기본 3D 카드
  card: css`
    transform-style: preserve-3d;
    perspective: 1200px;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: rotateX(5deg) rotateY(-5deg) translateZ(50px);
    }
  `,
  
  // 이미지 3D 효과
  image: css`
    transform: translateZ(30px);
    will-change: transform;
    transition: transform 0.4s ease;
  `,
  
  // 플로팅 효과
  floating: css`
    animation: floating 3s ease-in-out infinite;
    @keyframes floating {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  `
};

// 반응형 브레이크포인트
export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px'
};

// 미디어 쿼리 헬퍼
export const media = {
  mobile: `@media (min-width: ${breakpoints.mobile})`,
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
  wide: `@media (min-width: ${breakpoints.wide})`,
  
  // 접근성 미디어 쿼리
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
  highContrast: '@media (prefers-contrast: high)',
  darkMode: '@media (prefers-color-scheme: dark)'
};

// 타이포그래피 시스템
export const typography = {
  // 폰트 패밀리
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"JetBrains Mono", "Fira Code", "Consolas", monospace'
  },
  
  // 폰트 크기 (fluid typography)
  sizes: {
    xs: 'clamp(0.75rem, 0.75rem + 0.1vw, 0.875rem)',
    sm: 'clamp(0.875rem, 0.875rem + 0.1vw, 1rem)',
    base: 'clamp(1rem, 1rem + 0.2vw, 1.125rem)',
    lg: 'clamp(1.125rem, 1.125rem + 0.3vw, 1.25rem)',
    xl: 'clamp(1.25rem, 1.25rem + 0.4vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 1.5rem + 0.5vw, 2rem)',
    '3xl': 'clamp(1.875rem, 1.875rem + 0.75vw, 2.5rem)',
    '4xl': 'clamp(2.25rem, 2.25rem + 1vw, 3rem)'
  },
  
  // 라인 높이
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75'
  },
  
  // 폰트 무게
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  }
};

// 접근성 헬퍼
export const accessibility = {
  // 스크린 리더 전용
  srOnly: css`
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  `,
  
  // 포커스 스타일
  focusRing: css`
    &:focus-visible {
      outline: 2px solid ${colors2025.mint[400]};
      outline-offset: 2px;
      box-shadow: 0 0 0 4px rgba(45, 212, 191, 0.2);
    }
  `,
  
  // 고대비 모드 대응
  highContrast: css`
    ${media.highContrast} {
      border: 2px solid currentColor;
      background: transparent;
    }
  `
};

// 지속가능성 최적화
export const sustainability = {
  // 에너지 절약 모드
  energySaving: css`
    ${media.reducedMotion} {
      animation: none !important;
      transition: none !important;
    }
  `,
  
  // OLED 최적화 (다크모드)
  oledOptimized: css`
    ${media.darkMode} {
      background: #000000; /* 완전한 검정 */
      color: #ffffff;
    }
  `
};

// 전체 디자인 시스템 export
export const designSystem2025 = {
  colors: colors2025,
  glassmorphism,
  neomorphism,
  microInteractions,
  effects3D,
  breakpoints,
  media,
  typography,
  accessibility,
  sustainability
};