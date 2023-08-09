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
import useOutClick from "../../../Hooks/useOutClick";
import useKeyDown from "../../../Hooks/useKeyDown";

const AsideMobile = () => {
  const { setFilterModal, handleClearFilter, car } = useContext(CarContext);

  const menuRef = useOutClick(() => {
    setFilterModal!(false);
  });

  const buttonRef = useKeyDown("Escape", (element: any) => {
    element.click();
  });

  return (
    <StyledAsideMobile>
      <StyledAsideModal ref={menuRef}>
        <HeaderAsideModal>
          <h2>Filtro</h2>
          <button onClick={() => setFilterModal(false)} ref={buttonRef}>
            <IoMdClose />
          </button>
        </HeaderAsideModal>
        <AllFilters />
        <StyledButtonContainer>
          <Button
            $background="brand-2"
            $width={5}
            onClick={() => setFilterModal(false)}>
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
              onClick={handleClearFilter}>
              Limpar Filtro
            </Button>
          )}
        </StyledButtonContainer>
      </StyledAsideModal>
    </StyledAsideMobile>
  );
};

export default AsideMobile;
