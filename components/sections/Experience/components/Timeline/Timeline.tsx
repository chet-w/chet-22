import { Fragment, ReactElement, useEffect } from "react";
import { TimelineProps } from "./types";
import * as S from "./styles";
import { MinorHeading } from "@typography/Headings";
import { Paragraph } from "@typography/Paragraph";

export function Timeline(props: TimelineProps): ReactElement {
  const items = [
    {
      title: "Victoria University of Wellington",
      subtitle: "Bachelor of Science (CompSci)",
      details: "asdfasdfasdfasdfasdfasdfdsf",
    },
    {
      title: "Epi-interactive",
      subtitle: "Full-Stack Developer",
      details: "asdfasdfasdfasdfasdfasdfdsf",
    },
    {
      title: "Hnry",
      subtitle: "Front-End Developer",
      details: "asdfasdfasdfasdfasdfasdfdsf",
    },
    {
      title: "HazardCo",
      subtitle: "Front-End Developer",
      details: "asdfasdfasdfasdfasdfasdfdsf",
    },
  ];

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
            <div>
              <S.Marker />
              <S.Item
                animate={{
                  scale: isActive ? 1.2 : 1,
                }}
              >
                <MinorHeading>{item.title}</MinorHeading>
                <strong>{item.subtitle}</strong>
                <Paragraph>{item.details}</Paragraph>
              </S.Item>
            </div>
          );
        })}
      </S.Container>
    </div>
  );
}
