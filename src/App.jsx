import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
