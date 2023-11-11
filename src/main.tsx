import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import '@/components/search/search.css';
import './main.css';
import '@/components/item/item.css';
import '@/components/results/results.css';
import '@/components/pagination/pagination.css';
import '@/components/item-details/item-details.css';
import '@/components/error-button/error-button.css';

import { router } from '@/routes/index';
import { SearchQueryProvider } from './context/search-context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchQueryProvider>
      <RouterProvider router={router} />
    </SearchQueryProvider>
  </React.StrictMode>
);
