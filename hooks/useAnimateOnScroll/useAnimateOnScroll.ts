import { useEffect, RefObject, useState } from "react";
import { useScrollDistance } from "../useScrollDistance";

export function useAnimateOnScroll(
  sectionRef: RefObject<HTMLElement>
): boolean {
  const [showSection, setShowSection] = useState(false);
  const [hasSectionAlreadyAppeared, setHasSectionAlreadyAppeared] =
    useState(false);
  const scrollDistance = useScrollDistance();

  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef?.current) {
      const offsetTop = sectionRef.current.offsetTop;
      const { height } = sectionRef.current.getBoundingClientRect();

      const topBoundary = offsetTop - height * 1.2;

      if (scrollDistance > topBoundary) {
        setShowSection(true);
        setHasSectionAlreadyAppeared(true);
      } else {
        setShowSection(false);
      }
    } else {
      setShowSection(false);
    }
  }, [scrollDistance, hasSectionAlreadyAppeared]);

  return showSection || hasSectionAlreadyAppeared;
}
