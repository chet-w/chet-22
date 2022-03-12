import { ViewportSize } from "@hooks/useViewPortSize/types";
import { Skill } from "@sections/Skills/types";

export interface CoverProps {
  item: Skill;
  index: number;
  listLength: number;
  activeIndex: number;
}

export const CoverTranslations: Record<ViewportSize, number> = {
  [ViewportSize.ExtraSmall]: 10,
  [ViewportSize.Small]: 50,
  [ViewportSize.Medium]: 100,
  [ViewportSize.Large]: 100,
  [ViewportSize.ExtraLarge]: 100,
};
