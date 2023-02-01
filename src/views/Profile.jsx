import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import { apiCall } from "../helpers/apiCall";
// import { tryConnection } from "../helpers/tryConnection";

export default function Profile() {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState({
    biography: "",
    email: "",
    likedUlts: "",
    name: "",
    profilePicture: "",
    ults: "",
  });

  useEffect(() => {
    document.title = `Profile - ${username}`;

    apiCall(`/user/${username}`)
      .then((res) => {
        if (res.error) return;
        setUserProfile(res.data);
      })
      .catch((err) => console.error(err));
  }, [username]);

  const { biography, email, name, profilePicture, likedUlts, ults } =
    userProfile;

  const dataHeader = { biography, email, name, profilePicture, username };

  return (
    <div>
      {dataHeader && <ProfileHeader dataHeader={dataHeader} />}
      {/* TODO: map for the ults and likedUlts */}
      {/* <h1>{likedUlts}</h1> */}
      {/* <h1>{ults}</h1> */}
    </div>
  );
}

// biography
// "Phorza Whorezone V: Maximum Erection"
// email
// "eric@gmail.com"
// likedUlts
// []
// name
// "Eric"
// profilePicture
// "https://cdn.discordapp.com/avatars/216238539497668610/c1038feafa1a03aa31926f2da502943a.webp?size=80"
// ults
// []
// username
// "GunteR_"
