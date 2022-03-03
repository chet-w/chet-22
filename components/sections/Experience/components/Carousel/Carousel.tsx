import React, {
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { Heading, Subheading, MinorHeading } from "@typography/Headings";
import { Paragraph } from "@typography/Paragraph";
import { CarouselItem, CarouselProps } from "./types";
import * as S from "./styles";

export function Carousel(props: CarouselProps): ReactElement {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [leftOffset, setLeftOffset] = useState(0);

  function handleResize() {
    const sectionOffset =
      carouselRef.current?.previousElementSibling!.getBoundingClientRect().left;
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
            <div>
              <Heading muted>{item.title}</Heading>
              <Subheading muted>{item.position}</Subheading>
              <MinorHeading as="h4">{getDates(item)}</MinorHeading>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                excepturi consequatur perferendis dolorem voluptatum numquam et
                suscipit, atque laudantium incidunt hic? Corrupti sequi
                voluptate eligendi magni earum minima qui voluptates.
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                excepturi consequatur perferendis dolorem voluptatum numquam et
                suscipit, atque laudantium incidunt hic? Corrupti sequi
                voluptate eligendi magni earum minima qui voluptates.
              </Paragraph>
            </div>
            <Image src={item.icon} width={150} height={150} />
          </S.Item>
        ))}
      </S.Wrapper>
    </Fragment>
  );
}
