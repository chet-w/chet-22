import { Fragment, ReactElement, useEffect } from "react";
import { CaretRight } from "phosphor-react";
import Image from "next/image";
import { MinorHeading } from "@typography/Headings";
import { TimelineItem, TimelineProps } from "./types";
import * as S from "./styles";
import { Theme } from "theme";

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

  function isTimelineItemActive(
    index: number,
    length: number,
    scroll: number
  ): boolean {
    const fraction = 100 / length;
    const lowerThreshhold = fraction * index - 0.5 * fraction;
    const upperThreshhold = fraction * index + 0.5 * fraction;
    return scroll >= lowerThreshhold && scroll <= upperThreshhold;
  }

  return (
    <S.TimelineContainer scrollPercentage={props.scrollPercentage}>
      <S.Timeline></S.Timeline>
      <S.Container>
        {items.map((item, index) => {
          return (
            <div key={`timeline-item-${index}`}>
              <S.Marker />
              <S.Item
                variants={S.timelineItemVariants}
                initial="inactive"
                animate={
                  isTimelineItemActive(
                    index,
                    items.length,
                    props.scrollPercentage
                  )
                    ? "active"
                    : "inactive"
                }
              >
                <S.ImageContainer>
                  <Image src={item.image} width="75" height="75" />
                </S.ImageContainer>
                <div>
                  <MinorHeading>{item.title}</MinorHeading>
                  <strong>{item.subtitle}</strong>
                  <em>{getTimeRange(item.timeframe)}</em>
                  <S.Trigger>
                    More details{" "}
                    <CaretRight
                      size={10}
                      weight="bold"
                      color={Theme.colors.tertiary}
                    />
                  </S.Trigger>
                </div>
              </S.Item>
            </div>
          );
        })}
      </S.Container>
    </S.TimelineContainer>
  );
}
