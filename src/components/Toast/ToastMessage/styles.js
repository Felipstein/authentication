import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  font-weight: 500;
  padding: 15px 25px;
  border-radius: 5px;
  width: 30vw;
  max-width: 580px;
  min-width: 340px;
  text-align: center;

  & + & {
    margin-top: 8px;
  }
`;