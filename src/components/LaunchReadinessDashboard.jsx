import React, { useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { designSystem2025 } from '../styles/designSystem2025';
import { launchReadinessChecker, LaunchCategories, Priority } from '../utils/launchReadinessChecker';
import { 
  FiPlay, FiCheck, FiX, FiAlertTriangle, FiInfo, FiRefreshCw, 
  FiShield, FiSmartphone, FiZap, FiUsers, FiSearch, FiEye,
  FiSettings, FiActivity, FiAward, FiExternalLink 
} from 'react-icons/fi';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const DashboardContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
  background: ${designSystem2025.colors.neutral[50]};
  min-height: 100vh;
  
  [data-theme="dark"] & {
    background: ${designSystem2025.colors.neutral[900]};
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: ${designSystem2025.typography.sizes['4xl']};
  font-weight: ${designSystem2025.typography.weights.bold};
  color: ${designSystem2025.colors.neutral[900]};
  margin-bottom: 12px;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const Subtitle = styled.p`
  font-size: ${designSystem2025.typography.sizes.lg};
  color: ${designSystem2025.colors.neutral[600]};
  margin-bottom: 32px;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const OverallScoreCard = styled.div`
  ${designSystem2025.glassmorphism.enhanced}
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  margin-bottom: 32px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${props => props.ready 
      ? `linear-gradient(90deg, ${designSystem2025.colors.success[500]}, ${designSystem2025.colors.mint[500]})`
      : `linear-gradient(90deg, ${designSystem2025.colors.warning[500]}, ${designSystem2025.colors.red[500]})`
    };
  }
`;

const ScoreDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
`;

const ScoreValue = styled.div`
  font-size: 72px;
  font-weight: ${designSystem2025.typography.weights.bold};
  color: ${props => props.ready 
    ? designSystem2025.colors.success[600] 
    : designSystem2025.colors.warning[600]
  };
  line-height: 1;
`;

const ScoreLabel = styled.div`
  font-size: ${designSystem2025.typography.sizes.xl};
  color: ${designSystem2025.colors.neutral[700]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[300]};
  }
`;

const ReadinessStatus = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  border-radius: 16px;
  font-size: ${designSystem2025.typography.sizes.lg};
  font-weight: ${designSystem2025.typography.weights.semibold};
  
  ${props => props.ready ? `
    background: linear-gradient(135deg, ${designSystem2025.colors.success[100]}, ${designSystem2025.colors.mint[100]});
    color: ${designSystem2025.colors.success[800]};
    animation: ${pulse} 2s infinite;
  ` : `
    background: linear-gradient(135deg, ${designSystem2025.colors.warning[100]}, ${designSystem2025.colors.red[100]});
    color: ${designSystem2025.colors.warning[800]};
  `}
`;

const ActionButton = styled.button`
  ${designSystem2025.accessibility.focusRing}
  padding: 16px 32px;
  border: none;
  border-radius: 16px;
  font-size: ${designSystem2025.typography.sizes.base};
  font-weight: ${designSystem2025.typography.weights.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
  margin-top: 24px;
  
  ${props => props.variant === 'primary' ? `
    background: ${designSystem2025.colors.mint[500]};
    color: white;
    
    &:hover {
      background: ${designSystem2025.colors.mint[600]};
      transform: translateY(-2px);
      box-shadow: 0 12px 24px ${designSystem2025.colors.mint[500]}40;
    }
  ` : `
    background: ${designSystem2025.colors.neutral[200]};
    color: ${designSystem2025.colors.neutral[700]};
    
    &:hover {
      background: ${designSystem2025.colors.neutral[300]};
    }
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${designSystem2025.colors.neutral[200]};
  border-radius: 4px;
  overflow: hidden;
  margin: 16px 0;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${designSystem2025.colors.mint[500]}, ${designSystem2025.colors.blue[500]});
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
  border-radius: 4px;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const CategoryCard = styled.div`
  ${designSystem2025.glassmorphism.enhanced}
  border-radius: 20px;
  padding: 24px;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: ${designSystem2025.typography.sizes.lg};
  font-weight: ${designSystem2025.typography.weights.semibold};
  color: ${designSystem2025.colors.neutral[900]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const CategoryIcon = styled.div`
  padding: 8px;
  border-radius: 12px;
  background: ${props => props.color}20;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryScore = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${designSystem2025.typography.sizes.sm};
  font-weight: ${designSystem2025.typography.weights.medium};
  color: ${designSystem2025.colors.neutral[600]};
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const CheckItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid ${designSystem2025.colors.neutral[200]};
  
  &:last-child {
    border-bottom: none;
  }
  
  [data-theme="dark"] & {
    border-bottom-color: ${designSystem2025.colors.neutral[700]};
  }
`;

const CheckIcon = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 2px;
  
  ${props => {
    switch (props.status) {
      case 'passed':
        return `
          background: ${designSystem2025.colors.success[100]};
          color: ${designSystem2025.colors.success[700]};
        `;
      case 'failed':
        return `
          background: ${designSystem2025.colors.red[100]};
          color: ${designSystem2025.colors.red[700]};
        `;
      case 'manual':
        return `
          background: ${designSystem2025.colors.blue[100]};
          color: ${designSystem2025.colors.blue[700]};
        `;
      default:
        return `
          background: ${designSystem2025.colors.neutral[200]};
          color: ${designSystem2025.colors.neutral[600]};
        `;
    }
  }}
`;

const CheckContent = styled.div`
  flex: 1;
`;

const CheckName = styled.div`
  font-weight: ${designSystem2025.typography.weights.medium};
  color: ${designSystem2025.colors.neutral[900]};
  margin-bottom: 4px;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[100]};
  }
`;

const CheckMessage = styled.div`
  font-size: ${designSystem2025.typography.sizes.sm};
  color: ${designSystem2025.colors.neutral[600]};
  line-height: 1.4;
  
  [data-theme="dark"] & {
    color: ${designSystem2025.colors.neutral[400]};
  }
`;

const PriorityBadge = styled.div`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: ${designSystem2025.typography.sizes.xs};
  font-weight: ${designSystem2025.typography.weights.medium};
  
  ${props => {
    switch (props.priority) {
      case Priority.CRITICAL:
        return `
          background: ${designSystem2025.colors.red[100]};
          color: ${designSystem2025.colors.red[800]};
        `;
      case Priority.HIGH:
        return `
          background: ${designSystem2025.colors.warning[100]};
          color: ${designSystem2025.colors.warning[800]};
        `;
      case Priority.MEDIUM:
        return `
          background: ${designSystem2025.colors.blue[100]};
          color: ${designSystem2025.colors.blue[800]};
        `;
      default:
        return `
          background: ${designSystem2025.colors.neutral[200]};
          color: ${designSystem2025.colors.neutral[700]};
        `;
    }
  }}
`;

const RecommendationsSection = styled.div`
  ${designSystem2025.glassmorphism.enhanced}
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
`;

const RecommendationItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
  
  ${props => {
    switch (props.type) {
      case 'critical':
        return `background: ${designSystem2025.colors.red[50]}; border-left: 4px solid ${designSystem2025.colors.red[500]};`;
      case 'success':
        return `background: ${designSystem2025.colors.success[50]}; border-left: 4px solid ${designSystem2025.colors.success[500]};`;
      default:
        return `background: ${designSystem2025.colors.blue[50]}; border-left: 4px solid ${designSystem2025.colors.blue[500]};`;
    }
  }}
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// 카테고리별 아이콘과 색상
const categoryConfig = {
  [LaunchCategories.CORE_FUNCTIONALITY]: { icon: FiZap, color: designSystem2025.colors.mint[500] },
  [LaunchCategories.USER_EXPERIENCE]: { icon: FiUsers, color: designSystem2025.colors.blue[500] },
  [LaunchCategories.PERFORMANCE]: { icon: FiActivity, color: designSystem2025.colors.success[500] },
  [LaunchCategories.SECURITY]: { icon: FiShield, color: designSystem2025.colors.red[500] },
  [LaunchCategories.MOBILE_OPTIMIZATION]: { icon: FiSmartphone, color: designSystem2025.colors.purple[500] },
  [LaunchCategories.ACCESSIBILITY]: { icon: FiEye, color: designSystem2025.colors.orange[500] },
  [LaunchCategories.SEO_SOCIAL]: { icon: FiSearch, color: designSystem2025.colors.pink[500] },
  [LaunchCategories.MONITORING]: { icon: FiSettings, color: designSystem2025.colors.neutral[500] }
};

const LaunchReadinessDashboard = () => {
  const [report, setReport] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentCheck, setCurrentCheck] = useState('');

  // 체크 실행
  const runLaunchCheck = useCallback(async () => {
    setIsRunning(true);
    setProgress(0);
    setCurrentCheck('');

    try {
      // 진행률 콜백 설정
      launchReadinessChecker.on('progress', (newProgress, checkId) => {
        setProgress(newProgress);
        setCurrentCheck(checkId);
      });

      // 완료 콜백 설정
      launchReadinessChecker.on('complete', (newReport) => {
        setReport(newReport);
        setIsRunning(false);
      });

      // 체크 실행
      await launchReadinessChecker.runFullCheck();
    } catch (error) {
      console.error('Launch check failed:', error);
      setIsRunning(false);
    }
  }, []);

  // 렌더링할 아이콘 가져오기
  const getCheckIcon = (result) => {
    if (!result) return <FiRefreshCw />;
    if (result.manual) return <FiInfo />;
    if (result.passed) return <FiCheck />;
    if (result.error) return <FiAlertTriangle />;
    return <FiX />;
  };

  // 체크 상태 가져오기
  const getCheckStatus = (result) => {
    if (!result) return 'pending';
    if (result.manual) return 'manual';
    if (result.passed) return 'passed';
    return 'failed';
  };

  // 카테고리 표시명 가져오기
  const getCategoryDisplayName = (category) => {
    const displayNames = {
      [LaunchCategories.CORE_FUNCTIONALITY]: '핵심 기능',
      [LaunchCategories.USER_EXPERIENCE]: '사용자 경험',
      [LaunchCategories.PERFORMANCE]: '성능',
      [LaunchCategories.SECURITY]: '보안',
      [LaunchCategories.MOBILE_OPTIMIZATION]: '모바일 최적화',
      [LaunchCategories.ACCESSIBILITY]: '접근성',
      [LaunchCategories.SEO_SOCIAL]: 'SEO/소셜',
      [LaunchCategories.MONITORING]: '모니터링'
    };
    return displayNames[category] || category;
  };

  return (
    <DashboardContainer>
      <Header>
        <Title>🚀 ECHO 런칭 준비도 검증</Title>
        <Subtitle>
          플랫폼의 모든 측면을 종합적으로 검증하여 안전하고 성공적인 런칭을 보장합니다
        </Subtitle>
      </Header>

      {/* 전체 점수 카드 */}
      <OverallScoreCard ready={report?.isLaunchReady}>
        {isRunning ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
              <FiRefreshCw size={48} style={{ animation: `${spin} 1s linear infinite`, color: designSystem2025.colors.mint[500] }} />
              <div>
                <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>검증 진행 중...</div>
                <div style={{ color: designSystem2025.colors.neutral[600] }}>현재: {currentCheck}</div>
              </div>
            </div>
            <ProgressBar>
              <ProgressFill progress={progress} />
            </ProgressBar>
            <div style={{ textAlign: 'center', fontSize: '14px', color: designSystem2025.colors.neutral[600] }}>
              {Math.round(progress)}% 완료
            </div>
          </>
        ) : report ? (
          <>
            <ScoreDisplay>
              <ScoreValue ready={report.isLaunchReady}>
                {report.overallScore}
              </ScoreValue>
              <div>
                <ScoreLabel>런칭 준비도 점수</ScoreLabel>
                <ReadinessStatus ready={report.isLaunchReady}>
                  {report.isLaunchReady ? <FiAward /> : <FiAlertTriangle />}
                  {report.isLaunchReady ? '런칭 준비 완료!' : '추가 작업 필요'}
                </ReadinessStatus>
              </div>
            </ScoreDisplay>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', fontSize: '14px', color: designSystem2025.colors.neutral[600] }}>
              <div>✅ 통과: {report.passedChecks}개</div>
              <div>❌ 실패: {report.totalChecks - report.passedChecks - report.manualChecks}개</div>
              <div>📋 수동 확인: {report.manualChecks}개</div>
              {report.criticalFailures > 0 && (
                <div style={{ color: designSystem2025.colors.red[600], fontWeight: '600' }}>
                  🚨 중요 문제: {report.criticalFailures}개
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
              ECHO 플랫폼 런칭 준비도를 확인하세요
            </div>
            <div style={{ color: designSystem2025.colors.neutral[600], marginBottom: '24px' }}>
              핵심 기능, 성능, 보안, 사용자 경험 등 모든 영역을 종합적으로 검증합니다
            </div>
          </>
        )}

        <ActionButton
          variant="primary"
          onClick={runLaunchCheck}
          disabled={isRunning}
        >
          {isRunning ? <FiRefreshCw style={{ animation: `${spin} 1s linear infinite` }} /> : <FiPlay />}
          {isRunning ? '검증 중...' : '런칭 준비도 검증 시작'}
        </ActionButton>
      </OverallScoreCard>

      {/* 추천사항 섹션 */}
      {report?.recommendations && report.recommendations.length > 0 && (
        <RecommendationsSection>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <FiInfo size={24} color={designSystem2025.colors.blue[500]} />
            <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>개선 권장사항</h3>
          </div>
          
          {report.recommendations.map((rec, index) => (
            <RecommendationItem key={index} type={rec.type}>
              <div style={{ flexShrink: 0, marginTop: '2px' }}>
                {rec.type === 'critical' && <FiAlertTriangle color={designSystem2025.colors.red[600]} />}
                {rec.type === 'success' && <FiAward color={designSystem2025.colors.success[600]} />}
                {rec.type !== 'critical' && rec.type !== 'success' && <FiInfo color={designSystem2025.colors.blue[600]} />}
              </div>
              <div>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                  {rec.type === 'critical' && '🚨 중요: '}
                  {rec.type === 'success' && '🎉 완료: '}
                  {rec.message}
                </div>
                {rec.category && (
                  <div style={{ fontSize: '14px', color: designSystem2025.colors.neutral[600] }}>
                    카테고리: {getCategoryDisplayName(rec.category)}
                  </div>
                )}
              </div>
            </RecommendationItem>
          ))}
        </RecommendationsSection>
      )}

      {/* 카테고리별 상세 결과 */}
      {report?.categories && (
        <CategoryGrid>
          {Object.entries(report.categories).map(([category, categoryReport]) => {
            const config = categoryConfig[category];
            const IconComponent = config?.icon || FiSettings;
            const iconColor = config?.color || designSystem2025.colors.neutral[500];

            return (
              <CategoryCard key={category}>
                <CategoryHeader>
                  <CategoryTitle>
                    <CategoryIcon color={iconColor}>
                      <IconComponent size={20} />
                    </CategoryIcon>
                    {getCategoryDisplayName(category)}
                  </CategoryTitle>
                  <CategoryScore>
                    {categoryReport.passed}/{categoryReport.total}
                  </CategoryScore>
                </CategoryHeader>

                {categoryReport.checks.map((check, index) => (
                  <CheckItem key={index}>
                    <CheckIcon status={getCheckStatus(check.result)}>
                      {getCheckIcon(check.result)}
                    </CheckIcon>
                    <CheckContent>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <CheckName>{check.name}</CheckName>
                        <PriorityBadge priority={check.priority}>
                          {check.priority}
                        </PriorityBadge>
                      </div>
                      <CheckMessage>
                        {check.result?.message || check.description}
                      </CheckMessage>
                      {check.result?.manual && check.result?.steps && (
                        <div style={{ marginTop: '8px' }}>
                          <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '4px' }}>수동 확인 항목:</div>
                          <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px' }}>
                            {check.result.steps.map((step, stepIndex) => (
                              <li key={stepIndex}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CheckContent>
                  </CheckItem>
                ))}
              </CategoryCard>
            );
          })}
        </CategoryGrid>
      )}

      {/* 런칭 준비 완료 시 축하 메시지 */}
      {report?.isLaunchReady && (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px', 
          background: `linear-gradient(135deg, ${designSystem2025.colors.success[50]}, ${designSystem2025.colors.mint[50]})`,
          borderRadius: '20px',
          marginTop: '32px'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: designSystem2025.colors.success[800], marginBottom: '12px' }}>
            축하합니다! ECHO 플랫폼 런칭 준비가 완료되었습니다!
          </h2>
          <p style={{ fontSize: '16px', color: designSystem2025.colors.success[700], marginBottom: '24px' }}>
            모든 중요 항목이 검증되었으며, 사용자들에게 안전하고 뛰어난 경험을 제공할 준비가 되었습니다.
          </p>
          <ActionButton 
            variant="primary" 
            onClick={() => window.open('/', '_blank')}
            style={{ background: designSystem2025.colors.success[500] }}
          >
            <FiExternalLink />
            플랫폼 바로가기
          </ActionButton>
        </div>
      )}
    </DashboardContainer>
  );
};

export default LaunchReadinessDashboard;