import styled from "styled-components";

export const LayoutContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBlack};
  padding: 15px;
  min-height: 100vh;
  & > div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
