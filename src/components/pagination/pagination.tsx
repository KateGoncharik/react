import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

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
      <Link className={'pagination-link'} to={`/${currentPage === 1 ? '' : currentPage - 1}`}>
        <button
          className="pagination-button"
          onClick={() => pageChangeHandler(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {currentPage === 1 ? '' : currentPage - 1}
        </button>
      </Link>

      <div className="current-page">{currentPage}</div>
      <Link
        className={'pagination-link'}
        to={`/${currentPage === maxPageCount ? '' : currentPage + 1}`}
      >
        <button
          className="pagination-button"
          onClick={() => pageChangeHandler(currentPage + 1)}
          disabled={currentPage === maxPageCount}
        >
          {currentPage === maxPageCount ? '' : currentPage + 1}
        </button>
      </Link>
    </div>
  );
}
