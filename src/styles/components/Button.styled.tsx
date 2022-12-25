import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 12px 30px;
  font-size: 1rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainOrange};
  border-radius: 4px;
  border: none;
`;
