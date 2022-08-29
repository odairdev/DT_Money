import { SearchButton, SearchFormContainer } from "./styles";
import { MagnifyingGlass} from 'phosphor-react'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transação"/>
      <SearchButton>
        <MagnifyingGlass size={20} /> Buscar
      </SearchButton>
    </SearchFormContainer >
  )
}