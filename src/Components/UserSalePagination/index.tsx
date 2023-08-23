import { Button } from "..";
import { StyleChangePage } from "../ChangePage/style";
import { TUserSalePaginationProps } from "./@types";
import { MdNavigateNext, MdKeyboardArrowLeft } from "react-icons/md";

const UserSalePagination = ({
  currentPage,
  pageNumbers,
  setCurrentPage,
}: TUserSalePaginationProps) => {
  return (
    <StyleChangePage className="user__sale--pagination">
      {currentPage !== 1 && (
        <Button
          $background="transparent"
          $color="brand-1"
          onClick={() => setCurrentPage(currentPage - 1)}>
          <MdKeyboardArrowLeft />
          Anterior
        </Button>
      )}
      <p>
        {currentPage} <span>de {pageNumbers}</span>
      </p>
      {currentPage !== pageNumbers && (
        <Button
          $background="transparent"
          onClick={() => setCurrentPage(currentPage + 1)}
          $color="brand-1">
          Seguinte
          <MdNavigateNext />
        </Button>
      )}
    </StyleChangePage>
  );
};

export default UserSalePagination;
