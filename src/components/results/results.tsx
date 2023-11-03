import { ReactNode } from 'react';

import Item from '@/components/item/item';
import type { Character, ResultsProps } from 'src/types/types';

export default function Results({ characters }: ResultsProps): ReactNode {
  return characters ? (
    <div className="results-wrapper">
      {characters.map((character: Character) => {
        return (
          <Item key={character.name} characterName={character.name} characterUrl={character.url} />
        );
      })}
    </div>
  ) : (
    <div className="results-wrapper">No data</div>
  );
}
