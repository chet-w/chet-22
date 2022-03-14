import React, {
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { StickySectionProps } from "./types";
import * as S from "./styles";
import { Container } from "@layout/Container";

export function StickySection(props: StickySectionProps): ReactElement {
  return (
    <S.Container>
      <S.StickySection>
        <S.StickyContent initial={props.initial}>
          <Container direction="vertical">{props.children}</Container>
        </S.StickyContent>
      </S.StickySection>
      <S.Buffer />
    </S.Container>
  );
}
