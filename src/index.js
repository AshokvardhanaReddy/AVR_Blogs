import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BlogContextProvider from './context/BlogContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <BlogContextProvider>
    <App />
    </BlogContextProvider>
  </BrowserRouter>

);

