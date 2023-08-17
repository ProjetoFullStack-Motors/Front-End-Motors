import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { TJwtDecode } from "../../Providers/UserContext/@types";

const ProtectedRoute = () => {
  const token = localStorage.getItem("frontEndMotors:token");

  if (token) {
    const tokenDecoded: TJwtDecode = jwt_decode(token);

    return tokenDecoded.role === "seller" ? <Outlet /> : <Navigate to="/" />;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
