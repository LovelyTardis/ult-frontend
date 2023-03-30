import { useEffect, useState } from "react";

import "./UltCard.css";

import { apiCall, tryConnection } from "../../helpers";
import { CardHeader, CardMessage, CardFooter } from "./card";
import ErrorDisplay from "../errors/ErrorDisplay";
import { useNavigate } from "react-router-dom";

function UltCard({ ult }) {
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

  return (
    <>
      {!error ? (
        <div
          className="ult-card"
          tabIndex={0}
          role="button"
          onClick={handleClick}
        >
          <CardHeader user={userData} />
          <CardMessage message={message} />
          <CardFooter
            ultLikes={likes}
            ultComments={comments}
            datetime={datetime}
          />
        </div>
      ) : (
        <ErrorDisplay message={data} code={code} />
      )}
    </>
  );
}

export default UltCard;
