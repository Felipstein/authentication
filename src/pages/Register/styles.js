import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse; // here
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
    align-items: flex-start; // here

    h1.title {
      margin-top: 15%;
      margin-left: 70px; // here
      width: 80%;
      text-align: start; // here
    }
  }
  
  footer {
    align-self: flex-start; // here
    display: flex;
    flex-direction: column;
    text-align: start; // here
    margin-left: 70px; // here
    margin-bottom: 75px;
    font-size: 0.95em;
    width: 50%;

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

export const AuthContainer = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  background-color: ${({ theme }) => theme.colors.secondary.background};
  
  color: ${({ theme }) => theme.colors.secondary.text};

  main {
    margin-top: 28%;
    display: flex;
    flex-direction: column;

    h2 {
      font-weight: 200;
      margin-right: 50px; // here
      align-self: flex-end; // here added
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
        flex-direction: row-reverse; // here
        justify-content: end; // here
        align-items: center;
        width: 100%;
        
        button.forgot-btn {
          margin-right: 35px; // here
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
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end; // here
    margin-right: 70px; // here
    margin-bottom: 40px;
    font-size: 0.95em;
    width: 50%;

    strong {
      font-weight: 500;
      margin-bottom: 10px;
    }

    span {
      text-align: end; // here
    }

    nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 5px;
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