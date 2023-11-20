import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  goToPrevPage,
  goToNextPage,
  selectCurrentPage,
  selectMaxPageCount,
} from '@/features/search-slice';

export function Pagination(): ReactNode {
  const dispatch = useDispatch();
  const maxPageCount = useSelector(selectMaxPageCount);
  const currentPage = useSelector(selectCurrentPage);
  return (
    <div className="pagination">
      <Link className={'pagination-link'} to={`/${currentPage === 1 ? '' : currentPage - 1}`}>
        <button
          className="pagination-button"
          onClick={() => dispatch(goToPrevPage())}
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
          onClick={() => dispatch(goToNextPage())}
          disabled={currentPage === maxPageCount}
        >
          {currentPage === maxPageCount ? '' : currentPage + 1}
        </button>
      </Link>
    </div>
  );
}
