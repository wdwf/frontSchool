import { ComponentProps, forwardRef } from "react";
import { FieldError } from "../Form";
import * as S from "./styles";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, type = "text", ...props },
  ref
) {
  return (
    <S.FieldInput>
      <S.Flex>
        <S.Input
          id={id}
          className="fieldInput"
          type={type}
          ref={ref}
          required
          {...props}
        />
        <S.Label className="fieldLabel" htmlFor={id}>
          {label}
        </S.Label>
      </S.Flex>
      <FieldError name={props.name} />
    </S.FieldInput>
  );
});
