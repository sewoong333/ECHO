import { createContext, useContext, useMemo, useCallback, useRef, useEffect, useState } from 'react';

// Context 분할을 통한 리렌더링 최적화
export const createOptimizedContext = (name) => {
  const StateContext = createContext();
  const ActionsContext = createContext();

  StateContext.displayName = `${name}State`;
  ActionsContext.displayName = `${name}Actions`;

  const useStateContext = () => {
    const context = useContext(StateContext);
    if (context === undefined) {
      throw new Error(`use${name}State must be used within a ${name}Provider`);
    }
    return context;
  };

  const useActionsContext = () => {
    const context = useContext(ActionsContext);
    if (context === undefined) {
      throw new Error(`use${name}Actions must be used within a ${name}Provider`);
    }
    return context;
  };

  return {
    StateContext,
    ActionsContext,
    useStateContext,
    useActionsContext
  };
};

// 선택적 구독을 위한 훅
export const useSelector = (context, selector, equalityFn = Object.is) => {
  const store = useContext(context);
  const selectorRef = useRef(selector);
  const selectedRef = useRef();
  const errorRef = useRef();

  // 선택자가 변경되었는지 확인
  if (selectorRef.current !== selector) {
    selectorRef.current = selector;
    selectedRef.current = undefined;
  }

  let selected;
  try {
    selected = selector(store);
  } catch (err) {
    if (errorRef.current && errorRef.current.selector === selector) {
      selected = errorRef.current.result;
    } else {
      throw err;
    }
  }

  // 이전 값과 비교하여 변경되었을 때만 업데이트
  const isChanged = selectedRef.current === undefined || 
                   !equalityFn(selectedRef.current, selected);

  if (isChanged) {
    selectedRef.current = selected;
    errorRef.current = undefined;
  }

  return selectedRef.current;
};

// 메모이제이션된 값을 위한 훅
export const useMemoizedValue = (factory, deps, equalityFn = Object.is) => {
  const valueRef = useRef();
  const depsRef = useRef();

  const areDepsEqual = depsRef.current && 
    deps.length === depsRef.current.length &&
    deps.every((dep, index) => equalityFn(dep, depsRef.current[index]));

  if (!areDepsEqual) {
    valueRef.current = factory();
    depsRef.current = deps;
  }

  return valueRef.current;
};

// 안정된 콜백을 위한 훅
export const useStableCallback = (callback, deps = []) => {
  const callbackRef = useRef(callback);
  const depsRef = useRef(deps);

  // deps가 변경되었을 때만 콜백 업데이트
  const areDepsEqual = depsRef.current && 
    deps.length === depsRef.current.length &&
    deps.every((dep, index) => Object.is(dep, depsRef.current[index]));

  if (!areDepsEqual) {
    callbackRef.current = callback;
    depsRef.current = deps;
  }

  return useCallback((...args) => {
    return callbackRef.current(...args);
  }, []);
};

// 배치 업데이트를 위한 훅
export const useBatchedUpdates = () => {
  const updateQueue = useRef([]);
  const isScheduled = useRef(false);

  const flush = useCallback(() => {
    const queue = updateQueue.current;
    updateQueue.current = [];
    isScheduled.current = false;

    // 모든 업데이트를 배치로 실행
    queue.forEach(update => {
      try {
        update();
      } catch (error) {
        console.error('Batched update error:', error);
      }
    });
  }, []);

  const batchUpdate = useCallback((updateFn) => {
    updateQueue.current.push(updateFn);
    
    if (!isScheduled.current) {
      isScheduled.current = true;
      Promise.resolve().then(flush);
    }
  }, [flush]);

  return batchUpdate;
};

// 디바운스된 값을 위한 훅
export const useDebouncedValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef();

  useEffect(() => {
    // 이전 타이머 정리
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 새 타이머 설정
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 클린업
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};

// 스로틀된 콜백을 위한 훅
export const useThrottledCallback = (callback, delay) => {
  const lastCall = useRef(0);
  const timeoutRef = useRef();

  return useCallback((...args) => {
    const now = Date.now();
    
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    } else {
      // 마지막 호출을 보장하기 위한 타이머
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        lastCall.current = Date.now();
        callback(...args);
      }, delay - (now - lastCall.current));
    }
  }, [callback, delay]);
};

// 가상화된 리스트를 위한 훅
export const useVirtualizedList = (items, itemHeight, containerHeight, overscan = 5) => {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleRange = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight),
      items.length
    );

    return {
      start: Math.max(0, startIndex - overscan),
      end: Math.min(items.length, endIndex + overscan),
      total: items.length
    };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.start, visibleRange.end).map((item, index) => ({
      ...item,
      index: visibleRange.start + index,
      top: (visibleRange.start + index) * itemHeight
    }));
  }, [items, visibleRange.start, visibleRange.end, itemHeight]);

  const totalHeight = items.length * itemHeight;

  const handleScroll = useThrottledCallback((event) => {
    setScrollTop(event.target.scrollTop);
  }, 16); // 60fps

  return {
    visibleItems,
    totalHeight,
    handleScroll,
    visibleRange
  };
};

// 무한 스크롤을 위한 훅
export const useInfiniteScroll = (loadMore, hasMore, threshold = 300) => {
  const [loading, setLoading] = useState(false);
  const observerRef = useRef();

  const lastElementRef = useCallback((node) => {
    if (loading) return;
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setLoading(true);
        loadMore().finally(() => setLoading(false));
      }
    }, {
      threshold: 0.1,
      rootMargin: `${threshold}px`
    });
    
    if (node) observerRef.current.observe(node);
  }, [loading, hasMore, loadMore, threshold]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { lastElementRef, loading };
};

// 검색 최적화를 위한 훅
export const useOptimizedSearch = (searchFn, delay = 300) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebouncedValue(query, delay);
  const searchIdRef = useRef(0);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    setLoading(true);
    const searchId = ++searchIdRef.current;

    searchFn(debouncedQuery)
      .then(newResults => {
        // 최신 검색인지 확인 (race condition 방지)
        if (searchId === searchIdRef.current) {
          setResults(newResults);
        }
      })
      .catch(error => {
        if (searchId === searchIdRef.current) {
          console.error('Search error:', error);
          setResults([]);
        }
      })
      .finally(() => {
        if (searchId === searchIdRef.current) {
          setLoading(false);
        }
      });
  }, [debouncedQuery, searchFn]);

  return {
    query,
    setQuery,
    results,
    loading,
    debouncedQuery
  };
};

// 이미지 지연 로딩을 위한 훅
export const useLazyImage = (src, threshold = 0.1) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, threshold]);

  const handleLoad = useCallback(() => {
    setLoaded(true);
    setError(false);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
    setLoaded(false);
  }, []);

  return {
    ref: imgRef,
    src: imageSrc,
    loaded,
    error,
    onLoad: handleLoad,
    onError: handleError
  };
};

// 성능 측정을 위한 훅
export const usePerformanceMeasure = (name) => {
  const startTime = useRef();

  const start = useCallback(() => {
    startTime.current = performance.now();
    performance.mark(`${name}-start`);
  }, [name]);

  const end = useCallback(() => {
    if (startTime.current) {
      const duration = performance.now() - startTime.current;
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
      
      console.log(`${name} took ${duration.toFixed(2)}ms`);
      return duration;
    }
    return 0;
  }, [name]);

  return { start, end };
};

export default {
  createOptimizedContext,
  useSelector,
  useMemoizedValue,
  useStableCallback,
  useBatchedUpdates,
  useDebouncedValue,
  useThrottledCallback,
  useVirtualizedList,
  useInfiniteScroll,
  useOptimizedSearch,
  useLazyImage,
  usePerformanceMeasure
};