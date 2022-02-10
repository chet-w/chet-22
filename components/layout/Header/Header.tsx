import React, { ReactElement } from "react";
import { Container } from "../Container";
import { Avatar } from "../../shared/Avatar";
import { NameBanner } from "../../shared/NameBanner";
import { Subheading } from "./../../typography/Headings";
import { SectionPicker } from "./components";
import * as S from "./styles";

export function Header(): ReactElement {
  return (
    <S.Header>
      <Container direction="horizontal" crossAxis="center">
        <Avatar size="small" />
        <Subheading noMargin>
          <NameBanner />
        </Subheading>
        <SectionPicker />
      </Container>
    </S.Header>
  );
}
