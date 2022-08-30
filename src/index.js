import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import AuthService from './service/auth';
import { AuthProvider } from './context/AuthContext';

const authService = new AuthService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider authService={authService}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
