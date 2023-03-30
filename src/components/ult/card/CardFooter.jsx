import { useEffect, useState } from "react";
import "./CardFooter.css";

function CardFooter({ ultLikes, ultComments, datetime }) {
  const [likes, setLikes] = useState(ultLikes);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(ultComments.length);

  useEffect(() => {
    setLikes(ultLikes);
    setComments(ultComments.length);
  }, []);

  const handleClick = (e) => {
    // TODO: ADD ONE LIKE IN THE DATABASE FOR THE ULT
    setLiked(!liked);
    setLikes((current) => current + (liked ? -1 : 1));
    liked
      ? e.target.classList.remove("liked")
      : e.target.classList.add("liked");
    e.stopPropagation();
  };

  return (
    <div className="card-footer">
      <span className="left">
        <button className="like-button" onClick={handleClick}>
          {likes} &#10084;
        </button>
      </span>
      <span className="left">{comments} comments</span>
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
