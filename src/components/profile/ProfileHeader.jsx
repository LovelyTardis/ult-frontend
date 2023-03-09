import React from "react";

import "./ProfileHeader.css";

export default function ProfileHeader({ dataHeader }) {
  const { profilePicture, username, name, biography } = dataHeader;

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
      </section>
      <section className="profile-header-biography">
        {/* FIXME: change this to something better */}
        {biography.startsWith("https://") || biography.startsWith("www.") ? (
          <a href={biography} target="_blank">
            {biography}
          </a>
        ) : (
          <p>{biography}</p>
        )}
      </section>
    </header>
  );
}
