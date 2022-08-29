import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={Logo} alt="Ignite Logo" />
          <h1>DT Money</h1>
        </div>

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
