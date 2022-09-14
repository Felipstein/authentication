import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}