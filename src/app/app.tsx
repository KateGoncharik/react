import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';

import { SearchQueryProvider } from '@/context/search-context';
import { CharactersProvider } from '@/context/characters-context';
import { PaginationProvider } from '@/context/pagination-context';

export default function App() {
  return (
    <SearchQueryProvider>
      <CharactersProvider>
        <PaginationProvider>
          <RouterProvider router={router} />
        </PaginationProvider>
      </CharactersProvider>
    </SearchQueryProvider>
  );
}
