import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import SearchInput from '@/components/search-input/search-input';
import SearchButton from '@/components/search-button/search-button';
import { makeNewSearch } from '@/features/search-slice';

export default function Search() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  function inputChangeHandler(value: string) {
    setInputValue(value);
  }
  function buttonClickHandler() {
    dispatch(makeNewSearch({ searchQuery: inputValue }));
    router.push({
      pathname,
      query: { q: inputValue },
    });
  }

  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="search-wrapper">
      <SearchInput inputChangeHandler={inputChangeHandler} />
      <SearchButton buttonClickHandler={buttonClickHandler} />
    </div>
  );
}
