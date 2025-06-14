import React from 'react';
import TopBar from '../components/TopBar';

export default function SetLocation() {
  return (
    <div style={{ width: '100vw', padding: 0, background: '#f8f9fa', minHeight: '100vh' }}>
      <TopBar />
      <div style={{ padding: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>동네 설정</h1>
        <form>
          <div style={{ marginBottom: 24 }}>
            <label>동네 이름 또는 주소<br />
              <input type="text" style={{ width: '100%', padding: 8, fontSize: 16 }} />
            </label>
          </div>
          <button type="submit" style={{ width: '100%', padding: 12, fontSize: 18, background: '#ff7e36', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 600 }}>설정하기</button>
        </form>
      </div>
    </div>
  );
} 