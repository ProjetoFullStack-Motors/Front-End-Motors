import AllFilters from "../AllFilters";
import { StyledButtonContainer } from "../AsideMobile/style";
import Button from "../../Buttons";
import { StyledAsideDesktop } from "./style";
import { useCarContext } from "../../../Hooks";

const AsideDesktop = () => {
  const { car, handleClearFilter, initialState, filterCars } = useCarContext();

  console.log(car);
  return (
    <StyledAsideDesktop>
      <AllFilters />
      <StyledButtonContainer>
        {car.brand == initialState.brand &&
        car.model == initialState.model &&
        car.color == initialState.color &&
        car.year == initialState.year &&
        car.price[0] == initialState.price[0] &&
        car.price[1] == initialState.price[1] &&
        car.engine == initialState.engine &&
        car.mileage[0] == initialState.mileage[0] &&
        car.mileage[1] == initialState.mileage[1] ? (
          <Button $background="grey-3" $width={5} disabled $disable={true}>
            Realizar Pesquisa
          </Button>
        ) : (
          <>
            <Button
              $background="brand-2"
              $width={5}
              onClick={() => filterCars()}>
              Realizar Pesquisa
            </Button>

            <Button
              $background="brand-2"
              $width={5}
              onClick={handleClearFilter}>
              Limpar Filtro
            </Button>
          </>
        )}
      </StyledButtonContainer>
    </StyledAsideDesktop>
  );
};

export default AsideDesktop;
