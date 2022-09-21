import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: ${({ side }) => side === 'right' ? 'row' : 'row-reverse'};
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.primary.background};
  color: ${({ theme }) => theme.colors.primary.text};

  @media screen and (max-height: 870px) {
    footer {
      span, strong {
        font-size: 0.8em;
      }
    }
  }

  ${({ side }) => side === 'left' && css`
    @media screen and (max-height: 800px) {
      form {
        position: relative;
        bottom: 50px;
      }
      
      h2 {
        position: relative;
        bottom: 50px;  
      }
    }
  `}

`;

export const AboutContainer = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    display: flex;
    flex-direction: column;
    align-items: ${({ side }) => side === 'right' ? 'flex-end' : 'flex-start'};

    h1.title {
      margin-top: 15%;
      ${({ side }) => side === 'right' ? (
        css`
          margin-right: 70px;
        `
      ) : (
        css`
          margin-left: 70px;
          `
      )};
      width: 65%;
      text-align: ${({ side }) => side === 'right' ? 'end' : 'start'};
    }
  }
  
  footer {
    display: flex;
    flex-direction: column;
    margin-bottom: 75px;
    font-size: 0.95em;
    width: 50%;
    
    ${({ side }) => side === 'right' ? (
      css`
        margin-right: 70px;
        align-self: flex-end;
        text-align: end;
        `
    ) : (
      css`
        margin-left: 70px;
        align-self: flex-start;
        text-align: start;
      `
    )};

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

      ${({ side }) => side === 'right' ? (
        css`
          margin-left: 50px;
          align-self: flex-start;
          `
      ) : (
        css`
          margin-right: 50px;
          align-self: flex-end;
        `
      )}
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
      }

      .actions {
        margin-top: 30px;
        display: flex;
        flex-direction: ${({ side }) => side === 'right' ? 'row' : 'row-reverse'};
        justify-content: ${({ side }) => side === 'right' ? 'flex-start' : 'end'};
        align-items: center;
        width: 100%;

        a.navigate-btn {
          text-decoration: none;
          ${({ side }) => side === 'right' ? (
            css`
              margin-left: 35px;
            `
          ) : (
            css`
              margin-right: 35px;
            `
          )};
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
    align-self: ${({ side }) => side === 'right' ? 'flex-start' : 'flex-end'};
    display: flex;
    flex-direction: column;
    ${({ side }) => side === 'right' ? (
      css`
        align-items: flex-start;
        margin-left: 70px;
        `
    ) : (
      css`
        align-items: flex-end;
        margin-right: 70px;
      `
    )}
    margin-bottom: 40px;
    font-size: 0.95em;
    width: 50%;

    strong {
      font-weight: 500;
      margin-bottom: 10px;
    }

    span {
      text-align: ${({ side }) => side === 'right' ? 'start' : 'end'};
    }

    nav {
      display: flex;
      flex-direction: row;
      justify-content: ${({ side }) => side === 'right' ? 'flex-start' : 'flex-end'};
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