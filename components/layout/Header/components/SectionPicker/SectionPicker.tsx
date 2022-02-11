import React, { ReactElement } from "react";
import { CaretCircleDown } from "phosphor-react";
import { MinorHeading } from "../../../../typography/Headings";
import * as S from "./styles";

export function SectionPicker(): ReactElement {
  const currentSection = "About";

  return (
    <S.Wrapper>
      <S.CurrentSection>
        <S.DropdownButton>
          <MinorHeading noMargin>{currentSection}</MinorHeading>
          <CaretCircleDown size={28} />
        </S.DropdownButton>
      </S.CurrentSection>
    </S.Wrapper>
  );
}
