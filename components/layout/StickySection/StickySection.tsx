import React, { forwardRef, ReactElement } from "react";
import { Container } from "@layout/Container";
import { StickySectionProps } from "./types";
import * as S from "./styles";

export const StickySection = forwardRef(function StickySection(
  props: StickySectionProps,
  sectionRef: React.ForwardedRef<HTMLDivElement>
): ReactElement {
  return (
    <S.Container ref={sectionRef}>
      <S.StickySection>
        <S.StickyContent initial={props.initial}>
          <Container direction="vertical">{props.children}</Container>
        </S.StickyContent>
      </S.StickySection>
      <S.Buffer />
    </S.Container>
  );
});
