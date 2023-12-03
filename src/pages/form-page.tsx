import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addNewSubmit, selectSubmitts } from '@/features/form-slice';
import { Link } from 'react-router-dom';
import { SubmittionsList } from '@/components/submitts-list/submitts-list';
import { FormData } from './uncontrolled-form-page';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useDispatch();
  const submittsToShow = useSelector(selectSubmitts);
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
        <input type={'text'} defaultValue="Kate" {...register('name')} />
        <input type={'text'} defaultValue="20" {...register('age')} />
        <input type={'email'} defaultValue="Kate@gmail.ru" {...register('email')} />
        <input type={'text'} defaultValue="woman" {...register('gender')} />
        <input type={'checkbox'} defaultChecked={true} {...register('acceptRules')} />
        <input type={'file'} {...register('uploadImage')} />

        <input type="submit" />
      </form>
      <div className="show-submittions">
        <SubmittionsList submitts={submittsToShow} />
      </div>
    </>
  );
}
