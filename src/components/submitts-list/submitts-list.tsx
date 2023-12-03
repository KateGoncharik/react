import { Submit } from '../submit/submit';
type Input = {
  example: string;
  exampleRequired: string;
};

export function SubmittionsList({ submitts }: { submitts: Input[] }) {
  return (
    <>
      {submitts.map((submit: Input) => {
        return <Submit key={`${submit.example}-${submit.exampleRequired}`} submit={submit} />;
      })}
    </>
  );
}
