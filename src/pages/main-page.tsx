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

export const InputChangeHandlerContext = createContext<(value: string) => void>(() => {});
export const SearchInputContext = createContext('');

export default function MainPage({}: Record<string, never>) {
  const currentSearchQuery = useSearchQuery();
  const searchQuerySetter = useSearchQuerySetter();
  const characters = useCharacters();
  const charactersSetter = useCharactersSetter();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(40);
  const [maxPageCount, setMaxPageCount] = useState(0);

  function inputChangeHandler(value: string) {
    searchQuerySetter(value);
  }

  useEffect(() => {
    getCharacters(currentSearchQuery, page, limit, false);
  }, [page, limit]);

  async function buttonClickHandler() {
    setItem('lastSearchQuery', currentSearchQuery);
    getCharacters(currentSearchQuery, page, limit, true);
  }

  function pageChangeHandler(num: number) {
    const nextPage = num > 1 && num <= maxPageCount ? num : 1;

    if (nextPage === page) {
      return;
    }

    setPage(nextPage);
  }

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
    setPage(1);
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
            currentPage={page}
            maxPageCount={maxPageCount}
          />
          <Outlet />
          <ErrorButton handler={setHasError} />
        </div>
      </InputChangeHandlerContext.Provider>
    </>
  );
}
