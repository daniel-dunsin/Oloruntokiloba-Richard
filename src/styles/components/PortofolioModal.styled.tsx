import styled from "styled-components";

export const PortfolioModalContainer = styled.section`
  display: flex;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);

  .close-icon {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 23px;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    color: white;
    background-color: ${({ theme }) => theme.colors.mainOrange};
  }
  & > div {
    width: 100%;
    position: relative;
    .arrow-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 23px;
      color: white;
      background-color: ${({ theme }) => theme.colors.mainOrange};
      &.right {
        right: 30px;
      }
      &.left {
        left: 30px;
      }
    }
    .image-container {
      width: 90vw;
      max-width: 500px;
      height: 90vh;
      max-height: 500px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 4px;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.tab}) {
    & > div {
      .image-container {
        max-width: 400px;
        max-height: 400px;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.mobile}) {
    & > div {
      .image-container {
        max-width: 300px;
        max-height: 300px;
      }
    }
  }
`;
