export enum ViewportSize {
  "ExtraSmall" = "xs",
  "Small" = "sm",
  "Medium" = "md",
  "Large" = "lg",
  "ExtraLarge" = "xl",
}

export const ViewportSizeMapping = {
  [ViewportSize.ExtraSmall]: 320,
  [ViewportSize.Small]: 425,
  [ViewportSize.Medium]: 768,
  [ViewportSize.Large]: 992,
  [ViewportSize.ExtraLarge]: 1200,
};
