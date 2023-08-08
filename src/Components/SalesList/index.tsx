import { StyledSalesList } from "./style";
import SalesCard from "./SalesCard";
import mock from "../../Services/mock";

const SalesList = () => {
  return (
    <StyledSalesList>
      {mock.map((sale) => (
        <SalesCard key={sale.id} sale={sale} />
      ))}
    </StyledSalesList>
  );
};

export default SalesList;
