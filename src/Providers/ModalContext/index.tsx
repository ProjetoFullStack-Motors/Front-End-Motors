import { createContext, useEffect, useState } from "react";
import {
  TModalProviderProps,
  TModalOptions,
  TModalContextValues,
  TBrandModel,
} from "./@types";
import { apiFipe } from "../../Services/api";

const ModalContext = createContext({} as TModalContextValues);

const ModalProvider = ({ children }: TModalProviderProps) => {
  const [modal, setModal] = useState<TModalOptions>(null);
  const [brands, setBrands] = useState<string[] | []>([]);
  const [models, setModels] = useState<TBrandModel[] | []>([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [model, setModel] = useState<TBrandModel | null>(null);

  useEffect(() => {
    const getAllBrands = async () => {
      try {
        const allBrands = await apiFipe.get("/cars");

        const allBrandsKeys = Object.keys(allBrands.data);

        setBrands(allBrandsKeys);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBrands();
  }, []);

  const getBrandModels = async (brand: string) => {
    try {
      const allModels = await apiFipe.get(`/cars?brand=${brand}`);
      setModels(allModels.data);
      console.log(allModels);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBrandSelect = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedBrand(selectedValue);
    await getBrandModels(selectedValue);
  };

  const handleModelSelect = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedModel(selectedValue);

    const findModel: TBrandModel | undefined = models.find(
      (item) => item.name === selectedModel
    );

    findModel ? setModel(findModel) : null;
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        brands,
        models,
        getBrandModels,
        selectedBrand,
        setSelectedBrand,
        selectedModel,
        setSelectedModel,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
