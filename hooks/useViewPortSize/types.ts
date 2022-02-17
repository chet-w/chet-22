export enum ViewportSize {
  "ExtraSmall",
  "Small",
  "Medium",
  "Large",
  "ExtraLarge",
}

export const ViewportSizeMapping = [
  { label: ViewportSize.ExtraSmall, size: 320 },
  { label: ViewportSize.Small, size: 425 },
  { label: ViewportSize.Medium, size: 768 },
  { label: ViewportSize.Large, size: 992 },
  { label: ViewportSize.ExtraLarge, size: 1200 },
];
