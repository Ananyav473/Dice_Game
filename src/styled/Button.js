import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  height: 4.4rem;
  width: 22rem;
  border-radius: 0.5rem;
  padding: 1rem 1.8rem 1rem 1.8rem;
  gap: 1rem;
  border: none;
  transition: 0.2s background ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px dashed black;
    transition: 0.3s background ease-in;
  }
`;
export const OutLineBtn = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;
