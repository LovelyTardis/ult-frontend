import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { ROUTES } from "../../routes";
import { CardHeader } from "../ult/card";
import "./SideBar.css";
import SideBarButton from "./SideBarButton";

export default function SideBar() {
  const { isAuth, user } = useAuth();

  const initialValues = {
    profilePicture: `${import.meta.env.VITE_API}${
      import.meta.env.VITE_ANONYM_PATH
    }`,
    username: "anonymous",
    name: "anonymous",
  };

  const [userData, setUserData] = useState(isAuth ? user : initialValues);
  useEffect(() => {
    setUserData(isAuth ? user : initialValues);
  }, [isAuth]);

  return (
    <div className="sidebar-container">
      <CardHeader user={userData} />
      <hr />
      {Object.values(ROUTES).map(({ href, text, icon, isPrivate }) => {
        if (!href || !text || !icon) return;
        // TODO: CHECK IF USER IS AUTHENTICATED AND CREATE SIDEBAR BUTTON
        // if (authReducer) {
        //   // return;
        // }

        // // TODO: PRIVATE - PUBLIC ROUTES
        // if (href === "/profile") {
        //   href += `/${authReducer.username}`;
        // }

        const props = {
          href,
          text,
          icon,
        };
        // if (isPrivate) {
        //   return <SideBarButton key={href} props={props} />;
        // }
        return <SideBarButton key={href} props={props} />;
      })}
    </div>
  );
}
