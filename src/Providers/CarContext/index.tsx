import { createContext, useEffect, useReducer, useState } from "react";
import {
  TAsideValues,
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
import axios, { AxiosResponse } from "axios";

const CarContext = createContext({} as TCarContextProps);

const CarProvider = ({ children }: TCarProvidersProps) => {
  const [filterModal, setFilterModal] = useState(false);
  const [cars, setCars] = useState<TSaleProps[]>([]);
  const [allCars, setAllCars] = useState<TSaleProps[]>([]);
  const filteredCars = cars.length == 0 ? allCars : cars;
  const [isSearching, setIsSearching] = useState(false);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [pagesAmount, setPagesAmount] = useState(0);
  const [change, setChange] = useState(false);
  const [asideFilter, setAsideFilter] = useState<TAsideValues | null>(null);

  useEffect(() => {
    const asideValues = async () => {
      try {
        const asideCars = await api.get<TAsideValues>("/salesAd/values");
        setAsideFilter(asideCars.data);
      } catch (error) {
        console.log(error);
      }
    };
    asideValues();
  }, []);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const getCars = await api.get<TPaginateSalesAdResponse>("/salesAd");

        const { count, prevPage, nextPage, data } = getCars.data;

        if (count > 12) {
          setPagesAmount(Math.ceil(count / 12));
        }

        setAllCars(data);
        setPreviousPage(prevPage);
        setNextPage(nextPage);
      } catch (error) {
        console.log(error);
      }
    };

    getAllCars();
  }, [change]);

  const convertStr = (str: string, itemKey?: string) => {
    if (itemKey == "year") {
      return str;
    }

    return str[0].toUpperCase() + str.slice(1);
  };

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

  const filterCars = async (pageUrl?: string): Promise<void> => {
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
      let filterCars: AxiosResponse<TPaginateSalesAdResponse, any>;

      if (!pageUrl) {
        filterCars = await api.post<TPaginateSalesAdResponse>(
          "/salesAd/filter",
          carObj
        );
      } else {
        filterCars = await axios.post(pageUrl!, carObj);
      }

      const { count, prevPage, nextPage, data } = filterCars.data;

      setPreviousPage(prevPage);
      setNextPage(nextPage);

      if (count > 12) {
        setPagesAmount(Math.ceil(count / 12));
      }

      if (data.length == 0) {
        toast.warning("Não foi encontrado dados para essa busca");
        setCars([]);
      } else {
        setCars(data);
      }
    } catch (error) {
      console.log(error);
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
    setChange(!change);

    setCars([]);
  };

  const getCarsPagination = async (pageUrl: string) => {
    try {
      const response = await axios.get<TPaginateSalesAdResponse>(pageUrl);

      const { prevPage, nextPage, data, count } = response.data;

      setAllCars(data);
      setPreviousPage(prevPage);
      setNextPage(nextPage);

      if (count > 12) {
        setPagesAmount(Math.ceil(count / 12));
      }
    } catch (error) {}
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
        previousPage,
        nextPage,
        getCarsPagination,
        pagesAmount,
        asideFilter,
        convertStr,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };
