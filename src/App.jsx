import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import BottomNav from "./components/BottomNav";
import Toast from "./components/Toast";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastProvider, useToast } from "./store/ToastContext";
import { UserContext } from "./store/UserContext";
import { useKakaoCallback } from "./hooks/useKakaoCallback";
import { initializeNotifications } from "./utils/notificationService";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root, .App {
    width: 100vw !important;
    min-width: 0 !important;
    max-width: 100vw !important;
    overflow-x: hidden !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .App {
    padding-bottom: 64px !important; /* BottomNav 높이만큼 패딩 추가 */
  }
`;

function AppWithRouter() {
  const { toasts, removeToast } = useToast();
  const { user } = React.useContext(UserContext);
  
  // React Router 내부에서 카카오 콜백 처리
  useKakaoCallback();
  
  // 알림 시스템 초기화 (조건부)
  useEffect(() => {
    // 사용자가 로그인한 후 충분한 시간이 지나면 알림 권한 요청
    if (user && user.isLoggedIn) {
      const initNotifications = async () => {
        try {
          // 알림 권한이 이미 있거나 거부된 경우 요청하지 않음
          const currentPermission = Notification.permission;
          if (currentPermission === 'granted' || currentPermission === 'denied') {
            console.log('알림 권한 상태:', currentPermission);
            return;
          }
          
          // 첫 로그인 후 5초 정도 여유를 두고 권한 요청
          const permission = await initializeNotifications();
          console.log('알림 초기화 완료:', permission);
        } catch (error) {
          console.error('알림 초기화 실패:', error);
        }
      };
      
      // 로그인 후 5초 뒤에 알림 권한 요청 (사용자가 앱을 충분히 둘러본 후)
      const timer = setTimeout(initNotifications, 5000);
      return () => clearTimeout(timer);
    }
  }, [user?.isLoggedIn]);
  
  return (
    <>
      <GlobalStyle />
      <ErrorBoundary userId={user?.uid}>
        <div className="App">
          <AppRouter />
          <BottomNav />
          <Toast toasts={toasts} removeToast={removeToast} />
        </div>
      </ErrorBoundary>
    </>
  );
}

function AppContent() {
  return (
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}
