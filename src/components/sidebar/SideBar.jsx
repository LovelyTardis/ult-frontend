import { ROUTES } from "../../routes";
import { CardHeader } from "../ult/card";
import "./SideBar.css";
import SideBarButton from "./SideBarButton";

export default function SideBar() {
  // FIXME: userData SHOULD BE GOT FROM REDUX
  const userData = {
    profilePicture:
      "https://cdn.discordapp.com/avatars/327875616999342101/02a9744df4a438af25249b98ffac4986.webp?size=128",
    username: "LovelyTardis",
    name: "Albert",
  };

  return (
    <div className="sidebar-container">
      <CardHeader user={userData} />
      <hr />
      {Object.values(ROUTES).map(({ href, text, icon }) => {
        if (!href || !text || !icon) return;

        const props = {
          href,
          text,
          icon,
        };
        return <SideBarButton key={href} props={props} />;
      })}
    </div>
  );
}
