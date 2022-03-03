import React, { ReactElement, forwardRef, RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@layout/Section";
import { Heading } from "@typography/Headings";
import { Accent } from "@typography/Accent";
import { useAnimateOnScroll } from "@hooks/useAnimateOnScroll";
import { Coverflow } from "./components/Coverflow";
import { Skill } from "./types";
import * as S from "./styles";

export const Skills = forwardRef(function About(
  _,
  sectionRef: React.ForwardedRef<HTMLElement>
): ReactElement {
  const showSection = useAnimateOnScroll(sectionRef as RefObject<HTMLElement>);

  const skills: Skill[] = [
    {
      title: "React",
      icon: "/experience/hazardco.png",
    },
    {
      title: "React",
      icon: "/experience/hazardco.png",
    },
    {
      title: "React",
      icon: "/experience/hazardco.png",
    },
    {
      title: "React",
      icon: "/experience/hazardco.png",
    },
    {
      title: "React",
      icon: "/experience/hazardco.png",
    },
  ];

  return (
    <Section
      direction="vertical"
      crossAxis="start"
      mainAxis="start"
      ref={sectionRef}
      id="skills"
    >
      <AnimatePresence>
        {showSection && (
          <motion.div
            variants={S.sectionVariants}
            initial="entry"
            animate="visible"
            style={{ width: "100%" }}
          >
            <Heading variants={S.sectionVariants}>
              <Accent>Skills</Accent>
            </Heading>
            <Coverflow items={skills} />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
});
