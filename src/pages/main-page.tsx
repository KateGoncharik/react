import { Link } from 'react-router-dom';
import { SentFormDataItemsList } from '@/components/submitts-list/submitts-list';
import { useSelector } from 'react-redux';
import { selectSentFormData } from '@/features/form-slice';

export default function MainPage() {
  const formDataToShow = useSelector(selectSentFormData);
  return (
    <>
      <h1>Hello! This is the main page</h1>
      <Link to="/form">Checkout controlled form!</Link>
      <Link to="/uncontrolled-form">Checkout uncontrolled form!</Link>
      <div className="show-submittions">
        <SentFormDataItemsList sentFormData={formDataToShow} />
      </div>
    </>
  );
}
