import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 90vw;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0px 0px 6px rgba(46, 46, 46, 0.76);
  border-radius: 4px;
  margin-top: 2rem;
  padding: 3.5rem 2.4rem;
  & > * {
    flex: 1;
  }
  .about-details {
    .skills-section {
      margin-top: 2.4rem;
      .skills-container {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .progress-title {
        margin-bottom: 10px;
        font-size: 1.1rem;
        font-weight: 300;
      }
    }
    .toki-info {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      img {
        width: 150px;
        height: 150px;
      }
      .about-data-container {
        /* font-size: 0.85rem; */
        display: flex;
        flex-direction: column;
        gap: 10px;
        .about-data {
          display: flex;
          gap: 10px;
          align-items: center;
          .question {
            font-weight: bold;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
  .about-toki {
    .about-paragraph {
      margin: 0.5rem 0;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.tab}) {
    flex-direction: column;
    gap: 3rem;
    .about-details {
      .toki-info {
        flex-wrap: wrap;
        align-items: flex-start;
        img {
          width: 120px;
          height: 120px;
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding-left: 1.8rem;
    padding-right: 1.8rem;
  }
`;
