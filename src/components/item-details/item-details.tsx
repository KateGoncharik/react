import { ReactElement, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Character } from 'src/types/types';

import { getCharacterById } from '@/services/catalog-service';

export default function ItemDetails(): ReactElement {
  const [character, setCharacter] = useState<Character | null>(null);
  const { itemId } = useParams();
  const { page } = useParams();

  useEffect(() => {
    if (itemId) {
      const getFilm = async () => {
        const characterFromResponse = await getCharacterById(itemId);
        setCharacter(characterFromResponse);
      };
      getFilm();
    }
  }, [itemId]);

  if (character) {
    const src = `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`; // ?

    return (
      <div className="item-details">
        <img className="item-details-image" src={src} />
        <div className="item-name">Name: {character.name}</div>
        <div className="item-details-description">Status: {character.status}</div>
        <div className="item-details-description">Species: {character.species}</div>
        <div className="item-details-description">Gender: {character.gender}</div>
        <div className="item-details-description">Origin: {character.origin}</div>
        <div className="item-details-description">Last seen: {character.location}</div>
        <Link to={`/${page}`} className="close">
          close
        </Link>
      </div>
    );
  }
  // TODO add more details

  return <></>;
}
