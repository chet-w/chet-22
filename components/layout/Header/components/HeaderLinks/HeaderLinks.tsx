import React, { ReactElement } from "react";
import { GithubLogo, LinkedinLogo, Envelope } from "phosphor-react";
import * as S from "./styles";

export function HeaderLinks(): ReactElement {
  return (
    <S.HeaderLinks>
      <S.HeaderLink>
        <S.Link href="#" target="_blank">
          <GithubLogo size={32} />
        </S.Link>
      </S.HeaderLink>
      <S.HeaderLink>
        <S.Link href="#" target="_blank">
          <Envelope size={32} />
        </S.Link>
      </S.HeaderLink>
      <S.HeaderLink>
        <S.Link href="#" target="_blank">
          <LinkedinLogo size={32} />
        </S.Link>
      </S.HeaderLink>
    </S.HeaderLinks>
  );
}
