import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';

import { SearchQueryProvider } from '@/context/search-context';

export default function App() {
  return (
    <SearchQueryProvider>
      <RouterProvider router={router} />
    </SearchQueryProvider>
  );
}
