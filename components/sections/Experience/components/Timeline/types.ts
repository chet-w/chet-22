export interface TimelineProps {
  scrollPercentage: number;
}

export interface ItemProps {
  active?: boolean;
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  details: string;
  image: string;
  timeframe: string[];
}

export interface TimelineContainerProps {
  scrollPercentage: number;
}
