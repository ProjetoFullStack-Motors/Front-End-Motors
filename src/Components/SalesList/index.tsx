import { StyledSalesList } from "./style";
import { Mock } from "../../Services/mock";
import SalesCard from "./SalesCard";

const SalesList = () => {
    return (
        <StyledSalesList>
            {Mock.map((sale) => (
                <SalesCard key={sale.id} sale={sale} />
            ))}
        </StyledSalesList>
    );
};

export default SalesList;
