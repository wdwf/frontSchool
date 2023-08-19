import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "PoppinsRegular";
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }
  
  html, body #root {
    min-height: 100vh;
    font-size: 14px;
    background-color: ${(props) => props.theme.colors.white[100]};
  }
`;
