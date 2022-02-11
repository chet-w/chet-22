import React from "react";
import { Container } from "../Container";
import { Avatar } from "../../shared/Avatar";
import { NameBanner } from "../../shared/NameBanner";
import { Subheading } from "./../../typography/Headings";
import { SectionPicker, HeaderLinks } from "./components";
import * as S from "./styles";
import { useScrollDistance } from "../../../hooks/useScrollDistance";

export function Header() {
  const scrollDistance = useScrollDistance();
  const showHeader =
    typeof window !== "undefined" && scrollDistance > window.screenY * 1.25;

  return showHeader ? (
    <S.Header>
      <Container direction="horizontal" crossAxis="center">
        <Avatar size="small" />
        <Subheading noMargin>
          <NameBanner />
        </Subheading>
        <SectionPicker />
        <HeaderLinks />
      </Container>
    </S.Header>
  ) : null;
}
