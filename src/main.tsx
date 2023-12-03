import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './routes/routes';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';

import './main.css';
import './pages/form.css';
import '@/components/submitts-list/submittions-list.css';
import '@/components/submit/submit.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
