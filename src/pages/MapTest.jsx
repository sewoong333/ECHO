import React from 'react';
import SimpleMap from '../components/SimpleMap';

const MapTest = () => {
  return (
    <div style={{ 
      padding: '20px',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
        🧪 카카오맵 테스트 페이지
      </h1>
      
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <SimpleMap />
      </div>

      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ marginBottom: '10px', color: '#333' }}>🔍 디버깅 가이드</h3>
        <ol style={{ color: '#666', lineHeight: '1.6' }}>
          <li>F12를 눌러 개발자 도구를 엽니다</li>
          <li>Console 탭을 클릭합니다</li>
          <li>위 지도에 에러나 성공 메시지를 확인합니다</li>
          <li>Network 탭에서 카카오 스크립트 로딩을 확인합니다</li>
        </ol>
      </div>
    </div>
  );
};

export default MapTest;