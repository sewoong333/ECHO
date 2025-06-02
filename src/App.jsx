import React from 'react';
import AppRouter from './routes/AppRouter';
import BottomNav from './components/BottomNav';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <BottomNav />
    </BrowserRouter>
  );
}
