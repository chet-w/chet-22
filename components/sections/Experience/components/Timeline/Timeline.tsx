import { Fragment, ReactElement, useEffect } from "react";
import Image from "next/image";
import { MinorHeading } from "@typography/Headings";
import { Paragraph } from "@typography/Paragraph";
import { TimelineItem, TimelineProps } from "./types";
import * as S from "./styles";

export function Timeline(props: TimelineProps): ReactElement {
  const items: TimelineItem[] = [
    {
      title: "VUW",
      subtitle: "Bachelor of Science (CompSci)",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus necessitatibus tenetur reprehenderit ratione optio veniam illum itaque fugit dolor. Commodi aliquam laudantium deleniti asperiores modi repellat? Autem, tempora fuga!",
      image: "/experience/vuw.jpg",
      timeframe: ["Mar. 2015", "Nov. 2018"],
    },
    {
      title: "Epi-interactive",
      subtitle: "Full-Stack Developer",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus necessitatibus tenetur reprehenderit ratione optio veniam illum itaque fugit dolor. Commodi aliquam laudantium deleniti asperiores modi repellat? Autem, tempora fuga!",
      image: "/experience/epi-interactive.svg",
      timeframe: ["Aug. 2018", "Nov. 2019"],
    },
    {
      title: "Hnry",
      subtitle: "Front-End Developer",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus necessitatibus tenetur reprehenderit ratione optio veniam illum itaque fugit dolor. Commodi aliquam laudantium deleniti asperiores modi repellat? Autem, tempora fuga!",
      image: "/experience/hnry.png",
      timeframe: ["Nov. 2019", "Jun. 2021"],
    },
    {
      title: "HazardCo",
      subtitle: "Front-End Developer",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus necessitatibus tenetur reprehenderit ratione optio veniam illum itaque fugit dolor. Commodi aliquam laudantium deleniti asperiores modi repellat? Autem, tempora fuga!",
      image: "/experience/hazardco.png",
      timeframe: ["Jul. 2021"],
    },
  ];

  function getTimeRange([start, end]: string[]): string {
    if (!end) {
      return start;
    }
    return [start, end].join(" - ");
  }

  return (
    <div
      style={{
        transform: `translateX(-${props.scrollPercentage}%)`,
        transition: "linear",
        marginTop: "5rem",
      }}
    >
      <S.Timeline></S.Timeline>
      <S.Container>
        {items.map((item, index) => {
          const fraction = 100 / items.length;
          const lowerThreshhold = fraction * index - 0.5 * fraction;
          const upperThreshhold = fraction * index + 0.5 * fraction;
          const isActive =
            props.scrollPercentage >= lowerThreshhold &&
            props.scrollPercentage <= upperThreshhold;

          return (
            <div key={`timeline-item-${index}`}>
              <S.Marker />
              <S.Item
                animate={{
                  scale: isActive ? 1.2 : 1,
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                <S.ImageContainer>
                  <Image src={item.image} width="75" height="75" />
                </S.ImageContainer>
                <div>
                  <MinorHeading>{item.title}</MinorHeading>
                  <strong>{item.subtitle}</strong>
                  <em>{getTimeRange(item.timeframe)}</em>
                  <Paragraph>More details</Paragraph>
                </div>
              </S.Item>
            </div>
          );
        })}
      </S.Container>
    </div>
  );
}
