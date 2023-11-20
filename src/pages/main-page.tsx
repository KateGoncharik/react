import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Search from '@/components/search/search';
import { Character } from '@/types/types';
import Results from '@/components/results/results';
import LimitChangeToolbar from '@/components/limit-change/limit-change';
import { ErrorButton } from '@/components/error-button/error-button';
import { useFetchCharactersQuery } from '@/api/charactersApi';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectSearchQuery,
  selectCurrentPage,
  setCurrentPage,
  setMaxPageCount,
} from '@/features/search-slice';

export default function MainPage({}: Record<string, never>) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const searchQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch();
  const currentPaginationPage = useSelector(selectCurrentPage);

  const [limit, setLimit] = useState(30);

  const { data } = useFetchCharactersQuery({
    name: searchQuery,
    page: currentPaginationPage,
    limit,
  });

  useEffect(() => {
    setCharacters(data?.characters ? data.characters : []);
    if (data?.totalCount) {
      const maxPageCount = Math.ceil(data.totalCount / limit);
      dispatch(setMaxPageCount({ maxPageCount: maxPageCount }));
    }
  }, [data]);

  function limitChangeHandler(newLimit: number) {
    setLimit(newLimit);
  }

  function setFirstPage() {
    setCurrentPage(1);
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
        <Results characters={characters} />
        <Outlet />
        <ErrorButton handler={setHasError} />
      </div>
    </>
  );
}
