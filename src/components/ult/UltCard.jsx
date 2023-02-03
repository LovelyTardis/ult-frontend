import { useEffect, useState } from "react";

import styles from "./UltCard.module.css";

import { apiCall, tryConnection } from "../../helpers";

import { CardHeader, CardMessage, CardFooter } from "./card";
import ErrorDisplay from "../ErrorDisplay";

function UltCard({ ult }) {
  const initialValues = {
    profilePicture: "",
    name: "",
    username: "",
    ults: [],
  };

  const [userData, setUserData] = useState(initialValues);

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
    <div className={styles["link-card"]}>
      {!error ? (
        <a href={`/ult/${_id}`} className={styles["a-href"]}>
          <CardHeader user={userData} />
          <CardMessage message={message} />
          <CardFooter ult={ult} />
        </a>
      ) : (
        <ErrorDisplay message={data} code={code} />
      )}
    </div>
  );
}

export default UltCard;
