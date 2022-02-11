import styled from "styled-components";
import { HeadingProps } from "./types";

export const Heading = styled.h2<HeadingProps>`
  font-size: 64px;
  margin: ${(props) => (props.noMargin ? "0" : "0 0 1rem 0")};
`;

export const Subheading = styled.h3<HeadingProps>`
  font-size: 36px;
  margin: ${(props) => (props.noMargin ? "0" : "0 0 1rem 0")};
`;

export const MinorHeading = styled.h3<HeadingProps>`
  font-size: 24px;
  margin: ${(props) => (props.noMargin ? "0" : "0 0 1rem 0")};
  color: ${(props) => props.theme.colors.tertiary};
`;
