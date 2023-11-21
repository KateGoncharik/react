import { useSelector } from 'react-redux';
import { selectLimit } from '@/features/search-slice';

type LimitChangeInputProps = {
  inputChangeHandler: (limit: number) => void;
};

export default function LimitChangeInput({ inputChangeHandler }: LimitChangeInputProps) {
  const limit = useSelector(selectLimit);

  function limitInputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const userValue = Number(e.target.value);
    if (isNaN(userValue)) {
      return;
    }
    inputChangeHandler(userValue);
  }

  return (
    <input
      className="limit-change-input"
      defaultValue={limit}
      onChange={(e) => {
        limitInputChangeHandler(e);
      }}
    />
  );
}
