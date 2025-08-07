// src/main.jsx o App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { CartProvider } from './context/CartContext'; // ajusta la ruta

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
