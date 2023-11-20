import { ReactNode } from 'react';

import Item from '@/components/item/item';
import type { Character } from '@/types/types';
import { Pagination } from '@/components/pagination/pagination';

type ResultsProps = {
  characters: Character[];
};

export default function Results({ characters }: ResultsProps): ReactNode {
  return characters.length ? (
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
