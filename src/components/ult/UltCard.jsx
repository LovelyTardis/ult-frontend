import { useEffect, useState } from "react";

import "./UltCard.css";

import { apiCall, tryConnection } from "../../helpers";
import { CardHeader, CardMessage, CardFooter } from "./card";
import ErrorDisplay from "../errors/ErrorDisplay";
import { useNavigate } from "react-router-dom";

function UltCard({ ult }) {
  const initialValues = {
    profilePicture: "",
    name: "",
    username: "",
    ults: [],
  };

  const [userData, setUserData] = useState(initialValues);
  const navigate = useNavigate();
  const { message, _id, user } = ult;
  let error = false,
    code,
    data;

  const fetchData = async () => {
    try {
      const connected = await tryConnection();
      ({ error, code, data } =
        connected !== true ? connected : await apiCall(`/user/id/${user}`));

      if (error) throw new Error(code, data);

      setUserData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!error ? (
        <div
          className="ult-card"
          tabIndex={0}
          role="button"
          onClick={() => navigate(`/ult/${_id}`)}
        >
          <CardHeader user={userData} />
          <CardMessage message={message} />
          <CardFooter ult={ult} />
        </div>
      ) : (
        <ErrorDisplay message={data} code={code} />
      )}
    </>
  );
}

export default UltCard;
