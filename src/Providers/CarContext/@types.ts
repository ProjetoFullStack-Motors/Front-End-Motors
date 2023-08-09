import { ReactNode } from "react";

type TCarProvidersProps = {
  children: ReactNode;
};

type TSaleProps = {
  id: number;
  brand: string;
  model: string;
  year: number;
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
  imgs: string[];
  engine: string;
};

type TCarState = {
  brand: string;
  model: string;
  year: number;
  price: number[];
  color: string;
  engine: string;
  mileage: number[];
};

type TCarAction = {
  type: string;
  payload: string | number | number[];
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
};

export type {
  TCarProvidersProps,
  TSaleProps,
  TCarContextProps,
  TCarState,
  TCarAction,
};
