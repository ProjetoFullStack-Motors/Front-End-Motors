import { TSaleProps } from "../../../Providers/CarContext/@types";

type TSaleCardProps = {
    sale: TSaleProps;
    owner: "buyer" | "seller" | "all";
};

export type { TSaleCardProps };
