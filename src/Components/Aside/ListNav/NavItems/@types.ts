import { TSaleProps } from "../../../../Providers/CarContext/@types";

type TNavItemProps = {
  title: string | number;
  itemKey: keyof TSaleProps;
};

export type { TNavItemProps };
