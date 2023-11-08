import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { ItemProps } from 'src/types/types';

export default function Item({ character }: ItemProps): ReactElement {
  const src = `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`;
  return (
    <div className="results-item">
      <div className="item-name">
        <Link to={`details/${character.id}`}>Name: {character.name}</Link>
      </div>
      <div className="item-description">Status: {character.status}</div>
      <div className="item-description">Species: {character.species}</div>
      <img className="item-image" src={src} />
    </div>
  );
}
