import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import SetLocation from '../pages/SetLocation';
import ProductRegister from '../pages/ProductRegister';
import ProductDetail from '../pages/ProductDetail';
import ChatRoom from '../pages/ChatRoom';
import MyPage from '../pages/MyPage';
import MusicLife from '../pages/MusicLife';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/set-location" element={<SetLocation />} />
      <Route path="/register" element={<ProductRegister />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/chat/:id" element={<ChatRoom />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/musiclife" element={<MusicLife />} />
    </Routes>
  );
} 