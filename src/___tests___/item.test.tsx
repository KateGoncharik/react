import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { characters } from '@/___tests___/mocks/mocks';
import Results from '@/components/results/results';

describe('Characters', () => {
  it('should display an appropriate message if no items are present', () => {
    render(
      <MemoryRouter>
        <Results characters={[]} currentPage={1} maxPageCount={1} />,
      </MemoryRouter>
    );

    expect(screen.getByText('No data'));
  });

  it('should render the specified number of items', () => {
    render(
      <MemoryRouter>
        <Results characters={characters} currentPage={1} maxPageCount={1} />
      </MemoryRouter>
    );

    const cards = screen.getAllByRole('article');

    expect(cards).toHaveLength(3);
  });
});
