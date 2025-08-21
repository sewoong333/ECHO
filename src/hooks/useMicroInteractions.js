import { useRef, useCallback, useEffect, useState } from 'react';
import { designSystem2025 } from '../styles/designSystem2025';

// 리플 효과 훅
export const useRipple = () => {
  const rippleRef = useRef(null);

  const createRipple = useCallback((event) => {
    const element = rippleRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: ${designSystem2025.colors.primary.main}33;
      transform: scale(0);
      animation: ripple 0.6s linear;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
    `;

    // 리플 애니메이션 CSS 추가
    if (!document.getElementById('ripple-styles')) {
      const style = document.createElement('style');
      style.id = 'ripple-styles';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    element.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, []);

  return { rippleRef, createRipple };
};

// 좋아요 애니메이션 훅
export const useHeartAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const animate = useCallback(() => {
    setIsAnimating(true);
    
    // 햅틱 피드백 (지원하는 기기에서)
    if (navigator.vibrate) {
      navigator.vibrate([50, 50, 100]);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, []);

  return { isAnimating, animate };
};

// 호버 3D 효과 훅
export const useHover3D = (intensity = 15) => {
  const elementRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / intensity;
    const rotateY = (centerX - x) / intensity;

    elementRef.current.style.transform = 
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    if (elementRef.current) {
      elementRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    }
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return {
    elementRef,
    isHovered,
    hoverProps: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onMouseEnter: handleMouseEnter
    }
  };
};

// 부드러운 숫자 카운터 애니메이션 훅
export const useCounterAnimation = (end, duration = 1000, start = 0) => {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(start + (end - start) * easeOutQuart);
      
      setCount(currentValue);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration, start, frameRate, totalFrames]);

  return count;
};

// 스크롤 트리거 애니메이션 훅
export const useScrollTrigger = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return { elementRef, isVisible };
};

// 타이핑 효과 훅
export const useTypewriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayText('');
    setIsComplete(false);

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
};

// 스프링 애니메이션 훅
export const useSpringAnimation = (isActive, config = {}) => {
  const {
    tension = 300,
    friction = 20,
    mass = 1
  } = config;

  const [style, setStyle] = useState({
    transform: 'scale(1) translateY(0px)',
    opacity: 1
  });

  useEffect(() => {
    if (isActive) {
      setStyle({
        transform: 'scale(1.05) translateY(-5px)',
        opacity: 1,
        transition: `all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)`
      });
    } else {
      setStyle({
        transform: 'scale(1) translateY(0px)',
        opacity: 1,
        transition: `all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)`
      });
    }
  }, [isActive, tension, friction, mass]);

  return style;
};

// 제스처 인식 훅
export const useGestures = () => {
  const elementRef = useRef(null);
  const [gesture, setGesture] = useState(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let startX = 0;
    let startY = 0;
    let startTime = 0;

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startTime = Date.now();
    };

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const endY = touch.clientY;
      const endTime = Date.now();

      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const deltaTime = endTime - startTime;

      // 최소 거리와 최대 시간 체크
      if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
        if (deltaTime < 300) {
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            setGesture(deltaX > 0 ? 'swipe-right' : 'swipe-left');
          } else {
            setGesture(deltaY > 0 ? 'swipe-down' : 'swipe-up');
          }

          // 제스처 상태 초기화
          setTimeout(() => setGesture(null), 100);
        }
      }
    };

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return { elementRef, gesture };
};

// 마그네틱 효과 훅 (요소가 마우스를 따라다니는 효과)
export const useMagneticEffect = (strength = 20) => {
  const elementRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / strength;
    const deltaY = (e.clientY - centerY) / strength;

    elementRef.current.style.transform = 
      `translate(${deltaX}px, ${deltaY}px)`;
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    if (elementRef.current) {
      elementRef.current.style.transform = 'translate(0px, 0px)';
    }
  }, []);

  return {
    elementRef,
    magneticProps: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave
    }
  };
};

// 시차 스크롤 효과 훅
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    transform: `translateY(${offset}px)`
  };
};

// 통합 마이크로 인터랙션 훅
export const useMicroInteractions = () => {
  return {
    useRipple,
    useHeartAnimation,
    useHover3D,
    useCounterAnimation,
    useScrollTrigger,
    useTypewriter,
    useSpringAnimation,
    useGestures,
    useMagneticEffect,
    useParallax
  };
};

export default useMicroInteractions;