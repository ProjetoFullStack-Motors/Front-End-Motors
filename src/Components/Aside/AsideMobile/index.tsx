import { useContext } from "react";
import ListNav from "../ListNav";
import { CarContext } from "../../../Providers/CarContext";
import RangeSlide from "../RangeSlide";
import {
  HeaderAsideModal,
  StyledAsideMobile,
  StyledAsideModal,
  StyledButtonContainer,
  StyledFilters,
} from "./style";
import Button from "../../Buttons";

const AsideMobile = () => {
  const { setFilterModal, handleClearFilter, car } = useContext(CarContext);

  return (
    <StyledAsideMobile>
      <StyledAsideModal>
        <HeaderAsideModal>
          <h2>Filtro</h2>
          <button onClick={() => setFilterModal(false)}>X</button>
        </HeaderAsideModal>
        <StyledFilters>
          <ListNav saleKey="brand" name="Marca" />
          <ListNav saleKey="model" name="Modelo" />
          <ListNav saleKey="color" name="Cor" />
          <ListNav saleKey="year" name="Ano" />
          <ListNav saleKey="engine" name="Combustível" />
          <RangeSlide title="Km" stepValue={10} itemKey="mileage" />
          <RangeSlide title="Preço" stepValue={10} itemKey="price" />
        </StyledFilters>
        <StyledButtonContainer>
          <Button
            $background="brand-2"
            $width={5}
            onClick={() => setFilterModal(false)}
          >
            Realizar Pesquisa
          </Button>

          {!car.brand &&
          !car.model &&
          !car.color &&
          !car.year &&
          !car.engine &&
          !car.mileage &&
          !car.price ? null : (
            <Button
              $background="brand-2"
              $width={5}
              onClick={handleClearFilter}
            >
              Limpar Filtro
            </Button>
          )}
        </StyledButtonContainer>
      </StyledAsideModal>
    </StyledAsideMobile>
  );
};

export default AsideMobile;
