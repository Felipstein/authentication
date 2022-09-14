import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/authenticate" element={<Auth />} />
    </Routes>
  );
}