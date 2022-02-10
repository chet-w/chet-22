import React, { ReactElement } from "react";
import Image from "next/image";
import { AvatarProps } from "./types";
import * as S from "./styles";

export function Avatar(props: AvatarProps): ReactElement {
  const sizeOptions = {
    small: 64,
    large: 200,
  };

  return (
    <S.Wrapper>
      <Image
        alt="Chet Davidson Memoji"
        src="/chet.jpg"
        width={sizeOptions[props.size]}
        height={sizeOptions[props.size]}
      />
    </S.Wrapper>
  );
}
