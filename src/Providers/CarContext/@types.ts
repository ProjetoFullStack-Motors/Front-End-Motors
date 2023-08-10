import { ReactNode } from "react";

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
  seller: {
    firstName: string;
    lastName: string;
    img?: string;
  };
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
  filterCars: () => Promise<void>;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  nextPage: () => void;
  previusPage: () => void;
  currentPage: number;
  numberPages: number;
};

type TPaginateSalesAdResponse = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: TSaleProps[];
};

export type {
  TCarProvidersProps,
  TSaleProps,
  TCarContextProps,
  TCarState,
  TCarAction,
  TFilterSalesAd,
  TPaginateSalesAdResponse,
};
