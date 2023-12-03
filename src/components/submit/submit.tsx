type Input = {
  example: string;
  exampleRequired: string;
};

export function Submit({ submit }: { submit: Input }) {
  return (
    <div className="submit">
      <div>{submit.example}</div>
      <div>{submit.exampleRequired}</div>
    </div>
  );
}
