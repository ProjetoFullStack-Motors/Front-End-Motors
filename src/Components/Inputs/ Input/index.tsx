import { forwardRef, ForwardedRef } from "react";
import { IInputProps } from "../@types";

const Input = forwardRef(
  (
    { id, label, errors, maxlength, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <fieldset>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...rest} ref={ref} />
        {errors ? <span>{errors.message}</span> : null}
      </fieldset>
    );
  }
);

export default Input;
