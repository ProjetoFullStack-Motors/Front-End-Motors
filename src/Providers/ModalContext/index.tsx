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
        setSelectedBrand(allBrandsKeys[0]);
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    selectedBrand ? getBrandModels(selectedBrand) : null;
    models.length > 0 ? setModel(models[0]) : null;
  }, [selectedBrand]);

  const handleBrandSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    setSelectedBrand(selectedValue);
  };

  const handleModelSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedModel(selectedValue);

    const findModel: TBrandModel | undefined = models.find(
      (item) => item.name === selectedValue
    );

    findModel ? setModel(findModel) : null;
  };

  const detectFuel = (fuel: number) => {
    if (fuel === 1) {
      return "flex";
    } else if (fuel === 2) {
      return "híbrido";
    } else {
      return "elétrico";
    }
  };

  useEffect(() => {}, [model]);

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
        handleBrandSelect,
        handleModelSelect,
        detectFuel,
        model,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
