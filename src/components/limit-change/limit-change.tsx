import LimitChangeInput from './limit-change-input/limit-change-input';
import LimitChangeButton from './limit-change-button/limit-change-button';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setLimit, selectLimit } from '@/features/search-slice';

type LimitChangeProps = {
  limitChangeHandler: (limit: number) => void;
  limitFromMain: number;
};

export default function LimitChangeToolbar({ limitChangeHandler }: LimitChangeProps) {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);

  function inputChangeHandler(limitFromUser: number) {
    dispatch(setLimit({ limit: limitFromUser }));
  }
  // TODO: remove duplication
  function setFirstPage() {
    dispatch(setCurrentPage({ currentPage: 1 }));
  }
  function updateLimit() {
    if (limit < 1) {
      return;
    }
    limitChangeHandler(limit);
    setFirstPage();
  }

  return (
    <div className="search-wrapper">
      <LimitChangeInput inputChangeHandler={inputChangeHandler} />
      <LimitChangeButton buttonClickHandler={updateLimit} />
    </div>
  );
}
