import styled from "styled-components";
import { Container } from "../Container";
import { StyledSectionProps } from "./types";

export const Section = styled.section<StyledSectionProps>`
  min-height: ${(props) => (props.size === "big" ? "100vh" : "50vh")};
  display: flex;
  align-items: center;
  height: 100%;

  & > ${Container} {
    padding-top: ${(props) => (props.size === "big" ? "0" : "100px")};
  }
`;
