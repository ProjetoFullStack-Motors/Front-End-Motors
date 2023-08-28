import { TUserSales } from "../../Providers/CarContext/@types";

type TSalesListProps = {
  sales: TUserSales[];
  owner: "buyer" | "seller" | "all";
};

export type { TSalesListProps };
