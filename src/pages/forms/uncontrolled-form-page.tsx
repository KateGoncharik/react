import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addNewSubmit } from '@/features/form-slice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';

import { schema } from '@/utils/schema';
import { FormInputNames } from '@/types/enums/form-input-names';

export default function UncontrolledForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
      <label htmlFor={FormInputNames.name} className="label">
        Name:
        <input type="text" defaultValue={'Kate'} name={FormInputNames.name} />
        {errors[FormInputNames.name] && (
          <span className="error">{errors[FormInputNames.name]}</span>
        )}
      </label>
      <label htmlFor={FormInputNames.age} className="label">
        Age:
        <input type="text" defaultValue={0} name={FormInputNames.age} />
        {errors[FormInputNames.age] && <span className="error">{errors[FormInputNames.age]}</span>}
      </label>
      <label htmlFor={FormInputNames.email} className="label">
        Email:
        <input type="email" defaultValue={'kate@gmail.ru'} name={FormInputNames.email} />
        {errors[FormInputNames.email] && (
          <span className="error">{errors[FormInputNames.email]}</span>
        )}
      </label>
      <label htmlFor={FormInputNames.gender} className="label">
        Gender:
        <input type="text" defaultValue={'female'} name={FormInputNames.gender} />
        {errors[FormInputNames.gender] && (
          <span className="error">{errors[FormInputNames.gender]}</span>
        )}
      </label>
      <label htmlFor={FormInputNames.name} className="label">
        Accept T&C:
        <input type="checkbox" defaultChecked={true} name={FormInputNames.acceptRules} />
        {errors[FormInputNames.acceptRules] && (
          <span className="error">{errors[FormInputNames.acceptRules]}</span>
        )}
      </label>
      <input type="submit" />
    </form>
  );

  return (
    <>
      <Link to="/">Go to the main!</Link>
      {form}
    </>
  );
}
