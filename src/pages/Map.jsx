import React from 'react';
import TopBar from '../components/TopBar';

// 카테고리별 아이콘 추천 예시
const CATEGORY_ICONS = {
  '판매중인 악기': '🎸', // 기타
  '세션구인': '🥁', // 드럼
  '공연정보': '🎤', // 마이크
  '기타': '🎶',
};

// 예시 게시물 데이터 (실제 구현시 서버/스토어 연동)
const posts = [
  { id: 1, title: '야마하 디지털 피아노', category: '판매중인 악기', x: 120, y: 110, author: '홍길동' },
  { id: 2, title: '세션 구합니다 (기타)', category: '세션구인', x: 220, y: 180, author: '이순신' },
  { id: 3, title: '구로아트밸리 공연', category: '공연정보', x: 320, y: 70, author: '김철수' },
];

export default function MapPage() {
  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#f8f9fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TopBar />
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, padding: '24px 0 12px 20px', color: '#2ed8b6' }}>동네지도</h1>
        <div style={{ width: '100%', height: '60vh', borderRadius: 16, boxShadow: '0 2px 12px #b2f0e6', marginBottom: 24, background: '#eee', position: 'relative', overflow: 'hidden' }}>
          {/* 더미 지도 이미지 */}
          <img src="/assets/kakaomap-dummy.png" alt="dummy-map" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.1) brightness(1.08)' }} />
          {/* 게시물 마커 더미 렌더링 */}
          {posts.map(post => (
            <div key={post.id} style={{ position: 'absolute', left: post.x, top: post.y, transform: 'translate(-50%, -100%)', zIndex: 2, cursor: 'pointer' }} onClick={() => window.location.href = `/product/${post.id}`}>
              <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1.5px solid #2ed8b6', borderRadius: 16, boxShadow: '0 2px 8px #b2f0e6', padding: '4px 10px 4px 4px' }}>
                <span style={{ fontSize: 22, marginRight: 6 }}>{CATEGORY_ICONS[post.category] || CATEGORY_ICONS['기타']}</span>
                <span style={{ fontSize: 15, color: '#1a4740', fontWeight: 700 }}>{post.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 15, color: '#888', padding: '0 16px 24px 16px' }}>
          <b>카테고리별 아이콘 예시:</b> <span style={{ marginLeft: 8 }}>🎸 판매중인 악기</span> <span style={{ marginLeft: 8 }}>🥁 세션구인</span> <span style={{ marginLeft: 8 }}>🎤 공연정보</span>
        </div>
      </div>
    </div>
  );
} 