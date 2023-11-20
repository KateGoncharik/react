import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '@/types/types';
import { getItemImageUrl } from '@/lib/get-item-image-url';

type ItemProps = {
  character: Character;
};

export default function Item({ character }: ItemProps): JSX.Element {
  const src = getItemImageUrl(character.id);

  const { name, status, species } = character;

  return (
    <Link className="item-link" to={`details/${character.id}`}>
      <article className="results-item">
        <h2 className="item-name">{name}</h2>
        <div className="item-description">Status: {status}</div>
        <div className="item-description">Species: {species}</div>
        <img className="item-image" src={src} />
      </article>
    </Link>
  );
}
