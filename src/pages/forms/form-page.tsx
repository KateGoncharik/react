import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addNewSubmit, selectSentFormData } from '@/features/form-slice';
import { Link } from 'react-router-dom';
import { SentFormDataItemsList } from '@/components/submitts-list/submitts-list';
import * as yup from 'yup';
import { FormData } from '@/types/form-data';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInputNames } from '@/types/enums/form-input-names';

const schema = yup.object().shape({
  name: yup.string(),
  age: yup.number(),
  email: yup.string().email().required(),
  gender: yup.string().required(),
  acceptRules: yup.boolean(),
  uploadImage: yup.string(),
});

export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: 'Name',
      age: 0,
      email: 'example@e.com',
      gender: 'female',
      acceptRules: true,
    },
  });

  const dispatch = useDispatch();

  const submittsToShow = useSelector(selectSentFormData);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(addNewSubmit(data));
  };

  if (errors) {
    console.error(errors);
  }

  return (
    <>
      <Link to="/">Go to the main!</Link>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={FormInputNames.name}
          control={control}
          render={({ field }) => (
            <label htmlFor={FormInputNames.name} className="label">
              Name:
              <input {...field} type="text" className="input" id={FormInputNames.name} />
              {errors.name && <span className="error">{errors.name.message}</span>}
            </label>
          )}
        />
        <Controller
          name={FormInputNames.age}
          control={control}
          render={({ field }) => (
            <label htmlFor={FormInputNames.age} className="label">
              Age:
              <input {...field} type="text" className="input" id={FormInputNames.age} />
              {errors.age && <span className="error">{errors.age.message}</span>}
            </label>
          )}
        />
        <Controller
          name={FormInputNames.email}
          control={control}
          render={({ field }) => (
            <label htmlFor={FormInputNames.email} className="label">
              Name:
              <input {...field} type="email" className="input" id={FormInputNames.email} />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </label>
          )}
        />{' '}
        <Controller
          name={FormInputNames.gender}
          control={control}
          render={({ field }) => (
            <label htmlFor={FormInputNames.gender} className="label">
              Gender:
              <input {...field} type="text" className="input" id={FormInputNames.gender} />
              {errors.gender && <span className="error">{errors.gender.message}</span>}
            </label>
          )}
        />{' '}
        <Controller
          name={FormInputNames.acceptRules}
          control={control}
          render={({ field }) => (
            <label htmlFor={FormInputNames.acceptRules} className="label">
              Accepted rules:
              <input {...field} type="checkbox" className="input" id={FormInputNames.acceptRules} />
              {errors.acceptRules && <span className="error">{errors.acceptRules.message}</span>}
            </label>
          )}
        />
        <input type="submit" />
      </form>
      <div className="show-submittions">
        <SentFormDataItemsList sentFormData={submittsToShow} />
      </div>
    </>
  );
}
