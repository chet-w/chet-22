export interface CarouselProps {
  items: CarouselItem[];
}

export interface CarouselItem {
  title: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
}
