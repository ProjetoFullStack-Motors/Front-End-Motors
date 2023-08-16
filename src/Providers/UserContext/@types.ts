import { ReactNode } from "react";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";

type TUserProvidersProps = {
  children: ReactNode;
};

type TUserContext = {
  user: TUser;
  userLogin: (data: TLoginData) => void;
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
}

export type { TUserProvidersProps, TUserContext, TUserDataToken };
