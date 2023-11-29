import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  goToPrevPage,
  goToNextPage,
  selectMaxPageCount,
  selectCurrentPage,
} from '@/features/search-slice';

export function Pagination(): ReactNode {
  const dispatch = useDispatch();
  const maxPageCount = useSelector(selectMaxPageCount);
  const currentPage = useSelector(selectCurrentPage);
  const router = useRouter();
  const { pathname, query } = router;

  function handlePageChange(direction: string, page: string) {
    if (direction === 'prev') {
      dispatch(goToPrevPage());
      router.push({
        pathname,
        query: { ...query, page },
      });
    } else {
      dispatch(goToNextPage());
      router.push({
        pathname,
        query: { ...query, page },
      });
    }
  }

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => handlePageChange('prev', currentPage === 1 ? '' : `${currentPage - 1}`)}
        disabled={currentPage === 1}
      >
        {currentPage === 1 ? '' : currentPage - 1}
      </button>

      <div className="current-page">{currentPage}</div>

      <button
        className="pagination-button"
        onClick={() =>
          handlePageChange('next', currentPage === maxPageCount ? '' : `${currentPage + 1}`)
        }
        disabled={currentPage === maxPageCount}
      >
        {currentPage === maxPageCount ? '' : currentPage + 1}
      </button>
    </div>
  );
}
