import React from 'react';

const TestPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🎉 ECHO 플랫폼 테스트 페이지</h1>
      <p>이 페이지가 보이면 React가 정상적으로 작동하고 있습니다!</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => alert('버튼이 작동합니다!')}>
          테스트 버튼
        </button>
      </div>
    </div>
  );
};

export default TestPage;