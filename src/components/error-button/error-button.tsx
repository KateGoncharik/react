type ErrorButtonProps = {
  handler: (value: boolean) => void;
};
export function ErrorButton({ handler }: ErrorButtonProps) {
  return (
    <button
      className="error-button"
      onClick={() => {
        handler(true);
      }}
    >
      throw Error
    </button>
  );
}
