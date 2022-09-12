import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  category: string;
  description: string;
  price: number;
  type: "income" | "outcome";
  createdAt: string;
}

interface TransactionContextData {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

export const TransactionContext = createContext({} as TransactionContextData)

interface TransactionContextProviderProps { 
  children: ReactNode;
}

export function TransactionContextProvider({children}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3333/transactions")

    if(query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json();

    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{transactions, fetchTransactions}}>
      {children}
    </TransactionContext.Provider>
  )
}