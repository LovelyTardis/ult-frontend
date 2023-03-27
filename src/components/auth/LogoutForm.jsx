import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export function LogoutForm() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  return (
    <form onSubmit={handleLogout}>
      <p>Do you really want to log out?</p>
      <button className="logout-button">Confirm</button>
    </form>
  );
}
