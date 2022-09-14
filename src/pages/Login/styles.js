import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

export const AboutContainer = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1.title {
      margin-top: 15%;
      margin-right: 70px;
      width: 80%;
      text-align: end;
    }
  }
  
  footer {
    display: flex;
    flex-direction: column;
    text-align: end;
    margin-right: 70px;
    margin-bottom: 40px;
    font-size: 0.95em;

    strong {
      font-weight: 500;
      margin-bottom: 10px;
    }

    a {
      text-decoration: none;
      color: #fff;
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
      transition: border-color 0.2s ease-in-out;

      &:hover {
        border-color: ${({ theme }) => theme.colors.primary.lighter};
      }
    }
  }
`;

export const LoginContainer = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  background-color: ${({ theme }) => theme.colors.secondary.background};
  
  color: ${({ theme }) => theme.colors.secondary.text};

  main {
    margin-top: 28%;

    h2 {
      font-weight: 200;
      margin-left: 50px;
    }

    form {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .inputs {
        display: flex;
        flex-direction: column;
        width: 100%;

        input {
          padding: 15px 35px;
          background-color: ${({ theme }) => theme.colors.secondary.light};
          color: #ddd;
          border: none;
          border-top: 1px solid;
          border-bottom: 1px solid;
          border-color: ${({ theme }) => theme.colors.secondary.lighter};
          outline: 0;
          transition-property: border-color, background-color, color;
          transition: 0.16s ease-in-out;

          & + input {
            border-top: none;
          }

          &:hover, &:focus {
            background-color: ${({ theme }) => theme.colors.secondary.lighter};
            border-color: ${({ theme }) => theme.colors.secondary.light};
            color: #fff;
          }

          &::placeholder {
            color: ${({ theme }) => theme.colors.secondary.text};
          }
        }
      }

      .actions {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        button.forgot-btn {
          margin-left: 35px;
          border: none;
          border-bottom: 2px solid transparent;
          background-color: transparent;
          color: ${({ theme }) => theme.colors.secondary.text};
          font-weight: 200;
          transition: border-bottom 0.15s ease-in-out;
          cursor: pointer;

          &:hover {
            border-color: ${({ theme }) => theme.colors.secondary.lighter};
          }
        }
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    margin-left: 70px;
    margin-bottom: 40px;
    font-size: 0.95em;
    width: 50%;

    strong {
      font-weight: 500;
      margin-bottom: 10px;
    }

    a {
      color: ${({ theme }) => theme.colors.primary.background};
      transition: color 0.15s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.light}
      }
    }
  }
`;