import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store';
import '@/main.css';
import '@/components/item/item.css';
import '@/components/results/results.css';
import '@/components/pagination/pagination.css';
import '@/components/item-details/item-details.css';
import '@/components/error-button/error-button.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
