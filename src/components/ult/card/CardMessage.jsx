import "./CardMessage.css";

function CardMessage({ message }) {
  const split = message.split("\n");

  return (
    <p className="card-message">
      {split.length > 1
        ? split.map((sentence, index) => (
            <span key={index} className="card-message-sentence">
              {sentence}
            </span>
          ))
        : message}
    </p>
  );
}

export default CardMessage;
