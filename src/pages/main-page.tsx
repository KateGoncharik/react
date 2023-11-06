import { useState, useEffect } from 'react';

import Search from '@/components/search/search';
import Results from '@/components/results/results';
import { getItem, setItem } from '@/lib/local-storage';
import { getSpecifiedCharacters } from '@/services/catalog-service';
import LimitChangeToolbar from '@/components/limit-change/limit-change';
import parse_link_header from '@/lib/parse-links';

type Character = {
  name: string;
  url: string;
};

type Links = { first: string; prev: string; next: string; last: string };
export default function MainPage({}: Record<string, never>) {
  const [inputValue, setInputValue] = useState(getItem('lastSearchQuery') ?? '');
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(40);
  const [links, setLinks] = useState<Links>({ first: '', prev: '', next: '', last: '' });

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

  function getCharacters(query: string, page: number, limit: number, isNewQuery: boolean) {
    getSpecifiedCharacters({ query, page, limit })
      .then((response: Response) => {
        if (response.headers.get('Link')) {
          setLinks(parse_link_header(response.headers.get('Link')));
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

  function paginationNextHandler() {
    if (links.next !== '') {
      setPage(page + 1);
      // make button active
    } else {
      return;
    }
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
