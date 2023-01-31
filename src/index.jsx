import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";

const router = createBrowserRouter(Object.values(ROUTES));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);
