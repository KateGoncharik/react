import { ReactNode } from 'react';

type Props = {
  buttonClickHandler: () => void;
};

export default function SearchInput({ buttonClickHandler }: Props): ReactNode {
  return (
    <button className="search-button" onClick={buttonClickHandler}>
      Search
    </button>
  );
}
