import { createContext, useState } from "react";
import {
  TModalProviderProps,
  TModalOptions,
  TModalContextValues,
} from "./@types";

const ModalContext = createContext({} as TModalContextValues);

const ModalProvider = ({ children }: TModalProviderProps) => {
  const [modal, setModal] = useState<TModalOptions>(null);

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
