import { useEffect, useState } from "react";

export function useScrollDistance() {
  const [scrollDistance, setScrollDistance] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScrollDistance(window.scrollY);
      });
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", () => {
          setScrollDistance(window.scrollY);
        });
      }
    };
  });

  return scrollDistance;
}
