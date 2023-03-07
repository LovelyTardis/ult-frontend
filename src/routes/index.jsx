import ErrorDisplay from "../components/ErrorDisplay";
import { Home, Logout, Profile, Settings, Ult } from "../views";

const errorTexts = {
  home: "Home cannot be loaded",
  profile: "User not found or it was deleted",
  ult: "Ult not found or it was deleted",
  settings: "Settings can not be loaded. Try it again in a few moments",
};

export const ROUTES = {
  home: {
    path: "/",
    element: <Home />,
    errorElement: <ErrorDisplay message={errorTexts.home} code={500} />,
    href: "/",
    text: "Home",
    icon: "home",
  },
  profile: {
    path: "/profile/:username",
    element: <Profile />,
    errorElement: <ErrorDisplay message={errorTexts.profile} code={404} />,
    // FIXME: CHANGE THE PROFILE FOR THE LOGGED USER
    href: "/profile/LovelyTardis",
    text: "My profile",
    icon: "person",
  },
  ult: {
    path: "/ult/:ultId",
    element: <Ult />,
    errorElement: <ErrorDisplay message={errorTexts.ult} code={404} />,
  },
  settings: {
    path: "/settings",
    element: <Settings />,
    errorElement: <ErrorDisplay message={errorTexts.settings} code={400} />,
    href: "/settings",
    text: "Settings",
    icon: "settings",
  },
  logout: {
    path: "/logout",
    element: <Logout />,
    errorElement: <ErrorDisplay message={errorTexts.ult} code={404} />,
    href: "/logout",
    text: "Log out",
    icon: "logout",
  },
};
