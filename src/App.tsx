import ProviderInit from "./ProviderInit";
import GlobalFonts from "./assets/fonts/fonts";
import AppRoutes from "./router";
import GlobalStyle from "./styles/themes/globalStyle";

function App() {
  return (
    <ProviderInit>
      <GlobalStyle />
      <GlobalFonts />
      <AppRoutes />
    </ProviderInit>
  );
}

export default App;
