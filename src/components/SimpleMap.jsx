import React, { useEffect, useRef, useState } from 'react';

const SimpleMap = () => {
  const mapContainer = useRef(null);
  const [status, setStatus] = useState('로딩 중...');

  useEffect(() => {
    console.log('🗺️ 심플맵 테스트 시작');
    setStatus('카카오 SDK 확인 중...');
    
    const loadKakaoMap = () => {
      console.log('🔍 현재 SDK 상태:');
      console.log('  - window.kakao:', !!window.kakao);
      console.log('  - window.kakao?.maps:', !!window.kakao?.maps);
      console.log('  - window.kakao?.maps?.Map:', !!window.kakao?.maps?.Map);

      if (!window.kakao) {
        setStatus('❌ window.kakao 없음 - 스크립트 로딩 실패');
        return;
      }

      if (!window.kakao.maps) {
        setStatus('❌ window.kakao.maps 없음 - Maps API 로딩 실패');
        return;
      }

      if (!window.kakao.maps.Map) {
        setStatus('❌ window.kakao.maps.Map 없음 - Map 클래스 로딩 실패');
        return;
      }

      if (!mapContainer.current) {
        setStatus('❌ 지도 컨테이너 없음');
        return;
      }

      try {
        setStatus('✅ 지도 생성 중...');
        console.log('✅ 모든 조건 충족, 지도 생성 시도');

        // 간단한 지도 생성
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울시청
          level: 3
        };

        const map = new window.kakao.maps.Map(mapContainer.current, options);
        console.log('✅ 지도 생성 성공!', map);
        setStatus('✅ 지도 로딩 성공!');

        // 기본 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);
        console.log('✅ 마커 추가 성공!');
        setStatus('✅ 지도 + 마커 로딩 완료!');

      } catch (error) {
        console.error('❌ 지도 생성 실패:', error);
        setStatus(`❌ 지도 생성 실패: ${error.message}`);
      }
    };

    // 여러 시점에서 시도
    setTimeout(loadKakaoMap, 500);
    setTimeout(loadKakaoMap, 1500);
    setTimeout(loadKakaoMap, 3000);
    
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '10px', color: '#333' }}>🗺️ 카카오맵 테스트</h3>
      
      <div style={{ 
        marginBottom: '15px', 
        padding: '10px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '6px',
        border: '1px solid #e9ecef'
      }}>
        <strong>상태:</strong> {status}
      </div>

      <div
        ref={mapContainer}
        style={{
          width: '100%',
          height: '400px',
          border: '2px solid #2ed8b6',
          borderRadius: '8px',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          color: '#666'
        }}
      >
        {status.includes('완료') ? null : '지도 로딩 중...'}
      </div>
      
      <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        F12 → Console에서 자세한 로그를 확인하세요.
      </p>
    </div>
  );
};

export default SimpleMap;