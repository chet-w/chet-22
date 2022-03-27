import React, {
  ForwardedRef,
  forwardRef,
  Fragment,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useViewportScroll } from "framer-motion";
import { StickySection } from "@layout/StickySection";
import { Heading } from "@typography/Headings";
import { Accent } from "@typography/Accent";
import { Timeline } from "./components/Timeline";
import { useIntersectionObserver } from "@asyarb/use-intersection-observer";

export const Experience = forwardRef(function About(
  _,
  sectionRef: any
): ReactElement {
  const { scrollY } = useViewportScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    scrollY.onChange((scrollDistance) => {
      const position: DOMRect = sectionRef.current.getBoundingClientRect();
      const distanceFromTop = sectionRef.current.offsetTop;
      const elementScrolledAmount = scrollDistance - distanceFromTop;
      const finalScrollPosition = position.height / 3.5;

      const actualScrollPercentage =
        (elementScrolledAmount / finalScrollPosition) * 100;
      if (actualScrollPercentage > 0 && actualScrollPercentage < 90) {
        setScrollPercentage(actualScrollPercentage);
      }
    });
  }, []);

  return (
    <StickySection ref={sectionRef} hideOverflow>
      <Fragment>
        <Heading>
          <Accent>Experience</Accent>
        </Heading>
        <Timeline scrollPercentage={scrollPercentage} />
      </Fragment>
    </StickySection>
  );
});
