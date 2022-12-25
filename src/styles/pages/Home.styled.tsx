import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 0 0rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  & > * {
    flex: 1;
  }
  .home-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    align-items: flex-start;
    h1 {
      font-size: 3.2rem;
      line-height: 1.2;
    }
    p {
      font-size: 1rem;
      color: lightgray;
    }
  }
  .home-img {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .links-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    margin-top: 0.6rem;
    a {
      text-decoration: none;
      &:hover {
        color: ${({ theme }) => theme.colors.mainOrange};
        text-decoration: underline;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.tab}) {
    flex-direction: column;
    .home-text {
      text-align: center;
      align-items: center;
      h1 {
        font-size: 2.4rem;
      }
    }
    .links-container {
      align-items: center;
      justify-content: center;
    }
  }
`;
