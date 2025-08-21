// 접근성 유틸리티 함수들
export const accessibility = {
  // 포커스 관리
  focusManagement: {
    // 첫 번째 포커스 가능한 요소 찾기
    getFirstFocusableElement: (container) => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
      ].join(', ');
      
      return container.querySelector(focusableSelectors);
    },

    // 마지막 포커스 가능한 요소 찾기
    getLastFocusableElement: (container) => {
      const focusableElements = container.querySelectorAll([
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
      ].join(', '));
      
      return focusableElements[focusableElements.length - 1];
    },

    // 포커스 트랩 (모달 등에서 사용)
    trapFocus: (container) => {
      const firstElement = accessibility.focusManagement.getFirstFocusableElement(container);
      const lastElement = accessibility.focusManagement.getLastFocusableElement(container);

      const handleTabKey = (e) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      container.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => {
        container.removeEventListener('keydown', handleTabKey);
      };
    }
  },

  // ARIA 속성 관리
  aria: {
    // 동적 콘텐츠 공지
    announce: (message, priority = 'polite') => {
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', priority);
      announcer.setAttribute('aria-atomic', 'true');
      announcer.setAttribute('class', 'sr-only');
      announcer.textContent = message;
      
      document.body.appendChild(announcer);
      
      setTimeout(() => {
        document.body.removeChild(announcer);
      }, 1000);
    },

    // 요소 설명 연결
    connectDescription: (element, description) => {
      const descriptionId = `desc-${Math.random().toString(36).substr(2, 9)}`;
      const descElement = document.createElement('div');
      descElement.id = descriptionId;
      descElement.className = 'sr-only';
      descElement.textContent = description;
      
      element.setAttribute('aria-describedby', descriptionId);
      element.parentNode.insertBefore(descElement, element.nextSibling);
      
      return descriptionId;
    }
  },

  // 색상 대비 검증
  colorContrast: {
    // RGB를 상대 휘도로 변환
    getRelativeLuminance: (r, g, b) => {
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    },

    // 대비율 계산
    getContrastRatio: (color1, color2) => {
      const l1 = accessibility.colorContrast.getRelativeLuminance(...color1);
      const l2 = accessibility.colorContrast.getRelativeLuminance(...color2);
      const lighter = Math.max(l1, l2);
      const darker = Math.min(l1, l2);
      return (lighter + 0.05) / (darker + 0.05);
    },

    // WCAG AA 기준 통과 여부
    isWCAGAA: (foreground, background) => {
      const ratio = accessibility.colorContrast.getContrastRatio(foreground, background);
      return ratio >= 4.5;
    }
  },

  // 키보드 네비게이션
  keyboard: {
    // 키보드 이벤트 핸들러
    handleArrowKeys: (container, orientation = 'horizontal') => {
      return (e) => {
        const items = container.querySelectorAll('[role="option"], [role="tab"], [role="menuitem"]');
        const currentIndex = Array.from(items).indexOf(document.activeElement);
        
        let nextIndex;
        
        if (orientation === 'horizontal') {
          if (e.key === 'ArrowLeft') {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          } else if (e.key === 'ArrowRight') {
            nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          }
        } else {
          if (e.key === 'ArrowUp') {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          } else if (e.key === 'ArrowDown') {
            nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          }
        }
        
        if (nextIndex !== undefined) {
          e.preventDefault();
          items[nextIndex].focus();
        }
      };
    },

    // Escape 키 핸들러
    handleEscape: (callback) => {
      return (e) => {
        if (e.key === 'Escape') {
          callback();
        }
      };
    }
  },

  // 반응형 접근성
  responsive: {
    // 터치 타겟 크기 검증
    validateTouchTarget: (element) => {
      const rect = element.getBoundingClientRect();
      const minSize = 44; // 44px minimum touch target
      return rect.width >= minSize && rect.height >= minSize;
    },

    // 폰트 크기 조정
    adjustFontSize: (factor) => {
      document.documentElement.style.fontSize = `${16 * factor}px`;
    },

    // 확대/축소 감지
    detectZoom: () => {
      return window.devicePixelRatio || 1;
    }
  },

  // 스크린 리더 전용 텍스트
  screenReader: {
    // 스크린 리더 전용 클래스 생성
    createSROnlyClass: () => {
      if (!document.getElementById('sr-only-styles')) {
        const style = document.createElement('style');
        style.id = 'sr-only-styles';
        style.textContent = `
          .sr-only {
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            padding: 0 !important;
            margin: -1px !important;
            overflow: hidden !important;
            clip: rect(0, 0, 0, 0) !important;
            white-space: nowrap !important;
            border: 0 !important;
          }
        `;
        document.head.appendChild(style);
      }
    },

    // 스크린 리더 전용 텍스트 추가
    addSRText: (element, text) => {
      const srSpan = document.createElement('span');
      srSpan.className = 'sr-only';
      srSpan.textContent = text;
      element.appendChild(srSpan);
      return srSpan;
    }
  }
};

// 접근성 검사 도구
export const accessibilityChecker = {
  // 페이지 전체 접근성 검사
  checkPage: () => {
    const issues = [];

    // 이미지 alt 텍스트 검사
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(`이미지 ${index + 1}에 alt 텍스트가 없습니다.`);
      }
    });

    // 버튼 레이블 검사
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      const hasText = button.textContent.trim();
      const hasLabel = button.getAttribute('aria-label');
      const hasLabelledBy = button.getAttribute('aria-labelledby');
      
      if (!hasText && !hasLabel && !hasLabelledBy) {
        issues.push(`버튼 ${index + 1}에 접근 가능한 이름이 없습니다.`);
      }
    });

    // 링크 텍스트 검사
    const links = document.querySelectorAll('a[href]');
    links.forEach((link, index) => {
      const text = link.textContent.trim();
      if (!text || text === '여기' || text === '클릭' || text === '더보기') {
        issues.push(`링크 ${index + 1}에 명확한 설명이 필요합니다.`);
      }
    });

    // 폼 레이블 검사
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
      const hasLabel = document.querySelector(`label[for="${input.id}"]`);
      const hasAriaLabel = input.getAttribute('aria-label');
      const hasAriaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!hasLabel && !hasAriaLabel && !hasAriaLabelledBy) {
        issues.push(`입력 필드 ${index + 1}에 레이블이 없습니다.`);
      }
    });

    return issues;
  },

  // 색상 대비 검사
  checkColorContrast: () => {
    // 실제 구현에서는 DOM에서 색상을 추출하여 검사
    console.log('색상 대비 검사를 실행합니다...');
  },

  // 키보드 네비게이션 검사
  checkKeyboardNavigation: () => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    let hasSkipLink = false;
    const firstLink = document.querySelector('a[href]');
    if (firstLink && firstLink.textContent.includes('건너뛰기')) {
      hasSkipLink = true;
    }

    return {
      focusableCount: focusableElements.length,
      hasSkipLink,
      recommendations: hasSkipLink ? [] : ['페이지 상단에 "본문으로 건너뛰기" 링크를 추가하세요.']
    };
  }
};

// 초기화 함수
export const initializeAccessibility = () => {
  // 스크린 리더 전용 스타일 추가
  accessibility.screenReader.createSROnlyClass();

  // 전역 키보드 이벤트 리스너
  document.addEventListener('keydown', (e) => {
    // Tab 키 사용 시 포커스 표시
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  // 마우스 사용 시 키보드 네비게이션 클래스 제거
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });

  // 포커스 표시 스타일 추가
  if (!document.getElementById('keyboard-navigation-styles')) {
    const style = document.createElement('style');
    style.id = 'keyboard-navigation-styles';
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #2ed8b6 !important;
        outline-offset: 2px !important;
      }
      
      .keyboard-navigation button:focus,
      .keyboard-navigation a:focus {
        box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.3) !important;
      }
    `;
    document.head.appendChild(style);
  }

  console.log('접근성 시스템이 초기화되었습니다.');
};