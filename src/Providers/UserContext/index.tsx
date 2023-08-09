import { createContext, useState } from "react";
import { TUserContext, TUserProvidersProps } from "./@types";

const UserContext = createContext({} as TUserContext);

const UserProvider = ({ children }: TUserProvidersProps) => {
  const [user, setUser] = useState({
    firstName: "Roger",
    lastName: "Magalhães",
  });

  return (
    <UserContext.Provider
      value={{
        user,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
