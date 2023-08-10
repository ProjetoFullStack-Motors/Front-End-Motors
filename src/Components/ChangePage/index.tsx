import { Button } from "..";
import { useCarContext } from "../../Hooks";
import { StyleChangePage } from "./style";
import { MdNavigateNext, MdKeyboardArrowLeft } from "react-icons/md";

const ChangePage = () => {
  const {
    previousPage,
    nextPage,
    getCarsPagination,
    cars,
    filterCars,
    pagesAmount,
  } = useCarContext();

  return (
    <>
      {cars.length === 0 ? (
        <StyleChangePage>
          {previousPage && (
            <Button
              $background="transparent"
              $color="brand-1"
              onClick={() => getCarsPagination(previousPage)}>
              <MdKeyboardArrowLeft />
              Anterior
            </Button>
          )}

          <p>
            {previousPage
              ? Number(previousPage[previousPage.length - 1]) + 1
              : 1}{" "}
            <span>de {pagesAmount}</span>
          </p>

          {nextPage && (
            <Button
              $background="transparent"
              onClick={() => getCarsPagination(nextPage)}
              $color="brand-1">
              Seguinte
              <MdNavigateNext />
            </Button>
          )}
        </StyleChangePage>
      ) : (
        <StyleChangePage>
          {previousPage && (
            <Button
              $background="transparent"
              $color="brand-1"
              onClick={() => filterCars(previousPage)}>
              <MdKeyboardArrowLeft />
              Anterior
            </Button>
          )}

          <p>
            {previousPage
              ? Number(previousPage[previousPage.length - 1]) + 1
              : 1}{" "}
            <span>de {pagesAmount}</span>
          </p>

          {nextPage && (
            <Button
              $background="transparent"
              onClick={() => filterCars(nextPage)}
              $color="brand-1">
              Seguinte
              <MdNavigateNext />
            </Button>
          )}
        </StyleChangePage>
      )}
    </>
  );
};

export default ChangePage;
