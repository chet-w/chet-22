import { ReactElement } from "react";

export interface SectionProps {
  children?: ReactElement | ReactElement[];
  direction: "vertical" | "horizontal";
  crossAxis?: "center" | "start" | "end";
  mainAxis?: "center" | "start" | "end";
}
