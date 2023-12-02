import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/main-page';
import ErrorPage from '@/pages/error-page';
import Form from '@/pages/form';

export const routes = [
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'form',
    element: <Form />,
  },
];
export const router = createBrowserRouter(routes);
