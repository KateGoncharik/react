import { useDispatch, useSelector } from 'react-redux';
import { addNewSubmit, selectSubmitts } from '@/features/form-slice';
import { Link } from 'react-router-dom';
import { SubmittionsList } from '@/components/submitts-list/submitts-list';
import { useRef } from 'react';

export type FormData = {
  name: string;
  age: string;
  email: string;
  gender: string;
  acceptRules: boolean;
  uploadImage: string;
};

export default function UncontrolledForm() {
  const dispatch = useDispatch();
  const submittionsToShow = useSelector(selectSubmitts);
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const genderInputRef = useRef(null);
  const acceptRulesInputRef = useRef(null);
  const uploadImgInputRef = useRef(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const submit: FormData = {
      name: nameInputRef.current!.value,
      age: ageInputRef.current!.value,
      email: emailInputRef.current!.value,
      gender: genderInputRef.current!.value,
      acceptRules: acceptRulesInputRef.current!.value,
      uploadImage: uploadImgInputRef.current!.value,
    };

    e.preventDefault();
    dispatch(addNewSubmit(submit));
  }
  const form = (
    <form id={'uncontrolled-form'} className="form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" ref={nameInputRef} />
      <input type="text" defaultValue={'20'} ref={ageInputRef} />
      <input type="email" defaultValue={'kate@gmail.ru'} ref={emailInputRef} />
      <input type="text" defaultValue={'woman'} ref={genderInputRef} />
      <input type="checkbox" defaultChecked={true} ref={acceptRulesInputRef} />
      <input type="file" ref={uploadImgInputRef} />
      <input type="submit" />
    </form>
  );

  return (
    <>
      <Link to="/">Go to the main!</Link>
      {form}
      <div className="show-submittions">
        <SubmittionsList submitts={submittionsToShow} />
      </div>
    </>
  );
}
