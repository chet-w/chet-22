import { useEffect, useState } from "react";

export function useScrollDistance() {
  const [scrollDistance, setScrollDistance] = useState<number>(0);
  const [previousScrollDistance, setPreviousScrollDistance] =
    useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  function setScrollProperties() {
    setPreviousScrollDistance(scrollDistance);
    setScrollDistance(window.scrollY);
    if (previousScrollDistance < scrollDistance) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", setScrollProperties);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", setScrollProperties);
      }
    };
  });

  return { scrollDistance, scrollDirection };
}
