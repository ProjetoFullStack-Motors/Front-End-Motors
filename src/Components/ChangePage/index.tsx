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

  const currentPage = () => {
    if (previousPage) {
      const pageNumberIndex = previousPage.indexOf("=") + 1;

      const pageNumber = Number(previousPage.substring(pageNumberIndex));
      if (Number(pageNumber)) {
        return pageNumber + 1;
      }
    } else {
      return 1;
    }
  };

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
            {currentPage()}{" "}
            <span>de {nextPage || previousPage ? pagesAmount : 1}</span>
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
            {currentPage()}{" "}
            <span>de {nextPage || previousPage ? pagesAmount : 1}</span>
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
