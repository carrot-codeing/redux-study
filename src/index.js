import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './styles/base.css'
import './index.css'
// redux 是react中状态管理
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

