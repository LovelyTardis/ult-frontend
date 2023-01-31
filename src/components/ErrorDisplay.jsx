interface Props {
  message: string;
  code: number;
}

const styles = {
  "error-display": {
    border: "3px solid red",
    display: "flex",
    flexDirection: "column",
  },
  "error-message": {
    color: "red",
    textAlign: "center",
  },
};

function ErrorDisplay({ message, code }: Props) {
  return (
    <div className="error-display" style={styles["error-display"]}>
      <h1 style={styles["error-message"]}>{message}</h1>
      <h3 style={styles["error-message"]}>Error code: {code}</h3>
    </div>
  );
}

export default ErrorDisplay;
