import { useEffect, useState } from "react";

export function useScrollDistance() {
  const [scrollDistance, setScrollDistance] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollDistance(window.scrollY);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        setScrollDistance(window.scrollY);
      });
  });

  return scrollDistance;
}
