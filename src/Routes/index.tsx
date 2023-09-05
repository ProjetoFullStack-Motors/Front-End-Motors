import { Routes, Route } from "react-router-dom";
import { Dashboard, Home, Register, Login, Sale } from "../Pages";
import ProtectedRoute from "../Pages/ProtectedRoute";
import ProfileViewUser from "../Pages/ProfileViewUser";
import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sale/:id" element={<Sale />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/ProfileViewUser/:id" element={<ProfileViewUser />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
