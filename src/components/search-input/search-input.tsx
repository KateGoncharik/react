type SearchInputProps = {
  inputChangeHandler: (value: string) => void;
};

export default function SearchInput({ inputChangeHandler }: SearchInputProps) {
  return (
    <input
      className="search-input"
      defaultValue={''}
      onChange={(e) => {
        inputChangeHandler(e.target.value.trim());
      }}
    />
  );
}
