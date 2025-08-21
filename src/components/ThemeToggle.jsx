import React, { useState } from 'react';
import styled from 'styled-components';
import { designSystem2025 } from '../styles/designSystem2025';
import { useDarkModeToggle, useThemeContext, THEMES } from '../hooks/useTheme';
import { FiSun, FiMoon, FiMonitor, FiSettings } from 'react-icons/fi';

const ToggleContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ToggleButton = styled.button`
  ${designSystem2025.glassmorphism.base}
  ${designSystem2025.microInteractions.hover}
  ${designSystem2025.accessibility.focusRing}
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 
      0 8px 25px rgba(45, 212, 191, 0.15),
      0 0 20px rgba(45, 212, 191, 0.1);
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  /* 아이콘 색상 */
  svg {
    width: 20px;
    height: 20px;
    color: ${designSystem2025.colors.neutral[600]};
    transition: all 0.3s ease;
  }
  
  [data-theme="dark"] & svg {
    color: ${designSystem2025.colors.neutral[300]};
  }
  
  /* 모션 감소 설정 */
  ${designSystem2025.media.reducedMotion} {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

const DropdownMenu = styled.div`
  ${designSystem2025.glassmorphism.enhanced}
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  border-radius: 16px;
  padding: 8px;
  min-width: 200px;
  z-index: 1000;
  
  /* 드롭다운 애니메이션 */
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)'};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${designSystem2025.media.reducedMotion} {
    transition: none;
    transform: none;
    opacity: ${props => props.isOpen ? 1 : 0};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  }
  
  /* 화살표 */
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 20px;
    width: 12px;
    height: 12px;
    background: inherit;
    border: inherit;
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
    border-radius: 2px 0 0 0;
  }
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: ${designSystem2025.colors.neutral[700]};
  font-size: ${designSystem2025.typography.sizes.sm};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(45, 212, 191, 0.1);
    color: ${designSystem2025.colors.mint[600]};
  }
  
  &.active {
    background: rgba(45, 212, 191, 0.2);
    color: ${designSystem2025.colors.mint[700]};
    font-weight: ${designSystem2025.typography.weights.medium};
  }
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[300]};
    
    &:hover {
      color: ${designSystem2025.colors.mint[400]};
    }
    
    &.active {
      color: ${designSystem2025.colors.mint[300]};
    }
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  ${designSystem2025.accessibility.focusRing}
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 8px 0;
`;

const SettingsSection = styled.div`
  padding: 8px 0;
`;

const SettingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  color: ${designSystem2025.colors.neutral[600]};
  font-size: ${designSystem2025.typography.sizes.xs};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${designSystem2025.colors.neutral[300]};
    border-radius: 20px;
    transition: 0.3s;
    
    &:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background: white;
      border-radius: 50%;
      transition: 0.3s;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
  
  input:checked + span {
    background: ${designSystem2025.colors.mint[500]};
  }
  
  input:checked + span:before {
    transform: translateX(20px);
  }
`;

const BatteryIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: ${designSystem2025.typography.sizes.xs};
  color: ${designSystem2025.colors.neutral[500]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const BatteryBar = styled.div`
  width: 24px;
  height: 12px;
  border: 1px solid currentColor;
  border-radius: 2px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 4px;
    right: -3px;
    width: 2px;
    height: 4px;
    background: currentColor;
    border-radius: 0 1px 1px 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    height: 8px;
    background: ${props => {
      if (props.level > 0.5) return designSystem2025.colors.status.success;
      if (props.level > 0.2) return designSystem2025.colors.status.warning;
      return designSystem2025.colors.status.error;
    }};
    width: ${props => (props.level * 20)}px;
    border-radius: 1px;
    transition: all 0.3s ease;
  }
`;

const ThemeToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggle: _toggle } = useDarkModeToggle();
  const { 
    theme, 
    changeTheme, 
    settings, 
    updateSettings, 
    systemPreferences,
    isEnergySaving,
    toggleEnergySaving
  } = useThemeContext();

  const handleThemeChange = (newTheme) => {
    changeTheme(newTheme);
    setIsOpen(false);
  };

  const getThemeIcon = () => {
    if (theme === THEMES.AUTO) {
      return <FiMonitor />;
    }
    return isDark ? <FiMoon /> : <FiSun />;
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('[data-dropdown]')) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    }
  }, [isOpen]);

  return (
    <ToggleContainer data-dropdown>
      <ToggleButton 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="테마 설정"
        aria-expanded={isOpen}
      >
        {getThemeIcon()}
      </ToggleButton>

      <DropdownMenu isOpen={isOpen}>
        <MenuItem
          className={theme === THEMES.LIGHT ? 'active' : ''}
          onClick={() => handleThemeChange(THEMES.LIGHT)}
        >
          <FiSun />
          라이트 모드
        </MenuItem>

        <MenuItem
          className={theme === THEMES.DARK ? 'active' : ''}
          onClick={() => handleThemeChange(THEMES.DARK)}
        >
          <FiMoon />
          다크 모드
        </MenuItem>

        <MenuItem
          className={theme === THEMES.AUTO ? 'active' : ''}
          onClick={() => handleThemeChange(THEMES.AUTO)}
        >
          <FiMonitor />
          시스템 설정
        </MenuItem>

        <Divider />

        <SettingsSection>
          <SettingItem>
            <span>에너지 절약</span>
            <Switch>
              <input 
                type="checkbox" 
                checked={isEnergySaving}
                onChange={toggleEnergySaving}
              />
              <span></span>
            </Switch>
          </SettingItem>

          <SettingItem>
            <span>모션 감소</span>
            <Switch>
              <input 
                type="checkbox" 
                checked={settings.reduceMotion}
                onChange={(e) => updateSettings({ reduceMotion: e.target.checked })}
              />
              <span></span>
            </Switch>
          </SettingItem>

          <SettingItem>
            <span>고대비 모드</span>
            <Switch>
              <input 
                type="checkbox" 
                checked={settings.highContrast}
                onChange={(e) => updateSettings({ highContrast: e.target.checked })}
              />
              <span></span>
            </Switch>
          </SettingItem>
        </SettingsSection>

        {systemPreferences.batteryLevel < 1 && (
          <>
            <Divider />
            <BatteryIndicator>
              <BatteryBar level={systemPreferences.batteryLevel} />
              <span>{Math.round(systemPreferences.batteryLevel * 100)}%</span>
              {systemPreferences.isLowPowerMode && (
                <span style={{ color: designSystem2025.colors.status.warning }}>
                  절전모드
                </span>
              )}
            </BatteryIndicator>
          </>
        )}
      </DropdownMenu>
    </ToggleContainer>
  );
};

export default ThemeToggle;