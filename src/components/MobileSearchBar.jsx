import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { designSystem2025 } from '../styles/designSystem2025';
import { FiSearch, FiX, FiFilter, FiMapPin, FiDollarSign } from 'react-icons/fi';

const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  
  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const SearchInputContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  ${designSystem2025.accessibility.focusRing}
  width: 100%;
  height: 48px;
  padding: 0 20px 0 50px;
  border: 2px solid transparent;
  border-radius: 24px;
  background: rgba(0, 0, 0, 0.05);
  font-size: ${designSystem2025.typography.sizes.base};
  color: ${designSystem2025.colors.neutral[900]};
  transition: all 0.3s ease;
  
  /* 모바일 터치 최적화 */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  -webkit-appearance: none;
  
  &:focus {
    border-color: ${designSystem2025.colors.mint[500]};
    background: rgba(255, 255, 255, 0.9);
    outline: none;
    box-shadow: 0 4px 20px rgba(46, 216, 182, 0.2);
  }
  
  &::placeholder {
    color: ${designSystem2025.colors.neutral[500]};
  }
  
  [data-theme="dark"] & {
    background: rgba(255, 255, 255, 0.1);
    color: ${designSystem2025.colors.neutral[100]};
    
    &:focus {
      background: rgba(255, 255, 255, 0.15);
    }
    
    &::placeholder {
      color: ${designSystem2025.colors.neutral[400]};
    }
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${designSystem2025.colors.neutral[500]};
  font-size: 20px;
  pointer-events: none;
  z-index: 1;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  color: ${designSystem2025.colors.neutral[500]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.show ? 1 : 0};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  transition: all 0.2s ease;
  
  /* 터치 최적화 */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  min-width: 32px;
  min-height: 32px;
  
  &:hover {
    color: ${designSystem2025.colors.neutral[700]};
  }
  
  &:active {
    transform: translateY(-50%) scale(0.9);
  }
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
    
    &:hover {
      color: ${designSystem2025.colors.neutral[200]};
    }
  }
`;

const FilterButton = styled.button`
  ${designSystem2025.accessibility.focusRing}
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 24px;
  background: ${props => props.active 
    ? designSystem2025.colors.mint[500] 
    : 'rgba(0, 0, 0, 0.05)'};
  color: ${props => props.active 
    ? 'white' 
    : designSystem2025.colors.neutral[600]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  
  /* 터치 최적화 */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  
  &:hover {
    background: ${props => props.active 
      ? designSystem2025.colors.mint[600] 
      : 'rgba(0, 0, 0, 0.08)'};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0) scale(0.95);
  }
  
  [data-theme="dark"] & {
    background: ${props => props.active 
      ? designSystem2025.colors.mint[500] 
      : 'rgba(255, 255, 255, 0.1)'};
    color: ${props => props.active 
      ? 'white' 
      : designSystem2025.colors.neutral[400]};
    
    &:hover {
      background: ${props => props.active 
        ? designSystem2025.colors.mint[600] 
        : 'rgba(255, 255, 255, 0.15)'};
    }
  }
`;

const FilterBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${designSystem2025.colors.red[500]};
  color: white;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  
  [data-theme="dark"] & {
    border-color: rgba(0, 0, 0, 0.9);
  }
`;

const FilterPanel = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 0 0 16px 16px;
  padding: 20px 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(${props => props.show ? '0' : '-20px'});
  opacity: ${props => props.show ? 1 : 0};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
  
  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.95);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
`;

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 80px;
  font-size: ${designSystem2025.typography.sizes.sm};
  font-weight: ${designSystem2025.typography.weights.medium};
  color: ${designSystem2025.colors.neutral[700]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[300]};
  }
`;

const FilterSelect = styled.select`
  flex: 1;
  height: 40px;
  padding: 0 16px;
  border: 1px solid ${designSystem2025.colors.neutral[300]};
  border-radius: 12px;
  background: white;
  font-size: ${designSystem2025.typography.sizes.sm};
  cursor: pointer;
  
  [data-theme="dark"] & {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const FilterRange = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const RangeInput = styled.input`
  flex: 1;
  height: 40px;
  padding: 0 12px;
  border: 1px solid ${designSystem2025.colors.neutral[300]};
  border-radius: 8px;
  background: white;
  font-size: ${designSystem2025.typography.sizes.sm};
  text-align: right;
  
  [data-theme="dark"] & {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const RecentSearches = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 0 0 16px 16px;
  padding: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(${props => props.show ? '0' : '-10px'});
  opacity: ${props => props.show ? 1 : 0};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  transition: all 0.2s ease;
  z-index: 1000;
  
  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.95);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
`;

const RecentItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: none;
  text-align: left;
  font-size: ${designSystem2025.typography.sizes.sm};
  color: ${designSystem2025.colors.neutral[700]};
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  
  /* 터치 최적화 */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  min-height: 44px;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[300]};
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
    
    &:active {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const MobileSearchBar = ({
  value = '',
  onChange,
  onSearch,
  onFilterChange,
  placeholder = '상품 검색...',
  filters = {},
  recentSearches = []
}) => {
  const [localValue, setLocalValue] = useState(value);
  const [showFilters, setShowFilters] = useState(false);
  const [showRecent, setShowRecent] = useState(false);
  const [localFilters, setLocalFilters] = useState(filters);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // 외부 value 변경 감지
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowFilters(false);
        setShowRecent(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // 검색 입력 처리
  const handleInputChange = useCallback((e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }, [onChange]);

  // 검색 실행
  const handleSearch = useCallback(() => {
    if (onSearch) {
      onSearch(localValue, localFilters);
    }
    setShowRecent(false);
    inputRef.current?.blur();
  }, [localValue, localFilters, onSearch]);

  // 엔터 키 처리
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  // 검색어 지우기
  const handleClear = useCallback(() => {
    setLocalValue('');
    if (onChange) {
      onChange('');
    }
    inputRef.current?.focus();
  }, [onChange]);

  // 포커스 처리
  const handleFocus = useCallback(() => {
    if (recentSearches.length > 0 && !localValue) {
      setShowRecent(true);
    }
    setShowFilters(false);
  }, [recentSearches.length, localValue]);

  // 최근 검색어 선택
  const handleRecentSelect = useCallback((searchTerm) => {
    setLocalValue(searchTerm);
    if (onChange) {
      onChange(searchTerm);
    }
    if (onSearch) {
      onSearch(searchTerm, localFilters);
    }
    setShowRecent(false);
  }, [onChange, onSearch, localFilters]);

  // 필터 토글
  const handleFilterToggle = useCallback(() => {
    setShowFilters(!showFilters);
    setShowRecent(false);
  }, [showFilters]);

  // 필터 변경
  const handleFilterUpdate = useCallback((filterKey, value) => {
    const newFilters = { ...localFilters, [filterKey]: value };
    setLocalFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  }, [localFilters, onFilterChange]);

  // 활성 필터 개수 계산
  const activeFilterCount = Object.values(localFilters).filter(value => 
    value && value !== '' && value !== 'all'
  ).length;

  return (
    <SearchContainer ref={containerRef}>
      <SearchWrapper>
        <SearchInputContainer>
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
          <SearchInput
            ref={inputRef}
            type="text"
            value={localValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onFocus={handleFocus}
            placeholder={placeholder}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <ClearButton 
            show={localValue.length > 0}
            onClick={handleClear}
            type="button"
            aria-label="검색어 지우기"
          >
            <FiX />
          </ClearButton>
          
          {/* 최근 검색어 */}
          <RecentSearches show={showRecent}>
            {recentSearches.map((search, index) => (
              <RecentItem
                key={index}
                onClick={() => handleRecentSelect(search)}
              >
                {search}
              </RecentItem>
            ))}
          </RecentSearches>
        </SearchInputContainer>

        <FilterButton 
          active={showFilters}
          onClick={handleFilterToggle}
          aria-label="필터"
        >
          <FiFilter />
          {activeFilterCount > 0 && (
            <FilterBadge>{activeFilterCount}</FilterBadge>
          )}
        </FilterButton>
      </SearchWrapper>

      {/* 필터 패널 */}
      <FilterPanel show={showFilters}>
        <FilterRow>
          <FilterLabel>
            <FiMapPin size={16} />
            지역
          </FilterLabel>
          <FilterSelect
            value={localFilters.location || ''}
            onChange={(e) => handleFilterUpdate('location', e.target.value)}
          >
            <option value="">전체 지역</option>
            <option value="seoul">서울</option>
            <option value="busan">부산</option>
            <option value="daegu">대구</option>
            <option value="incheon">인천</option>
            <option value="gwangju">광주</option>
            <option value="daejeon">대전</option>
            <option value="ulsan">울산</option>
          </FilterSelect>
        </FilterRow>

        <FilterRow>
          <FilterLabel>카테고리</FilterLabel>
          <FilterSelect
            value={localFilters.category || ''}
            onChange={(e) => handleFilterUpdate('category', e.target.value)}
          >
            <option value="">전체 카테고리</option>
            <option value="guitar">기타</option>
            <option value="piano">피아노/키보드</option>
            <option value="drums">드럼</option>
            <option value="wind">관악기</option>
            <option value="string">현악기</option>
            <option value="audio">오디오 장비</option>
            <option value="other">기타</option>
          </FilterSelect>
        </FilterRow>

        <FilterRow>
          <FilterLabel>
            <FiDollarSign size={16} />
            가격
          </FilterLabel>
          <FilterRange>
            <RangeInput
              type="number"
              placeholder="최소 가격"
              value={localFilters.minPrice || ''}
              onChange={(e) => handleFilterUpdate('minPrice', e.target.value)}
            />
            <span>~</span>
            <RangeInput
              type="number"
              placeholder="최대 가격"
              value={localFilters.maxPrice || ''}
              onChange={(e) => handleFilterUpdate('maxPrice', e.target.value)}
            />
          </FilterRange>
        </FilterRow>
      </FilterPanel>
    </SearchContainer>
  );
};

export default MobileSearchBar;