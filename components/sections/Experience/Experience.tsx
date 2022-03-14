import React, { forwardRef, Fragment, ReactElement, RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@layout/Section";
import { Container } from "@layout/Container";
import { Heading } from "@typography/Headings";
import { Accent } from "@typography/Accent";
import { useAnimateOnScroll } from "@hooks/useAnimateOnScroll";
import { Carousel } from "./components/Carousel";
import { CarouselItem } from "./components/Carousel/types";
import * as S from "./styles";
import { Paragraph } from "@typography/Paragraph";
import { StickySection } from "@layout/StickySection";

export const Experience = forwardRef(function About(
  _,
  sectionRef: React.ForwardedRef<HTMLElement>
): ReactElement {
  return (
    <StickySection>
      <Fragment>
        <Heading>Experience</Heading>
        <Paragraph>
          PARAGRAPH 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nam natus necessitatibus tenetur reprehenderit ratione optio veniam
          illum itaque fugit dolor. Commodi aliquam laudantium deleniti
          asperiores modi repellat? Autem, tempora fuga!
        </Paragraph>
        <Paragraph>
          PARAGRAPH 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nam natus necessitatibus tenetur reprehenderit ratione optio veniam
          illum itaque fugit dolor. Commodi aliquam laudantium deleniti
          asperiores modi repellat? Autem, tempora fuga!
        </Paragraph>
      </Fragment>
    </StickySection>
  );
});
