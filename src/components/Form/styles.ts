import styled from "styled-components";

export const FieldSetComp = styled.fieldset`
  height: 100%;
  border: none;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.red[200]};
  font-size: ${(props) => props.theme.fontSize.text_xs};
`;
