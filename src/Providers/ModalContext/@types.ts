import { ReactNode } from "react";

type TModalProviderProps = {
  children: ReactNode;
};

type TModalOptions =
  | null
  | "Recuperar senha"
  | "Criar anúncio"
  | "Editar anúncio"
  | "Excluir anúncio"
  | "Imagem do veículo"
  | "Editar perfil"
  | "Editar endereço"
  | "Excluir perfil"
  | "Editar comentário"
  | "Excluir comentário";

type TModalContextValues = {
  modal: TModalOptions;
  setModal: React.Dispatch<React.SetStateAction<TModalOptions>>;
  closeModal: any;
};

export type { TModalProviderProps, TModalOptions, TModalContextValues };
