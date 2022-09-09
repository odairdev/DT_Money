import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from 'phosphor-react'
import { useTransactions } from "../../hooks/useTransactions";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
  const { transactions } = useTransactions()

  const balance = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'income') {
      acc.income += transaction.price
    } else if(transaction.type === 'outcome') {
      acc.outcome += transaction.price
    }

    acc.total = acc.income - acc.outcome

    return acc
  }, {
    income: 0,
    outcome: 0,
    total: 0
  })

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        <strong>{priceFormatter.format(balance.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>
        <strong>{priceFormatter.format(balance.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>{priceFormatter.format(balance.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}