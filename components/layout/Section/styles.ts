import styled from "styled-components";
import { StyledSectionProps } from "./types";

export const Section = styled.section<StyledSectionProps>`
  min-height: ${(props) => (props.size === "big" ? "100vh" : "75vh")};
  display: flex;
  align-items: center;
  height: 100%;
`;
