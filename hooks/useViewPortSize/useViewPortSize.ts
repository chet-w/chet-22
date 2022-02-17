import { useEffect, useState } from "react";
import { ViewportSize, ViewportSizeMapping } from "./types";

export function useViewPortSize(): ViewportSize {
  const [currentSize, setCurrentSize] = useState<ViewportSize>(
    ViewportSize.Small
  );

  function handleResize() {
    const { label } = ViewportSizeMapping.find(
      ({ size }) => window.innerWidth <= size
    )!;
    setCurrentSize(label);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return currentSize;
}