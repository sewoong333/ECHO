// 통합 에러 처리 시스템 설정 가이드
import React, { useState, useCallback } from 'react';
import { initializeGlobalErrorHandler } from './globalErrorHandler';
import { ToastProvider } from '../store/ToastContext';
import ErrorBoundary from '../components/ErrorBoundary';
import { OfflineDetector, OfflineProvider } from '../components/OfflineDetector';
import ErrorMonitoringDashboard from '../components/ErrorMonitoringDashboard';

// 전역 에러 처리 시스템 초기화 함수
export function initializeErrorHandling() {
  // 전역 에러 핸들러 초기화
  initializeGlobalErrorHandler({
    enableConsoleLogging: process.env.NODE_ENV === 'development',
    enableRemoteLogging: process.env.NODE_ENV === 'production',
    enableUserNotifications: true,
    maxErrorsPerMinute: 10,
    notificationDurations: {
      toast: 5000,
      banner: 10000
    }
  });

  console.log('🛡️ 통합 에러 처리 시스템이 초기화되었습니다.');
}

// App 컴포넌트에서 사용할 에러 처리 래퍼
export function ErrorHandlingWrapper({ children }) {
  return (
    <ErrorBoundary level="app">
      <ToastProvider>
        <OfflineProvider>
          {children}
          <OfflineDetector 
            showBanner={true}
            autoHideBanner={true}
          />
          <ErrorMonitoringDashboard />
        </OfflineProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}

// 페이지별 에러 경계 (더 세밀한 에러 처리)
export function PageErrorBoundary({ children, pageName }) {
  return (
    <ErrorBoundary 
      level="page"
      onRetry={(retryCount, isAutoRetry) => {
        console.log(`페이지 ${pageName} 재시도:`, { retryCount, isAutoRetry });
      }}
      onReset={() => {
        // 페이지별 상태 초기화 로직
        console.log(`페이지 ${pageName} 상태 초기화`);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

// React Query나 SWR과 함께 사용할 수 있는 에러 처리 Hook
export function useErrorHandling() {
  const [error, setError] = useState(null);
  const [isRetrying, setIsRetrying] = useState(false);

  const handleError = useCallback((error, context = {}) => {
    setError(error);
    
    // 전역 에러 핸들러에 보고
    if (window.globalErrorHandler) {
      window.globalErrorHandler.reportError(error, {
        source: 'react_hook',
        ...context
      });
    }
  }, []);

  const retry = useCallback(async (retryFn) => {
    if (!retryFn) return;
    
    setIsRetrying(true);
    setError(null);
    
    try {
      await retryFn();
    } catch (newError) {
      handleError(newError, { isRetry: true });
    } finally {
      setIsRetrying(false);
    }
  }, [handleError]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    isRetrying,
    handleError,
    retry,
    clearError
  };
}

// 폼 검증과 에러 처리를 통합한 Hook
export function useFormWithValidation(initialValues, validationRules) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleError } = useErrorHandling();

  const validateField = useCallback((name, value) => {
    const rule = validationRules[name];
    if (!rule) return null;

    const result = rule.validator(value, rule.options);
    return result.isValid ? null : result.message;
  }, [validationRules]);

  const handleChange = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // 실시간 검증
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [validateField]);

  const handleSubmit = useCallback(async (submitFn) => {
    setIsSubmitting(true);
    
    try {
      // 전체 폼 검증
      const newErrors = {};
      let hasErrors = false;

      Object.keys(validationRules).forEach(field => {
        const error = validateField(field, values[field]);
        if (error) {
          newErrors[field] = error;
          hasErrors = true;
        }
      });

      setErrors(newErrors);

      if (hasErrors) {
        throw new Error('입력 데이터를 확인해주세요.');
      }

      // 폼 제출
      await submitFn(values);
      
    } catch (error) {
      handleError(error, { 
        source: 'form_submission',
        formData: values 
      });
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validationRules, validateField, handleError]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues,
    setErrors
  };
}

// API 호출과 에러 처리를 통합한 Hook
export function useApiCall() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { handleError } = useErrorHandling();

  const call = useCallback(async (apiFunction, ...args) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiFunction(...args);
      setData(result);
      return result;
    } catch (error) {
      setError(error);
      handleError(error, {
        source: 'api_call',
        function: apiFunction.name,
        arguments: args
      });
      throw error;
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  const reset = useCallback(() => {
    setLoading(false);
    setData(null);
    setError(null);
  }, []);

  return {
    loading,
    data,
    error,
    call,
    reset
  };
}

// 에러 처리 가이드라인
export const ERROR_HANDLING_GUIDELINES = {
  // 1. 에러 경계 사용
  errorBoundaries: {
    app: "앱 전체를 감싸는 최상위 에러 경계",
    page: "페이지별 에러 경계로 더 세밀한 복구",
    component: "중요한 컴포넌트별 에러 경계"
  },

  // 2. 에러 타입별 대응
  errorTypes: {
    validation: "사용자 입력 검증 에러 - 경고 Toast로 표시",
    network: "네트워크 에러 - 재시도 옵션과 함께 에러 Toast",
    auth: "인증 에러 - 로그인 페이지로 리다이렉트",
    permission: "권한 에러 - 접근 불가 메시지",
    system: "시스템 에러 - ErrorBoundary로 처리"
  },

  // 3. 사용자 경험
  userExperience: {
    messages: "기술적 메시지 대신 사용자 친화적 메시지",
    actions: "가능한 경우 복구 액션 제공",
    feedback: "에러 상태와 로딩 상태 명확히 표시",
    fallback: "에러 시 대체 UI 제공"
  },

  // 4. 개발자 도구
  development: {
    logging: "개발 환경에서 상세한 에러 로깅",
    monitoring: "에러 모니터링 대시보드 활용",
    debugging: "에러 스택 트레이스와 컨텍스트 정보",
    testing: "에러 시나리오 테스트"
  }
};

export default {
  initializeErrorHandling,
  ErrorHandlingWrapper,
  PageErrorBoundary,
  useErrorHandling,
  useFormWithValidation,
  useApiCall,
  ERROR_HANDLING_GUIDELINES
};