import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';

import Results from '@/components/results/results';
import { setupServer } from 'msw/node';
import { handlers } from '@/___tests___/msw/handlers';
import { store } from '@/store';

describe('Characters', () => {
  const server = setupServer(...handlers);

  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' });
  });

  afterAll(() => {
    server.close();
    vi.clearAllMocks();
  });

  afterEach(() => {
    server.resetHandlers();
    vi.restoreAllMocks();
  });

  it('should display an appropriate message if no items are present', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Results />,
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('No data'));
  });

  it('should render the specified number of items', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Results />
        </Provider>
      </MemoryRouter>
    );
    screen.debug();
    const resultItems = await screen.findAllByRole('article');

    expect(resultItems).toHaveLength(3);
  });
});
