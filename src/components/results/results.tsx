import { Component, ReactNode } from 'react';

import Item from '@/components/item/item';
import type { Character, ResultsState, ResultsProps } from 'src/types/types';

export default class Results extends Component<ResultsProps, ResultsState> {
  render(): ReactNode {
    return this.props.characters ? (
      <div className="results-wrapper">
        {this.props.characters.map((character: Character) => {
          return (
            <Item
              key={character.name}
              characterName={character.name}
              characterUrl={character.url}
            />
          );
        })}
      </div>
    ) : (
      <div className="results-wrapper">No data</div>
    );
  }
}
