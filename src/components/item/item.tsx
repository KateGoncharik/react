import { JSX } from 'react';
import { Link } from 'react-router-dom';

import { Character } from '@/types/types';

type ItemProps = {
  character: Character;
};

export default function Item({ character }: ItemProps): JSX.Element {
  const src = `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`;
  const { name, status, species } = character;
  return (
    <div className="results-item">
      <div className="item-name">
        <Link to={`details/${character.id}`}>Name: {name}</Link>
      </div>
      <div className="item-description">Status: {status}</div>
      <div className="item-description">Species: {species}</div>
      <img className="item-image" src={src} />
    </div>
  );
}
