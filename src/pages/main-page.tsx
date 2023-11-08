import { useState, useEffect } from 'react';

import Search from '@/components/search/search';
import Results from '@/components/results/results';
import { getItem, setItem } from '@/lib/local-storage';
import { getSpecifiedCharacters } from '@/services/catalog-service';
import LimitChangeToolbar from '@/components/limit-change/limit-change';
import { Outlet } from 'react-router-dom';

type Character = {
  name: string;
  url: string;
};

export default function MainPage({}: Record<string, never>) {
  const [inputValue, setInputValue] = useState(getItem('lastSearchQuery') ?? '');
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(40);
  const [maxPageCount, setMaxPageCount] = useState(0);

  function inputChangeHandler(value: string) {
    setInputValue(value);
  }

  useEffect(() => {
    const lastSearchQuery = getItem('lastSearchQuery');
    getCharacters(lastSearchQuery, page, limit, false);
  }, [page, limit]);

  async function buttonClickHandler() {
    setItem('lastSearchQuery', inputValue);
    getCharacters(inputValue, page, limit, true);
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
          setCharacters(characters);
          if (isNewQuery) {
            setFirstPage();
          }
        } else {
          setCharacters(null);
        }
      });
  }

  function limitChangeHandler(newLimit: number) {
    setLimit(newLimit);
  }

  function setFirstPage() {
    setPage(1);
  }

  return (
    <>
      <Search inputChangeHandler={inputChangeHandler} buttonClickHandler={buttonClickHandler} />
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
      </div>
    </>
  );
}
