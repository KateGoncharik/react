import { ReactNode } from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectLimit, setCurrentPage, setMaxPageCount } from '@/features/search-slice';

import Item from '@/components/item/item';
import type { Character } from '@/types/types';
import { Pagination } from '@/components/pagination/pagination';

type ResultsProps = {
  characters: Character[];
  totalCount: number;
};

export default function Results({ characters, totalCount }: ResultsProps): ReactNode {
  const dispatch = useDispatch();

  const limit = useSelector(selectLimit);

  function setFirstPage() {
    dispatch(setCurrentPage({ currentPage: 1 }));
  }

  useEffect(() => {
    setFirstPage();
    if (totalCount) {
      const maxPageCount = Math.ceil(totalCount / limit);
      dispatch(setMaxPageCount({ maxPageCount: maxPageCount }));
    }
  }, [characters]);

  return characters?.length ? (
    <div className="results-wrapper">
      <Pagination />
      {characters.map((character: Character) => {
        return <Item key={`${character.name}-${character.id}`} character={character} />;
      })}
    </div>
  ) : (
    <div className="results-wrapper">No data</div>
  );
}
