import "./ErrorDisplay.css";

export default function ErrorDisplay({ message, code = 500 }) {
  return (
    <div className="error-display">
      <h1 className="error-message">{message}</h1>
      <h3 className="error-message">Error code: {code}</h3>
    </div>
  );
}
