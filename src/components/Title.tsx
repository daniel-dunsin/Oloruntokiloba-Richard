import React from "react";
import { TitleContainer } from "../styles/components/Title.styled";

const Title = ({ text }: { text: string }) => {
  return (
    <TitleContainer>
      <h1>{text}</h1>
      <div className="underline"></div>
    </TitleContainer>
  );
};

export default Title;
