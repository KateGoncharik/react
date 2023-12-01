import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addNewSubmit, selectSubmitts } from '@/features/form-slice';

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const submittsToShow = useSelector(selectSubmitts);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addNewSubmit(data));
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register('example')} />
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('exampleRequired', { required: true, maxLength: 5 })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span>This field is required. And do not make it longer 5 chars</span>
        )}

        <input type="submit" />
      </form>
      <div className="show-submitions">{JSON.stringify(submittsToShow)}</div>
    </>
  );
}
