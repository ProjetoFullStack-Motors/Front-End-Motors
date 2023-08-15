import { forwardRef, ForwardedRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IInputProps } from "../@types";
import { StyledDivPassword } from "./style";

const InputPass = forwardRef(
  (
    { id, label, errors, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [typeInput, setTypeInput] = useState("password");

    const changeType = () => {
      if (typeInput === "password") {
        setTypeInput("text");
      } else {
        setTypeInput("password");
      }
    };

    return (
      <fieldset>
        <label htmlFor={id}>{label}</label>
        <StyledDivPassword>
          <input id={id} type={typeInput} {...rest} ref={ref} />
          <button type="button" onClick={changeType}>
            {typeInput === "password" ? <FaEye /> : <FaEyeSlash />}
          </button>
        </StyledDivPassword>
        <span>{errors}</span>
      </fieldset>
    );
  }
);

export default InputPass;
