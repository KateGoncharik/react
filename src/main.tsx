import React from 'react';
import ReactDOM from 'react-dom/client';

import ErrorPage from '@/pages/error-page';
import MainPage from './pages/main-page';
import '@/components/search/search.css';
import './main.css';
import '@/components/item/item.css';
import '@/components/results/results.css';
import '@/components/pagination/pagination.css';
import '@/components/item-details/item-details.css';
import '@/components/error-button/error-button.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemDetails from './components/item-details/item-details';
import { SearchQueryProvider } from './context/search-context';

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchQueryProvider>
      {/* <CharactersProvider> */}
      <RouterProvider router={router} />
      {/* </CharactersProvider> */}
    </SearchQueryProvider>
  </React.StrictMode>
);
