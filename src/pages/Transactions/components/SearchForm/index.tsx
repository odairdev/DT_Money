import { SearchButton, SearchFormContainer } from "./styles";
import { MagnifyingGlass} from 'phosphor-react'
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactions } from "../../../../hooks/useTransactions";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {register, handleSubmit, formState: {isSubmitting}} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })
  const { fetchTransactions } = useTransactions()

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque uma transação" {...register('query')}/>
      <SearchButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </SearchButton>
    </SearchFormContainer >
  )
} 