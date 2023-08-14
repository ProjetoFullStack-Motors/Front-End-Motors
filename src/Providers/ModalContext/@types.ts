import { ReactNode } from "react";

type TModalProviderProps = {
    children: ReactNode;
};

type TModalOptions =
    | null
    | "Criar anúncio"
    | "Editar anúncio"
    | "Excluir anúncio"
    | "Imagem do veículo"
    | "Editar perfil"
    | "Editar endereço";

type TModalContextValues = {
    modal: TModalOptions;
    setModal: React.Dispatch<React.SetStateAction<TModalOptions>>;
};

export type { TModalProviderProps, TModalOptions, TModalContextValues };