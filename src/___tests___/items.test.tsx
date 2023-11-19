import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { charactersMock } from '@/___tests___/mocks/mocks';
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
        <Results characters={charactersMock} currentPage={1} maxPageCount={1} />
      </MemoryRouter>
    );

    const resultItems = screen.getAllByRole('article');

    expect(resultItems).toHaveLength(3);
  });
});
