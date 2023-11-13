import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';

import { SearchQueryProvider } from '@/context/search-context';
import { CharactersProvider } from '@/context/characters-context';

export default function App() {
  return (
    <SearchQueryProvider>
      <CharactersProvider>
        <RouterProvider router={router} />
      </CharactersProvider>
    </SearchQueryProvider>
  );
}
