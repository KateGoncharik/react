type LimitChangeInputProps = {
  inputChangeHandler: (limit: number) => void;
  limitFromMain: number;
};

export default function LimitChangeInput({
  inputChangeHandler,
  limitFromMain,
}: LimitChangeInputProps) {
  function limitInputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const userValue = Number(e.target.value);
    if (isNaN(userValue)) {
      return;
    }
    inputChangeHandler(userValue);
  }

  return (
    <input
      className="limit-change-input"
      defaultValue={limitFromMain}
      onChange={(e) => {
        limitInputChangeHandler(e);
      }}
    />
  );
}
