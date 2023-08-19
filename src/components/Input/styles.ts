import styled from "styled-components";

export const FieldInput = styled.div`
  width: 100%;
`;

export const Flex = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  height: 32px;
  width: 80%;
  text-align: left;
  cursor: text;
  z-index: 2;
  top: 22px;
  left: 16px;
  color: ${(props) => props.theme.colors.gray[500]};
  background-color: ${(props) => props.theme.colors.white[100]};
  transition: all 0.3s ease;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  min-height: 64px;
  margin-top: 6px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray[200]};
  padding: 0 16px;
  padding-top: 15px;
  display: block;
  transition: all 0.1s ease;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 32px white inset;
  }

  &:is(:focus, :valid) + ${Label} {
    top: 11px;
    font-size: 0.8rem;
    background-color: transparent;
  }

  &:is(:focus) {
    border-color: ${(props) => props.theme.colors.black[200]};
    background-color: #fff;
  }
`;
