import { TUserSales } from "../../../Providers/CarContext/@types";

type TSaleCardProps = {
  sale: TUserSales;
  owner: "buyer" | "seller" | "all";
};

export type { TSaleCardProps };
