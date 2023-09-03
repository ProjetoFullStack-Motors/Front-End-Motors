import { InputHTMLAttributes } from "react";

type TInputRadioProps = {
  title: string;
  label: string;
  inputValue: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default TInputRadioProps;
