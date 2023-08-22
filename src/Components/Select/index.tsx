import { TBrandModel } from "../../Providers/CarContext/@types";
import Option from "./Option/index";
import { forwardRef, ForwardedRef } from "react";
import TSelectProps from "./@types";
import { StyledSelect } from "./style";

const Select = forwardRef(
  (
    {
      arr,
      id,
      itemKey,
      title,
      selectValue,
      callback,
      isModel,
      ...rest
    }: TSelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <StyledSelect>
        <label htmlFor={id}>{title}</label>

        <select
          name={id}
          id={id}
          value={selectValue}
          onChange={callback}
          ref={ref}
          {...rest}
        >
          {isModel ? <Option value="Selecione um modelo" /> : null}
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
      </StyledSelect>
    );
  }
);

export default Select;
