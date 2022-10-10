import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = ({ user, setUser }) => (
  <Routes>
    <Route path="/" element={<Login setUser={setUser} />} />
    <Route path="/" element={<Register />} />
    <Route
      path="/dashboard"
      element={<Dashboard user={user} setUser={setUser} />}
    />
  </Routes>
);

export default RoutesMain;
