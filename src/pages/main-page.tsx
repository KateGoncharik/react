import { useState, useEffect } from 'react';

import Search from '@/components/search/search';
import Results from '@/components/results/results';
import { getItem, setItem } from '@/lib/local-storage';
import { getSpecifiedCharacters } from '@/services/catalog-service';
import LimitChangeToolbar from '@/components/limit-change/limit-change';

type Character = {
  name: string;
  url: string;
};
export default function MainPage({}: Record<string, never>) {
  const [inputValue, setInputValue] = useState(getItem('lastSearchQuery') ?? '');
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(40);

  function inputChangeHandler(value: string) {
    setInputValue(value);
  }

  useEffect(() => {
    const lastSearchQuery = getItem('lastSearchQuery');
    getSpecifiedCharacters({ query: lastSearchQuery, page, limit }).then(
      (characters: Character[]) => {
        setCharacters(characters);
      }
    );
  }, [page, limit]);

  function buttonClickHandler() {
    setItem('lastSearchQuery', inputValue);
    getSpecifiedCharacters({ query: inputValue, page, limit }).then((characters: Character[]) => {
      setCharacters(characters);
      setFirstPage();
    });
  }

  function limitChangeHandler(newLimit: number) {
    setLimit(newLimit);
  }

  function paginationNextHandler() {
    // TODO check wether we have next
    setPage(page + 1);
  }

  function paginationPrevHandler() {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
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
      <Results
        characters={characters}
        paginationNextHandler={paginationNextHandler}
        paginationPrevHandler={paginationPrevHandler}
      />
    </>
  );
}
