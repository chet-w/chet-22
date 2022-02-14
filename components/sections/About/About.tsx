import React, { ForwardedRef, forwardRef, ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Accent } from "../../typography/Accent";
import { Heading } from "../../typography/Headings";
import { Section } from "../../layout/Section";
import { Paragraph } from "../../typography/Paragraph";
import * as S from "./styles";
import { useAnimateOnScroll } from "../../../hooks/useAnimateOnScroll";
import { Ref } from "react";
import { RefObject } from "react";

export const About = forwardRef(function About(_, sectionRef: React.ForwardedRef<HTMLElement>): ReactElement {
  const showSection = useAnimateOnScroll(sectionRef as RefObject<HTMLElement>);

  return (
    <Section
      direction="vertical"
      crossAxis="start"
      mainAxis="start"
      ref={sectionRef}
      id="about"
    >
      <AnimatePresence>
        {showSection && (
          <motion.div
            variants={S.sectionVariants}
            initial="entry"
            animate="visible"
            exit="exit"
          >
            <Heading variants={S.sectionVariants}>
              <Accent>About me</Accent>
            </Heading>
            <Paragraph variants={S.sectionVariants}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              consequatur libero blanditiis cum, consequuntur sint nobis ea
              voluptatem at perspiciatis obcaecati eveniet consectetur saepe
              tempore ex est optio? Inventore, eveniet.
            </Paragraph>
            <Paragraph variants={S.sectionVariants}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              consequatur libero blanditiis cum, consequuntur sint nobis ea
              voluptatem at perspiciatis obcaecati eveniet consectetur saepe
              tempore ex est optio? Inventore, eveniet.
            </Paragraph>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
});
