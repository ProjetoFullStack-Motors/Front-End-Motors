import { ForwardedRef, forwardRef } from "react";
import TInputRadioProps from "./@types";
import { StyledInputRadio } from "./style";

const InputRadio = forwardRef(
  (
    { title, label, inputValue, ...rest }: TInputRadioProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledInputRadio>
        <input
          type="radio"
          name={title}
          id={title}
          value={String(inputValue)}
          ref={ref}
          {...rest}
        />
        <label htmlFor={title}>{label}</label>
      </StyledInputRadio>
    );
  }
);

export default InputRadio;
