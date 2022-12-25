import React from "react";
import { ProgressBarStyled } from "../styles/components/ProgressBar.styled";
const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <ProgressBarStyled>
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </ProgressBarStyled>
  );
};

export default ProgressBar;
