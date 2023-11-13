import { ReactNode } from 'react';

import Item from '@/components/item/item';
import type { Character } from '@/types/types';
import { Pagination } from '@/components/pagination/pagination';

type ResultsProps = {
  characters: Character[];
  pageChangeHandler?: (number: number) => void;
  currentPage: number;
  maxPageCount: number;
};

export default function Results({
  characters,
  pageChangeHandler,
  currentPage,
  maxPageCount,
}: ResultsProps): ReactNode {
  return characters.length ? (
    <div className="results-wrapper">
      <Pagination
        pageChangeHandler={pageChangeHandler ? pageChangeHandler : () => {}}
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
