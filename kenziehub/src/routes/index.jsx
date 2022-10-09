import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cadastro" element={<h1>Teste</h1>} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default RoutesMain;
