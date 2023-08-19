import { FC, ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "warning" | "cancel" | "confirm" | "disabled";
}

export const ButtonAction: FC<ButtonActionProps> = ({
  children,
  onClick,
  variant = "default",
  ...rest
}) => {
  return (
    <S.ButtonComponent onClick={onClick} variant={variant} {...rest}>
      {children}
    </S.ButtonComponent>
  );
};
