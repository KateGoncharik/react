import { useState, useEffect } from 'react';

import Search from '@/components/search/search';
import Results from '@/components/results/results';
import { getItem, setItem } from '@/lib/local-storage';
import { getSpecifiedCharacters } from '@/services/catalog-service';

type Character = {
  name: string;
  url: string;
};
export default function MainPage({}: Record<string, never>) {
  const [inputValue, setInputValue] = useState(getItem('lastSearchQuery') ?? '');
  const [characters, setCharacters] = useState<Character[] | null>(null);

  function inputChangeHandler(value: string) {
    setInputValue(value);
  }

  useEffect(() => {
    const lastSearchQuery = getItem('lastSearchQuery');
    getSpecifiedCharacters(lastSearchQuery).then((characters: { results: Character[] }) => {
      setCharacters(characters.results);
    });
  }, []);

  function buttonClickHandler() {
    setItem('lastSearchQuery', inputValue);
    getSpecifiedCharacters(inputValue).then((characters: { results: Character[] }) => {
      setCharacters(characters.results);
    });
  }

  return (
    <>
      <Search inputChangeHandler={inputChangeHandler} buttonClickHandler={buttonClickHandler} />
      <Results characters={characters} />
    </>
  );
}
