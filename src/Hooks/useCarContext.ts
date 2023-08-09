import { useContext } from "react";
import { CarContext } from "../Providers";

const useCarContext = () => {
  const carContext = useContext(CarContext);

  return carContext;
};

export default useCarContext;
