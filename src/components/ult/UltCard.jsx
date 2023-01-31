import { useEffect, useState } from "react";

import type { UltType, UserType } from "../../types";
import { apiCall, tryConnection } from "../../helpers";

import CardHeader from "./card/CardHeader";
import CardMessage from "./card/CardMessage";
import CardFooter from "./card/CardFooter";
import ErrorDisplay from "../ErrorDisplay";

interface Props {
  ult: UltType;
}

function UltCard({ ult }: Props) {
  const initialValues = {
    profilePicture: "",
    name: "",
    username: "",
    ults: [],
  };

  const [userData, setUserData] = useState<UserType>(initialValues);
  const [isHover, setIsHover] = useState(false);

  const styles = {
    "link-card": {
      color: isHover ? "rgb(var(--accent))" : "white",
      display: "flex",
      padding: "0.15rem",
      margin: "10px 0",
      backgroundColor: "white",
      backgroundImage: "var(--accent-gradient)",
      backgroundSize: "400%",
      borderRadius: "0.5rem",
      backgroundPosition: isHover ? "0" : "100%",
      transition: "background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1) 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    },
    "a-href": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      textDecoration: "none",
      padding: "20px",
      borderRadius: "0.35rem",
      color: "#111",
      backgroundColor: "white",
    },
  };

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

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="link-card"
      style={styles["link-card"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!error ? (
        <a href={`/ult/${_id}`} style={styles["a-href"]}>
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
