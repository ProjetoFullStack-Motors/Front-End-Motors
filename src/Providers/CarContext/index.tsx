import { createContext, useEffect, useReducer, useState } from "react";
import {
  TCarAction,
  TCarContextProps,
  TCarProvidersProps,
  TCarState,
  TFilterSalesAd,
  TPaginateSalesAdResponse,
  TSaleProps,
} from "./@types";
import { api } from "../../Services/api";
import { toast } from "react-toastify";

const CarContext = createContext({} as TCarContextProps);

const CarProvider = ({ children }: TCarProvidersProps) => {
  const [filterModal, setFilterModal] = useState(false);
  const [cars, setCars] = useState<TSaleProps[]>([]);
  const [allCars, setAllCars] = useState<TSaleProps[]>([]);
  const filteredCars = cars.length == 0 ? allCars : cars;
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPages, setNumberPages] = useState(1);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const getCars = await api.get<TPaginateSalesAdResponse>("/salesAd", {
          params: {
            page: currentPage,
          },
        });
        setAllCars(getCars.data.data);

        const { count } = getCars.data;

        if (count > 12) {
          setNumberPages(Math.ceil(count / 12));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllCars();
  }, [currentPage]);

  const carReducer = (state: TCarState, action: TCarAction) => {
    switch (action.type) {
      case "brand":
        return { ...state, brand: action.payload as string };
      case "model":
        return { ...state, model: action.payload as string };
      case "color":
        return { ...state, color: action.payload as string };
      case "year":
        return { ...state, year: action.payload as string };
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

  const initialState: TCarState = {
    brand: "",
    model: "",
    color: "",
    year: "",
    price: [10000, 500000],
    engine: "",
    mileage: [0, 200000],
  };

  const [car, dispatch] = useReducer(carReducer, initialState);

  useEffect(() => {}, [car]);

  const handleClick = (type: string, value: string | number) => {
    dispatch({ type, payload: value });
  };

  const handleSliderChange = (newValue: number | number[], title: string) => {
    dispatch({ type: title, payload: newValue as number[] });
  };

  const filterCars = async (): Promise<void> => {
    let carObj: TFilterSalesAd = {
      brand: car.brand.length > 0 ? car.brand : null,
      model: car.model.length > 0 ? car.model : null,
      color: car.color.length > 0 ? car.color : null,
      year: car.year.length > 0 ? car.year : null,
      engine: car.engine.length > 0 ? car.engine : null,
      rangePrice: {
        minPrice: car.price[0],
        maxPrice: car.price[1],
      },
      rangeMileage: {
        minMileage: car.mileage[0],
        maxMileage: car.mileage[1],
      },
    };

    const carArr = Object.entries(carObj).filter((obj) => obj[1] !== null);

    carObj = Object.fromEntries(carArr);

    try {
      const filterCars = await api.post<TPaginateSalesAdResponse>(
        "/salesAd/filter",
        carObj,
        {
          params: {
            page: currentPage,
          },
        }
      );

      const { count } = filterCars.data;

      if (count > 12) {
        setNumberPages(Math.ceil(count / 12));
      }

      if (filterCars.data.data.length == 0) {
        toast.warning("Não foi encontrado dados para essa busca");
        setCars([]);
      } else {
        setCars(filterCars.data.data);
        toast.success("Busca encontrada");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = () => {
    if (currentPage < numberPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClearFilter = () => {
    dispatch({ type: "brand", payload: "" });
    dispatch({ type: "model", payload: "" });
    dispatch({ type: "color", payload: "" });
    dispatch({ type: "year", payload: "" });
    dispatch({ type: "price", payload: [10000, 500000] });
    dispatch({ type: "engine", payload: "" });
    dispatch({ type: "mileage", payload: [0, 200000] });

    setIsSearching(false);

    setCars([]);
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
        allCars,
        filterCars,
        filteredCars,
        isSearching,
        setIsSearching,
        nextPage,
        previusPage,
        currentPage,
        numberPages,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };
