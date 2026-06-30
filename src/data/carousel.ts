export interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

export const carouselImages: CarouselImage[] = [
  {
    src: "/images/carousel/placeholder-1.jpg",
    alt: "Placeholder for upcoming event banner",
    caption: "Add your event photos here"
  },
  {
    src: "/images/carousel/placeholder-2.jpg",
    alt: "Placeholder for community gathering",
    caption: "Connecting seniors and youth"
  },
  {
    src: "/images/carousel/placeholder-3.jpg",
    alt: "Placeholder for health workshop",
    caption: "Mental wellness and advocacy"
  },
  {
    src: "/images/carousel/placeholder-4.jpg",
    alt: "Placeholder for cultural celebration",
    caption: "Bilingual community events"
  }
];
