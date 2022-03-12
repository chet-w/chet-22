import { ViewportSize } from "@hooks/useViewPortSize/types";
import { Skill } from "@sections/Skills/types";

export interface CoverflowProps {
  items: Skill[];
}

export interface StickyContentProps {
  offset: number;
}

export const CoverflowOffsets: Record<ViewportSize, number> = {
  [ViewportSize.ExtraSmall]: 50,
  [ViewportSize.Small]: 50,
  [ViewportSize.Medium]: 200,
  [ViewportSize.Large]: 200,
  [ViewportSize.ExtraLarge]: 200,
};
