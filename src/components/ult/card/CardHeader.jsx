const styles = {
  "card-header": {
    display: "flex",
    height: "50px",
  },
  "user-info": {
    display: "flex",
    flexDirection: "column",
    margin: "auto 0 auto 20px",
  },
  "p-name": { margin: "0" },
};

function CardHeader({ user }) {
  const { profilePicture, username, name } = user;

  return (
    <div className="card-header" style={styles["card-header"]}>
      <img
        className="card-header-img"
        src={profilePicture}
        alt={`${username} profile picture`}
      />
      <div className="user-info" style={styles["user-info"]}>
        <p style={styles["p-name"]}>{name}</p>
        <b>@{username}</b>
      </div>
    </div>
  );
}

export default CardHeader;
