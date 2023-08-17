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
  | "Editar endereço";

type TBrandModel = {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
};

type TModalContextValues = {
  modal: TModalOptions;
  setModal: React.Dispatch<React.SetStateAction<TModalOptions>>;
  brands: string[] | null;
  models: [] | TBrandModel[];
  getBrandModels: (brand: string) => Promise<void>;
  selectedBrand: string;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string>>;
  selectedModel: string;
  setSelectedModel: React.Dispatch<React.SetStateAction<string>>;
  handleBrandSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleModelSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  detectFuel: (fuel: number) => "flex" | "híbrido" | "elétrico";
  model: TBrandModel | null;
};

export type {
  TModalProviderProps,
  TModalOptions,
  TModalContextValues,
  TBrandModel,
};
