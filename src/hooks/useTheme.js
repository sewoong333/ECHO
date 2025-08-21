import { useState, useEffect, createContext, useContext } from 'react';
import { designSystem2025 } from '../styles/designSystem2025';

// 테마 컨텍스트 생성
const ThemeContext = createContext();

// 테마 상수
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

// 시스템 설정
export const SYSTEM_PREFERENCES = {
  REDUCE_MOTION: 'reduce-motion',
  HIGH_CONTRAST: 'high-contrast',
  LARGE_TEXT: 'large-text'
};

// 사용자 설정 기본값
const DEFAULT_SETTINGS = {
  theme: THEMES.AUTO,
  fontSize: 'medium', // small, medium, large, extra-large
  reduceMotion: false,
  highContrast: false,
  energySaving: false,
  colorBlindMode: 'none' // none, protanopia, deuteranopia, tritanopia
};

// 테마 및 설정 관리 훅
export const useTheme = () => {
  const [theme, setTheme] = useState(THEMES.AUTO);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [systemPreferences, setSystemPreferences] = useState({
    prefersDark: false,
    prefersReducedMotion: false,
    prefersHighContrast: false,
    batteryLevel: 1,
    isLowPowerMode: false
  });

  // 시스템 설정 감지
  useEffect(() => {
    const updateSystemPreferences = () => {
      setSystemPreferences({
        prefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
        prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        prefersHighContrast: window.matchMedia('(prefers-contrast: high)').matches,
        batteryLevel: navigator.getBattery ? 1 : 1,
        isLowPowerMode: false
      });
    };

    // 배터리 상태 확인 (지원하는 브라우저에서)
    const updateBatteryInfo = async () => {
      if ('getBattery' in navigator) {
        try {
          const battery = await navigator.getBattery();
          setSystemPreferences(prev => ({
            ...prev,
            batteryLevel: battery.level,
            isLowPowerMode: battery.level < 0.2 && !battery.charging
          }));

          // 배터리 이벤트 리스너
          battery.addEventListener('levelchange', () => {
            setSystemPreferences(prev => ({
              ...prev,
              batteryLevel: battery.level,
              isLowPowerMode: battery.level < 0.2 && !battery.charging
            }));
          });
        } catch (error) {
          console.log('Battery API not supported');
        }
      }
    };

    updateSystemPreferences();
    updateBatteryInfo();

    // 미디어 쿼리 변경 감지
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    darkModeQuery.addEventListener('change', updateSystemPreferences);
    motionQuery.addEventListener('change', updateSystemPreferences);
    contrastQuery.addEventListener('change', updateSystemPreferences);

    return () => {
      darkModeQuery.removeEventListener('change', updateSystemPreferences);
      motionQuery.removeEventListener('change', updateSystemPreferences);
      contrastQuery.removeEventListener('change', updateSystemPreferences);
    };
  }, []);

  // 로컬 스토리지에서 설정 로드
  useEffect(() => {
    const savedSettings = localStorage.getItem('echo-theme-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        setTheme(parsed.theme || THEMES.AUTO);
      } catch (error) {
        console.error('Failed to parse theme settings:', error);
      }
    }
  }, []);

  // 설정 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('echo-theme-settings', JSON.stringify(settings));
  }, [settings]);

  // 실제 테마 계산 (auto 모드 고려)
  const actualTheme = theme === THEMES.AUTO 
    ? (systemPreferences.prefersDark ? THEMES.DARK : THEMES.LIGHT)
    : theme;

  // 에너지 절약 모드 자동 활성화
  useEffect(() => {
    if (systemPreferences.isLowPowerMode && !settings.energySaving) {
      setSettings(prev => ({ ...prev, energySaving: true }));
    }
  }, [systemPreferences.isLowPowerMode, settings.energySaving]);

  // DOM에 테마 클래스 적용
  useEffect(() => {
    const root = document.documentElement;
    
    // 테마 클래스
    root.setAttribute('data-theme', actualTheme);
    
    // 폰트 크기
    root.setAttribute('data-font-size', settings.fontSize);
    
    // 접근성 설정
    if (settings.reduceMotion || systemPreferences.prefersReducedMotion) {
      root.setAttribute('data-reduce-motion', 'true');
    } else {
      root.removeAttribute('data-reduce-motion');
    }
    
    if (settings.highContrast || systemPreferences.prefersHighContrast) {
      root.setAttribute('data-high-contrast', 'true');
    } else {
      root.removeAttribute('data-high-contrast');
    }
    
    if (settings.energySaving) {
      root.setAttribute('data-energy-saving', 'true');
    } else {
      root.removeAttribute('data-energy-saving');
    }
    
    if (settings.colorBlindMode !== 'none') {
      root.setAttribute('data-color-blind-mode', settings.colorBlindMode);
    } else {
      root.removeAttribute('data-color-blind-mode');
    }

    // CSS 커스텀 속성 설정
    const _colors = actualTheme === THEMES.DARK 
      ? designSystem2025.colors.dark 
      : designSystem2025.colors.light;

    // 폰트 크기 설정
    const fontSizeMultiplier = {
      small: 0.875,
      medium: 1,
      large: 1.125,
      'extra-large': 1.25
    }[settings.fontSize] || 1;

    root.style.setProperty('--font-size-multiplier', fontSizeMultiplier);

  }, [actualTheme, settings, systemPreferences]);

  // 테마 변경 함수
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    setSettings(prev => ({ ...prev, theme: newTheme }));
  };

  // 설정 업데이트 함수
  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // 설정 초기화
  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    setTheme(THEMES.AUTO);
  };

  // 색각 이상자 모드 토글
  const toggleColorBlindMode = (mode) => {
    updateSettings({ 
      colorBlindMode: settings.colorBlindMode === mode ? 'none' : mode 
    });
  };

  // 에너지 절약 모드 토글
  const toggleEnergySaving = () => {
    updateSettings({ energySaving: !settings.energySaving });
  };

  return {
    // 현재 상태
    theme: actualTheme,
    settings,
    systemPreferences,
    
    // 상태 확인
    isDark: actualTheme === THEMES.DARK,
    isLight: actualTheme === THEMES.LIGHT,
    isHighContrast: settings.highContrast || systemPreferences.prefersHighContrast,
    isReducedMotion: settings.reduceMotion || systemPreferences.prefersReducedMotion,
    isEnergySaving: settings.energySaving,
    isLowPowerMode: systemPreferences.isLowPowerMode,
    
    // 액션
    changeTheme,
    updateSettings,
    resetSettings,
    toggleColorBlindMode,
    toggleEnergySaving,
    
    // 유틸리티
    getThemeColors: () => actualTheme === THEMES.DARK 
      ? designSystem2025.colors.dark 
      : designSystem2025.colors.light
  };
};

// 테마 프로바이더 컴포넌트
export const ThemeProvider = ({ children }) => {
  const themeValue = useTheme();

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// 컨텍스트 사용 훅
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

// 테마 전환 애니메이션 훅
export const useThemeTransition = () => {
  const { isReducedMotion } = useThemeContext();

  const transitionTheme = () => {
    if (isReducedMotion) return;

    // CSS 전환 애니메이션
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  };

  return { transitionTheme };
};

// 다크모드 토글 컴포넌트용 훅
export const useDarkModeToggle = () => {
  const { theme, changeTheme, isDark } = useThemeContext();

  const toggle = () => {
    const newTheme = theme === THEMES.AUTO 
      ? (isDark ? THEMES.LIGHT : THEMES.DARK)
      : (theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
    
    changeTheme(newTheme);
  };

  return { isDark, toggle };
};

export default useTheme;