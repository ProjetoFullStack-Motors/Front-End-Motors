import { TSaleProps } from "../../Providers/CarContext/@types";

type TSalesListProps = {
    sales: TSaleProps[];
    owner: "buyer" | "seller" | "all";
};

export type { TSalesListProps };
