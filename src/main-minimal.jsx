import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 최소한의 테스트 앱
function MinimalApp() {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎸 ECHO</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>최소 테스트 - 서버 정상 작동</h2>
      <p>임포트 이슈 해결중...</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MinimalApp />);