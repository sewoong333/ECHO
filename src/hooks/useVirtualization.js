import { useState, useEffect, useMemo } from 'react';

export const useVirtualization = (
  items,
  itemHeight,
  containerHeight,
  overscan = 5
) => {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleItems = useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      items.length - 1,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );

    return {
      startIndex,
      endIndex,
      visibleItems: items.slice(startIndex, endIndex + 1),
      totalHeight: items.length * itemHeight,
      offsetY: startIndex * itemHeight
    };
  }, [items, itemHeight, scrollTop, containerHeight, overscan]);

  const onScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return {
    ...visibleItems,
    onScroll
  };
};