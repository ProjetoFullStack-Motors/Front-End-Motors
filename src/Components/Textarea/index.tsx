import { forwardRef, ForwardedRef } from "react";
import TTextareaProps from "./@types";

const Textarea = forwardRef(
  (
    { id, label, errors, ...rest }: TTextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <fieldset>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} {...rest} ref={ref} />
        {errors ? <span>{errors.message}</span> : null}
      </fieldset>
    );
  }
);

export default Textarea;
