import { StyledSalesList } from "./style";
import SalesCard from "./SalesCard";
import { v4 as uuidv4 } from "uuid";
import { useCarContext } from "../../Hooks";

const SalesList = () => {
  const { filteredCars } = useCarContext();
  return (
    <StyledSalesList>
      {filteredCars?.map((sale) => (
        <SalesCard key={uuidv4()} sale={sale} />
      ))}
    </StyledSalesList>
  );
};

export default SalesList;
