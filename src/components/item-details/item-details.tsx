import { ReactElement } from 'react';
import Link from 'next/link';

import { useFetchCharacterByIdQuery } from '@/api/charactersApi';
import { getItemImageUrl } from '@/lib/get-item-image-url';

export default function ItemDetails(): ReactElement {
  const { data } = useFetchCharacterByIdQuery({ id: '8' });

  if (data) {
    const src = getItemImageUrl(data.id);

    return (
      <article className="item-details" data-testid="details-item">
        <img className="item-details-image" src={src} />
        <h2 className="item-name">Name: {data.name}</h2>
        <div className="item-details-description">Status: {data.status}</div>
        <div className="item-details-description">Species: {data.species}</div>
        <div className="item-details-description">Gender: {data.gender}</div>
        <div className="item-details-description">Origin: {data.origin}</div>
        <div className="item-details-description">Last seen: {data.location}</div>
        <Link href={`/${1}`} className="close">
          close
        </Link>
      </article>
    );
  }
  return <p>Not found</p>;
}
