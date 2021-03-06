import { motion } from "framer-motion";
import styled from "styled-components";
import { HeadingProps } from "./types";

export const Heading = styled(motion.h2)<HeadingProps>`
  font-size: ${(props) => (props.muted ? "42px" : "64px")};
  margin: ${(props) => (props.noMargin ? "0" : "0 0 1rem 0")};

  @media (max-width: 425px) {
    font-size: 48px;
  }
`;

export const Subheading = styled(motion.h3)<HeadingProps>`
  font-size: ${(props) => (props.muted ? "30px" : "36px")};
  margin: ${(props) => (props.noMargin ? "0" : "0 0 1rem 0")};
  font-weight: ${(props) => (props.muted ? "normal" : "bold")};
  letter-spacing: ${(props) => (props.muted ? "-1px" : "normal")};

  @media (max-width: 425px) {
    font-size: 27px;
  }
`;

export const MinorHeading = styled(motion.h3)<HeadingProps>`
  font-size: 24px;
  margin: ${(props) => (props.noMargin ? "0" : "0 0 1rem 0")};
  color: ${(props) => props.theme.colors.tertiary};

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
