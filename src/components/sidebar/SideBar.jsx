import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { CardHeader } from "../ult/card";
import "./SideBar.css";
import SideBarButton from "./SideBarButton";
import buttonProps from "./buttonProps";

export default function SideBar() {
  const { isAuth, user } = useAuth();

  const initialValues = {
    profilePicture: "/anonymous.png",
    username: "anonymous",
    name: "anonymous",
  };

  const [userData, setUserData] = useState(isAuth ? user : initialValues);
  useEffect(() => {
    setUserData(isAuth ? user : initialValues);
  }, [isAuth, user]);

  const buttons = {
    public: (
      <>
        <SideBarButton props={buttonProps.login} />
      </>
    ),
    private: (
      <>
        <SideBarButton props={buttonProps.home} />
        <SideBarButton
          props={{
            ...buttonProps.profile,
            href: `${buttonProps.profile.href}/${userData.username}`,
          }}
        />
        <SideBarButton props={buttonProps.settings} />
        <SideBarButton props={buttonProps.logout} />
      </>
    ),
  };

  return (
    <div className="sidebar-container">
      {/* TODO: CREATE A SIDEBAR HEADER AND SWAP FOR CardHeader (BUG) */}
      <CardHeader user={userData} />
      <hr />
      {isAuth ? buttons.private : buttons.public}
    </div>
  );
}
