import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/main-page';
import ErrorPage from '@/pages/error-page';
import Form from '@/pages/forms/form-page';
import UncontrolledForm from '@/pages/forms/uncontrolled-form-page';

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
  {
    path: 'uncontrolled-form',
    element: <UncontrolledForm />,
  },
];
export const router = createBrowserRouter(routes);
