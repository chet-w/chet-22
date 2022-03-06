import { ReactElement, useEffect, useRef, useState } from "react";
import { CoverflowProps } from "./types";
import { Cover } from "../Cover";
import * as S from "./styles";
import { useElementScroll } from "framer-motion";

export function Coverflow(props: CoverflowProps): ReactElement {
  const ScrollerRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { scrollXProgress } = useElementScroll(ScrollerRef);

  useEffect(() => {
    scrollXProgress.set(50);
    scrollXProgress.onChange((distance) => setScrollPercentage(distance));
  }, []);

  useEffect(() => {
    const index = Math.ceil(props.items.length * scrollPercentage) - 1;
    const adjusted = index > -1 ? index : 0;
    setActiveIndex(adjusted);
  }, [scrollPercentage, scrollXProgress]);

  return (
    <S.Wrapper ref={ScrollerRef}>
      <S.ScrollContent>
        <S.StickyContent>
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
