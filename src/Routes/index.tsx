import { Routes, Route } from "react-router-dom";
import { Dashboard, Home, Register, Login } from "../Pages";
import ProtectedRoute from "../Pages/ProtectedRoute";
import Sale from "../Pages/Sale";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sale/:id" element={<Sale />} />
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
