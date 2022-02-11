import React from "react";
import * as S from "./styles";
import { SectionProps } from "./types";
import { Container } from "../Container";

export function Section({
  children,
  size = "normal",
  ...containerProps
}: SectionProps) {
  return (
    <S.Section size={size}>
      <Container {...containerProps}>{children}</Container>
    </S.Section>
  );
}
