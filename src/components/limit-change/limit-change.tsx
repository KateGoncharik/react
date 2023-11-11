import { useState } from 'react';

import LimitChangeInput from './limit-change-input/limit-change-input';
import LimitChangeButton from './limit-change-button/limit-change-button';

type LimitChangeProps = {
  limitChangeHandler: (limit: number) => void;
  limitFromMain: number;
  setFirstPage: () => void;
};

export default function LimitChangeToolbar({
  limitChangeHandler,
  limitFromMain,
  setFirstPage,
}: LimitChangeProps) {
  const [limit, setLimit] = useState(limitFromMain);

  function inputChangeHandler(limitFromUser: number) {
    setLimit(limitFromUser);
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
      <LimitChangeInput inputChangeHandler={inputChangeHandler} limitFromMain={limit} />
      <LimitChangeButton buttonClickHandler={updateLimit} />
    </div>
  );
}
