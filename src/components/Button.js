import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  border: solid 2px transparent;
  background-color: white;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function Button({ children, onClick }) {
  function handleClick() {
    onClick && onClick();
  }
  return <ButtonStyled onClick={handleClick}>{children}</ButtonStyled>;
}
