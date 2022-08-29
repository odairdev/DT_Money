import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background-color: ${(props) => props.theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const NewTransactionButton = styled.button`
  background-color: ${(props) => props.theme["green-500"]};
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
    transition: 0.2s;
  }
`;
