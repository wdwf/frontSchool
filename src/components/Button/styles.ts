import styled, { css } from "styled-components";

interface ButtonActionProps {
  variant?: string;
}

export const ButtonComponent = styled.button<ButtonActionProps>`
  width: 100%;
  min-height: 54px;
  font-size: ${(props) => props.theme.fontSize.text_base};
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  word-wrap: break-word;

  ${({ variant }) =>
    variant === "default" &&
    css`
      background-color: ${(props) => props.theme.colors.purple[400]};
      color: ${(props) => props.theme.colors.white[100]};

      &:hover {
        background-color: ${(props) => props.theme.colors.purple[300]};
      }
    `}

  ${({ variant }) =>
    variant === "warning" &&
    css`
      background-color: ${(props) => props.theme.colors.yellow[100]};
      color: ${(props) => props.theme.colors.black[200]};
    `}

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      background-color: ${(props) => props.theme.colors.red[100]};
      color: ${(props) => props.theme.colors.red[200]};
    `}

  ${({ variant }) =>
    variant === "confirm" &&
    css`
      background-color: ${(props) => props.theme.colors.black[200]};
      color: ${(props) => props.theme.colors.white[100]};
    `}

  ${({ variant }) =>
    variant === "disabled" &&
    css`
      background-color: ${(props) => props.theme.colors.gray[100]};
      color: ${(props) => props.theme.colors.gray[400]};
    `}
`;
