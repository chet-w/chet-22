import styled from "styled-components";
import { Container } from "@layout/Container";
import { StyledSectionProps } from "./types";

export const Section = styled.section<StyledSectionProps>`
  min-height: ${(props) => (props.size === "big" ? "100vh" : "70vh")};
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  padding-bottom: ${(props) => (props.buffer ? "100vh" : 0)};

  & > ${Container} {
    padding-top: ${(props) => (props.size === "big" ? "0" : "100px")};
  }
`;
