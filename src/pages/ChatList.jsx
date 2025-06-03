import React from 'react';
import TopBar from '../components/TopBar';
import { useNavigate } from 'react-router-dom';

const chatRooms = [
  { id: 1, with: '홍길동', lastMessage: '네, 가능합니다!', time: '1시간 전' },
  { id: 2, with: '이순신', lastMessage: '언제 거래할까요?', time: '2시간 전' },
  { id: 3, with: '김철수', lastMessage: '이번 주말에 뵐까요?', time: '3시간 전' },
];

export default function ChatList() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#f8f9fa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TopBar />
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto', padding: 0 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, padding: '24px 0 12px 20px', color: '#2ed8b6', textAlign: 'center' }}>채팅 목록</h1>
        <div style={{ padding: '0 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {chatRooms.map(room => (
            <div key={room.id} onClick={() => navigate(`/chat/${room.id}`)} style={{ width: '100%', maxWidth: 420, background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(46,216,182,0.06)', marginBottom: 16, padding: '18px 16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', cursor: 'pointer', transition: 'box-shadow 0.15s', boxSizing: 'border-box' }}>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6, color: '#1a4740', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{room.with}</div>
              <div style={{ fontSize: 15, color: '#222', marginBottom: 8, width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', boxSizing: 'border-box' }}>{room.lastMessage}</div>
              <div style={{ fontSize: 13, color: '#bbb' }}>{room.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 