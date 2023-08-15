import { TSaleProps } from "../../../Providers/CarContext/@types";

type TSaleCardProps = {
    sale: TSaleProps;
    owner: "all" | "seller";
};

export type { TSaleCardProps };
