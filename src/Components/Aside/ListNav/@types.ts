import { TSaleProps } from "../../../Providers/CarContext/@types";

type TListNavProps = {
  saleKey: keyof TSaleProps;
  name: string;
};

export default TListNavProps;
