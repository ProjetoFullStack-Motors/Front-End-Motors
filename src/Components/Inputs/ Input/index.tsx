import { forwardRef, ForwardedRef } from "react";
import { IInputProps } from "../@types";

const Input = forwardRef(
  (
    { id, label, errors, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <fieldset>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...rest} ref={ref} />
        <span>{errors}</span>
      </fieldset>
    );
  }
);

export default Input;
