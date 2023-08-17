import { ReactNode } from "react";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";
import { TUserRegisterData } from "../../Components/Forms/RegisterForm/validator";

type TUserProvidersProps = {
  children: ReactNode;
};

type TUserContext = {
  user: TUser;
  userLogin: (data: TLoginData) => void;
  userRegister: (data: TUserRegisterData) => void;
};

type TUser = {
  firstName: string;
  lastName: string;
};

type TUserDataToken = {
  role: "seller" | "buyer";
  exp: number;
  iat: number;
  userId: string;
  sub: number; // id do user.
};

export type { TUserProvidersProps, TUserContext, TUserDataToken };
