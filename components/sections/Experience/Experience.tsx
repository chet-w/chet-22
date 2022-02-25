import React, { forwardRef, ReactElement, RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../../layout/Section";
import { Heading } from "../../typography/Headings";
import { Accent } from "../../typography/Accent";
import { Carousel } from "./components/Carousel";
import { useAnimateOnScroll } from "@hooks/useAnimateOnScroll";
import * as S from "./styles";
import { CarouselItem } from "./components/Carousel/types";

export const Experience = forwardRef(function About(
  _,
  sectionRef: React.ForwardedRef<HTMLElement>
): ReactElement {
  const showSection = useAnimateOnScroll(sectionRef as RefObject<HTMLElement>);
  const jobs: CarouselItem[] = [
    {
      title: "HazardCo",
      position: "Front-End Developer",
      startDate: "July 2021",
      description: "yeet",
    },
    {
      title: "Hnry",
      position: "Front-End Developer",
      startDate: "November 2019",
      endDate: "June 2021",
      description: "yeet",
    },
    {
      title: "HazardCo",
      position: "Front-End Developer",
      startDate: "July 2018",
      endDate: "Novemeber 2019",
      description: "yeet",
    },
  ];

  return (
    <Section
      direction="vertical"
      crossAxis="start"
      mainAxis="start"
      ref={sectionRef}
      id="experience"
      size="big"
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
            <Carousel items={jobs} />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
});
