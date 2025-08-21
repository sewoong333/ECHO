import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { designSystem2025 } from '../styles/designSystem2025';
import { errorCaseTester, devTestHelpers, realDataTestCases } from '../utils/errorCaseTester';
import { productSchema, testDataGenerator } from '../utils/dataValidator';
import { FiPlay, FiPause, FiCheck, FiX, FiRefreshCw, FiAlertTriangle, FiInfo } from 'react-icons/fi';

const DashboardContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 400px;
  max-height: 80vh;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 20px;
  color: white;
  z-index: 10000;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
  
  /* 드래그 가능하게 */
  cursor: move;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${designSystem2025.colors.mint[400]};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Section = styled.div`
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h4`
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 8px;
  margin-bottom: 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: ${designSystem2025.colors.mint[500]};
          color: white;
          &:hover { background: ${designSystem2025.colors.mint[600]}; }
        `;
      case 'danger':
        return `
          background: ${designSystem2025.colors.red[500]};
          color: white;
          &:hover { background: ${designSystem2025.colors.red[600]}; }
        `;
      case 'warning':
        return `
          background: ${designSystem2025.colors.warning[500]};
          color: white;
          &:hover { background: ${designSystem2025.colors.warning[600]}; }
        `;
      default:
        return `
          background: rgba(255, 255, 255, 0.1);
          color: white;
          &:hover { background: rgba(255, 255, 255, 0.2); }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TestResult = styled.div`
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 1.4;
  
  ${props => {
    switch (props.type) {
      case 'success':
        return `
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
        `;
      case 'error':
        return `
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
        `;
      case 'warning':
        return `
          background: rgba(245, 158, 11, 0.2);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #fbbf24;
        `;
      default:
        return `
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #93c5fd;
        `;
    }
  }}
`;

const StatusIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  
  ${props => {
    switch (props.status) {
      case 'running':
        return `
          background: rgba(245, 158, 11, 0.2);
          color: #fbbf24;
        `;
      case 'passed':
        return `
          background: rgba(34, 197, 94, 0.2);
          color: #86efac;
        `;
      case 'failed':
        return `
          background: rgba(239, 68, 68, 0.2);
          color: #fca5a5;
        `;
      default:
        return `
          background: rgba(107, 114, 128, 0.2);
          color: #d1d5db;
        `;
    }
  }}
`;

const MetricCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
`;

const MetricValue = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${designSystem2025.colors.mint[400]};
  margin-bottom: 4px;
`;

const MetricLabel = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
`;

const LogEntry = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const DataTestingDashboard = ({ isVisible, onClose }) => {
  const [testResults, setTestResults] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [metrics, setMetrics] = useState({
    totalTests: 0,
    passedTests: 0,
    failedTests: 0,
    successRate: 0
  });
  const [logs, setLogs] = useState([]);
  const [activeTab, setActiveTab] = useState('testing');

  // 로그 추가
  const addLog = useCallback((message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-10), { timestamp, message, type }]);
  }, []);

  // 테스트 실행
  const runErrorTests = useCallback(async () => {
    setIsRunning(true);
    setTestResults([]);
    addLog('에러 케이스 테스트 시작', 'info');

    try {
      // 가상의 상품 등록 작업
      const mockProductOperation = async () => {
        const testData = testDataGenerator.product();
        const validation = productSchema.validate(testData);
        if (!validation.isValid) {
          throw new Error('상품 데이터 검증 실패');
        }
        return validation.data;
      };

      const report = await errorCaseTester.testAllScenarios(
        mockProductOperation,
        { operation: 'productRegistration' }
      );

      setTestResults(report.results);
      setMetrics({
        totalTests: report.summary.total,
        passedTests: report.summary.successful,
        failedTests: report.summary.failed,
        successRate: parseFloat(report.summary.successRate)
      });

      addLog(`테스트 완료: ${report.summary.successful}/${report.summary.total} 통과`, 'success');
      
      if (report.failedTests.length > 0) {
        addLog(`${report.failedTests.length}개 테스트 실패`, 'error');
      }

    } catch (error) {
      addLog(`테스트 실행 중 오류: ${error.message}`, 'error');
    } finally {
      setIsRunning(false);
    }
  }, [addLog]);

  // 데이터 검증 테스트
  const runValidationTests = useCallback(async () => {
    addLog('데이터 검증 테스트 시작', 'info');

    try {
      const validCases = realDataTestCases.productRegistration.validCases;
      const invalidCases = realDataTestCases.productRegistration.invalidCases;

      let passed = 0;
      let failed = 0;

      // 유효한 케이스 테스트
      for (const testCase of validCases) {
        const result = productSchema.validate(testCase.data);
        if (result.isValid) {
          passed++;
          addLog(`✅ ${testCase.name}: 통과`, 'success');
        } else {
          failed++;
          addLog(`❌ ${testCase.name}: 실패`, 'error');
        }
      }

      // 무효한 케이스 테스트
      for (const testCase of invalidCases) {
        const result = productSchema.validate(testCase.data);
        if (!result.isValid) {
          passed++;
          addLog(`✅ ${testCase.name}: 예상된 실패 (올바름)`, 'success');
        } else {
          failed++;
          addLog(`❌ ${testCase.name}: 검증되지 않음 (문제)`, 'error');
        }
      }

      addLog(`검증 테스트 완료: ${passed}/${passed + failed} 통과`, 'success');

    } catch (error) {
      addLog(`검증 테스트 오류: ${error.message}`, 'error');
    }
  }, [addLog]);

  // 에러 시뮬레이션 토글
  const toggleErrorSimulation = useCallback((enable) => {
    if (enable) {
      devTestHelpers.enableErrorSimulation(['networkTimeout', 'authExpired', 'invalidData']);
      addLog('에러 시뮬레이션 활성화', 'warning');
    } else {
      devTestHelpers.disableErrorSimulation();
      addLog('에러 시뮬레이션 비활성화', 'info');
    }
  }, [addLog]);

  // 스트레스 테스트
  const runStressTest = useCallback(async () => {
    addLog('스트레스 테스트 시작', 'info');
    setIsRunning(true);

    try {
      const iterations = 100;
      let successCount = 0;
      let errorCount = 0;

      for (let i = 0; i < iterations; i++) {
        try {
          const testData = testDataGenerator.product();
          const validation = productSchema.validate(testData);
          
          if (validation.isValid) {
            successCount++;
          } else {
            errorCount++;
          }
        } catch (error) {
          errorCount++;
        }

        // 진행률 업데이트
        if ((i + 1) % 20 === 0) {
          addLog(`진행률: ${i + 1}/${iterations} (${Math.round((i + 1) / iterations * 100)}%)`, 'info');
        }
      }

      addLog(`스트레스 테스트 완료: ${successCount}회 성공, ${errorCount}회 실패`, 'success');
    } catch (error) {
      addLog(`스트레스 테스트 오류: ${error.message}`, 'error');
    } finally {
      setIsRunning(false);
    }
  }, [addLog]);

  // 메트릭 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      if (testResults.length > 0) {
        const successRate = (metrics.passedTests / metrics.totalTests * 100).toFixed(1);
        setMetrics(prev => ({ ...prev, successRate: parseFloat(successRate) }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [testResults, metrics.passedTests, metrics.totalTests]);

  if (!isVisible) return null;

  return (
    <DashboardContainer>
      <Header>
        <Title>🧪 Data Testing Dashboard</Title>
        <CloseButton onClick={onClose}>
          <FiX size={16} />
        </CloseButton>
      </Header>

      {/* 탭 */}
      <Section>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <Button
            variant={activeTab === 'testing' ? 'primary' : 'default'}
            onClick={() => setActiveTab('testing')}
          >
            테스트
          </Button>
          <Button
            variant={activeTab === 'metrics' ? 'primary' : 'default'}
            onClick={() => setActiveTab('metrics')}
          >
            메트릭
          </Button>
          <Button
            variant={activeTab === 'logs' ? 'primary' : 'default'}
            onClick={() => setActiveTab('logs')}
          >
            로그
          </Button>
        </div>
      </Section>

      {/* 테스트 탭 */}
      {activeTab === 'testing' && (
        <>
          <Section>
            <SectionTitle>에러 케이스 테스트</SectionTitle>
            <Button
              variant="primary"
              onClick={runErrorTests}
              disabled={isRunning}
            >
              {isRunning ? <FiRefreshCw className="spinning" /> : <FiPlay />}
              {isRunning ? '실행 중...' : '에러 테스트 실행'}
            </Button>
            <Button
              variant="warning"
              onClick={runValidationTests}
              disabled={isRunning}
            >
              <FiCheck />
              검증 테스트
            </Button>
            <Button
              variant="danger"
              onClick={runStressTest}
              disabled={isRunning}
            >
              <FiAlertTriangle />
              스트레스 테스트
            </Button>
          </Section>

          <Section>
            <SectionTitle>에러 시뮬레이션</SectionTitle>
            <Button onClick={() => toggleErrorSimulation(true)}>
              <FiPlay />
              시뮬레이션 활성화
            </Button>
            <Button onClick={() => toggleErrorSimulation(false)}>
              <FiPause />
              시뮬레이션 비활성화
            </Button>
          </Section>

          {/* 테스트 결과 */}
          {testResults.length > 0 && (
            <Section>
              <SectionTitle>최근 테스트 결과</SectionTitle>
              {testResults.slice(-5).map((result, index) => (
                <TestResult
                  key={index}
                  type={result.success ? 'success' : 'error'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {result.success ? <FiCheck size={12} /> : <FiX size={12} />}
                    <strong>{result.scenario}</strong>
                  </div>
                  <div style={{ marginTop: '4px', opacity: 0.8 }}>
                    {result.message} ({result.duration}ms)
                  </div>
                </TestResult>
              ))}
            </Section>
          )}
        </>
      )}

      {/* 메트릭 탭 */}
      {activeTab === 'metrics' && (
        <Section>
          <SectionTitle>테스트 메트릭</SectionTitle>
          <MetricCard>
            <MetricValue>{metrics.totalTests}</MetricValue>
            <MetricLabel>총 테스트 수</MetricLabel>
          </MetricCard>
          <MetricCard>
            <MetricValue>{metrics.successRate}%</MetricValue>
            <MetricLabel>성공률</MetricLabel>
          </MetricCard>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <MetricCard>
              <MetricValue style={{ color: '#86efac' }}>{metrics.passedTests}</MetricValue>
              <MetricLabel>통과</MetricLabel>
            </MetricCard>
            <MetricCard>
              <MetricValue style={{ color: '#fca5a5' }}>{metrics.failedTests}</MetricValue>
              <MetricLabel>실패</MetricLabel>
            </MetricCard>
          </div>
        </Section>
      )}

      {/* 로그 탭 */}
      {activeTab === 'logs' && (
        <Section>
          <SectionTitle>시스템 로그</SectionTitle>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {logs.map((log, index) => (
              <LogEntry key={index}>
                <div style={{ minWidth: '60px', fontSize: '10px', opacity: 0.6 }}>
                  {log.timestamp}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {log.type === 'success' && <FiCheck size={10} style={{ color: '#86efac' }} />}
                  {log.type === 'error' && <FiX size={10} style={{ color: '#fca5a5' }} />}
                  {log.type === 'warning' && <FiAlertTriangle size={10} style={{ color: '#fbbf24' }} />}
                  {log.type === 'info' && <FiInfo size={10} style={{ color: '#93c5fd' }} />}
                  {log.message}
                </div>
              </LogEntry>
            ))}
          </div>
          <Button
            onClick={() => setLogs([])}
            style={{ marginTop: '8px' }}
          >
            로그 지우기
          </Button>
        </Section>
      )}

      {/* 상태 표시 */}
      <Section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SectionTitle>상태</SectionTitle>
          <StatusIndicator status={isRunning ? 'running' : 'idle'}>
            {isRunning ? <FiRefreshCw className="spinning" size={10} /> : <FiCheck size={10} />}
            {isRunning ? '실행 중' : '대기'}
          </StatusIndicator>
        </div>
      </Section>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spinning {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </DashboardContainer>
  );
};

export default DataTestingDashboard;