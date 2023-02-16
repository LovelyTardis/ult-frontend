import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import { ROUTES } from "../routes";
import "./Layout.css";

export default function Layout() {
  const router = createBrowserRouter(Object.values(ROUTES));

  return (
    <>
      <div className="container">
        <section id="router">
          <RouterProvider router={router} />
        </section>
        <section id="sidebar">
          <SideBar />
        </section>
      </div>
    </>
  );
}
