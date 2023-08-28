import { createContext, useState } from "react";
import {
  TModalProviderProps,
  TModalOptions,
  TModalContextValues,
} from "./@types";

const ModalContext = createContext({} as TModalContextValues);

const ModalProvider = ({ children }: TModalProviderProps) => {
  const [modal, setModal] = useState<TModalOptions>(null);

  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = "unset";
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
