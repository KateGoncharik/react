import { MemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '@/store';

import { characterMock } from './mocks/mocks';
import { handlers } from '@/___tests___/msw/handlers';
import Item from '@/components/item/item';
import { router } from '@/routes';

const server = setupServer(...handlers);

describe('CharacterListItem', () => {
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

  it('should render the relevant card data', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Item character={characterMock} />,
        </Provider>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { level: 2, name: /adjudicator rick/i })
    ).toBeInTheDocument();
  });

  it('should open a detailed card component upon user click on the card', async () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    const item = await screen.findByRole('heading', { level: 2, name: /adjudicator rick/i });
    expect(item).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(item);

    const detailedCard = await screen.findByTestId('details-item');

    expect(detailedCard).toBeInTheDocument();
  });
});
