import "./CardFooter.css";

function CardFooter({ ult }) {
  const { likes, datetime } = ult;

  const handleClick = (e) => {
    // TODO: ADD ONE LIKE IN THE DATABASE FOR THE ULT
    e.stopPropagation();
  };

  return (
    <div className="card-footer">
      <span className="left">
        <button className="like-button" onClick={handleClick}>
          {likes} &#10084;
        </button>
      </span>
      <span className="left">{likes} comments</span>
      <span className="right">
        {new Date(datetime).toLocaleTimeString(["es-ES", "en-US"], {
          hour: "2-digit",
          minute: "2-digit",
        })}{" "}
        - {new Date(datetime).toLocaleDateString(["es-ES", "en-US"])}
      </span>
    </div>
  );
}

export default CardFooter;
