import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.button<{ isFilter?: boolean; isActive?: boolean }>`
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: ${(props) => (props.isFilter ? "1px solid #00D100" : "none")};
  background-color: ${(props) =>
    props.isActive ? "#00D100" : props.isFilter ? "white" : "#00D100"};
  color: ${(props) =>
    props.isActive ? "white" : props.isFilter ? "#07a807" : "white"};
  font-weight: 500;
  cursor: pointer;

  :hover {
    background-color: ${(props) => (props.isFilter ? "#00D100" : "white")};
    color: ${(props) => (props.isFilter ? "white" : "#07a807")};
    border: 1px solid #00d100;
  }
`;

const Button = ({
  btnText,
  isFilterBtn,
  isActive,
  onClick,
}: {
  btnText?: string;
  isFilterBtn?: boolean;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Wrapper isFilter={isFilterBtn} isActive={isActive} onClick={onClick}>
      {btnText}
    </Wrapper>
  );
};

export default Button;
