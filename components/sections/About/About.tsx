import React, { RefObject, forwardRef, ReactElement, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@layout/Section";
import { Container } from "@layout/Container";
import { Accent } from "@typography/Accent";
import { Heading } from "@typography/Headings";
import { Paragraph } from "@typography/Paragraph";
import { useAnimateOnScroll } from "@hooks/useAnimateOnScroll";
import * as S from "./styles";
import { StickySection } from "@layout/StickySection";

export const About = forwardRef(function About(
  _,
  sectionRef: React.ForwardedRef<HTMLElement>
): ReactElement {
  const showSection = useAnimateOnScroll(sectionRef as RefObject<HTMLElement>);

  return (
    <StickySection>
      <Fragment>
        <Heading>About me</Heading>
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
