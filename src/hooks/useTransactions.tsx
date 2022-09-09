import { useContext } from "react"
import { TransactionContext } from "../contexts/TransactionsContext"

export function useTransactions() {
  const context = useContext(TransactionContext)

  if(!context) {
    throw new Error('Context error: Check context provider')
  }

  return context;
}