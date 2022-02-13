import React, { forwardRef } from "react";
import * as S from "./styles";
import { SectionProps } from "./types";
import { Container } from "../Container";

export const Section = forwardRef(function (
  { children, size = "normal", ...containerProps }: SectionProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <S.Section size={size} ref={ref}>
      <Container {...containerProps}>{children}</Container>
    </S.Section>
  );
});
