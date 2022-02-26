import React, { forwardRef } from "react";
import * as S from "./styles";
import { SectionProps } from "./types";
import { Container } from "../Container";

export const Section = forwardRef(function Section(
  { children, size = "normal", noContainer, ...containerProps }: SectionProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <S.Section size={size} ref={ref}>
      {noContainer ? (
        children
      ) : (
        <Container {...containerProps}>{children}</Container>
      )}
    </S.Section>
  );
});
