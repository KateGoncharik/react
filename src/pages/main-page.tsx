import { Link } from 'react-router-dom';
export default function MainPage() {
  return (
    <>
      <h1>Hello! This is the main page</h1>
      <Link to="/form">Checkout form!</Link>
    </>
  );
}
