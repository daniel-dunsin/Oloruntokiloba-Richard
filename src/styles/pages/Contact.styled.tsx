import styled from "styled-components";

export const ContactContainer = styled.section`
  header {
    div {
      margin-bottom: 10px;
    }
    p {
      span {
        vertical-align: middle;
        color: ${({ theme }) => theme.colors.mainOrange};
      }
    }
  }
  .contacts-container {
    margin-top: 1.4rem;
    margin-bottom: 1rem;
    .contact-details {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin-bottom: 2rem;
      .single-contact-detail {
        padding: 1rem;
        border-radius: 4px;
        background-color: #242323;
        display: flex;
        gap: 10px;
        align-items: flex-start;
        .icon-container {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.mainOrange};
          display: flex;
          font-size: 1.2rem;
          justify-content: center;
          align-items: center;
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          h3 {
            font-size: 1.1rem;
            color: #e0e0e0;
          }
          p {
            color: white;
            font-size: 1rem;
          }
          .social-icons-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
            font-size: 1.2rem;
          }
        }
      }
    }
    .inputs-container {
      padding: 1rem;
      border-radius: 4px;
      border: 2px solid lightgray;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      .input {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        input,
        textarea {
          width: 100%;
          background-color: ${({ theme }) => theme.colors.mainGray};
          border: none;
          color: white;
          border: 1.5px solid transparent;
          outline: none;
          padding: 0.8rem 1.2rem;
          border-radius: 4px;
          &::placeholder {
            color: white;
          }
        }
        textarea {
          width: 100%;
          height: 300px;
          resize: none;
        }
      }

      button {
        padding: 0.8rem 1.2rem;
        border-radius: 4px;
        color: white;
        background-color: ${({ theme }) => theme.colors.mainOrange};
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.tab}) {
    .contacts-container {
      .contact-details {
        grid-template-columns: 1fr;
        .inputs-container {
          width: 100%;
        }
      }
    }
  }
`;
