import { useContext } from "react";
import { CarContext } from "../../../Providers/CarContext";
import { IoMdClose } from "react-icons/io";
import {
  HeaderAsideModal,
  StyledAsideMobile,
  StyledAsideModal,
  StyledButtonContainer,
} from "./style";
import Button from "../../Buttons";
import AllFilters from "../AllFilters";

const AsideMobile = () => {
  const { setFilterModal, handleClearFilter, car } = useContext(CarContext);

  return (
    <StyledAsideMobile>
      <StyledAsideModal>
        <HeaderAsideModal>
          <h2>Filtro</h2>
          <button onClick={() => setFilterModal(false)}>
            <IoMdClose />
          </button>
        </HeaderAsideModal>
        <AllFilters />
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
