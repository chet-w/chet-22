import styled from "styled-components";

export const Heading = styled.h2`
  font-size: 64px;
  margin: 0 0 1rem 0;
`;

export const Subheading = styled.h3`
  font-size: 36px;
  margin: 0 0 1rem 0;
`;

export const MinorHeading = styled.h3`
  font-size: 24px;
  margin: 0 0 1rem 0;
  color: ${(props) => props.theme.colors.tertiary};
`;
