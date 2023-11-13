import { createBrowserRouter } from 'react-router-dom';

import MainPage from '@/pages/main-page';
import ErrorPage from '@/pages/error-page';
import ItemDetails from '@/components/item-details/item-details';

export const router = createBrowserRouter([
  {
    path: '/:page?',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'details/:itemId',
        element: <ItemDetails />,
      },
    ],
  },
]);
