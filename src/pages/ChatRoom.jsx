import React, { useState, useContext, useRef, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/UserContext';

const initialMessages = [
  { id: 1, sender: '나', text: '안녕하세요! 아직 판매 중인가요?' },
  { id: 2, sender: '홍길동', text: '네, 판매 중입니다!' },
  { id: 3, sender: '나', text: '오늘 저녁에 볼 수 있을까요?' },
];

export default function ChatRoom() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(msgs => [
      ...msgs,
      { id: Date.now(), sender: user.nickname || '나', text: input }
    ]);
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 0, background: '#e0f7f3', minHeight: '100vh' }}>
      <TopBar />
      <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: 60, left: 16, background: '#e0f7f3', border: '1.5px solid #2ed8b6', borderRadius: 20, width: 36, height: 36, fontSize: 20, color: '#2ed8b6', zIndex: 102 }}>←</button>
      <div style={{ padding: 24, paddingBottom: 80 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#2ed8b6' }}>채팅방</h1>
        <div style={{ minHeight: 200, marginBottom: 16 }}>
          {messages.map(msg => (
            <div key={msg.id} style={{ textAlign: msg.sender === (user.nickname || '나') ? 'right' : 'left', margin: '8px 0' }}>
              <span style={{ display: 'inline-block', background: msg.sender === (user.nickname || '나') ? '#2ed8b6' : '#b2f0e6', color: msg.sender === (user.nickname || '나') ? '#fff' : '#1a4740', padding: '8px 14px', borderRadius: 16, maxWidth: '70%', wordBreak: 'break-all' }}>{msg.text}</span>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <form style={{ display: 'flex', gap: 8, position: 'fixed', left: 0, right: 0, bottom: 56, maxWidth: 500, margin: '0 auto', background: '#e0f7f3', padding: 12, zIndex: 110 }} onSubmit={handleSubmit}>
          <input type="text" placeholder="메시지 입력..." value={input} onChange={e => setInput(e.target.value)} style={{ flex: 1, padding: 10, fontSize: 16, borderRadius: 16, border: '1.5px solid #b2f0e6', background: '#fff', color: '#1a4740' }} />
          <button type="submit" style={{ padding: '10px 18px', background: '#2ed8b6', color: '#fff', border: 'none', borderRadius: 16, fontWeight: 700, boxShadow: '0 2px 8px #b2f0e6' }}>전송</button>
        </form>
      </div>
    </div>
  );
} 