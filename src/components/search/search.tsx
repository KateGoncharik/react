import SearchInput from '../search-input/search-input';
import SearchButton from '../search-button/search-button';

type SearchProps = {
  buttonClickHandler: () => void;
};

export default function Search({ buttonClickHandler }: SearchProps) {
  return (
    <div className="search-wrapper">
      <SearchInput />
      <SearchButton buttonClickHandler={buttonClickHandler} />
    </div>
  );
}
