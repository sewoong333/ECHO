import React from 'react';
import TopBar from '../components/TopBar';

const posts = [
  {
    id: 1,
    title: '세션 구합니다 (기타)',
    author: '홍길동',
    time: '1시간 전',
    content: '밴드에서 기타 세션을 구합니다! 연습실은 구로동, 주 1회 모임.',
    comments: 3
  },
  {
    id: 2,
    title: '밴드 멤버 모집 (드럼)',
    author: '이순신',
    time: '2시간 전',
    content: '신나는 락밴드에서 드러머를 찾고 있습니다. 관심 있으신 분 연락주세요!',
    comments: 1
  },
  {
    id: 3,
    title: '공연 정보 공유',
    author: '김철수',
    time: '3시간 전',
    content: '이번 주말 구로아트밸리에서 무료 공연이 있습니다. 함께 가실 분?',
    comments: 2
  }
];

export default function MusicLife() {
  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#f8f9fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TopBar />
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto', padding: 0 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, padding: '24px 0 12px 20px', color: '#2ed8b6' }}>음악생활</h1>
        <div style={{ padding: '0 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {posts.map(post => (
            <div key={post.id} style={{ width: '100%', maxWidth: 420, background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(46,216,182,0.06)', marginBottom: 16, padding: '18px 16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{post.title}</div>
              <div style={{ fontSize: 13, color: '#888', marginBottom: 4 }}>{post.author} · {post.time}</div>
              <div style={{ fontSize: 15, color: '#222', marginBottom: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.content}</div>
              <div style={{ fontSize: 13, color: '#bbb' }}>댓글 {post.comments}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 