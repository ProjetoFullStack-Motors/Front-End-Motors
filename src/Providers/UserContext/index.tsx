import { createContext, useEffect, useState } from "react";
import {
  TUserContext,
  TUserDataToken,
  TUserName,
  TUser,
  TUserProvidersProps,
  TErrorResponse,
} from "./@types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";
import { api } from "../../Services/api";
import jwt_decode from "jwt-decode";
import { AxiosError } from "axios";

const UserContext = createContext({} as TUserContext);

const UserProvider = ({ children }: TUserProvidersProps) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<TUserName | null>(null);
  const [user, setUser] = useState<TUser | null>(null);
  const token = localStorage.getItem("frontEndMotors:token") || null;
  const userData = token ? jwt_decode<TUserDataToken>(token) : null;

  const userLogin = async (data: TLoginData) => {
    try {
      const response = await api.post("/users/login", data);
      const { token, role } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      localStorage.setItem("frontEndMotors:token", token);
      toast.success("Login realizado com sucesso!");
      role === "seller" ? navigate("dashboard") : navigate("");
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
        lastName: response.data.lastName,
      });
      setUser(response.data);
    } catch (error) {
      const currentError = error as AxiosError<TErrorResponse>;
      toast.error(currentError.response?.data.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userData) {
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    retrieveUser(userData?.sub!);
  }, []);

  return (
    <UserContext.Provider
      value={{
        userName,
        user,
        userLogin,
        logoutUser,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
