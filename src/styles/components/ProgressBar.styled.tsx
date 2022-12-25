import styled from "styled-components";

export const ProgressBarStyled = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.mainGray};
  position: relative;
  .progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.mainOrange};
  }
`;
