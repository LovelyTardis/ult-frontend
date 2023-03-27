import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RequireAuth } from "../components/auth";
import SideBar from "../components/sidebar/SideBar";
import { Home, Login, Logout, Profile, Settings, Ult } from "../views";

import "./Layout.css";

export default function Layout() {
  return (
    <>
      <div className="container">
        <Router>
          <section id="router">
            <Routes>
              {/* PUBLIC ROUTES */}
              <Route path="/login" element={<Login />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/ult/:ultId" element={<Ult />} />
              {/* PRIVATE ROUTES */}
              <Route element={<RequireAuth />}>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/logout" element={<Logout />} />
              </Route>
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
