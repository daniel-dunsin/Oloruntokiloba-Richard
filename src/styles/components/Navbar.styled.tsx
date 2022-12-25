import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  .navbar-brand {
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 5px;
    a {
      font-size: 2.4rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.mainOrange};
    }
  }
  .menu-icon {
    display: none;
  }
  .links-container {
    margin-left: auto;
    .links {
      display: flex;
      align-items: center;
      gap: 15px;
      list-style: none;
      .close-icon,
      .credits {
        display: none;
      }
      li {
        font-size: 17px;
        a {
          text-decoration: none;
          &:hover {
            color: ${({ theme }) => theme.colors.mainOrange};
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.tab}) {
    .menu-icon {
      display: block;
      font-size: 24px;
    }
    .links-container {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: ${({ theme }) => theme.colors.mainGray};
      transform: translateX(-100%);
      transition: all 0.4s;
      &.nav-open {
        transform: translateX(0) !important;
      }
      .links {
        flex-direction: column;
        gap: 0rem;
        align-items: flex-start;
        padding-top: 6rem;
        .credits {
          display: block;
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 18px;
          cursor: pointer;
        }
        .close-icon {
          display: block;
          position: absolute;
          top: 30px;
          right: 30px;
          font-size: 24px;
        }
        li {
          width: 100%;
          a {
            padding: 1.1rem;
            width: 100%;
            display: block;
            &:hover {
              background-color: ${({ theme }) => theme.colors.mainOrange};
              color: white;
            }
          }
        }
      }
    }
  }
`;
