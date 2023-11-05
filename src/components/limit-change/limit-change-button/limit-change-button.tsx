import { ReactNode } from 'react';

type LimitChangeButtonProps = {
  buttonClickHandler: () => void;
};

export default function LimitChangeButton({
  buttonClickHandler,
}: LimitChangeButtonProps): ReactNode {
  return (
    <button className="search-button" onClick={buttonClickHandler}>
      Change limit
    </button>
  );
}
