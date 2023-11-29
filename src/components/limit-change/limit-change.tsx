import LimitChangeInput from './limit-change-input/limit-change-input';
import LimitChangeButton from './limit-change-button/limit-change-button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { setLimit, selectLimit } from '@/features/search-slice';

export default function LimitChangeToolbar() {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);
  const [inputValue, setInputValue] = useState(limit);
  const router = useRouter();
  const { pathname, query } = router;
  function inputChangeHandler(limitFromUser: number) {
    setInputValue(limitFromUser);
  }

  function updateLimit(currentLimit: number) {
    if (limit < 1) {
      return;
    }
    dispatch(setLimit({ limit: currentLimit }));
    router.push({
      pathname,
      query: { ...query, limit },
    });
  }

  return (
    <div className="search-wrapper">
      <LimitChangeInput inputChangeHandler={inputChangeHandler} />
      <LimitChangeButton buttonClickHandler={() => updateLimit(inputValue)} />
    </div>
  );
}
