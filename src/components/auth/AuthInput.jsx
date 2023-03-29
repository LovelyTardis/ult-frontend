export default function AuthInput({ label, input }) {
  const { type, name, onChange, value, ref = null } = input;

  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        ref={ref ? ref : null}
        required
      />
    </label>
  );
}
