import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { render, screen, within } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { store } from '@/store';

import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';

import { handlers } from '@/___tests___/msw/handlers';
import { Provider } from 'react-redux';

import ItemDetails from '@/components/item-details/item-details';

const server = setupServer(...handlers);

describe('Item details', () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' });
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('should correctly display the detailed card data', async () => {
    const router = createMemoryRouter(
      [
        {
          path: 'details/:itemId',
          element: <ItemDetails />,
        },
      ],
      { initialEntries: ['/details/8'] }
    );
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    const item = await screen.findByTestId('details-item');
    expect(item).toBeInTheDocument();

    const itemHeading = within(item).getByRole('heading', {
      level: 2,
      name: /adjudicator rick/i,
    });
    expect(itemHeading).toBeInTheDocument();

    const characterStatus = within(item).getByText(/dead/i);
    expect(characterStatus).toBeInTheDocument();

    const characterSpecies = within(item).getByText(/human/i);
    expect(characterSpecies).toBeInTheDocument();

    const characterGender = within(item).getByText(/male/i);
    expect(characterGender).toBeInTheDocument();

    const characterOrigin = within(item).getByText(/unknown/i);
    expect(characterOrigin).toBeInTheDocument();

    const characterLocation = within(item).getByText(/citadel of ricks/i);
    expect(characterLocation).toBeInTheDocument();
  });
});
