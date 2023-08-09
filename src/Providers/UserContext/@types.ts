import { ReactNode } from "react";

type TUserProvidersProps = {
  children: ReactNode;
};

type TUserContext = {
  user: TUser;
  stringAvatar: (name: string) => {
    sx: {
      bgcolor: string;
    };
    children: string;
  };
};

type TUser = {
  firstName: string;
  lastName: string;
};

export type { TUserProvidersProps, TUserContext };
