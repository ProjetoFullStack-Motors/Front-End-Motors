import { ReactNode } from "react";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";
import { TUserRegisterData } from "../../Components/Forms/RegisterForm/validator";
import { TSaleUserSeller } from "../CarContext/@types";

type TUserProvidersProps = {
  children: ReactNode;
};

type TUserContext = {
  user: TUser | null;
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
  userLogin: (data: TLoginData) => void;
  logoutUser: () => void;
  recoverPassword: (data: TUserMail) => Promise<void>;
  userRegister: (data: TUserRegisterData) => void;
  userName: TUserName | null;
  retrieveUser: (id: string) => Promise<void>;
  changeUserAddress: (data: TAddressPartial) => Promise<void>;
  retrieveProfileViewUser: (
    id: string,
    setState: React.Dispatch<React.SetStateAction<TUser | null>>
  ) => Promise<void>;
};

type TUserMail = {
  email: string;
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

type TAddressPartial = {
  addressComplement?: string;
  addressNumber?: number;
  cep?: string;
  city?: string;
  state?: string;
  street?: string;
};

type TAddressResponse = {
  id: string;
  created_at: string;
} & TAddress;

type TUser = {
  id?: string;
  firstName: string;
  lastName: string;
  cellphone: string;
  cpf: string;
  email: string;
  description: string;
  birthdate: Date;
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

type TJwtDecode = {
  userId: string;
  role: string;
};

export type {
  TUser,
  TUserProvidersProps,
  TUserContext,
  TUserDataToken,
  TUserName,
  TErrorResponse,
  TUserMail,
  TJwtDecode,
  TAddressResponse,
  TAddressPartial,
};
