import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 35px;
  border: 1px solid;
  border-left: none;
  border-right: none;
  width: 100%;
  cursor: pointer;
  
  & + & {
    border-top: none;
  }
  
  .main-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      width: 100%;
      margin-left: 8px;
    }
  }
  
  
  span#error {
    color: ${({ theme }) => theme.colors.red.main};
    font-weight: 500;
    user-select: none;
    font-size: 12px;
  }
`;

export const InputStyled = styled.input`
  color: #ddd;
  border: none;
  outline: 0;
`;