import React, { ReactElement, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../../layout/Section";
import { Heading } from "../../typography/Headings";
import { Accent } from "../../typography/Accent";
import { Paragraph } from "../../typography/Paragraph";
import * as S from "./styles";
import { useAnimateOnScroll } from "../../../hooks/useAnimateOnScroll";

export function Experience(): ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const showSection = useAnimateOnScroll(sectionRef);

  return (
    <Section
      direction="vertical"
      crossAxis="start"
      mainAxis="start"
      ref={sectionRef}
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
}
