import { ReactNode } from 'react';

type SearchButtonProps = {
  buttonClickHandler: () => void;
};

export default function SearchButton({ buttonClickHandler }: SearchButtonProps): ReactNode {
  return (
    <button className="search-button" onClick={buttonClickHandler}>
      Search
    </button>
  );
}
