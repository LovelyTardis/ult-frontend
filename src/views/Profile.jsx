import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import { UltContainer } from "../components/ult";
import { tryConnection } from "../helpers";
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
    ults: {},
  });

  let error, data, code;

  const fetchData = async (controller = new AbortController()) => {
    try {
      const connected = await tryConnection(controller.signal);
      ({ error, code, data } =
        connected !== true
          ? connected
          : await apiCall(`/user/${username}`, "GET", {}, controller.signal));

      if (error) throw new Error(code, data);

      setUserProfile(data);
    } catch (err) {
      if (err.name !== "AbortError") console.error({ data, code });
    }
  };

  useEffect(() => {
    document.title = `Profile - ${username}`;

    let controller = new AbortController();
    fetchData(controller);
    return () => {
      controller.abort();
    };
  }, [username]);

  const { biography, email, name, profilePicture, likedUlts, ults } =
    userProfile;

  const dataHeader = { biography, email, name, profilePicture, username };

  return (
    <div>
      {dataHeader && <ProfileHeader dataHeader={dataHeader} />}
      <UltContainer ultsToShow={ults} />
      {/* TODO: map for the ults and likedUlts */}
      {/* <UltContainer ultsToShow={likedUlts} /> */}
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
