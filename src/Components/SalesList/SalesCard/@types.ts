import { ISale, TUserSales, TSaleProps } from "../../../Providers/CarContext/@types";

type TSaleCardProps = {
  sale: ISale | TUserSales | TSaleProps;
  owner: "buyer" | "seller" | "all";
};

export type { TSaleCardProps };
