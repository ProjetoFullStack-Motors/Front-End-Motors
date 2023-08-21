import { ReactNode } from "react";
import { TUser } from "../UserContext/@types";

type TCarProvidersProps = {
  children: ReactNode;
};

type TSaleProps = {
  id: string;
  brand: string;
  model: string;
  year: string;
  mileage: number;
  isGoodPrice: boolean;
  price: number;
  color: string;
  description: string;
  user?: TUser;
  salesImages: [
    {
      id: string;
      imageUrl: string;
      principal: boolean;
      created_at: string;
    }
  ];
  engine: string;
  created_at: string;
};

type TSaleUserSeller = Omit<TSaleProps, "user">;

type TAsideValues = {
  [key: string]: string[];
};

type TCarState = {
  brand: string;
  model: string;
  year: string;
  price: number[];
  color: string;
  engine: string;
  mileage: number[];
};

type TCarAction = {
  type: string;
  payload: string | number | number[];
};

type TPriceRange = {
  minPrice: number;
  maxPrice: number;
};

type TMileageRange = {
  minMileage: number;
  maxMileage: number;
};

type TFilterSalesAd = {
  brand?: string | null | undefined;
  model?: string | null | undefined;
  color?: string | null | undefined;
  year?: string | null | undefined;
  engine?: string | null | undefined;
  rangePrice?: TPriceRange | null | undefined;
  rangeMileage?: TMileageRange | null | undefined;
};

type TBrandModel = {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
};

type TCarContextProps = {
  filterModal: boolean;
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.Dispatch<TCarAction>;
  handleClick: (type: string, value: string | number) => void;
  handleClearFilter: () => void;
  cars: TSaleProps[];
  handleSliderChange: (newValue: number | number[], title: string) => void;
  car: TCarState;
  initialState: TCarState;
  allCars: TSaleProps[];
  filteredCars: TSaleProps[];
  filterCars: (pageUrl?: string) => Promise<void>;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  previousPage: string | null;
  nextPage: string | null;
  getCarsPagination: (pageUrl: string) => Promise<void>;
  pagesAmount: number;
  asideFilter: TAsideValues | null;
  convertStr: (str: string, itemKey?: string) => string;
  brands: string[] | null;
  models: [] | TBrandModel[];
  getBrandModels: (brand: string) => Promise<void>;
  selectedBrand: string;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string>>;
  selectedModel: string;
  setSelectedModel: React.Dispatch<React.SetStateAction<string>>;
  handleBrandSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleModelSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  detectFuel: (fuel: number) => "flex" | "hybrid" | "electric";
  model: TBrandModel | null;
  createSalesAd: (data: TCreateSaleAdRegister) => Promise<void>;
  isGoodPrice: (price: number, fipePrice: number) => boolean;
  setModel: React.Dispatch<React.SetStateAction<TBrandModel | null>>;
};

type TPaginateSalesAdResponse = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: TSaleProps[];
};

type TImageSalesAd = {
  imageUrl: string;
};

type TCreateSaleAdRegister = {
  brand: string;
  model: string;
  year: string;
  color: string;
  engine: string;
  mileage: number;
  isGoodPrice: boolean;
  price: number;
  description: string;
  salesImages: TImageSalesAd[];
};

interface ISale extends TCreateSaleAdRegister {
  id: string;
  created_at: Date;
  user: TUser;
}

export type {
  TCarProvidersProps,
  TSaleProps,
  TSaleUserSeller,
  TCarContextProps,
  TCarState,
  TCarAction,
  TFilterSalesAd,
  TPaginateSalesAdResponse,
  TAsideValues,
  TCreateSaleAdRegister,
  TBrandModel,
  ISale,
};
