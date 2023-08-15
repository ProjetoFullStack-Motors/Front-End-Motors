import { useState } from "react";
import { TBrandModel } from "../../Providers/ModalContext/@types";
import Option from "./Option/index";

type TSelectProps = {
  arr: string[] | TBrandModel[];
  id: string;
  itemKey?: keyof TBrandModel;
  title: string;
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
} & React.HTMLProps<HTMLSelectElement>;

const Select = ({
  arr,
  id,
  itemKey,
  title,
  selectValue,
  setSelectValue,
}: TSelectProps) => {
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectValue(value);
  };

  return (
    <fieldset>
      <label htmlFor={id}>{title}</label>
      <select name={id} id={id} value={selectValue} onChange={selectChange}>
        {arr &&
          arr.map((item) => (
            <Option
              key={itemKey ? String((item as TBrandModel)["id"]) : String(item)}
              value={
                itemKey ? String((item as TBrandModel)[itemKey]) : String(item)
              }
            />
          ))}
      </select>
    </fieldset>
  );
};

export default Select;
