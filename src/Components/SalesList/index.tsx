import { StyledSalesList } from "./style";
import { TSalesListProps } from "./@types";
import SalesCard from "./SalesCard";
import { v4 as uuidv4 } from "uuid";

const SalesList = ({ sales, owner }: TSalesListProps) => {
    return (
        <StyledSalesList>
            {sales?.map((sale) => (
                <SalesCard key={uuidv4()} sale={sale} owner={owner} />
            ))}
        </StyledSalesList>
    );
};

export default SalesList;
