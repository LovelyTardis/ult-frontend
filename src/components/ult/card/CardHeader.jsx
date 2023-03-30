import { useNavigate } from "react-router-dom";
import "./CardHeader.css";

function CardHeader({ user }) {
  const navigate = useNavigate();
  const { profilePicture, username, name } = user;

  const handleClick = (e) => {
    navigate(`/profile/${username}`);
    e.stopPropagation();
  };

  return (
    <div className="card-header">
      <img
        className="card-header-img"
        src={profilePicture}
        alt={`${username} profile picture`}
        onClick={handleClick}
      />
      <div className="user-info">
        <p className="p-name">{name}</p>
        <span className="p-username" onClick={handleClick}>
          @{username}
        </span>
      </div>
    </div>
  );
}

export default CardHeader;
