import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./layouts/Layout";

let initialContextValues = {
  ults: {},
  userId: "",
};

export const UltContext = createContext(initialContextValues);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UltContext.Provider value={UltContext}>
      <Layout />
    </UltContext.Provider>
  </React.StrictMode>
);
