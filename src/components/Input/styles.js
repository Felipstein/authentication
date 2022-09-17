import styled from "styled-components";

export const Container = styled.div`
  padding: 15px 35px;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary.lighter};
  transition-property: border-color, background-color, color;
  transition: 0.16s ease-in-out;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: green;

  & + & {
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

  input {
    margin-left: 10px;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.red.main};
    background-color: black;
  }
`;

export const InputStyled = styled.input`
  padding: 0;
  width: 70%;
  color: #ddd;
  border: none;
  outline: 0;
  background-color: red;

`;