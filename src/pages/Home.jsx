import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import { ProductContext } from "../store/ProductContext";
import { UserContext } from "../store/UserContext";
import { INSTRUMENT_CATEGORIES, REGIONS } from "../utils/firebase";
import {
  FaHeart,
  FaRegHeart,
  FaEye,
  FaMapMarkerAlt,
  FaFilter,
  FaSort,
  FaSearch,
  FaPlus,
  FaTimes,
  FaChevronDown,
  FaCog,
  FaDollarSign,
  FaCalendar,
  FaStar,
  FaComments,
  FaFireAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const SearchSection = styled.div`
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.85);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: var(--space-lg) var(--space-xl) var(--space-sm);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  
  /* 글래스모피즘 효과 */
  background: linear-gradient(145deg, 
    rgba(255, 255, 255, 0.9) 0%, 
    rgba(255, 255, 255, 0.8) 100%);
`;

const SearchBarContainer = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-bg-glass);
  border: 1px solid ${props => props.focused ? 'var(--color-mint-main)' : 'var(--color-border-light)'};
  border-radius: var(--radius-3xl);
  padding: var(--space-4) var(--space-6);
  transition: all var(--transition-normal);
  box-shadow: ${props => props.focused 
    ? 'var(--shadow-lg), var(--glow-mint)' 
    : 'var(--shadow-md)'};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transform: ${props => props.focused ? 'translateY(-1px)' : 'translateY(0)'};
  position: relative;
  overflow: hidden;
  
  /* 글로우 효과 강화 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      var(--color-mint-glass) 0%, 
      transparent 50%, 
      var(--color-orange-glass) 100%);
    opacity: ${props => props.focused ? 0.7 : 0};
    transition: opacity var(--transition-normal);
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-mint-light);
    
    &::before {
      opacity: 0.3;
    }
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 1rem;
  margin-left: var(--space-sm);
  color: var(--color-text-primary);
  font-weight: 500;

  &::placeholder {
    color: var(--color-text-tertiary);
  }
`;

const SearchSuggestions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 101;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
`;

const SuggestionItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #f5f5f5;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const RecentSearches = styled.div`
  margin-bottom: 16px;
`;

const RecentTitle = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecentTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const RecentTag = styled.div`
  background: #f0f0f0;
  color: #666;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterChip = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: 1px solid ${props => props.active ? 'var(--color-mint-main)' : '#e0e0e0'};
  border-radius: 16px;
  background: ${props => props.active ? 'var(--color-mint-main)' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  min-width: fit-content;

  &:hover {
    border-color: var(--color-mint-main);
    color: ${props => props.active ? 'white' : 'var(--color-mint-main)'};
  }
`;

const FilterModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const FilterContent = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 20px 20px 0 0;
  max-height: 80vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
  
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: white;
`;

const FilterTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const FilterCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 4px;
`;

const FilterBody = styled.div`
  padding: 20px;
`;

const FilterGroup = styled.div`
  margin-bottom: 24px;
`;

const FilterGroupTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const FilterOption = styled.button`
  padding: 8px 16px;
  border: 1px solid ${props => props.selected ? 'var(--color-mint-main)' : '#e0e0e0'};
  border-radius: 20px;
  background: ${props => props.selected ? '#fff5f2' : 'white'};
  color: ${props => props.selected ? 'var(--color-mint-main)' : '#666'};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: var(--color-mint-main);
  }
`;

const PriceRange = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`;

const PriceInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: var(--color-mint-main);
  }
`;

const SortSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
`;

const ResultCount = styled.div`
  font-size: 14px;
  color: #666;
`;

const SortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 6px 12px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
  
  &:hover {
    border-color: var(--color-mint-main);
    color: var(--color-mint-main);
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  position: relative;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 20px 120px;
`;

const Section = styled.section`
  margin-bottom: 32px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SectionSubtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 4px 0 0 0;
`;

const SeeMoreButton = styled.button`
  background: none;
  border: none;
  color: #2ed8b6;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 126, 54, 0.1);
  }
`;

const HorizontalScroll = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px 0 8px;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

const HorizontalCard = styled.div`
  min-width: 280px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 12px;
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.98);
  }
`;

const HorizontalImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  background: #f5f5f5;
`;

const HorizontalInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TrendingBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, #2ed8b6, #26c4a8);
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 12px;
  margin-bottom: 4px;
  width: fit-content;
`;

const ProductGrid = styled.div`
  margin-top: 24px;
`;

const ProductCard = styled.div`
  display: flex;
  padding: var(--space-5);
  margin-bottom: var(--space-4);
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.85) 100%);
  border-radius: var(--radius-3xl);
  cursor: pointer;
  transition: all var(--transition-normal) var(--ease-out-cubic);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 
    0 8px 32px rgba(0, 217, 182, 0.04),
    0 2px 8px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  
  &:hover {
    transform: translateY(-6px) scale(1.025);
    box-shadow: 
      0 20px 60px rgba(0, 217, 182, 0.12),
      0 8px 32px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8),
      0 0 40px rgba(0, 217, 182, 0.08);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.98) 0%, 
      rgba(255, 255, 255, 0.92) 100%);
    border-color: rgba(0, 217, 182, 0.25);
  }
  
  &:active {
    transform: translateY(-3px) scale(1.015);
    transition: all var(--transition-micro) var(--ease-out-quad);
    box-shadow: 
      0 12px 40px rgba(0, 217, 182, 0.08),
      0 4px 16px rgba(0, 0, 0, 0.06);
  }
  
  /* Enhanced micro-animations with mint theme */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(0, 217, 182, 0.02) 0%, 
      rgba(0, 217, 182, 0.08) 50%, 
      rgba(255, 126, 54, 0.04) 100%);
    opacity: 0;
    transition: opacity var(--transition-normal) var(--ease-out-cubic);
    border-radius: var(--radius-3xl);
    pointer-events: none;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, 
      var(--color-mint-main), 
      var(--color-mint-light), 
      var(--color-orange));
    opacity: 0;
    border-radius: calc(var(--radius-3xl) + 2px);
    z-index: -1;
    transition: opacity var(--transition-normal) var(--ease-out-cubic);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover::after {
    opacity: 0.6;
  }
  
  position: relative;
  overflow: hidden;
  z-index: 2;
`;

const ProductImageContainer = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  flex-shrink: 0;
  margin-right: var(--space-4);
  background: linear-gradient(135deg, 
    var(--color-mint-lightest) 0%, 
    var(--color-mint-bg) 100%);
  box-shadow: 
    inset 0 2px 8px rgba(0, 217, 182, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04);
  transition: all var(--transition-normal) var(--ease-out-cubic);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      transparent 0%, 
      rgba(0, 217, 182, 0.04) 50%, 
      transparent 100%);
    opacity: 0;
    transition: opacity var(--transition-normal);
    z-index: 2;
  }
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
    box-shadow: 
      inset 0 2px 12px rgba(0, 217, 182, 0.12),
      0 8px 24px rgba(0, 0, 0, 0.08);
      
    &::before {
      opacity: 1;
    }
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all var(--transition-slow) var(--ease-out-cubic);
  filter: contrast(1.02) saturate(1.05);
  
  ${ProductCard}:hover & {
    transform: scale(1.08);
    filter: contrast(1.08) saturate(1.15) brightness(1.02);
  }
  
  &[loading] {
    background: linear-gradient(
      90deg,
      var(--color-mint-lightest) 25%,
      var(--color-mint-bg) 50%,
      var(--color-mint-lightest) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    var(--color-mint-lightest) 0%, 
    var(--color-mint-bg) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-mint-main);
  font-size: 28px;
  opacity: 0.6;
  transition: all var(--transition-normal);
  
  ${ProductCard}:hover & {
    color: var(--color-mint-dark);
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.h3`
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 var(--space-1) 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: -0.02em;
  transition: color var(--transition-fast);
  
  ${ProductCard}:hover & {
    color: var(--color-text-primary);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
`;

const ProductMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-2);
  font-weight: 500;
  
  svg {
    color: var(--color-mint-main);
    transition: color var(--transition-fast);
  }
  
  ${ProductCard}:hover & {
    color: var(--color-text-secondary);
    
    svg {
      color: var(--color-mint-dark);
    }
  }
`;

const ProductPrice = styled.div`
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-mint-dark);
  margin-bottom: var(--space-1);
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, 
    var(--color-mint-dark) 0%, 
    var(--color-mint-main) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all var(--transition-fast);
  
  ${ProductCard}:hover & {
    background: linear-gradient(135deg, 
      var(--color-mint-main) 0%, 
      var(--color-orange) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateY(-1px);
  }
`;

const ProductActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductStats = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  font-weight: 500;
  
  svg {
    color: var(--color-mint-light);
    transition: all var(--transition-fast);
  }
  
  ${ProductCard}:hover & {
    color: var(--color-text-secondary);
    
    svg {
      color: var(--color-mint-main);
      transform: scale(1.1);
    }
  }
`;

const LikeButton = styled.button`
  background: ${props => props.liked 
    ? 'linear-gradient(135deg, var(--color-mint-main), var(--color-mint-light))' 
    : 'rgba(255, 255, 255, 0.6)'};
  border: 1px solid ${props => props.liked 
    ? 'transparent' 
    : 'var(--color-border-light)'};
  color: ${props => props.liked ? 'white' : 'var(--color-text-tertiary)'};
  font-size: 16px;
  cursor: pointer;
  padding: var(--space-2);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal) var(--ease-spring);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: ${props => props.liked 
    ? '0 4px 12px rgba(0, 217, 182, 0.25)' 
    : '0 2px 6px rgba(0, 0, 0, 0.08)'};
  
  &:hover {
    color: ${props => props.liked ? 'white' : 'var(--color-mint-main)'};
    background: ${props => props.liked 
      ? 'linear-gradient(135deg, var(--color-mint-dark), var(--color-mint-main))' 
      : 'rgba(255, 255, 255, 0.9)'};
    border-color: var(--color-mint-light);
    transform: translateY(-2px) scale(1.1);
    box-shadow: ${props => props.liked 
      ? '0 8px 20px rgba(0, 217, 182, 0.35)' 
      : '0 4px 12px rgba(0, 217, 182, 0.15)'};
  }
  
  &:active {
    transform: translateY(0) scale(1.05);
    transition: all var(--transition-micro);
  }
`;

const StatusBadge = styled.div`
  background: ${props => {
    switch(props.type) {
      case 'urgent': return 'linear-gradient(135deg, #ff4757, #ff3742)';
      case 'new': return 'linear-gradient(135deg, var(--color-mint-main), var(--color-mint-light))';
      case 'hot': return 'linear-gradient(135deg, var(--color-orange), #ff6b35)';
      default: return 'linear-gradient(135deg, var(--color-mint-light), var(--color-mint-main))';
    }
  }};
  color: white;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-xl);
  font-size: var(--text-xs);
  font-weight: 700;
  margin-right: var(--space-1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px ${props => {
    switch(props.type) {
      case 'urgent': return 'rgba(255, 71, 87, 0.3)';
      case 'new': return 'rgba(0, 217, 182, 0.3)';
      case 'hot': return 'rgba(255, 126, 54, 0.3)';
      default: return 'rgba(0, 217, 182, 0.3)';
    }
  }};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: all var(--transition-fast);
  
  ${ProductCard}:hover & {
    transform: translateY(-1px) scale(1.05);
    box-shadow: 0 4px 12px ${props => {
      switch(props.type) {
        case 'urgent': return 'rgba(255, 71, 87, 0.4)';
        case 'new': return 'rgba(0, 217, 182, 0.4)';
        case 'hot': return 'rgba(255, 126, 54, 0.4)';
        default: return 'rgba(0, 217, 182, 0.4)';
      }
    }};
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl);
  gap: var(--space-lg);
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-border-light);
  border-top: 3px solid var(--color-mint-main);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 500;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl) var(--space-xl);
  text-align: center;
  gap: var(--space-lg);
  
  h3 {
    color: var(--color-text-secondary);
    font-size: 1.125rem;
    margin: 0;
  }
  
  p {
    color: var(--color-text-tertiary);
    font-size: 0.875rem;
    margin: 0;
  }
  
  svg {
    color: var(--color-text-tertiary);
    opacity: 0.5;
  }
`;

const FAB = styled.button`
  position: fixed;
  bottom: 80px; /* 하단 네비게이션 바(64px) + 여백(16px) */
  right: calc(50vw - 250px + 20px); /* 리스트 섹션(500px) 우측 끝에서 20px 안쪽 */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-mint-main) 0%, var(--color-mint-dark) 100%);
  border: none;
  color: var(--color-text-inverse);
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: var(--shadow-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60; /* 하단 네비게이션보다 위 */
  transition: all var(--transition-normal);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--color-mint-main), var(--color-mint-dark));
    z-index: -1;
    transition: all var(--transition-normal);
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.08);
    box-shadow: 0 20px 40px rgba(0, 217, 182, 0.4);
    
    &::before {
      transform: scale(1.15);
      opacity: 0.8;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.04);
    box-shadow: var(--shadow-lg);
  }
  
  &:focus-visible {
    outline: 3px solid rgba(0, 217, 182, 0.3);
    outline-offset: 3px;
  }
  
  /* 모바일에서는 화면 우측 기준으로 */
  @media (max-width: 500px) {
    right: 20px !important;
    bottom: 80px !important;
  }
`;

const ErrorState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  
  h3 {
    color: #333;
    font-size: 18px;
    margin: 16px 0 8px;
  }
  
  p {
    color: #666;
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const RetryButton = styled.button`
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #e55555;
  }
`;

const EmptyButton = styled.button`
  background: var(--color-mint-main);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease;
  
  &:hover {
    background: #26c4a8;
  }
`;

export default function Home() {
  const navigate = useNavigate();
  const { 
    products, 
    loading, 
    error,
    hasMore, 
    filters, 
    updateFilters, 
    searchProducts, 
    loadMoreProducts,
    toggleLike,
    INSTRUMENT_CATEGORIES,
  } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState(filters);
  const [sortBy, setSortBy] = useState('latest');
  
  const searchInputRef = useRef(null);
  const observerRef = useRef(null);

  // 최근 검색어 로드
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // 검색 제안 생성
  useEffect(() => {
    if (searchValue.length > 0) {
      const suggestions = [];
      
      // 카테고리 매칭
      Object.values(INSTRUMENT_CATEGORIES).forEach(category => {
        if (category.name.toLowerCase().includes(searchValue.toLowerCase())) {
          suggestions.push({
            type: 'category',
            text: category.name,
            value: category.id,
          });
        }
      });
      
      // 상품 제목 매칭
      products.forEach(product => {
        if (product.title.toLowerCase().includes(searchValue.toLowerCase()) && 
            suggestions.length < 5) {
          suggestions.push({
            type: 'product',
            text: product.title,
            value: product.title,
          });
        }
      });
      
      setSearchSuggestions(suggestions);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchValue, products, INSTRUMENT_CATEGORIES]);

  // 무한 스크롤
  useEffect(() => {
    if (observerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore && !loading) {
            loadMoreProducts();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(observerRef.current);
      return () => observer.disconnect();
    }
  }, [hasMore, loading, loadMoreProducts]);

  const handleSearch = useCallback((query) => {
    if (query.trim()) {
      // 최근 검색어에 추가
      const newRecentSearches = [
        query,
        ...recentSearches.filter(item => item !== query)
      ].slice(0, 10);
      
      setRecentSearches(newRecentSearches);
      localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
      
      searchProducts(query);
      setSearchValue(query);
      setSearchFocused(false);
    }
  }, [recentSearches, searchProducts]);

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.type === 'category') {
      updateFilters({ category: suggestion.value, searchQuery: '' });
      setSearchValue('');
    } else {
      handleSearch(suggestion.text);
    }
    setSearchFocused(false);
  };

  const handleFilterApply = () => {
    updateFilters(tempFilters);
    setIsFilterModalOpen(false);
  };

  const handleFilterReset = () => {
    const resetFilters = {
      category: '',
      region: '',
      priceMin: '',
      priceMax: '',
      condition: '',
      sortBy: 'latest',
      searchQuery: '',
    };
    setTempFilters(resetFilters);
    updateFilters(resetFilters);
    setIsFilterModalOpen(false);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  // 인기 상품 계산 (조회수 + 찜하기 수 + 댓글 수 기준)
  const getPopularProducts = () => {
    return products
      .filter(product => product.status === 'active')
      .map(product => ({
        ...product,
        popularityScore: (product.viewCount || 0) * 1 + 
                        (product.likeCount || 0) * 3 + 
                        (product.chatCount || 0) * 2
      }))
      .sort((a, b) => b.popularityScore - a.popularityScore)
      .slice(0, 10);
  };

  // 최근 등록된 상품 (신상품)
  const getRecentProducts = () => {
    return products
      .filter(product => product.status === 'active')
      .sort((a, b) => {
        const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
        const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
        return dateB - dateA;
      })
      .slice(0, 8);
  };

  // 추천 상품 (사용자의 찜한 상품 기반)
  const getRecommendedProducts = () => {
    if (!user.isLoggedIn) {
      // 로그인하지 않은 경우 인기 상품을 추천으로 표시
      return getPopularProducts().slice(0, 6);
    }
    
    const likedProducts = products.filter(product => product.isLikedByUser);
    const likedCategories = [...new Set(likedProducts.map(product => product.category))];
    
    if (likedCategories.length === 0) {
      // 찜한 상품이 없으면 최근 조회한 상품의 카테고리 기반 (임시로 인기 상품)
      return getPopularProducts().slice(0, 6);
    }
    
    // 찜한 카테고리와 같은 카테고리의 상품들을 추천
    return products
      .filter(product => 
        product.status === 'active' &&
        !product.isLikedByUser &&
        product.sellerId !== user.uid &&
        likedCategories.includes(product.category)
      )
      .sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0))
      .slice(0, 6);
  };

  const _popularProducts = getPopularProducts();
  const _recentProducts = getRecentProducts();
  const _recommendedProducts = getRecommendedProducts();

  const formatPrice = (price) => {
    if (price >= 10000) {
      return `${Math.floor(price / 10000)}만원`;
    }
    return `${price.toLocaleString()}원`;
  };

  const formatDate = (date) => {
    if (!date) return '';
    const now = new Date();
    const d = date.toDate ? date.toDate() : new Date(date);
    const diff = now - d;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return '방금 전';
    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    if (days < 7) return `${days}일 전`;
    
    return d.toLocaleDateString();
  };

  const getProductBadge = (product) => {
    // 신규 마크 제거됨 - 사용자 요청에 따라
    if (product.viewCount > 100) return { type: 'hot', text: '인기' };
    if (product.priceNegotiable) return { type: 'urgent', text: '급처' };
    return null;
  };

  const activeFilterCount = Object.values(filters).filter(v => v && v !== '').length;

  return (
    <Container className="main-content">
      <TopBar />
      
      <SearchSection>
        <SearchBarContainer>
          <SearchBar focused={searchFocused}>
            <FaSearch color="#999" />
            <SearchInput
              ref={searchInputRef}
              placeholder="어떤 악기를 찾고 계신가요?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(searchValue);
                }
              }}
            />
            {searchValue && (
              <FaTimes 
                color="#999" 
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setSearchValue('');
                  setSearchFocused(false);
                  // 검색 초기화
                  if (filters.searchQuery) {
                    updateFilters({ searchQuery: '' });
                  }
                }}
              />
            )}
          </SearchBar>
          
          {searchFocused && (
            <SearchSuggestions>
              {searchSuggestions.length > 0 ? (
                searchSuggestions.map((suggestion, index) => (
                  <SuggestionItem 
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.type === 'category' ? <FaCog /> : <FaSearch />}
                    {suggestion.text}
                  </SuggestionItem>
                ))
              ) : recentSearches.length > 0 && (
                <RecentSearches>
                  <RecentTitle>
                    최근 검색어
                    <button 
                      onClick={clearRecentSearches}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: '#999', 
                        fontSize: '12px',
                        cursor: 'pointer' 
                      }}
                    >
                      전체삭제
                    </button>
                  </RecentTitle>
                  <RecentTags>
                    {recentSearches.slice(0, 5).map((search, index) => (
                      <RecentTag 
                        key={index}
                        onClick={() => handleSearch(search)}
                      >
                        <FaClock />
                        {search}
                      </RecentTag>
                    ))}
                  </RecentTags>
                </RecentSearches>
              )}
            </SearchSuggestions>
          )}
        </SearchBarContainer>
        
        <FilterSection>
          <FilterChip 
            active={activeFilterCount > 0}
            onClick={() => setIsFilterModalOpen(true)}
          >
            <FaFilter />
            필터 {activeFilterCount > 0 && `(${activeFilterCount})`}
          </FilterChip>
          
          <FilterChip
            active={filters.category === 'guitar'}
            onClick={() => updateFilters({ 
              category: filters.category === 'guitar' ? '' : 'guitar' 
            })}
          >
            기타
          </FilterChip>
          
          <FilterChip
            active={filters.category === 'piano'}
            onClick={() => updateFilters({ 
              category: filters.category === 'piano' ? '' : 'piano' 
            })}
          >
            피아노
          </FilterChip>
          
          <FilterChip
            active={filters.category === 'drums'}
            onClick={() => updateFilters({ 
              category: filters.category === 'drums' ? '' : 'drums' 
            })}
          >
            드럼
          </FilterChip>
          
          <FilterChip
            active={filters.category === 'wind'}
            onClick={() => updateFilters({ 
              category: filters.category === 'wind' ? '' : 'wind' 
            })}
          >
            관악기
          </FilterChip>
          
          <FilterChip
            active={filters.category === 'audio'}
            onClick={() => updateFilters({ 
              category: filters.category === 'audio' ? '' : 'audio' 
            })}
          >
            오디오
          </FilterChip>
          
          <FilterChip 
            onClick={() => {
              const newSort = sortBy === 'latest' ? 'price' : 'latest';
              setSortBy(newSort);
              updateFilters({ sortBy: newSort });
            }}
          >
            <FaSort />
            {sortBy === 'latest' ? '최신순' : '가격순'}
          </FilterChip>
        </FilterSection>
      </SearchSection>


      <MainContent>
        <ProductGrid>
          {error ? (
            <ErrorState>
              <FaTimes size={48} color="#2ed8b6" />
              <h3>문제가 발생했습니다</h3>
              <p>{error}</p>
              <RetryButton onClick={() => window.location.reload()}>
                다시 시도
              </RetryButton>
            </ErrorState>
          ) : loading && products.length === 0 ? (
            <LoadingContainer>
              <LoadingSpinner />
              <LoadingText>상품을 불러오는 중...</LoadingText>
            </LoadingContainer>
          ) : products.length === 0 ? (
            <EmptyState>
              <FaSearch size={48} color="#ddd" />
              <h3>등록된 상품이 없습니다</h3>
              <p>첫 번째 상품을 등록해보세요!</p>
              <EmptyButton onClick={() => navigate('/add')}>
                <FaPlus />
                상품 등록하기
              </EmptyButton>
            </EmptyState>
          ) : (
            products.map((product) => {
              const badge = getProductBadge(product);
              return (
                <ProductCard 
                  key={product.id}
                  className="ProductCard"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <ProductImageContainer>
                    {product.images && product.images.length > 0 ? (
                      <ProductImage 
                        src={product.images[0]} 
                        alt={product.title}
                        loading="lazy"
                      />
                    ) : (
                      <ImagePlaceholder>
                        <FaSearch />
                      </ImagePlaceholder>
                    )}
                  </ProductImageContainer>
                  
                  <ProductInfo>
                    <div>
                      <ProductMeta>
                        {badge && (
                          <StatusBadge type={badge.type}>
                            {badge.text}
                          </StatusBadge>
                        )}
                        <FaMapMarkerAlt />
                        {product.region} {product.district}
                        <span>•</span>
                        {formatDate(product.createdAt)}
                      </ProductMeta>
                      
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                    </div>
                    
                    <ProductActions>
                      <ProductStats>
                        <FaEye /> {product.viewCount || 0}
                        <FaComments /> {product.chatCount || 0}
                      </ProductStats>
                      
                      <LikeButton
                        liked={product.isLikedByUser}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (user?.isLoggedIn) {
                            toggleLike(product.id);
                          } else {
                            navigate('/login');
                          }
                        }}
                      >
                        {product.isLikedByUser ? <FaHeart /> : <FaRegHeart />}
                      </LikeButton>
                    </ProductActions>
                  </ProductInfo>
                </ProductCard>
              );
            })
          )}
          
          {hasMore && (
            <div ref={observerRef} style={{ height: '1px' }} />
          )}
        </ProductGrid>
        
        {/* 상품 등록 플로팅 버튼 - 하단바 기준 고정 */}
        <FAB 
          onClick={() => navigate('/add')}
          aria-label="상품 등록하기"
          title="상품 등록하기"
        >
          <FaPlus />
        </FAB>
        
      </MainContent>

      {/* 필터 모달 */}
      {isFilterModalOpen && (
        <FilterModal onClick={() => setIsFilterModalOpen(false)}>
          <FilterContent onClick={(e) => e.stopPropagation()}>
            <FilterHeader>
              <FilterTitle>필터</FilterTitle>
              <FilterCloseButton onClick={() => setIsFilterModalOpen(false)}>
                <FaTimes />
              </FilterCloseButton>
            </FilterHeader>
            
            <FilterBody>
              <FilterGroup>
                <FilterGroupTitle>가격대</FilterGroupTitle>
                <PriceRange>
                  <PriceInput
                    type="number"
                    placeholder="최소 금액"
                    value={tempFilters.priceMin}
                    onChange={(e) => setTempFilters(prev => ({
                      ...prev,
                      priceMin: e.target.value
                    }))}
                  />
                  <span>~</span>
                  <PriceInput
                    type="number"
                    placeholder="최대 금액"
                    value={tempFilters.priceMax}
                    onChange={(e) => setTempFilters(prev => ({
                      ...prev,
                      priceMax: e.target.value
                    }))}
                  />
                </PriceRange>
              </FilterGroup>
              
              <FilterGroup>
                <FilterGroupTitle>상품 상태</FilterGroupTitle>
                <FilterOptions>
                  {['excellent', 'good', 'fair', 'poor'].map(condition => (
                    <FilterOption
                      key={condition}
                      selected={tempFilters.condition === condition}
                      onClick={() => setTempFilters(prev => ({
                        ...prev,
                        condition: prev.condition === condition ? '' : condition
                      }))}
                    >
                      {condition === 'excellent' && '매우 좋음'}
                      {condition === 'good' && '좋음'}
                      {condition === 'fair' && '보통'}
                      {condition === 'poor' && '나쁨'}
                    </FilterOption>
                  ))}
                </FilterOptions>
              </FilterGroup>
              
              <div style={{ 
                display: 'flex', 
                gap: '12px', 
                marginTop: '24px',
                paddingTop: '20px',
                borderTop: '1px solid #f0f0f0'
              }}>
                <button 
                  onClick={handleFilterReset}
                  style={{
                    flex: 1,
                    padding: '12px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    background: 'white',
                    color: '#666',
                    cursor: 'pointer'
                  }}
                >
                  초기화
                </button>
                <button 
                  onClick={handleFilterApply}
                  style={{
                    flex: 2,
                    padding: '12px',
                    border: 'none',
                    borderRadius: '8px',
                    background: 'var(--color-mint-main)',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  적용하기
                </button>
              </div>
            </FilterBody>
          </FilterContent>
        </FilterModal>
      )}
    </Container>
  );
}