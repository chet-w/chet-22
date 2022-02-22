import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  Heading,
  Subheading,
  MinorHeading,
} from "../../../../typography/Headings";
import { CarouselItem, CarouselProps } from "./types";
import * as S from "./styles";
import { useViewPortSize } from "@hooks/useViewPortSize";
import { ViewportSizeMapping } from "@hooks/useViewPortSize/types";

export function Carousel(props: CarouselProps): ReactElement {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [leftOffset, setLeftOffset] = useState(0);
  const viewportSize = useViewPortSize();

  function handleResize() {
    const sectionOffset =
      carouselRef.current!.parentElement?.getBoundingClientRect().left;
    console.log({ sectionOffset });
    setLeftOffset(sectionOffset || 0);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  function getDates(item: CarouselItem): string {
    if (!item.endDate) {
      return item.startDate;
    }
    return [item.startDate, item.endDate].join(" - ");
  }

  return (
    <S.Wrapper ref={carouselRef}>
      {props.items.map((item, index) => (
        <S.Item
          key={`experience-carousel-${item}`}
          style={{
            marginLeft: index === 0 ? `calc(${leftOffset}px + 4rem)` : "2rem",
            marginRight:
              index === props.items.length - 1
                ? `calc(${leftOffset}px + 6rem)`
                : "2rem",
            width: ViewportSizeMapping[viewportSize - 1].size + "px",
          }}
        >
          <Heading muted>{item.title}</Heading>
          <Subheading muted>{item.position}</Subheading>
          <MinorHeading as="h4">{getDates(item)}</MinorHeading>
        </S.Item>
      ))}
    </S.Wrapper>
  );
}
