import { useState } from 'react';
import { useDispatch } from 'react-redux';

import SearchInput from '@/components/search-input/search-input';
import SearchButton from '@/components/search-button/search-button';
import { makeNewSearch } from '@/features/search-slice';
import { setItem } from '@/lib/local-storage';

export default function Search() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  function inputChangeHandler(value: string) {
    setInputValue(value);
  }
  function buttonClickHandler() {
    setItem('lastSearchQuery', inputValue);
    dispatch(makeNewSearch({ searchQuery: inputValue }));
  }

  return (
    <div className="search-wrapper">
      <SearchInput inputChangeHandler={inputChangeHandler} />
      <SearchButton buttonClickHandler={buttonClickHandler} />
    </div>
  );
}
