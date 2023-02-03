import ErrorDisplay from "../components/ErrorDisplay";
import Home from "../views/Home";
import Profile from "../views/Profile";
import Ult from "../views/Ult";

const errorTexts = {
  home: "Home cannot be loaded",
  profile: "User not found or it was deleted",
  ult: "Ult not found or it was deleted",
};

export const ROUTES = {
  home: {
    path: "/",
    element: <Home />,
    errorElement: <ErrorDisplay message={errorTexts.home} code={500} />,
  },
  profile: {
    path: "/profile/:username",
    element: <Profile />,
    errorElement: <ErrorDisplay message={errorTexts.profile} code={404} />,
  },
  ult: {
    path: "/ult/:ultId",
    element: <Ult />,
    errorElement: <ErrorDisplay message={errorTexts.ult} code={404} />,
  },
};
