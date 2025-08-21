import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { designSystem2025 } from '../styles/designSystem2025';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${designSystem2025.colors.neutral[100]};
  
  [data-theme="dark"] & {
    background: ${designSystem2025.colors.neutral[800]};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease, filter 0.3s ease;
  opacity: ${props => props.loaded ? 1 : 0};
  filter: ${props => props.loaded ? 'none' : 'blur(10px)'};
`;

const PlaceholderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${designSystem2025.colors.neutral[100]};
  color: ${designSystem2025.colors.neutral[400]};
  font-size: ${designSystem2025.typography.sizes.sm};
  transition: opacity 0.3s ease;
  opacity: ${props => props.loaded ? 0 : 1};
  pointer-events: none;
  
  [data-theme="dark"] & {
    background: ${designSystem2025.colors.neutral[800]};
    color: ${designSystem2025.colors.neutral[500]};
  }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    ${designSystem2025.colors.neutral[200]} 25%,
    ${designSystem2025.colors.neutral[300]} 50%,
    ${designSystem2025.colors.neutral[200]} 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  
  @keyframes loading {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  [data-theme="dark"] & {
    background: linear-gradient(
      90deg,
      ${designSystem2025.colors.neutral[700]} 25%,
      ${designSystem2025.colors.neutral[600]} 50%,
      ${designSystem2025.colors.neutral[700]} 75%
    );
  }
`;

const SkeletonRect = styled(SkeletonBase)`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.borderRadius || '0'};
`;

const ErrorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${designSystem2025.colors.neutral[100]};
  color: ${designSystem2025.colors.neutral[500]};
  font-size: ${designSystem2025.typography.sizes.sm};
  text-align: center;
  padding: 20px;
  
  [data-theme="dark"] & {
    background: ${designSystem2025.colors.neutral[800]};
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const ErrorIcon = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
  opacity: 0.5;
`;

const RetryButton = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  border: 1px solid ${designSystem2025.colors.neutral[300]};
  border-radius: 8px;
  background: transparent;
  color: ${designSystem2025.colors.neutral[600]};
  font-size: ${designSystem2025.typography.sizes.xs};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${designSystem2025.colors.neutral[50]};
    border-color: ${designSystem2025.colors.neutral[400]};
  }
  
  [data-theme="dark"] & {
    border-color: ${designSystem2025.colors.neutral[600]};
    color: ${designSystem2025.colors.neutral[400]};
    
    &:hover {
      background: ${designSystem2025.colors.neutral[700]};
      border-color: ${designSystem2025.colors.neutral[500]};
    }
  }
`;

// Intersection Observer 훅
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasBeenVisible) {
            setHasBeenVisible(true);
          }
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasBeenVisible, options]);

  return [ref, isVisible, hasBeenVisible];
};

// 이미지 최적화 유틸리티
const getOptimizedImageUrl = (url, width, height, quality = 85) => {
  if (!url || url.includes('placeholder')) {
    return url;
  }

  // Firebase Storage URL 최적화
  if (url.includes('firebasestorage.googleapis.com')) {
    const urlParts = url.split('?');
    const baseUrl = urlParts[0];
    const params = new URLSearchParams(urlParts[1] || '');
    
    // 이미지 변환 파라미터 추가
    if (width) params.set('w', width);
    if (height) params.set('h', height);
    params.set('q', quality);
    params.set('f', 'webp'); // WebP 포맷 요청
    
    return `${baseUrl}?${params.toString()}`;
  }

  // 기타 이미지 URL은 그대로 반환
  return url;
};

// WebP 지원 감지
const supportsWebP = () => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

const LazyImage = ({
  src,
  alt = '',
  width,
  height,
  placeholder = '이미지를 불러오는 중...',
  fallbackSrc = '/placeholder-image.jpg',
  quality = 85,
  className,
  style,
  onLoad,
  onError,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [imageRef, , hasBeenVisible] = useIntersectionObserver();

  // 이미지 URL 최적화
  const optimizedSrc = getOptimizedImageUrl(src, width, height, quality);
  const optimizedFallback = getOptimizedImageUrl(fallbackSrc, width, height, quality);

  // 이미지 로드 시작
  useEffect(() => {
    if (hasBeenVisible && optimizedSrc && !imageSrc && !error) {
      setImageSrc(optimizedSrc);
    }
  }, [hasBeenVisible, optimizedSrc, imageSrc, error]);

  // 이미지 로드 성공 처리
  const handleLoad = useCallback((e) => {
    setLoaded(true);
    setError(false);
    if (onLoad) {
      onLoad(e);
    }
  }, [onLoad]);

  // 이미지 로드 실패 처리
  const handleError = useCallback((e) => {
    setError(true);
    setLoaded(false);
    
    // 첫 번째 실패 시 fallback 이미지 시도
    if (retryCount === 0 && imageSrc !== optimizedFallback) {
      setImageSrc(optimizedFallback);
      setRetryCount(1);
      return;
    }
    
    if (onError) {
      onError(e);
    }
  }, [imageSrc, optimizedFallback, retryCount, onError]);

  // 재시도 함수
  const handleRetry = useCallback(() => {
    setError(false);
    setLoaded(false);
    setRetryCount(0);
    setImageSrc(optimizedSrc);
  }, [optimizedSrc]);

  // Progressive Enhancement: WebP 지원 체크
  useEffect(() => {
    if (imageSrc && supportsWebP() && !imageSrc.includes('f=webp')) {
      const webpUrl = getOptimizedImageUrl(src, width, height, quality);
      if (webpUrl !== imageSrc) {
        setImageSrc(webpUrl);
      }
    }
  }, [imageSrc, src, width, height, quality]);

  return (
    <ImageContainer ref={imageRef} className={className} style={style}>
      {/* 스켈레톤 로딩 */}
      {!hasBeenVisible && (
        <SkeletonRect borderRadius="inherit" />
      )}

      {/* 플레이스홀더 */}
      {hasBeenVisible && !loaded && !error && (
        <PlaceholderContainer loaded={loaded}>
          {placeholder}
        </PlaceholderContainer>
      )}

      {/* 이미지 */}
      {imageSrc && !error && (
        <Image
          src={imageSrc}
          alt={alt}
          loaded={loaded}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          {...props}
        />
      )}

      {/* 에러 상태 */}
      {error && (
        <ErrorContainer>
          <ErrorIcon>🖼️</ErrorIcon>
          <div>이미지를 불러올 수 없습니다</div>
          <RetryButton onClick={handleRetry}>
            다시 시도
          </RetryButton>
        </ErrorContainer>
      )}
    </ImageContainer>
  );
};

// 고차 컴포넌트: 이미지 최적화 래퍼
export const withImageOptimization = () => {
  return React.forwardRef((props, ref) => {
    const { images, ...restProps } = props;
    
    // 이미지 배열 최적화
    const optimizedImages = images?.map(image => {
      if (typeof image === 'string') {
        return getOptimizedImageUrl(image, 300, 300);
      }
      return {
        ...image,
        src: getOptimizedImageUrl(image.src, 300, 300),
        thumbnail: getOptimizedImageUrl(image.src, 150, 150, 70)
      };
    });

    return (
      <WrappedComponent
        ref={ref}
        images={optimizedImages}
        {...restProps}
      />
    );
  });
};

// 프리로드 유틸리티
export const preloadImage = (src, priority = false) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = priority ? 'preload' : 'prefetch';
    link.as = 'image';
    link.href = src;
    
    link.onload = () => resolve(src);
    link.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
    
    document.head.appendChild(link);
    
    // 5초 후 타임아웃
    setTimeout(() => {
      document.head.removeChild(link);
      reject(new Error(`Preload timeout: ${src}`));
    }, 5000);
  });
};

// 이미지 배치 프리로드
export const preloadImages = async (images, priority = false, batchSize = 3) => {
  const results = [];
  
  for (let i = 0; i < images.length; i += batchSize) {
    const batch = images.slice(i, i + batchSize);
    const batchPromises = batch.map(src => 
      preloadImage(src, priority).catch(err => ({ error: err, src }))
    );
    
    const batchResults = await Promise.allSettled(batchPromises);
    results.push(...batchResults);
    
    // 다음 배치 전에 잠시 대기 (성능 최적화)
    if (i + batchSize < images.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  return results;
};

export default LazyImage;