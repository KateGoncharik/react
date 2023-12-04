import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addNewSubmit, selectSentFormData } from '@/features/form-slice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SentFormDataItemsList } from '@/components/submitts-list/submitts-list';
import { ValidationError } from 'yup';

import { schema } from '@/utils/schema';
import { FormInputNames } from '@/types/enums/form-input-names';

export default function UncontrolledForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const formDataToShow = useSelector(selectSentFormData);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { target } = e;

    const formData = Object.fromEntries(new FormData(target as HTMLFormElement));

    const convertedData = {
      ...formData,
      [FormInputNames.age]: (formData[FormInputNames.age] as string) || '0',
      [FormInputNames.acceptRules]: (formData[FormInputNames.acceptRules] as string) === 'on',
    };

    schema
      .validate(convertedData, { abortEarly: false })
      .then((data) => {
        dispatch(
          addNewSubmit({
            ...data,
            uploadImage: 'base64File',
          })
        );
        navigate('/');
      })
      .catch((validationErrors: ValidationError) => {
        const newErrors: Record<string, string> = {};
        validationErrors.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(newErrors);
      });
  }
  const form = (
    <form id={'uncontrolled-form'} className="form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" defaultValue={'Kate'} name={FormInputNames.name} />
      {errors[FormInputNames.name] && <span className="error">{errors[FormInputNames.name]}</span>}
      <input type="text" defaultValue={0} name={FormInputNames.age} />
      {errors[FormInputNames.age] && <span className="error">{errors[FormInputNames.age]}</span>}
      <input type="email" defaultValue={'kate@gmail.ru'} name={FormInputNames.email} />
      {errors[FormInputNames.email] && (
        <span className="error">{errors[FormInputNames.email]}</span>
      )}
      <input type="text" defaultValue={'female'} name={FormInputNames.gender} />
      {errors[FormInputNames.gender] && (
        <span className="error">{errors[FormInputNames.gender]}</span>
      )}
      <input type="checkbox" defaultChecked={true} name={FormInputNames.acceptRules} />
      {errors[FormInputNames.acceptRules] && (
        <span className="error">{errors[FormInputNames.acceptRules]}</span>
      )}

      <input type="submit" />
    </form>
  );

  return (
    <>
      <Link to="/">Go to the main!</Link>
      {form}
      <div className="show-submittions">
        <SentFormDataItemsList sentFormData={formDataToShow} />
      </div>
    </>
  );
}
