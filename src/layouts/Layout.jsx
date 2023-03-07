import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import { ROUTES } from "../routes";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <div className="container">
        <Router>
          <section id="router">
            <Routes>
              {
                // TODO: private and public routes
                Object.values(ROUTES).map((route) => (
                  <Route
                    path={route.path}
                    element={route.element}
                    errorElement={route.errorElement}
                    key={route.path}
                  />
                ))
              }
            </Routes>
          </section>
          <section id="sidebar">
            <SideBar />
          </section>
        </Router>
      </div>
    </>
  );
}
