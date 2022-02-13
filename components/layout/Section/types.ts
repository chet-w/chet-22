import { ReactElement, RefObject } from "react";

export interface SectionProps extends StyledSectionProps {
  children?: ReactElement | ReactElement[];
  direction: "vertical" | "horizontal";
  crossAxis?: "center" | "start" | "end";
  mainAxis?: "center" | "start" | "end";
}

export interface StyledSectionProps {
  size?: "normal" | "big";
}
