import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RequireAuth } from "../components/auth";
import SideBar from "../components/sidebar/SideBar";
import useAuth from "../hooks/useAuth";
import {
  Home,
  Login,
  Logout,
  Profile,
  Register,
  Settings,
  Ult,
} from "../views";

import "./Layout.css";

export default function Layout() {
  const { autoLogin, isAuth } = useAuth();

  useEffect(() => {
    (async function tryLogin() {
      await autoLogin();
    })();
  }, []);

  return (
    <>
      <div className="container">
        <Router>
          <section id="router">
            <Routes>
              {/* PRIVATE ROUTES */}
              <Route element={<RequireAuth auth={isAuth} />}>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/logout" element={<Logout />} />
              </Route>
              {/* PUBLIC ROUTES */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/ult/:ultId" element={<Ult />} />
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
