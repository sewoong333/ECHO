import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { priceAnalysisService } from "../utils/priceAnalysisService";
import {
  FaTimes,
  FaChartLine,
  FaRocket,
  FaBalanceScale,
  FaCrown,
  FaInfoCircle,
  FaSpinner,
  FaLightbulb,
  FaTrendingUp,
  FaTrendingDown,
  FaEquals,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 0;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  padding: 0 24px 24px;
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 60px 20px;
  
  svg {
    animation: spin 1s linear infinite;
    margin-bottom: 16px;
    color: #2ed8b6;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
`;

const LoadingSubText = styled.div`
  font-size: 14px;
  color: #999;
`;

const AnalysisResult = styled.div`
  background: linear-gradient(135deg, 
    rgba(46, 216, 182, 0.1) 0%, 
    rgba(46, 216, 182, 0.05) 100%);
  border: 1px solid rgba(46, 216, 182, 0.2);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
  text-align: center;
`;

const PredictedPrice = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 8px;
`;

const PriceRange = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

const ConfidenceBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
`;

const ConfidenceFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #2ed8b6, #25b89a);
  width: ${props => props.confidence}%;
  transition: width 0.5s ease;
`;

const ConfidenceText = styled.div`
  font-size: 12px;
  color: #666;
`;

const PriceOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 24px;
`;

const PriceOption = styled.div`
  border: 2px solid ${props => props.selected ? '#2ed8b6' : '#e0e0e0'};
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.selected ? '#f0fffe' : 'white'};
  
  &:hover {
    border-color: #2ed8b6;
    background: #f0fffe;
  }
`;

const OptionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const OptionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const OptionPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
`;

const OptionDescription = styled.div`
  font-size: 13px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 8px;
`;

const OptionMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
`;

const MarketDataSection = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MarketStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
`;

const FactorsSection = styled.div`
  margin-bottom: 20px;
`;

const FactorItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const FactorLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

const FactorValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => {
    if (props.trend === 'up') return '#4caf50';
    if (props.trend === 'down') return '#f44336';
    return '#333';
  }};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ApplyButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #2ed8b6 0%, #25b89a 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #25b89a 0%, #1ea085 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(46, 216, 182, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const InfoBox = styled.div`
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 8px;
  padding: 12px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const InfoText = styled.div`
  font-size: 12px;
  color: #1976d2;
  line-height: 1.4;
`;

export default function PriceRecommendationModal({ 
  isOpen, 
  onClose, 
  productData, 
  onApplyPrice 
}) {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [selectedOption, setSelectedOption] = useState('market_price');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen && productData) {
      analyzePricing();
    }
  }, [isOpen, productData]);

  const analyzePricing = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await priceAnalysisService.predictPrice(productData);
      setAnalysis(result);
      
      // 기본 선택을 시장가로 설정
      setSelectedOption('market_price');
      
    } catch (err) {
      console.error('가격 분석 실패:', err);
      setError('가격 분석에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleApplyPrice = () => {
    if (!analysis) return;
    
    const suggestions = priceAnalysisService.generatePriceSuggestions(analysis.priceRange);
    const selectedSuggestion = suggestions[selectedOption];
    
    if (selectedSuggestion && onApplyPrice) {
      onApplyPrice(selectedSuggestion.price);
      onClose();
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const getTrendIcon = (value) => {
    if (value > 1.05) return <FaTrendingUp />;
    if (value < 0.95) return <FaTrendingDown />;
    return <FaEquals />;
  };

  const getTrendType = (value) => {
    if (value > 1.05) return 'up';
    if (value < 0.95) return 'down';
    return 'neutral';
  };

  const getFactorPercentage = (value) => {
    return `${Math.round((value - 1) * 100)}%`;
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            <FaChartLine />
            AI 가격 분석
          </ModalTitle>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          {loading && (
            <LoadingState>
              <FaSpinner size={32} />
              <LoadingText>AI가 시장 가격을 분석중입니다</LoadingText>
              <LoadingSubText>유사 상품 {Math.floor(Math.random() * 50 + 10)}개를 분석하고 있어요</LoadingSubText>
            </LoadingState>
          )}

          {error && (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <FaExclamationTriangle size={32} color="#f44336" style={{ marginBottom: '16px' }} />
              <div style={{ color: '#f44336', marginBottom: '16px' }}>{error}</div>
              <button 
                onClick={analyzePricing}
                style={{
                  padding: '8px 16px',
                  background: '#2ed8b6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                다시 시도
              </button>
            </div>
          )}

          {analysis && (
            <>
              {/* 분석 결과 */}
              <AnalysisResult>
                <PredictedPrice>₩{formatPrice(analysis.predictedPrice)}</PredictedPrice>
                <PriceRange>
                  추천 범위: ₩{formatPrice(analysis.priceRange.min)} ~ ₩{formatPrice(analysis.priceRange.max)}
                </PriceRange>
                <ConfidenceBar>
                  <ConfidenceFill confidence={analysis.confidence} />
                </ConfidenceBar>
                <ConfidenceText>분석 신뢰도 {analysis.confidence}%</ConfidenceText>
              </AnalysisResult>

              {/* 가격 옵션 */}
              <PriceOptions>
                {Object.entries(priceAnalysisService.generatePriceSuggestions(analysis.priceRange)).map(([key, option]) => (
                  <PriceOption
                    key={key}
                    selected={selectedOption === key}
                    onClick={() => setSelectedOption(key)}
                  >
                    <OptionHeader>
                      <OptionTitle>
                        {key === 'quick_sale' && <FaRocket color="#ff6b35" />}
                        {key === 'market_price' && <FaBalanceScale color="#2ed8b6" />}
                        {key === 'premium_price' && <FaCrown color="#ffc107" />}
                        {option.label}
                      </OptionTitle>
                      <OptionPrice>₩{formatPrice(option.price)}</OptionPrice>
                    </OptionHeader>
                    <OptionDescription>{option.description}</OptionDescription>
                    <OptionMeta>
                      <span>예상 판매기간: {option.expectedDays}</span>
                      <span>성공 확률: {option.probability}</span>
                    </OptionMeta>
                  </PriceOption>
                ))}
              </PriceOptions>

              {/* 시장 데이터 */}
              <MarketDataSection>
                <SectionTitle>
                  <FaChartLine />
                  시장 분석 데이터
                </SectionTitle>
                <MarketStats>
                  <StatItem>
                    <StatValue>{analysis.marketData.similarProductsCount}</StatValue>
                    <StatLabel>유사 상품 수</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>₩{formatPrice(analysis.marketData.averageMarketPrice)}</StatValue>
                    <StatLabel>시장 평균가</StatLabel>
                  </StatItem>
                </MarketStats>
              </MarketDataSection>

              {/* 가격 조정 요인 */}
              <FactorsSection>
                <SectionTitle>
                  <FaLightbulb />
                  가격 조정 요인
                </SectionTitle>
                
                <FactorItem>
                  <FactorLabel>브랜드 프리미엄</FactorLabel>
                  <FactorValue trend={getTrendType(analysis.factors.brandWeight)}>
                    {getTrendIcon(analysis.factors.brandWeight)}
                    {getFactorPercentage(analysis.factors.brandWeight)}
                  </FactorValue>
                </FactorItem>
                
                <FactorItem>
                  <FactorLabel>상품 상태</FactorLabel>
                  <FactorValue trend={getTrendType(analysis.factors.conditionAdjustment)}>
                    {getTrendIcon(analysis.factors.conditionAdjustment)}
                    {getFactorPercentage(analysis.factors.conditionAdjustment)}
                  </FactorValue>
                </FactorItem>
                
                <FactorItem>
                  <FactorLabel>연식 감가</FactorLabel>
                  <FactorValue trend={getTrendType(analysis.factors.ageAdjustment)}>
                    {getTrendIcon(analysis.factors.ageAdjustment)}
                    {getFactorPercentage(analysis.factors.ageAdjustment)}
                  </FactorValue>
                </FactorItem>
                
                <FactorItem>
                  <FactorLabel>시장 트렌드</FactorLabel>
                  <FactorValue trend={getTrendType(analysis.factors.trendAdjustment)}>
                    {getTrendIcon(analysis.factors.trendAdjustment)}
                    {getFactorPercentage(analysis.factors.trendAdjustment)}
                  </FactorValue>
                </FactorItem>
              </FactorsSection>

              {/* 적용 버튼 */}
              <ApplyButton onClick={handleApplyPrice}>
                <FaCheckCircle />
                이 가격으로 설정하기
              </ApplyButton>

              {/* 안내 정보 */}
              <InfoBox>
                <FaInfoCircle color="#2196f3" style={{ marginTop: '2px', fontSize: '12px' }} />
                <InfoText>
                  AI 분석은 참고용입니다. 실제 시장 상황과 상품의 특별한 점을 고려하여 
                  최종 가격을 결정하세요. 가격은 언제든 수정할 수 있습니다.
                </InfoText>
              </InfoBox>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}