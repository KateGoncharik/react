import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addNewSubmit, selectSubmitts } from '@/features/form-slice';
import { Link } from 'react-router-dom';
import { SubmittionsList } from '@/components/submitts-list/submitts-list';

type Input = {
  example: string;
  exampleRequired: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Input>();
  const dispatch = useDispatch();
  const submittsToShow = useSelector(selectSubmitts);
  const onSubmit: SubmitHandler<Input> = (data) => {
    dispatch(addNewSubmit(data));
  };

  return (
    <>
      <Link to="/">Go to the main!</Link>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register('example')} />
        <input {...register('exampleRequired', { required: true, maxLength: 5 })} />
        {errors.exampleRequired && (
          <span>This field is required. And do not make it longer 5 chars</span>
        )}

        <input type="submit" />
      </form>
      <div className="show-submittions">
        <SubmittionsList submitts={submittsToShow} />
      </div>
    </>
  );
}
