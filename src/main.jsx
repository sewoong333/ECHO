import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductProvider } from './store/ProductContext';
import { UserProvider } from './store/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>,
);
