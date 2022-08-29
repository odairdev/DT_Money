import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  max-width: 1120px;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: "green"
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme['gray-300']};
  }

  strong {
    font-size: 2rem;
    line-height: 1.4;
    display: block;
    margin-top: 0.5rem;
  }

  ${props => props.variant === "green" && css`
    background: ${props.theme["green-700"]}
  `}
`