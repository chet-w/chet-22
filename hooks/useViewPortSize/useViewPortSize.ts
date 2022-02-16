import { useEffect, useState } from "react";
import { ViewportSize, ViewportSizeMapping } from "./types";

export function useViewPortSize(): ViewportSize {
  const [currentSize, setCurrentSize] = useState<ViewportSize>(
    ViewportSize.Small
  );

  function handleResize() {
    const [breakpoint] = Object.entries(ViewportSizeMapping).filter(
      ([_, width]) => window.innerWidth < width
    );
    const [breakpointLabel] = breakpoint;
    setCurrentSize(breakpointLabel as ViewportSize);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return currentSize;
}
