import AllFilters from "../AllFilters";
import { StyledButtonContainer } from "../AsideMobile/style";
import { useContext } from "react";
import { CarContext } from "../../../Providers/CarContext";
import Button from "../../Buttons";
import { StyledAsideDesktop } from "./style";

const AsideDesktop = () => {
  const { car, handleClearFilter, initialState } = useContext(CarContext);
  return (
    <StyledAsideDesktop>
      <AllFilters />
      <StyledButtonContainer>
        <Button $background="brand-2" $width={5}>
          Realizar Pesquisa
        </Button>

        {car.brand == initialState.brand &&
        car.model == initialState.model &&
        car.color == initialState.color &&
        car.year == initialState.year &&
        car.price[0] == initialState.price[0] &&
        car.price[1] == initialState.price[1] &&
        car.engine == initialState.engine &&
        car.mileage[0] == initialState.mileage[0] &&
        car.mileage[1] == initialState.mileage[1] ? null : (
          <Button $background="brand-2" $width={5} onClick={handleClearFilter}>
            Limpar Filtro
          </Button>
        )}
      </StyledButtonContainer>
    </StyledAsideDesktop>
  );
};

export default AsideDesktop;
