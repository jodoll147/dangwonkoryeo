import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

const root = createRoot(document.getElementById('root')); //

axios.defaults.withCredentials = true;

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
