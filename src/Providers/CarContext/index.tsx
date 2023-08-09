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
  const [cars, setCars] = useState<TSaleProps[]>([]);

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
        return { ...state, price: action.payload as number[] };
      case "engine":
        return { ...state, engine: action.payload as string };
      case "mileage":
        return { ...state, mileage: action.payload as number[] };
      default:
        return state;
    }
  };

  const priceArr: number[] = mock.map((item) => Number(item.price));

  const mileageArr: number[] = mock.map((item) => Number(item.mileage));

  const minPrice = Math.min(...priceArr) / 1000;

  const maxPrice = Math.max(...priceArr) / 1000;

  const minMileage = Math.min(...mileageArr) / 1000;

  const maxMileage = Math.max(...mileageArr) / 1000;

  const initialState: TCarState = {
    brand: "",
    model: "",
    color: "",
    year: 0,
    price: [minPrice, maxPrice],
    engine: "",
    mileage: [minMileage, maxMileage],
  };

  const [car, dispatch] = useReducer(carReducer, initialState);

  const handleClick = (type: string, value: string | number) => {
    dispatch({ type, payload: value });
  };

  const handleSliderChange = (newValue: number | number[], title: string) => {
    dispatch({ type: title, payload: newValue as number[] });
  };

  const filterCars = (car: TCarState): TSaleProps[] => {
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
        (!car.price ||
          (item.price >= car.price[0] * 1000 &&
            item.price <= car.price[1] * 1000)) &&
        (!car.mileage ||
          (item.mileage >= car.mileage[0] * 1000 &&
            item.mileage <= car.mileage[1] * 1000))
      );
    });
  };

  useEffect(() => {
    setCars(filterCars(car));
  }, [car]);

  const handleClearFilter = () => {
    dispatch({ type: "brand", payload: "" });
    dispatch({ type: "model", payload: "" });
    dispatch({ type: "color", payload: "" });
    dispatch({ type: "year", payload: 0 });
    dispatch({ type: "price", payload: [minPrice, maxPrice] });
    dispatch({ type: "engine", payload: "" });
    dispatch({ type: "mileage", payload: [minMileage, maxMileage] });
  };

  return (
    <CarContext.Provider
      value={{
        filterModal,
        setFilterModal,
        dispatch,
        handleClick,
        handleClearFilter,
        cars,
        handleSliderChange,
        car,
        initialState,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };
