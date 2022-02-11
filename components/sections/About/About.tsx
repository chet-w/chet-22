import React, { ReactElement, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Accent } from "../../typography/Accent";
import { Heading } from "../../typography/Headings";
import { Section } from "../../layout/Section";
import { Paragraph } from "../../typography/Paragraph";
import * as S from "./styles";
import { useScrollDistance } from "../../../hooks/useScrollDistance";

export function About(): ReactElement {
  const [showSection, setShowSection] = useState(false);
  const scrollDistance = useScrollDistance();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowSection(scrollDistance > window.innerHeight / 4);
    } else {
      setShowSection(false);
    }
  }, [scrollDistance]);

  return (
    <Section direction="vertical" crossAxis="start" mainAxis="start">
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
}
