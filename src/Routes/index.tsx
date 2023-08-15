import { Routes, Route } from "react-router-dom";
import { Dashboard, Home } from "../Pages";
import Register from "../Pages/Register";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default AppRoutes;
