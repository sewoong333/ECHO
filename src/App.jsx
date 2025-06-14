import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import BottomNav from './components/BottomNav';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, #root {
    width: 100vw !important;
    min-width: 0 !important;
    overflow-x: hidden !important;
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
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
