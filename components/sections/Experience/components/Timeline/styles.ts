import { MinorHeading } from "@typography/Headings";
import { Paragraph } from "@typography/Paragraph";
import { motion, Variant } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { ItemProps, TimelineContainerProps } from "./types";

export const Timeline = styled.div`
  width: 200vw;
  height: 0.25rem;
  background: ${(props) => props.theme.colors.tertiary};
  border-radius: 1rem;
`;

export const Item = styled(motion.div)<ItemProps>`
  width: 22rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.translucent.primary};
  color: ${(props) => props.theme.colors.black};
  margin-top: 1.5rem;
  position: relative;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    height: 1rem;
    width: 1rem;
    top: -0.5rem;
    left: calc(50% - 0.5rem);
    transform: rotate(45deg);
    position: absolute;
    background: ${(props) => props.theme.colors.translucent.primary};
  }

  ${MinorHeading} {
    margin: 0;
  }

  strong,
  em,
  ${Paragraph} {
    display: block;
  }
`;

export const ImageContainer = styled.div`
  margin-right: 1rem;
  height: 75px;
  min-width: 75px;
`;

export const Marker = styled.div`
  height: 1rem;
  width: 1rem;
  transform: translateX(12rem) translateY(-0.625rem);
  border-radius: 2rem;
  background: ${(props) => props.theme.colors.primary};
`;

export const Container = styled.div`
  width: 200vw;
  display: flex;
  justify-content: space-between;
`;

export const TimelineContainer = styled.div<TimelineContainerProps>`
  transition: linear;
  margin-top: 5rem;
  transform: translateX(-${(props) => props.scrollPercentage}%);
`;

export const Trigger = styled.button`
  background: none;
  border: none;
  padding: 0.25rem 0;
  margin-top: 0.25rem;
  font-weight: bold;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.tertiary};
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  svg {
    margin-bottom: 2px;
  }

  polyline {
    stroke-width: 48px;
  }
`;

export const timelineItemVariants: Record<string, Variant> = {
  inactive: {
    scale: 1,
    opacity: 0.6,
  },
  active: {
    scale: 1.2,
    opacity: 1,
  },
};
