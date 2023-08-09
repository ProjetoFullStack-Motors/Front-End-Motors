import { IoMdClose } from "react-icons/io";
import {
  HeaderAsideModal,
  StyledAllFiltersMobile,
  StyledAsideMobile,
  StyledAsideModal,
  StyledButtonContainer,
} from "./style";
import Button from "../../Buttons";
import AllFilters from "../AllFilters";
import useOutClick from "../../../Hooks/useOutClick";
import useKeyDown from "../../../Hooks/useKeyDown";
import { useCarContext } from "../../../Hooks";

const AsideMobile = () => {
  const { setFilterModal, handleClearFilter, car, initialState } =
    useCarContext();

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
        <StyledAllFiltersMobile>
          <AllFilters />
        </StyledAllFiltersMobile>
        <StyledButtonContainer>
          <Button
            $background="brand-2"
            $width={5}
            onClick={() => setFilterModal(false)}>
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
