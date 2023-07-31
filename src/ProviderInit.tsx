import { ThemeProvider } from "styled-components";
import lightTheme from "./styles/themes/default";
import { ReactNode } from "react";

interface ProviderInitProps {
  children: ReactNode;
}

const ProviderInit = ({ children }: ProviderInitProps) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default ProviderInit;
