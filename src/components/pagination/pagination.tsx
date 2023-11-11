import { ReactNode } from 'react';

type PaginationProps = {
  paginationNextHandler: () => void;
  paginationPrevHandler: () => void;
};
export function Pagination({
  paginationNextHandler,
  paginationPrevHandler,
}: PaginationProps): ReactNode {
  return (
    <div className="pagination">
      <button className="pagination-prev" onClick={paginationPrevHandler}>
        prev
      </button>
      <button className="pagination-next" onClick={paginationNextHandler}>
        next
      </button>
    </div>
  );
}
