import { Routes, Route } from "react-router-dom";
import { Dashboard, Home } from "../Pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default AppRoutes;
