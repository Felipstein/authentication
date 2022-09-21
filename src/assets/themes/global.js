import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    body {
      background-color: ${theme.colors.secondary.background};
      color: ${theme.colors.secondary.text};
    }

    body, input, select, button, h1, h2, h3, h4, h5, h6 {
      font-family: ${theme.font};
      font-weight: ${theme.weight};
    }
    
    input, select, button {
      font-size: 16px;
    }
  `}

`;