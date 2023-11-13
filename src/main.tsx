import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/app';

import '@/components/search/search.css';
import './main.css';
import '@/components/item/item.css';
import '@/components/results/results.css';
import '@/components/pagination/pagination.css';
import '@/components/item-details/item-details.css';
import '@/components/error-button/error-button.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
