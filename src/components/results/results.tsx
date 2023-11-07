import { ReactNode } from 'react';

import Item from '@/components/item/item';
import type { Character, ResultsProps } from 'src/types/types';
import { Pagination } from '../pagination/pagination';

export default function Results({
  characters,
  pageChangeHandler,
  currentPage,
  maxPageCount,
}: ResultsProps): ReactNode {
  return characters ? (
    <div className="results-wrapper">
      <Pagination
        pageChangeHandler={pageChangeHandler}
        currentPage={currentPage}
        maxPageCount={maxPageCount}
      />
      {characters.map((character: Character) => {
        return <Item key={`${character.name}-${character.id}`} character={character} />;
      })}
    </div>
  ) : (
    <div className="results-wrapper">No data</div>
  );
}
