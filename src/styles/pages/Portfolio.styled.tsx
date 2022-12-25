import styled from "styled-components";

export const PortfolioContainer = styled.section`
  padding: 1rem;
  .filter-btns-container {
    margin-top: 2.3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    .filter-btn {
      all: unset;
      border: none;
      border-radius: 4px;
      background-color: #8b1c00;
      color: white;
      transition: 0.3s;
      min-width: 100px;
      text-align: center;
      padding: 0.8rem;
      &.selected-filter-btn {
        background-color: #fa3402;
      }
    }
  }
  .projects-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    .single-project {
      flex: 1;
      max-height: 300px;
      border-radius: 4px;
      overflow: hidden;
      .image-container {
        width: 100%;
        height: 100%;
        position: relative;
        img {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .hover-container {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 3;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          background-color: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: all 0.3s;
          div {
            cursor: pointer;
            width: 100%;
            padding: 1rem;
            display: flex;
            background-color: ${({ theme }) => theme.colors.mainOrange};
            justify-content: center;
            color: white;
            gap: 1rem;
            align-items: center;
            font-size: 17px;
            transform: translateY(100%);
            transition: all 0.3s;
          }

          &:hover {
            opacity: 1;
            div {
              transform: translateY(0);
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.tab}) {
    .projects-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.mobile}) {
    .projects-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    .projects-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
