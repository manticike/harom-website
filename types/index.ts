// types/index.ts
export interface SlideData {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

export interface HeroSliderProps {
  slides: SlideData[];
  autoPlay?: boolean;
  interval?: number;
}

export interface SlideProps extends SlideData {
  isActive: boolean;
}