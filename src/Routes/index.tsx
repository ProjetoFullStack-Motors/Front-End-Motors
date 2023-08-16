import { Routes, Route } from "react-router-dom";
import { Dashboard, Home, Register, Login } from "../Pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default AppRoutes;
