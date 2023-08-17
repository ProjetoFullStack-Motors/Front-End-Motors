import { createContext, useEffect, useState } from "react";
import { TUserContext, TUserDataToken, TUserProvidersProps } from "./@types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";
import { api } from "../../Services/api";
import jwt_decode from "jwt-decode";
import { TUserRegisterData } from "../../Components/Forms/RegisterForm/validator";

const UserContext = createContext({} as TUserContext);

const UserProvider = ({ children }: TUserProvidersProps) => {
  const [user, setUser] = useState({
    firstName: "Roger",
    lastName: "Magalhães",
  });
  const [userData, setUserData] = useState<TUserDataToken | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("desafioM6:token");

    if (!token) {
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setUserData(jwt_decode(token));
  }, []);

  const userLogin = async (data: TLoginData) => {
    try {
      const response = await api.post("/users/login", data);
      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      localStorage.setItem("frontEndMotors:token", token);
      setUserData(jwt_decode(token));
      toast.success("Login realizado com sucesso!");
      navigate("dashboard");
    } catch (error) {
      toast.error("E-mail ou senha inválido(s)!");
      console.log(error);
    }
  };

  const userRegister = async (data: TUserRegisterData) => {
    try {
      await api.post("/users", data);
      const token = localStorage.getItem("frontEndMotors:token");

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      toast.success("Usuário cadastrado com sucesso!");
      navigate("dashboard");
    } catch (error) {
      toast.error("Cadastro inválido!");
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
