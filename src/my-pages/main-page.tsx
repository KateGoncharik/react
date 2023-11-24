import { useState } from 'react';

import { Character } from '@/types/types';
import Search from '@/components/search/search';
import Results from '@/components/results/results';
import LimitChangeToolbar from '@/components/limit-change/limit-change';
import { ErrorButton } from '@/components/error-button/error-button';

type MainProps = {
  characters: Character[];
  totalCount: number;
};

export default function MainPage({ characters, totalCount }: MainProps) {
  const [limit, setLimit] = useState(30);

  function limitChangeHandler(newLimit: number) {
    setLimit(newLimit);
  }

  const [hasError, setHasError] = useState(false);
  if (hasError === true) {
    throw new Error('Some problem occured!');
  }

  return (
    <>
      <Search />
      <LimitChangeToolbar limitChangeHandler={limitChangeHandler} limitFromMain={limit} />
      <div className="results-and-item-wrapper">
        <Results characters={characters} totalCount={totalCount} />
        <ErrorButton handler={setHasError} />
      </div>
    </>
  );
}
