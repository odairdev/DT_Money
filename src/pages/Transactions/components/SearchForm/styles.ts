import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    padding: 1rem;
    background-color: ${(props) => props.theme["gray-900"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme["green-300"]};
  padding: 0.875rem 2rem;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme["green-300"]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    transition: 0.2s;
    background-color: ${(props) => props.theme["green-500"]};
    border: 1px solid ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};
  }
`;
