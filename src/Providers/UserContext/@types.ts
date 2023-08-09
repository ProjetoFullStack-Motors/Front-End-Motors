import { ReactNode } from "react";

type TUserProvidersProps = {
  children: ReactNode;
};

type TUserContext = {
  user: TUser;
};

type TUser = {
  firstName: string;
  lastName: string;
};

export type { TUserProvidersProps, TUserContext };
