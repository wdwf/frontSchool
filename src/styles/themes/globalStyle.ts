import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "PoppinsRegular";
    list-style: none;
  }
  
  html, body #root {
    min-height: 100vh;
    font-size: 14px;
  }
`;
