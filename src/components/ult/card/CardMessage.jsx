const styles = {
  "p-message": {
    margin: "30px",
    height: "auto",
  },
};

function CardMessage({ message }) {
  return <p style={styles["p-message"]}>{message}</p>;
}

export default CardMessage;
