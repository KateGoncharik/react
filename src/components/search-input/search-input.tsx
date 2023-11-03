import { getItem } from '@/lib/local-storage';

type Props = {
  inputChangeHandler: (query: string) => void;
};

export default function SearchInput({ inputChangeHandler }: Props) {
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
