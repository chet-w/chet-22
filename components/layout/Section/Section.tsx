import React from "react";
import * as S from "./styles";
import { SectionProps } from "./types";
import { Container } from "../Container";

export function Section({ children, ...containerProps }: SectionProps) {
  return (
    <S.Section>
      <Container {...containerProps}>{children}</Container>
    </S.Section>
  );
}
