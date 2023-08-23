import { Button } from "..";
import { useUserContext } from "../../Hooks";
import { StyleChangePage } from "../ChangePage/style";
import { TUserSalePaginationProps } from "./@types";
import { MdNavigateNext, MdKeyboardArrowLeft } from "react-icons/md";

const UserSalePagination = ({ setState }: TUserSalePaginationProps) => {
  const { previousPage, nextPage, pagesAmount, getUserSalesPagination } =
    useUserContext();

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
    <StyleChangePage>
      {previousPage && (
        <Button
          $background="transparent"
          $color="brand-1"
          onClick={() => getUserSalesPagination(previousPage, setState)}
        >
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
          onClick={() => getUserSalesPagination(nextPage, setState)}
          $color="brand-1"
        >
          Seguinte
          <MdNavigateNext />
        </Button>
      )}
    </StyleChangePage>
  );
};

export default UserSalePagination;
