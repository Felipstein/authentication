import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.95);
  font-size: 20px;
  font-weight: 500;
  padding: 15px 25px;
  border-radius: 5px;
  width: 30vw;
  max-width: 580px;
  min-width: 340px;
  text-align: center;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border: 2px solid transparent;
  transition-property: background-color, border-color, transform;
  transition: 0.125s ease-in-out;

  & + & {
    margin-top: 8px;
  }

  &:hover {
    border-color: #fff;
    transform: scale(105%);
  }

  &:active {
    background-color: #000;
  }

  .icon-container {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }
`;