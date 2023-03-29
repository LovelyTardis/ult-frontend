import AuthInput from "./AuthInput";

export default function AuthForm({
  handleSubmit,
  className,
  inputs,
  submitButtonText,
}) {
  return (
    <form className={className} onSubmit={handleSubmit}>
      {Object.entries(inputs).map(([label, input]) => (
        <AuthInput key={label} label={label} input={input} />
      ))}
      <button type="submit">{submitButtonText}</button>
    </form>
  );
}
