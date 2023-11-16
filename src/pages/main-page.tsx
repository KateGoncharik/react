import { useState, useEffect, createContext } from 'react';
import { Outlet } from 'react-router-dom';

import Search from '@/components/search/search';
import Results from '@/components/results/results';
import { setItem } from '@/lib/local-storage';
import { getSpecifiedCharacters } from '@/services/catalog-service';
import LimitChangeToolbar from '@/components/limit-change/limit-change';
import { useSearchQuery, useSearchQuerySetter } from '@/context/search-context';
import { Character } from '@/types/types';
import { ErrorButton } from '@/components/error-button/error-button';
import { useCharacters, useCharactersSetter } from '@/context/characters-context';
import { usePagination, usePaginationSetter } from '@/context/pagination-context';

export const InputChangeHandlerContext = createContext<(value: string) => void>(() => {});
export const SearchInputContext = createContext('');

export default function MainPage({}: Record<string, never>) {
  const currentSearchQuery = useSearchQuery();
  const searchQuerySetter = useSearchQuerySetter();
  const characters = useCharacters();
  const charactersSetter = useCharactersSetter();

  const paginationPage = usePagination();
  const paginationSetter = usePaginationSetter();

  const [limit, setLimit] = useState(40);
  const [maxPageCount, setMaxPageCount] = useState(0);

  function inputChangeHandler(value: string) {
    searchQuerySetter(value);
  }

  useEffect(() => {
    getCharacters(currentSearchQuery, paginationPage, limit, false);
  }, [paginationPage, limit]);

  async function buttonClickHandler() {
    setItem('lastSearchQuery', currentSearchQuery);
    getCharacters(currentSearchQuery, paginationPage, limit, true);
  }

  function pageChangeHandler(currentPage: number) {
    const nextPage = currentPage > 1 && currentPage <= maxPageCount ? currentPage : 1;
    if (nextPage === paginationPage) {
      return;
    }

    paginationSetter(nextPage);
  }
  // TODO rename
  function getCharacters(query: string, page: number, limit: number, isNewQuery: boolean) {
    getSpecifiedCharacters({ query, page, limit })
      .then((response: Response) => {
        if (response.headers.get('X-Total-Count')) {
          const maximumNumberOfPages = Math.ceil(
            Number(response.headers.get('X-Total-Count')) / limit
          );
          setMaxPageCount(maximumNumberOfPages);
        }
        return response.json();
      })
      .then((characters: Character[]) => {
        if (characters.length) {
          charactersSetter(characters);
          if (isNewQuery) {
            setFirstPage();
          }
        } else {
          charactersSetter([]);
        }
      });
  }

  function limitChangeHandler(newLimit: number) {
    setLimit(newLimit);
  }

  function setFirstPage() {
    paginationSetter(1);
  }
  const [hasError, setHasError] = useState(false);
  if (hasError === true) {
    throw new Error('Some problem occured!');
  }

  return (
    <>
      <InputChangeHandlerContext.Provider value={inputChangeHandler}>
        <Search buttonClickHandler={buttonClickHandler} />
        <LimitChangeToolbar
          limitChangeHandler={limitChangeHandler}
          limitFromMain={limit}
          setFirstPage={setFirstPage}
        />
        <div className="results-and-item-wrapper">
          <Results
            characters={characters}
            pageChangeHandler={pageChangeHandler}
            currentPage={paginationPage}
            maxPageCount={maxPageCount}
          />
          <Outlet />
          <ErrorButton handler={setHasError} />
        </div>
      </InputChangeHandlerContext.Provider>
    </>
  );
}
