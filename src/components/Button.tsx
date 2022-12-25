import React from "react";
import { ButtonStyled } from "../styles/components/Button.styled";

const Button = ({ text }: { text: string }) => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
