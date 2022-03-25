import { ReactElement } from "react";

export interface StickySectionProps {
  children: ReactElement | ReactElement[];
  isStuck?: boolean;
  initial?: boolean;
  hideOverflow?: boolean;
}
