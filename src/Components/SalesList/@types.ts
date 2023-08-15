import { TSaleProps } from "../../Providers/CarContext/@types";

type TSalesListProps = {
    sales: TSaleProps[];
    owner: "all" | "seller";
};

export type { TSalesListProps };
