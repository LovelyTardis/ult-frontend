import { Navigate, Outlet, useLocation } from "react-router-dom";

export function RequireAuth({ auth }) {
  const location = useLocation();
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
}
