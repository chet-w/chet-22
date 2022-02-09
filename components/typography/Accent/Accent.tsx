import React, { ReactElement } from "react";
import { AccentProps } from "./types";
import * as S from "./styles";

export function Accent({ children }: AccentProps): ReactElement {
  return <S.Accent>{children}</S.Accent>;
}
