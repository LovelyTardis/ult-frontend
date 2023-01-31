import Landing from "../views/landing";

export const ROUTES = {
  landing: {
    path: "/",
    element: <Landing />,
  },
  profile: {
    path: "/profile/:username",
    element: <Landing />,
  },
};
