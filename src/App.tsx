import { StyleSheetManager, ThemeProvider } from "styled-components";
import { Routes } from "./Routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { FetchGitHubContextProvider } from "./hooks/useFetchGitHub";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyleSheetManager shouldForwardProp={(prop) => !prop.startsWith("is")}>
        <GlobalStyle />
        <FetchGitHubContextProvider>
          <Routes />
        </FetchGitHubContextProvider>
      </StyleSheetManager>
    </ThemeProvider>
  );
}

export default App;
