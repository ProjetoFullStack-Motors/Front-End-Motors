import { ISale } from "../../../Providers/CarContext/@types";

type TSaleCardProps = {
  sale: ISale;
  owner: "buyer" | "seller" | "all";
};

export type { TSaleCardProps };
