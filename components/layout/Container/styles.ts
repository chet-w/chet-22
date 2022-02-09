import styled from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.div<ContainerProps>`
  max-width: 992px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  height: 100%;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
  align-items: ${({ crossAxis }) => {
    switch (crossAxis) {
      case "start":
        return "flex-start";
      case "center":
        return "center";
      case "end":
        return "flex-end";
      default:
        return "flex-start";
    }
  }};
  justify-content: ${({ mainAxis }) => {
    switch (mainAxis) {
      case "start":
        return "flex-start";
      case "center":
        return "center";
      case "end":
        return "flex-end";
      default:
        return "flex-start";
    }
  }};
`;
