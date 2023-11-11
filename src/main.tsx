import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from '@/pages/error-page';
import MainPage from './pages/main-page';
import '@/components/search/search.css';
import './main.css';
import '@/components/item/item.css';
import '@/components/results/results.css';
import '@/components/pagination/pagination.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
