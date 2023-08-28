import { TSaleProps, TUserSales } from "../../Providers/CarContext/@types";

type TSalesListProps = {
  sales: TUserSales[] | TSaleProps[];
  owner: "buyer" | "seller" | "all";
};

export type { TSalesListProps };
