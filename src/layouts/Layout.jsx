import { useEffect } from "react";
import { useSelector } from "react-redux";
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
import NotFound from "../views/404";

import "./Layout.css";

export default function Layout() {
  const { autoLogin, isAuth, fetching } = useAuth();
  useEffect(() => {
    autoLogin();
  }, []);

  return fetching ? null : (
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
        <section id="sidebar">
          <SideBar />
        </section>
      </Router>
    </div>
  );
}
