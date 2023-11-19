import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Search from '@/components/search/search';
import { Character } from '@/types/types';
import Results from '@/components/results/results';
import LimitChangeToolbar from '@/components/limit-change/limit-change';
import { ErrorButton } from '@/components/error-button/error-button';
import { usePagination, usePaginationSetter } from '@/context/pagination-context';
import { useFetchCharactersQuery } from '@/api/charactersApi';
import { useSelector } from 'react-redux';
import { selectSearchQuery } from '@/features/search-slice';

export default function MainPage({}: Record<string, never>) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const searchQuery = useSelector(selectSearchQuery);

  const paginationPage = usePagination();
  const paginationSetter = usePaginationSetter();

  const [limit, setLimit] = useState(40);

  function pageChangeHandler(currentPage: number) {
    const nextPage = currentPage > 1 && currentPage <= 1 ? currentPage : 1;
    if (nextPage === paginationPage) {
      return;
    }

    paginationSetter(nextPage);
  }

  const { data } = useFetchCharactersQuery({
    name: searchQuery,
    page: paginationPage,
    limit,
  });

  useEffect(() => {
    setCharacters(data ? data : []);
  }, [data]);

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
      <Search />
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
          maxPageCount={1}
        />
        <Outlet />
        <ErrorButton handler={setHasError} />
      </div>
    </>
  );
}
