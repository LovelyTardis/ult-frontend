import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileHeader, ProfileContainerPicker } from "../components/profile";
import { UltContainer } from "../components/ult";
import ViewTitle from "../components/ViewTitle";

import { tryConnection, apiCall } from "../helpers";
import useAuth from "../hooks/useAuth";
import NotFound from "./404";

export default function Profile() {
  const { isAuth, user } = useAuth();
  const { username } = useParams();
  const [isLoggedProfile, setIsLoggedProfile] = useState(false);
  const [userProfile, setUserProfile] = useState(
    isAuth & user
      ? ({ biography, email, likedUlts, name, profilePicture, ults } = user)
      : {
          biography: "",
          email: "",
          likedUlts: "",
          name: "",
          profilePicture: "",
          ults: {},
        }
  );
  const [activeLikedUlts, setActiveLikedUlts] = useState(false);

  let error, data, code;

  const fetchData = async (controller = new AbortController()) => {
    if (isLoggedProfile) return;

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
    if (user?.username === username) {
      setUserProfile(user);
      setIsLoggedProfile(true);
      return;
    }
    let controller = new AbortController();
    fetchData(controller);
    return () => {
      controller.abort();
    };
  }, [username, user, activeLikedUlts]);

  let { biography, email, name, profilePicture, ults, likedUlts } = userProfile;
  const dataHeader = { biography, email, name, profilePicture, username };

  useEffect(() => {
    console.log("Changed activeLikedUlts:", activeLikedUlts);
  }, [activeLikedUlts]);

  return (
    <div>
      <ViewTitle title="User profile" />
      {userProfile.username ? (
        <>
          <ProfileHeader
            dataHeader={dataHeader}
            isLoggedProfile={isLoggedProfile}
          />
          <ProfileContainerPicker setActiveLikedUlts={setActiveLikedUlts} />
          {activeLikedUlts && likedUlts.length === 0 ? (
            <h5>This user has no liked ULTS</h5>
          ) : (
            !activeLikedUlts &&
            ults.length === 0 && <h5>This user has no ULTS</h5>
          )}
          <UltContainer ultsToShow={activeLikedUlts ? likedUlts : ults} />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
