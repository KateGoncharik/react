import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { charactersMock } from '@/___tests___/mocks/mocks';
import Results from '@/components/results/results';

describe('Characters', () => {
  it('should display an appropriate message if no items are present', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Results characters={[]} />,
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('No data'));
  });

  it('should render the specified number of items', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Results characters={charactersMock} />
        </Provider>
      </MemoryRouter>
    );

    const resultItems = screen.getAllByRole('article');

    expect(resultItems).toHaveLength(3);
  });
});
