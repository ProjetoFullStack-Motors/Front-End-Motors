import { createContext } from "react";
import { TCarProvidersProps } from "./@types";

const CarContext = createContext({});

const CarProvider = ({ children }: TCarProvidersProps) => {
  return <CarContext.Provider value={{}}>{children}</CarContext.Provider>;
};

export { CarContext, CarProvider };
