import { FieldError } from "react-hook-form";

type TTextareaProps = {
  id: string;
  label?: string;
  errors?: FieldError;
} & React.HTMLProps<HTMLTextAreaElement>;

export default TTextareaProps;
