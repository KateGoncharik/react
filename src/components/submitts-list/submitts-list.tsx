import { Submit } from '../submit/submit';
import { FormData } from '@/pages/uncontrolled-form-page';

export function SubmittionsList({ submitts }: { submitts: FormData[] }) {
  return (
    <>
      {submitts.map((submit: FormData) => {
        return <Submit key={`${submit.name}-${submit.age}`} submit={submit} />;
      })}
    </>
  );
}
