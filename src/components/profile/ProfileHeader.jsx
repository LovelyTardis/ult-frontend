import Autolinker from "autolinker";

import "./ProfileHeader.css";

export default function ProfileHeader({ dataHeader }) {
  const { profilePicture, username, name, biography } = dataHeader;

  const editProfile = () => {
    console.log("Edit profile popup/page");
  };

  return (
    <header className="profile">
      <section className="profile-header-img-biography">
        <img
          className="profile-header-img"
          src={profilePicture}
          alt={`${username} profile`}
        />
        <div className="profile-header-user-info">
          <span className="profile-name">{name}</span>
          <br />
          <span className="profile-username bold">@{username}</span>
        </div>
        {/* TODO: EDIT PROFILE BUTTON MAY APPEAR ONLY FOR THE LOGGED PROFILE */}
        <button className="edit-profile-button" onClick={editProfile}>
          Edit profile
        </button>
      </section>
      <section className="profile-header-biography">
        <h4>Bio:</h4>
        {
          // INFO: dangerouslySetInnerHTML is not recommended!!!
          //       however It is using "sanitazeHtml" that prevents XSS attacks (TESTED and working).
          //       If someone tries to write a bio with possible dangerous code, it will not be sent to the backend.
          <div
            dangerouslySetInnerHTML={{
              __html: Autolinker.link(biography, { sanitizeHtml: true }),
            }}
          />
        }
      </section>
    </header>
  );
}
