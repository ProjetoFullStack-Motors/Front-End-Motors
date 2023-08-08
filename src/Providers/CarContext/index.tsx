import { createContext, useEffect, useReducer, useState } from "react";
import {
  TCarAction,
  TCarContextProps,
  TCarProvidersProps,
  TCarState,
  TSaleProps,
} from "./@types";
import mock from "../../Services/mock";

const CarContext = createContext({} as TCarContextProps);

const CarProvider = ({ children }: TCarProvidersProps) => {
  const [filterModal, setFilterModal] = useState(false);
  let cars: TSaleProps[] = [];

  const carReducer = (state: TCarState, action: TCarAction) => {
    switch (action.type) {
      case "brand":
        return { ...state, brand: action.payload as string };
      case "model":
        return { ...state, model: action.payload as string };
      case "color":
        return { ...state, color: action.payload as string };
      case "year":
        return { ...state, year: action.payload as number };
      case "price":
        return { ...state, price: action.payload as number };
      case "engine":
        return { ...state, engine: action.payload as string };
      case "mileage":
        return { ...state, mileage: action.payload as number };
      default:
        return state;
    }
  };

  const initialState = {
    brand: "",
    model: "",
    color: "",
    year: 0,
    price: 0,
    engine: "",
    mileage: 0,
  };

  const [car, dispatch] = useReducer(carReducer, initialState);

  const handleClick = (type: string, value: string | number) => {
    dispatch({ type, payload: value });
  };

  const filterCars = (): TSaleProps[] => {
    if (
      !car.brand &&
      !car.model &&
      !car.color &&
      !car.year &&
      !car.engine &&
      !car.mileage &&
      !car.price
    ) {
      return mock;
    }

    return mock.filter((item) => {
      return (
        (!car.brand || item.brand == car.brand) &&
        (!car.model || item.model == car.model) &&
        (!car.color || item.color == car.color) &&
        (!car.year || item.year == car.year) &&
        (!car.engine || item.engine == car.engine) &&
        (!car.mileage || item.mileage == car.mileage) &&
        (!car.price || item.price == car.price)
      );
    });
  };

  useEffect(() => {
    cars = filterCars();
  }, [car]);

  const handleClearFilter = () => {
    dispatch({ type: "brand", payload: "" });
    dispatch({ type: "model", payload: "" });
    dispatch({ type: "color", payload: "" });
    dispatch({ type: "year", payload: 0 });
    dispatch({ type: "price", payload: 0 });
    dispatch({ type: "engine", payload: "" });
    dispatch({ type: "mileage", payload: 0 });
  };

  return (
    <CarContext.Provider
      value={{
        filterModal,
        setFilterModal,
        dispatch,
        handleClick,
        handleClearFilter,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };
