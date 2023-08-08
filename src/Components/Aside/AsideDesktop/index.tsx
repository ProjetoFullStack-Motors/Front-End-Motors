import AllFilters from "../AllFilters";
import { StyledButtonContainer } from "../AsideMobile/style";
import { useContext } from "react";
import { CarContext } from "../../../Providers/CarContext";
import Button from "../../Buttons";
import { StyledAsideDesktop } from "./style";

const AsideDesktop = () => {
  const { car, handleClearFilter } = useContext(CarContext);
  return (
    <StyledAsideDesktop>
      <AllFilters />
      <StyledButtonContainer>
        <Button $background="brand-2" $width={5}>
          Realizar Pesquisa
        </Button>

        {!car.brand &&
        !car.model &&
        !car.color &&
        !car.year &&
        !car.engine &&
        !car.mileage &&
        !car.price ? null : (
          <Button $background="brand-2" $width={5} onClick={handleClearFilter}>
            Limpar Filtro
          </Button>
        )}
      </StyledButtonContainer>
    </StyledAsideDesktop>
  );
};

export default AsideDesktop;
