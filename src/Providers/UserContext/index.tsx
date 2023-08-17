import { createContext, useEffect, useState } from "react";
import { TUserContext, TUserDataToken, TUserName, TUserProvidersProps, TErrorResponse } from "./@types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";
import { api } from "../../Services/api";
import jwt_decode from "jwt-decode";
import { AxiosError } from "axios";

const UserContext = createContext({} as TUserContext);

const UserProvider = ({ children }: TUserProvidersProps) => {
  const [userName, setUserName] = useState<TUserName | null>(null);
  const [userData, setUserData] = useState<TUserDataToken | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("frontEndMotors:token");

    if (!token) {
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setUserData(jwt_decode(token));
  }, []);

  useEffect(() => {
    if (userData) {
      retrieveUser(userData?.userId!)
    }
    
  }, [userData]);

  const userLogin = async (data: TLoginData) => {
    try {
      const response = await api.post("/users/login", data);
      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      localStorage.setItem("frontEndMotors:token", token);
      setUserData(jwt_decode(token));
      toast.success("Login realizado com sucesso!");
      (userData?.role === "seller") ? navigate("dashboard") : navigate("");
    } catch (error) {
      toast.error("E-mail ou senha inválido(s)!");
      console.log(error);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("desafioM6:token");
    navigate("/");
  };

  const retrieveUser = async (id: string) => {
    try {
      const response = await api.get(`users/${id}`);
      setUserName({
        firstName: response.data.firstName,
        lastName: response.data.lastName
      })
    } catch (error) {
      const currentError = error as AxiosError<TErrorResponse>;
      toast.error(currentError.response?.data.message);
      console.log(error);
    }
  }
  
  return (
    <UserContext.Provider
      value={{
        userName,
        userLogin,
        logoutUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
