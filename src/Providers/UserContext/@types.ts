import { ReactNode } from "react";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";
import { TSaleUserSeller } from "../CarContext/@types";

type TUserProvidersProps = {
  children: ReactNode;
};

type TUserContext = {
  user: TUser | null;
  userName: TUserName | null;
  userLogin: (data: TLoginData) => void;
  logoutUser: () => void;
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
};

type TUserName = {
  firstName: string;
  lastName: string;
};

type TErrorResponse = {
  message: string;
};

type TAddress = {
  addressComplement: string;
  addressNumber: number;
  cep: string;
  city: string;
  state: string;
  street: string;
};

type TUser = {
  firstName: string;
  lastName: string;
  cellphone: string;
  cpf: string;
  description: string;
  role: "seller" | "buyer";
  userImage?: string;
  address: TAddress;
  sales?: TSaleUserSeller[];
  created_at: string;
};

type TUserDataToken = {
  role: "seller" | "buyer";
  exp: number;
  iat: number;
  sub: string; // id do user.
};

export type {
  TUser,
  TUserProvidersProps,
  TUserContext,
  TUserDataToken,
  TUserName,
  TErrorResponse,
};
