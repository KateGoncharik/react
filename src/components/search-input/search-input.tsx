import { getItem } from '@/lib/local-storage';

type SearchInputProps = {
  inputChangeHandler: (value: string) => void;
};

export default function SearchInput({ inputChangeHandler }: SearchInputProps) {
  return (
    <input
      className="search-input"
      defaultValue={getItem('lastSearchQuery') || ''}
      onChange={(e) => {
        inputChangeHandler(e.target.value.trim());
      }}
    />
  );
}
