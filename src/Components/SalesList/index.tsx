import { StyledSalesList } from "./style";
import SalesCard from "./SalesCard";
import mock from "../../Services/mock";
import { v4 as uuidv4 } from "uuid";

const SalesList = () => {
    return (
        <StyledSalesList>
            {mock.map((sale) => (
                <SalesCard key={uuidv4()} sale={sale} />
            ))}
        </StyledSalesList>
    );
};

export default SalesList;
