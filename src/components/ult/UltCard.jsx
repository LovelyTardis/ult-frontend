import { useEffect, useState } from "react";

import "./UltCard.css";

import { apiCall, tryConnection } from "../../helpers";
import { CardHeader, CardMessage, CardFooter } from "./card";
import ErrorDisplay from "../errors/ErrorDisplay";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function UltCard({ ult }) {
  const { user: loggedUser } = useAuth();
  const { message, _id, user, likes, comments, datetime } = ult;
  const initialValues = {
    profilePicture: "",
    name: "",
    username: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const navigate = useNavigate();
  let error = false,
    code,
    data;

  useEffect(() => {
    (async () => {
      try {
        const connected = await tryConnection();
        ({ error, code, data } =
          connected !== true ? connected : await apiCall(`/user/id/${user}`));

        if (error) throw new Error(code, data);

        setUserData(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleClick = () => {
    navigate(`/ult/${_id}`);
  };

  const handleClickDots = (e) => {
    // TODO: CREATE A DROPDOWN COMPONENT AND ACTIVATE IT
    console.log("Dropdown:");
    console.log("Ult user?", ult.user);
    console.log("Logged user?", loggedUser.uid);
    console.log("Same user?", ult.user === loggedUser.uid);

    e.stopPropagation();
  };

  return !error ? (
    <div className="ult-card" tabIndex={0} role="button" onClick={handleClick}>
      <div className="ult-card-options">
        <CardHeader user={userData} />
        <button className="options-button" onClick={handleClickDots}>
          <span className="material-icons">more_horiz</span>
        </button>
      </div>
      <CardMessage message={message} />
      <CardFooter ultLikes={likes} ultComments={comments} datetime={datetime} />
    </div>
  ) : (
    <ErrorDisplay message={data} code={code} />
  );
}

export default UltCard;
