import React, { memo } from 'react';
import styled from 'styled-components';
import { useLazyLoad } from '../hooks/useLazyLoad';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${props => props.loaded ? 1 : 0};
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  display: ${props => props.loaded ? 'none' : 'block'};

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

const LazyImageOptimized = memo(({ src, alt, ...props }) => {
  const { ref, isVisible } = useLazyLoad();
  const [loaded, setLoaded] = React.useState(false);

  return (
    <ImageContainer ref={ref} {...props}>
      {isVisible && (
        <Image
          src={src}
          alt={alt}
          loaded={loaded}
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg';
            setLoaded(true);
          }}
        />
      )}
      <Placeholder loaded={loaded} />
    </ImageContainer>
  );
});

LazyImageOptimized.displayName = 'LazyImageOptimized';

export default LazyImageOptimized;