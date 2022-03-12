import { ReactElement, useEffect, useRef, useState } from "react";
import { useElementScroll } from "framer-motion";
import { CoverflowProps } from "./types";
import { Cover } from "../Cover";
import * as S from "./styles";
import * as Helpers from "./helpers";

export function Coverflow(props: CoverflowProps): ReactElement {
  const ScrollerRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offsetDistance, setOffsetDistance] = useState(0);
  const { scrollXProgress } = useElementScroll(ScrollerRef);

  useEffect(() => {
    scrollXProgress.set(50);
    scrollXProgress.onChange((distance) => setScrollPercentage(distance));
  }, []);

  useEffect(() => {
    setOffsetDistance(
      Helpers.determineOffsetDistance(activeIndex, props.items.length)
    );
  }, [activeIndex]);

  useEffect(() => {
    setActiveIndex(
      Helpers.determineActiveIndex(props.items.length, scrollPercentage)
    );
  }, [scrollPercentage, scrollXProgress]);

  return (
    <S.Wrapper ref={ScrollerRef}>
      <S.ScrollContent>
        <S.StickyContent offset={offsetDistance}>
          {props.items.map((item, index) => (
            <Cover
              key={`Coverflow-item-${index}`}
              {...{ item, index, listLength: props.items.length, activeIndex }}
            />
          ))}
        </S.StickyContent>
      </S.ScrollContent>
    </S.Wrapper>
  );
}
