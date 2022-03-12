import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { MinorHeading } from "@typography/Headings";
import { CoverProps } from "./types";
import * as S from "./styles";
import * as Helpers from "./helpers";

export function Cover(props: CoverProps): ReactElement {
  const [level, setLevel] = useState(1);
  const [centerOfList, setCenterOfList] = useState(1);
  const [baseRotation, setBaseRotation] = useState(1);
  const [absoluteRotation, setAbsoluteRotation] = useState(1);
  const [absoluteTranslation, setAbsoluteTranslation] = useState(1);
  const [scale, setScale] = useState(1);
  const [zIndex, setZIndex] = useState(500);

  useEffect(() => {
    setCenterOfList(props.activeIndex);
    setLevel(Helpers.determineLevel(props.index, centerOfList));
    setBaseRotation(Helpers.determineBaseRotation(props.index, centerOfList));
    setAbsoluteRotation(Helpers.determineAbsoluteRotation(level, baseRotation));
    setAbsoluteTranslation(Helpers.determineAbsoluteTranslation(level));
    setScale(Helpers.determineScale(level));
    setZIndex(Helpers.determineZIndex(level));
  }, [
    level,
    centerOfList,
    baseRotation,
    absoluteTranslation,
    scale,
    zIndex,
    props.activeIndex,
  ]);

  return (
    <div
      style={{
        transform: `rotate3d(0, 1, 0, ${absoluteRotation}deg) translateX(${absoluteTranslation}px)  scale(${scale})`,
        position: "relative",
        zIndex,
        opacity: scale,
        transition: "all 0.2s ease",
      }}
    >
      <S.Cover>
        <Image height={200} width={200} src={props.item.icon} />
      </S.Cover>
      <MinorHeading>{level}</MinorHeading>
    </div>
  );
}
