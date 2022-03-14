import React, { forwardRef } from "react";
import { Container } from "@layout/Container";
import { SectionProps } from "./types";
import * as S from "./styles";

export const Section = forwardRef(function Section(
  {
    children,
    size = "normal",
    buffer,
    noContainer,
    ...containerProps
  }: SectionProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <S.Section {...{ size, ref, buffer }}>
      {noContainer ? (
        children
      ) : (
        <Container {...containerProps}>{children}</Container>
      )}
    </S.Section>
  );
});
