import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import MyPage from './pages/MyPage';
import EchoShare from './pages/EchoShare';
import MusicLife from './pages/MusicLife';
import MapPage from './pages/Map';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
import GuitarTuner from './pages/GuitarTuner';
import BassTuner from './pages/BassTuner';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/echo-share" element={<EchoShare />} />
          <Route path="/musiclife" element={<MusicLife />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/chat" element={<ChatList />} />
          <Route path="/chat/:id" element={<ChatRoom />} />
          <Route path="/tuner/guitar" element={<GuitarTuner />} />
          <Route path="/tuner/bass" element={<BassTuner />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
