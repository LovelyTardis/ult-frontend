import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import SideNavigator from "../components/side-navigator/SideNavigator.astro";
import { ROUTES } from "../routes";

export default function Layout() {
  const router = createBrowserRouter(Object.values(ROUTES));

  return (
    <>
      <div className="container">
        <section id="router">
          <RouterProvider router={router} />
        </section>
        <section id="sidebar">
          <nav>
            <li>Hola buenas</li>
            <li>Hola buenas</li>
            <li>Hola buenas</li>
          </nav>
          {/* <SideBar /> */}
        </section>
      </div>
    </>
  );
}
