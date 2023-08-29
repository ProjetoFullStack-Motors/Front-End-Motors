import { TSaleProps, TUserSales } from "../../../Providers/CarContext/@types";

type TSaleCardProps = {
  sale: TUserSales | TSaleProps;
  owner: "buyer" | "seller" | "all";
};

export type { TSaleCardProps };
