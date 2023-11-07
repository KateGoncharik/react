import { ReactNode } from 'react';

type PaginationProps = {
  pageChangeHandler: (number: number) => void;
  currentPage: number;
  maxPageCount: number;
};
export function Pagination({
  pageChangeHandler,
  currentPage,
  maxPageCount,
}: PaginationProps): ReactNode {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => pageChangeHandler(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {currentPage === 1 ? '' : currentPage - 1}
      </button>
      <div className="current-page">{currentPage}</div>
      <button
        className="pagination-button"
        onClick={() => pageChangeHandler(currentPage + 1)}
        disabled={currentPage === maxPageCount}
      >
        {currentPage === maxPageCount ? '' : currentPage + 1}
      </button>
    </div>
  );
}
