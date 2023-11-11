import MainPage from '@/pages/main-page';
import ErrorBoundary from '@/components/error-boundary/error-boundary';

export default function App() {
  return (
    <div className="wrapper">
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </div>
  );
}
