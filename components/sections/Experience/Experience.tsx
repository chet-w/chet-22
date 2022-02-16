import React, { forwardRef, ReactElement, RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../../layout/Section";
import { Heading } from "../../typography/Headings";
import { Accent } from "../../typography/Accent";
import { Paragraph } from "../../typography/Paragraph";
import { useAnimateOnScroll } from "@hooks/useAnimateOnScroll";
import * as S from "./styles";

export const Experience = forwardRef(function About(
  _,
  sectionRef: React.ForwardedRef<HTMLElement>
): ReactElement {
  const showSection = useAnimateOnScroll(sectionRef as RefObject<HTMLElement>);

  return (
    <Section
      direction="vertical"
      crossAxis="start"
      mainAxis="start"
      ref={sectionRef}
      id="experience"
    >
      <AnimatePresence>
        {showSection && (
          <motion.div
            variants={S.sectionVariants}
            initial="entry"
            animate="visible"
          >
            <Heading variants={S.sectionVariants}>
              <Accent>Experience</Accent>
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
