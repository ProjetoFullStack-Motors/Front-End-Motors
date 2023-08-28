import { ChangeEvent } from "react";
import { TBrandModel } from "../../Providers/CarContext/@types";

type TSelectProps = {
  arr: string[] | TBrandModel[];
  id: string;
  itemKey?: keyof TBrandModel;
  title: string;
  selectValue: string;
  isModel?: boolean;
  callback: (
    event: ChangeEvent<HTMLSelectElement>
  ) =>
    | void
    | React.Dispatch<React.SetStateAction<TBrandModel | null>>
    | Promise<void>;
} & React.HTMLProps<HTMLSelectElement>;

export default TSelectProps;
