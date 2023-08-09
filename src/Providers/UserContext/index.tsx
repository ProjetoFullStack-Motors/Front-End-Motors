import { createContext, useState } from "react";
import { TUserContext, TUserProvidersProps } from "./@types";

const UserContext = createContext({} as TUserContext);

const UserProvider = ({ children }: TUserProvidersProps) => {
  const [user, setUser] = useState({
    firstName: "Roger",
    lastName: "Magalhães",
  });

  const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  };

  const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  return (
    <UserContext.Provider
      value={{
        user,
        stringAvatar,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
