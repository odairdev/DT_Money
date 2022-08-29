import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";

import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Transactions />

        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
