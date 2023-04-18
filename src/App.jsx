import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/auth";
import SideBar from "./components/sidebar/SideBar";
import useAuth from "./hooks/useAuth";
import { Home, Login, Logout, Profile, Register, Settings, Ult } from "./views";
import NotFound from "./views/404";

import "./App.css";

export default function App() {
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
              <Route exact path="/" element={<Home />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="/logout" element={<Logout />} />
            </Route>
            {/* PUBLIC ROUTES */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile/:username" element={<Profile />} />
            <Route exact path="/ult/:ultId" element={<Ult />} />
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
