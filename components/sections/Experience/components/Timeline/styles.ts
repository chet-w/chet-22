import { MinorHeading } from "@typography/Headings";
import { Paragraph } from "@typography/Paragraph";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { ItemProps } from "./types";

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
