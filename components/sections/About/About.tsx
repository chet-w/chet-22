import React, { RefObject, forwardRef, ReactElement, Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import { StickySection } from "@layout/StickySection";
import { Accent } from "@typography/Accent";
import { Heading } from "@typography/Headings";
import { Paragraph } from "@typography/Paragraph";
import { useAnimateOnScroll } from "@hooks/useAnimateOnScroll";
import * as S from "./styles";

export const About = forwardRef(function About(
  _,
  sectionRef: React.ForwardedRef<HTMLDivElement>
): ReactElement {
  const showSection = useAnimateOnScroll(
    sectionRef as RefObject<HTMLDivElement>
  );

  return (
    <StickySection ref={sectionRef}>
      <Fragment>
        <Heading>
          <Accent>About me</Accent>
        </Heading>
        <AnimatePresence>
          {showSection && (
            <S.Content
              variants={S.contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Paragraph variants={S.paragraphVariants}>
                PARAGRAPH 1: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nam natus necessitatibus tenetur reprehenderit ratione
                optio veniam illum itaque fugit dolor. Commodi aliquam
                laudantium deleniti asperiores modi repellat? Autem, tempora
                fuga!
              </Paragraph>
              <Paragraph variants={S.paragraphVariants}>
                PARAGRAPH 2: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nam natus necessitatibus tenetur reprehenderit ratione
                optio veniam illum itaque fugit dolor. Commodi aliquam
                laudantium deleniti asperiores modi repellat? Autem, tempora
                fuga!
              </Paragraph>
            </S.Content>
          )}
        </AnimatePresence>
      </Fragment>
    </StickySection>
  );
});
