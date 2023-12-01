import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './routes/routes';
import { RouterProvider } from 'react-router-dom';

import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
