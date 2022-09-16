import styled, { css } from "styled-components";

const buttonSide = {
  right: css`
    border-right: 1px solid;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    `,
  left: css`
    border-left: 1px solid;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  `,
};

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 212.69px;
  height: 47px;

  padding: 10px 80px;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
  ${({ side }) => buttonSide[side] || buttonSide.right}
  border-color: ${({ theme }) => theme.colors.primary.background};
  outline: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary.background};
  text-transform: uppercase;
  transition-property: background-color, border-color, color;
  transition: 0.1s ease-in-out;
  cursor: pointer;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.primary.light};
    border-color: ${({ theme }) => theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.secondary.background};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.lighter};
    border-color: ${({ theme }) => theme.colors.primary.lighter};
  }

  &:disabled {
    cursor: default;
    background-color: rgba(255, 255, 255, 0.3);
    border-color: darkgray;
    color: lightgray;
  }
`;