import ErrorDisplay from "../components/ErrorDisplay";
import Home from "../views/Home";
import Profile from "../views/Profile";

export const ROUTES = {
  home: {
    path: "/",
    element: <Home />,
    errorElement: <ErrorDisplay message={"Home cannot be loaded"} code={500} />,
  },
  profile: {
    path: "/profile/:username",
    element: <Profile />,
    errorElement: <ErrorDisplay message={"User not found"} code={404} />,
  },
};
