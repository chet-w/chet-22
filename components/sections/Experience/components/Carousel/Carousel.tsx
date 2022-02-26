import React, {
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import {
  Heading,
  Subheading,
  MinorHeading,
} from "../../../../typography/Headings";
import { CarouselItem, CarouselProps } from "./types";
import * as S from "./styles";
import { Paragraph } from "components/typography/Paragraph";

export function Carousel(props: CarouselProps): ReactElement {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselItems = useRef<any>(null);
  const [leftOffset, setLeftOffset] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  function handleResize() {
    const sectionOffset =
      carouselRef.current?.previousElementSibling!.getBoundingClientRect().left;
    setLeftOffset(sectionOffset || 0);
  }

  function handleScroll(event: Event) {
    if (carouselItems.current) {
      const xCoords: { node: HTMLDivElement; x: number }[] =
        carouselItems.current.map((item: HTMLDivElement) => ({
          node: item,
          x: item.getBoundingClientRect().x,
        }));
      const currentIndex = xCoords.findIndex(({ x }) => x > 0);
      setCurrentItemIndex(currentIndex);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
      carouselItems.current = Array.from(carouselRef.current.childNodes);

      return () =>
        carouselRef.current!.removeEventListener("scroll", handleScroll);
    }
  }, []);

  function getDates(item: CarouselItem): string {
    if (!item.endDate) {
      return item.startDate;
    }
    return [item.startDate, item.endDate].join(" - ");
  }

  return (
    <Fragment>
      <S.Wrapper ref={carouselRef}>
        {props.items.map((item, index) => (
          <S.Item
            key={`experience-carousel-${JSON.stringify(item)}`}
            style={{
              marginLeft: index === 0 ? `calc(${leftOffset}px + 4rem)` : "2rem",
              marginRight:
                index === props.items.length - 1
                  ? `calc(${leftOffset}px + 6rem)`
                  : "2rem",
            }}
          >
            <Heading muted>{item.title}</Heading>
            <Subheading muted>{item.position}</Subheading>
            <MinorHeading as="h4">{getDates(item)}</MinorHeading>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              excepturi consequatur perferendis dolorem voluptatum numquam et
              suscipit, atque laudantium incidunt hic? Corrupti sequi voluptate
              eligendi magni earum minima qui voluptates.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              excepturi consequatur perferendis dolorem voluptatum numquam et
              suscipit, atque laudantium incidunt hic? Corrupti sequi voluptate
              eligendi magni earum minima qui voluptates.
            </Paragraph>
          </S.Item>
        ))}
        <S.IconWrapper>
          {props.items
            .map(({ icon }) => icon)
            .map((icon) => (
              <S.Icon>
                <Image src={icon} width={150} height={150} />
              </S.Icon>
            ))}
        </S.IconWrapper>
      </S.Wrapper>
    </Fragment>
  );
}
