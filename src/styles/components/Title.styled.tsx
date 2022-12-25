import styled from "styled-components";

export const TitleContainer = styled.div`
  margin-bottom: 1rem;
  h1 {
    font-size: 2rem;
    word-spacing: 6px;
  }
  .underline {
    margin-top: 0.2rem;
    width: 100px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.mainOrange};
  }
`;
