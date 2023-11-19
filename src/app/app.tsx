import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import { Provider } from 'react-redux';

import { store } from '@/store';
import { PaginationProvider } from '@/context/pagination-context';

export default function App() {
  return (
    <Provider store={store}>
      <PaginationProvider>
        <RouterProvider router={router} />
      </PaginationProvider>
    </Provider>
  );
}
