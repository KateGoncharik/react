import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
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
    router.push({
      pathname,
      query: { ...query, page },
    });
    if (direction === 'prev') {
      dispatch(goToPrevPage());
    } else {
      dispatch(goToNextPage());
    }
  }
  return (
    <div className="pagination">
      {/* <Link className={'pagination-link'} href={`/${currentPage === 1 ? '' : currentPage - 1}`}> */}
      <button
        className="pagination-button"
        onClick={() => handlePageChange('prev', currentPage === 1 ? '' : `${currentPage - 1}`)}
        disabled={currentPage === 1}
      >
        {currentPage === 1 ? '' : currentPage - 1}
      </button>
      {/* </Link> */}

      <div className="current-page">{currentPage}</div>
      {/* <Link
        className={'pagination-link'}
        href={`/${currentPage === maxPageCount ? '' : currentPage + 1}`}
      > */}
      <button
        className="pagination-button"
        onClick={() =>
          handlePageChange('next', currentPage === maxPageCount ? '' : `${currentPage + 1}`)
        }
        disabled={currentPage === maxPageCount}
      >
        {currentPage === maxPageCount ? '' : currentPage + 1}
      </button>
      {/* </Link> */}
    </div>
  );
}
