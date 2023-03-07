import { NavLink } from "react-router-dom";
import "./SideBarButton.css";

export default function SideBarButton({ props }) {
  const { href, text, icon } = props;

  return (
    <NavLink to={href} className="sidebar-button">
      <span className="material-symbols-outlined sidebar-icon">{icon}</span>
      &nbsp;
      {text}
    </NavLink>
  );
}
