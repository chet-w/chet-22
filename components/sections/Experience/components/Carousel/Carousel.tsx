import React, { ReactElement, useEffect, useRef } from "react";
import {
  Heading,
  Subheading,
  MinorHeading,
} from "../../../../typography/Headings";
import { CarouselItem, CarouselProps } from "./types";
import * as S from "./styles";
import { useViewPortSize } from "@hooks/useViewPortSize";

export function Carousel(props: CarouselProps): ReactElement {
  const carouselRef = useRef<HTMLDivElement>(null);
  const leftOffset = useRef<number>(0);
  const viewportSize = useViewPortSize();

  useEffect(() => {
    if (typeof window !== "undefined" && carouselRef.current !== null) {
      const sectionOffset =
        carouselRef.current.parentElement?.getBoundingClientRect().left;
      leftOffset.current = sectionOffset || 0;
    }
  }, [carouselRef.current, viewportSize]);

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
          style={{
            marginLeft: index === 0 ? leftOffset.current + "px" : "2rem",
            marginRight:
              index === props.items.length - 1
                ? leftOffset.current + "px"
                : "2rem",
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
