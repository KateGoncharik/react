import { ReactElement, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Character } from '@/types/types';
import { useFetchCharacterByIdQuery } from '@/api/characterByIdApi';

export default function ItemDetails(): ReactElement {
  const [character, setCharacter] = useState<Character | null>(null);
  const { itemId } = useParams();
  const { page } = useParams();

  const { data } = useFetchCharacterByIdQuery({ id: itemId });

  if (data) {
    setCharacter(data);
  }

  if (character) {
    const src = `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`;

    return (
      <article className="item-details" data-testid="details-item">
        <img className="item-details-image" src={src} />
        <h2 className="item-name">Name: {character.name}</h2>
        <div className="item-details-description">Status: {character.status}</div>
        <div className="item-details-description">Species: {character.species}</div>
        <div className="item-details-description">Gender: {character.gender}</div>
        <div className="item-details-description">Origin: {character.origin}</div>
        <div className="item-details-description">Last seen: {character.location}</div>
        <Link to={`/${page}`} className="close">
          close
        </Link>
      </article>
    );
  }
  return (
    <>
      <p>Not found</p>
    </>
  );
}
