import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
