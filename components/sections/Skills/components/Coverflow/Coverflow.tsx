import { ReactElement } from "react";
import { CoverflowProps } from "./types";
import { Cover } from "../Cover";
import * as S from "./styles";

export function Coverflow(props: CoverflowProps): ReactElement {
  return (
    <S.Wrapper>
      {props.items.map((item, index) => (
        <Cover {...{ item, index, listLength: props.items.length }} />
      ))}
    </S.Wrapper>
  );
}
