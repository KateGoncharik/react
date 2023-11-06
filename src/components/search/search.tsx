import { useState } from 'react';
import SearchInput from '../search-input/search-input';
import SearchButton from '../search-button/search-button';

type Props = {
  inputChangeHandler: (query: string) => void;
  buttonClickHandler: () => void;
};

export default function Search({ inputChangeHandler, buttonClickHandler }: Props) {
  const [hasError, setHasError] = useState(false);
  if (hasError === true) {
    throw new Error('Some problem occured!');
  }
  return (
    <div className="search-wrapper">
      <SearchInput inputChangeHandler={inputChangeHandler} />
      <SearchButton buttonClickHandler={buttonClickHandler} />
      <button
        className="error-button"
        onClick={() => {
          setHasError(true);
        }}
      >
        throw Error
      </button>
    </div>
  );
}
