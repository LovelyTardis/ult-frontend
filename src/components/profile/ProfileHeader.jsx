import React from "react";

import "./ProfileHeader.css";

export default function ProfileHeader({ dataHeader }) {
  const { profilePicture, username, name, biography } = dataHeader;

  return (
    <header>
      <div className="profile-header-img-biography">
        <img
          className="profile-header-img"
          src={profilePicture}
          alt={`${username} profile`}
        />
        <div className="profile-header-user-info">
          <span className="profile-name">{name}</span>
          <span className="profile-username bold">@{username}</span>
        </div>
      </div>
      <div className="profile-header-biography">
        {/* FIXME: change this to something better */}
        {biography.startsWith("https://") ? (
          <a href={biography}>{biography}</a>
        ) : (
          <p>{biography}</p>
        )}
      </div>
    </header>
  );
}
