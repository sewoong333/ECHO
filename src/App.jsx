import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import BottomNav from './components/BottomNav';
import { createGlobalStyle } from 'styled-components';

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
`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <AppRouter />
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
