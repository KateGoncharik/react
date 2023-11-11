import { getItem } from '@/lib/local-storage';
import { useContext } from 'react';

import { InputChangeHandlerContext } from '@/pages/main-page';

export default function SearchInput() {
  const handler: (value: string) => void = useContext(InputChangeHandlerContext);
  if (handler) {
    return (
      <input
        className="search-input"
        defaultValue={getItem('lastSearchQuery') || ''}
        onChange={(e) => {
          handler(e.target.value.trim());
        }}
      />
    );
  }
}
