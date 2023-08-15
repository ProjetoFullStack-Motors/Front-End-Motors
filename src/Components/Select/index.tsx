import { TBrandModel } from "../../Providers/ModalContext/@types";
import Option from "./Option/index";
import { forwardRef, ForwardedRef } from "react";
import TSelectProps from "./@types";

const Select = forwardRef(
  (
    { arr, id, itemKey, title, selectValue, callback, ...rest }: TSelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <fieldset>
        <label htmlFor={id}>{title}</label>

        <select
          name={id}
          id={id}
          value={selectValue}
          onChange={callback}
          ref={ref}
          {...rest}
        >
          {arr &&
            arr.map((item) => (
              <Option
                key={
                  itemKey ? String((item as TBrandModel)["id"]) : String(item)
                }
                value={
                  itemKey
                    ? String((item as TBrandModel)[itemKey])
                    : String(item)
                }
              />
            ))}
        </select>
      </fieldset>
    );
  }
);

export default Select;
