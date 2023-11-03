import { ReactElement } from 'react';

import { ItemProps } from 'src/types/types';

export default function Item({ characterName, characterUrl }: ItemProps): ReactElement {
  return (
    <div className="results-item">
      <div className="item-name">Name: {characterName}</div>
      <div className="item-url">URL: {characterUrl}</div>
    </div>
  );
}
