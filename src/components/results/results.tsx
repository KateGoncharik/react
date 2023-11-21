import { ReactNode } from 'react';
import { useEffect } from 'react';

import { useFetchCharactersQuery } from '@/api/charactersApi';
import { useSelector, useDispatch } from 'react-redux';

import { selectSearchQuery, selectLimit, setLimit, setCurrentPage } from '@/features/search-slice';

import Item from '@/components/item/item';
import type { Character } from '@/types/types';
import { Pagination } from '@/components/pagination/pagination';

export default function Results(): ReactNode {
  const dispatch = useDispatch();

  const searchQuery = useSelector(selectSearchQuery);
  const limit = useSelector(selectLimit);

  const currentPaginationPage = useSelector(selectLimit);

  const { data } = useFetchCharactersQuery({
    name: searchQuery,
    page: currentPaginationPage,
    limit,
  });
  function setFirstPage() {
    dispatch(setCurrentPage({ currentPage: 1 }));
  }

  useEffect(() => {
    setFirstPage();
    if (data?.totalCount) {
      const maxPageCount = Math.ceil(data.totalCount / limit);
      dispatch(setLimit({ maxPageCount: maxPageCount }));
    }
  }, [data]);
  return data?.characters.length ? (
    <div className="results-wrapper">
      <Pagination />
      {data?.characters.map((character: Character) => {
        return <Item key={`${character.name}-${character.id}`} character={character} />;
      })}
    </div>
  ) : (
    <div className="results-wrapper">No data</div>
  );
}
