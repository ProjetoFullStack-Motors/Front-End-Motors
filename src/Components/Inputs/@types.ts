import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  errors?: FieldError;
  maxlength?: string;
  callback?: (cepData: string) => Promise<void>;
}
