import { Button } from "..";
import { useCarContext } from "../../Hooks";
import { StyleChangePage } from "./style";
import { MdNavigateNext, MdKeyboardArrowLeft } from "react-icons/md";

const ChangePage = () => {
  const { nextPage, currentPage, previusPage, numberPages } = useCarContext();

  return (
    <StyleChangePage>
      {currentPage !== 1 && (
        <Button
          $background="transparent"
          $color="brand-1"
          onClick={previusPage}>
          <MdKeyboardArrowLeft />
          Anterior
        </Button>
      )}
      <p>
        {currentPage} <span>de {numberPages}</span>
      </p>
      {currentPage < numberPages && (
        <Button $background="transparent" onClick={nextPage} $color="brand-1">
          Seguinte
          <MdNavigateNext />
        </Button>
      )}
    </StyleChangePage>
  );
};

export default ChangePage;
