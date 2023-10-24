import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import '@/components/search/search.css';
import './main.css';
import '@/components/item/item.css'
import '@/components/results/results.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
