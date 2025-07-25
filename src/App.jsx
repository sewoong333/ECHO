import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import BottomNav from "./components/BottomNav";
import Toast from "./components/Toast";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastProvider, useToast } from "./store/ToastContext";
import { UserContext } from "./store/UserContext";
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

function AppContent() {
  const { toasts, removeToast } = useToast();
  const { user } = React.useContext(UserContext);
  
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ErrorBoundary userId={user?.uid}>
        <div className="App">
          <AppRouter />
          <BottomNav />
          <Toast toasts={toasts} removeToast={removeToast} />
        </div>
      </ErrorBoundary>
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
