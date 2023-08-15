import { ChangeEvent } from "react";
import { TBrandModel } from "../../Providers/ModalContext/@types";

type TSelectProps = {
  arr: string[] | TBrandModel[];
  id: string;
  itemKey?: keyof TBrandModel;
  title: string;
  selectValue: string;
  callback: (
    event: ChangeEvent<HTMLSelectElement>
  ) =>
    | void
    | React.Dispatch<React.SetStateAction<TBrandModel | null>>
    | Promise<void>;
} & React.HTMLProps<HTMLSelectElement>;

export default TSelectProps;
