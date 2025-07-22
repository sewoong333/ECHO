import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SetLocation from "../pages/SetLocation";
import ProductRegister from "../pages/ProductRegister";
import ProductDetail from "../pages/ProductDetail";
import ChatRoom from "../pages/ChatRoom";
import MyPage from "../pages/MyPage";
import MusicLife from "../pages/MusicLife";
import MusicLifeDetail from "../pages/MusicLifeDetail";
import MusicLifeWrite from "../pages/MusicLifeWrite";
import MapPage from "../pages/Map";
import ChatList from "../pages/ChatList";
import AddProduct from "../pages/AddProduct";
import GuitarTuner from "../pages/GuitarTuner";
import BassTuner from "../pages/BassTuner";
import SalesHistory from "../pages/SalesHistory";
import EchoShare from "../pages/EchoShare";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/set-location" element={<SetLocation />} />
      <Route path="/register" element={<ProductRegister />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/chat/:chatRoomId" element={<ChatRoom />} />
      <Route path="/chat" element={<ChatList />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/sales" element={<SalesHistory />} />
      <Route path="/musiclife" element={<MusicLife />} />
      <Route path="/musiclife/write" element={<MusicLifeWrite />} />
      <Route path="/musiclife/:id" element={<MusicLifeDetail />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/tuner/guitar" element={<GuitarTuner />} />
      <Route path="/tuner/bass" element={<BassTuner />} />
      <Route path="/echo-share" element={<EchoShare />} />
    </Routes>
  );
}
