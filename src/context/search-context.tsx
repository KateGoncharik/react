import { createContext, useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

import { getItem } from '@/lib/local-storage';

type SearchQuerySetter = Dispatch<SetStateAction<string>>;

export const SearchQueryContext = createContext('');
export const SearchQuerySetterContext = createContext<SearchQuerySetter>(() => {});

export const SearchQueryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(getItem('lastSearchQuery') ?? '');
  return (
    <SearchQueryContext.Provider value={searchQuery}>
      <SearchQuerySetterContext.Provider value={setSearchQuery}>
        {children}
      </SearchQuerySetterContext.Provider>
    </SearchQueryContext.Provider>
  );
};

export const useSearchQuery = () => useContext(SearchQueryContext);
export const useSearchQuerySetter = () => useContext(SearchQuerySetterContext);
