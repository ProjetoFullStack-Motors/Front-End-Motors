import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages";
import Register from "../Pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
