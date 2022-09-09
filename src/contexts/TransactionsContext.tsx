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
}

export const TransactionContext = createContext({} as TransactionContextData)

interface TransactionContextProviderProps { 
  children: ReactNode;
}

export function TransactionContextProvider({children}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const loadTransactions = async () => {
      const response = await fetch("http://localhost:3333/transactions");
      const data = await response.json();

      setTransactions(data);
    };

    loadTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{transactions}}>
      {children}
    </TransactionContext.Provider>
  )
}