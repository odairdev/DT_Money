import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { TransactionContextProvider } from "./contexts/TransactionsContext";

import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <TransactionContextProvider>
          <Transactions />
        </TransactionContextProvider>

        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
