import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';

// Critical pages - loaded immediately
import Home from "../pages/Home";
import Login from "../pages/Login";

// Non-critical pages - lazy loaded
const Signup = lazy(() => import("../pages/Signup"));
const SetLocation = lazy(() => import("../pages/SetLocation"));
const ProductRegister = lazy(() => import("../pages/ProductRegister"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const ChatRoom = lazy(() => import("../pages/ChatRoom"));
const MyPage = lazy(() => import("../pages/MyPage"));
const MusicLife = lazy(() => import("../pages/MusicLife"));
const MusicLifeDetail = lazy(() => import("../pages/MusicLifeDetail"));
const MusicLifeWrite = lazy(() => import("../pages/MusicLifeWrite"));
const MapPage = lazy(() => import("../pages/Map"));
const ChatList = lazy(() => import("../pages/ChatList"));
const AddProduct = lazy(() => import("../pages/AddProduct"));
const GuitarTuner = lazy(() => import("../pages/GuitarTuner"));
const BassTuner = lazy(() => import("../pages/BassTuner"));
const SalesHistory = lazy(() => import("../pages/SalesHistory"));
const EchoShare = lazy(() => import("../pages/EchoShare"));
const PaymentSuccess = lazy(() => import("../pages/PaymentSuccess"));
const PaymentFail = lazy(() => import("../pages/PaymentFail"));
const WishList = lazy(() => import("../pages/WishList"));

// Loading component
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  text-align: center;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-border-light);
  border-top: 3px solid var(--color-mint-main);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 500;
`;

const PageLoader = () => (
  <LoadingContainer>
    <LoadingSpinner />
    <LoadingText>페이지를 불러오는 중...</LoadingText>
  </LoadingContainer>
);

export default function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Critical routes - no lazy loading */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Non-critical routes - lazy loaded */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/set-location" element={<SetLocation />} />
        <Route path="/register" element={<ProductRegister />} />
        <Route path="/add" element={<ProductRegister />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/chat/:chatRoomId" element={<ChatRoom />} />
        <Route path="/chat" element={<ChatList />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/sales" element={<SalesHistory />} />
        <Route path="/musiclife" element={<MusicLife />} />
        <Route path="/musiclife/write" element={<MusicLifeWrite />} />
        <Route path="/musiclife/:id" element={<MusicLifeDetail />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/tuner/guitar" element={<GuitarTuner />} />
        <Route path="/tuner/bass" element={<BassTuner />} />
        <Route path="/echo-share" element={<EchoShare />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/fail" element={<PaymentFail />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </Suspense>
  );
}
