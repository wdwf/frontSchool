import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default";
import { ReactNode } from "react";

interface ProviderInitProps {
  children: ReactNode;
}

const ProviderInit = ({ children }: ProviderInitProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ProviderInit;
