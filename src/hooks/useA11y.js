import { useEffect } from 'react';

// 접근성 향상 훅
export const useA11y = () => {
  useEffect(() => {
    // 키보드 네비게이션 개선
    const handleKeyDown = (e) => {
      // ESC 키로 모달 닫기
      if (e.key === 'Escape') {
        const openModal = document.querySelector('[aria-modal="true"]');
        if (openModal) {
          const closeButton = openModal.querySelector('[aria-label="닫기"]');
          if (closeButton) {
            closeButton.click();
          }
        }
      }

      // Tab 키 트래핑 (모달 내에서)
      if (e.key === 'Tab') {
        const activeModal = document.querySelector('[aria-modal="true"]');
        if (activeModal) {
          const focusableElements = activeModal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 포커스 관리 유틸리티
  const trapFocus = (container) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  };

  return { trapFocus };
};

// 화면 리더 공지 훅
export const useAnnounce = () => {
  const announce = (message, priority = 'polite') => {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.style.position = 'absolute';
    announcer.style.left = '-10000px';
    announcer.style.width = '1px';
    announcer.style.height = '1px';
    announcer.style.overflow = 'hidden';
    
    document.body.appendChild(announcer);
    announcer.textContent = message;
    
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  };

  return { announce };
};