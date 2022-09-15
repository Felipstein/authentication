import { useContext } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { AuthContext } from './contexts/AuthContext';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function PrivateRoutes() {
  const { authenticated } = useContext(AuthContext);

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}