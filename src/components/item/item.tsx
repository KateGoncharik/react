import { ReactElement } from 'react';

import { ItemProps } from 'src/types/types';

export default function Item({ character }: ItemProps): ReactElement {
  const src = `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`;
  return (
    <div className="results-item">
      <div className="item-name">Name: {character.name}</div>
      <div className="item-url">Status: {character.status}</div>
      <div className="item-species">Species: {character.species}</div>
      <img className="item-image" src={src} />
    </div>
  );
}
