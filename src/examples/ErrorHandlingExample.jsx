// 에러 처리 시스템 사용 예시
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { 
  ErrorHandlingWrapper, 
  PageErrorBoundary, 
  // useErrorHandling, 
  useFormWithValidation,
  useApiCall,
  initializeErrorHandling 
} from '../utils/errorIntegration';
import { useToast } from '../store/ToastContext';
import { validateEmail, validateProductTitle, validatePrice } from '../utils/validation';
import firebaseServices from '../utils/firebase';
const { productService } = firebaseServices;
import { apiClient } from '../utils/apiClient';

const ExampleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  margin-bottom: 16px;
  color: #1f2937;
`;

const Button = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 12px;
  margin-bottom: 8px;
  
  &:hover {
    background: #2563eb;
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  margin-bottom: 8px;
  
  &.error {
    border-color: #ef4444;
  }
`;

const ErrorText = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-bottom: 8px;
`;

// 1. Toast 시스템 사용 예시
function ToastExample() {
  const { 
    showSuccess, 
    showError, 
    showWarning, 
    showCritical,
    showNetworkError,
    showValidationError,
    showLoadingError 
  } = useToast();

  return (
    <Section>
      <SectionTitle>1. Toast 알림 시스템</SectionTitle>
      <Button onClick={() => showSuccess('작업이 성공적으로 완료되었습니다!')}>
        성공 토스트
      </Button>
      <Button onClick={() => showError('오류가 발생했습니다.')}>
        에러 토스트
      </Button>
      <Button onClick={() => showWarning('주의가 필요합니다.')}>
        경고 토스트
      </Button>
      <Button onClick={() => showCritical('심각한 오류입니다!', { persistent: true })}>
        심각한 에러 토스트
      </Button>
      <Button onClick={() => showNetworkError()}>
        네트워크 에러 토스트
      </Button>
      <Button onClick={() => showValidationError('입력값을 확인해주세요.')}>
        검증 에러 토스트
      </Button>
      <Button onClick={() => showLoadingError('상품 데이터')}>
        로딩 에러 토스트
      </Button>
    </Section>
  );
}

// 2. 전역 에러 핸들러 테스트
function GlobalErrorExample() {
  const triggerJSError = () => {
    throw new Error('JavaScript 런타임 에러 테스트');
  };

  const triggerPromiseError = () => {
    Promise.reject(new Error('Promise rejection 테스트'));
  };

  const triggerNetworkError = async () => {
    try {
      await fetch('/nonexistent-endpoint');
    } catch (error) {
      console.log('네트워크 에러가 전역 핸들러에 의해 처리됩니다.');
    }
  };

  return (
    <Section>
      <SectionTitle>2. 전역 에러 핸들러</SectionTitle>
      <Button onClick={triggerJSError}>
        JavaScript 에러 발생
      </Button>
      <Button onClick={triggerPromiseError}>
        Promise Rejection 발생
      </Button>
      <Button onClick={triggerNetworkError}>
        네트워크 에러 발생
      </Button>
    </Section>
  );
}

// 3. 폼 검증과 에러 처리
function FormValidationExample() {
  const { showSuccess } = useToast();
  
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  } = useFormWithValidation(
    {
      email: '',
      productTitle: '',
      price: ''
    },
    {
      email: { validator: validateEmail },
      productTitle: { validator: validateProductTitle },
      price: { validator: validatePrice }
    }
  );

  const submitForm = async () => {
    // 가상의 API 호출
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 랜덤하게 에러 발생
    if (Math.random() > 0.7) {
      throw new Error('서버에서 오류가 발생했습니다.');
    }
    
    showSuccess('폼이 성공적으로 제출되었습니다!');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(submitForm);
    } catch (error) {
      // 에러는 이미 handleSubmit에서 처리됨
    }
  };

  return (
    <Section>
      <SectionTitle>3. 폼 검증과 에러 처리</SectionTitle>
      <form onSubmit={onSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}

        <Input
          type="text"
          placeholder="상품명"
          value={values.productTitle}
          onChange={(e) => handleChange('productTitle', e.target.value)}
          className={errors.productTitle ? 'error' : ''}
        />
        {errors.productTitle && <ErrorText>{errors.productTitle}</ErrorText>}

        <Input
          type="number"
          placeholder="가격"
          value={values.price}
          onChange={(e) => handleChange('price', e.target.value)}
          className={errors.price ? 'error' : ''}
        />
        {errors.price && <ErrorText>{errors.price}</ErrorText>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? '제출 중...' : '제출'}
        </Button>
      </form>
    </Section>
  );
}

// 4. API 호출과 에러 처리
function ApiCallExample() {
  const { loading, data, error, call, reset } = useApiCall();
  const { showSuccess } = useToast();

  const fetchProducts = async () => {
    try {
      const products = await call(productService.getProducts, { pageSize: 5 });
      showSuccess(`${products.products.length}개의 상품을 불러왔습니다.`);
    } catch (error) {
      // 에러는 이미 useApiCall에서 처리됨
    }
  };

  const fetchWithApiClient = async () => {
    try {
      const _result = await call(apiClient.get, '/api/test-endpoint');
      showSuccess('API 호출 성공!');
    } catch (error) {
      // 에러는 이미 처리됨
    }
  };

  const simulateError = async () => {
    try {
      await call(async () => {
        throw new Error('시뮬레이션된 API 에러');
      });
    } catch (error) {
      // 에러 처리됨
    }
  };

  return (
    <Section>
      <SectionTitle>4. API 호출과 에러 처리</SectionTitle>
      <Button onClick={fetchProducts} disabled={loading}>
        {loading ? '로딩 중...' : '상품 목록 불러오기'}
      </Button>
      <Button onClick={fetchWithApiClient} disabled={loading}>
        API 클라이언트 테스트
      </Button>
      <Button onClick={simulateError} disabled={loading}>
        API 에러 시뮬레이션
      </Button>
      <Button onClick={reset}>
        상태 초기화
      </Button>
      
      {data && (
        <div style={{ marginTop: '16px', padding: '12px', background: '#f0f9ff', borderRadius: '6px' }}>
          <strong>API 응답:</strong> {JSON.stringify(data, null, 2)}
        </div>
      )}
      
      {error && (
        <div style={{ marginTop: '16px', padding: '12px', background: '#fef2f2', borderRadius: '6px' }}>
          <strong>에러:</strong> {error.message}
        </div>
      )}
    </Section>
  );
}

// 5. 에러 경계 테스트
function ErrorBoundaryExample() {
  const [shouldError, setShouldError] = React.useState(false);

  if (shouldError) {
    throw new Error('ErrorBoundary 테스트용 에러');
  }

  return (
    <Section>
      <SectionTitle>5. Error Boundary 테스트</SectionTitle>
      <Button onClick={() => setShouldError(true)}>
        에러 발생시키기
      </Button>
      <p>이 버튼을 클릭하면 Error Boundary가 에러를 캐치합니다.</p>
    </Section>
  );
}

// 메인 예시 컴포넌트
function ErrorHandlingExampleApp() {
  useEffect(() => {
    // 앱 시작시 에러 처리 시스템 초기화
    initializeErrorHandling();
  }, []);

  return (
    <ErrorHandlingWrapper>
      <ExampleContainer>
        <h1>ECHO 에러 처리 시스템 예시</h1>
        <p>다양한 에러 처리 기능들을 테스트해보세요.</p>
        
        <ToastExample />
        <GlobalErrorExample />
        <FormValidationExample />
        <ApiCallExample />
        
        <PageErrorBoundary pageName="ErrorBoundaryTest">
          <ErrorBoundaryExample />
        </PageErrorBoundary>
      </ExampleContainer>
    </ErrorHandlingWrapper>
  );
}

export default ErrorHandlingExampleApp;