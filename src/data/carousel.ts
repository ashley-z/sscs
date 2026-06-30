export interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
  href?: string;
}

export const carouselImages: CarouselImage[] = [
  {
    src: "/images/events/taichi/496195284_122128499474748851_1979154277724585147_n.jpg",
    alt: "Tai Chi Playing event",
    caption: "Tai Chi Playing",
    href: "/events/tai-chi-2025"
  },
  {
    src: "/images/events/meditation/496008808_122128500350748851_8864496141167064508_n.jpg",
    alt: "Meditation for Youth",
    caption: "Meditation",
    href: "/events/meditation-2025"
  },
  {
    src: "/images/events/table-tennis-practice/480231838_122110553774748851_5093916244672171717_n.jpg",
    alt: "Youth Table Tennis Practicing",
    caption: "Table Tennis Practice",
    href: "/events/youth-table-tennis-2025"
  },
  {
    src: "/images/events/youth-against-drug-abuse/480063736_122110548116748851_4025287503927649435_n.jpg",
    alt: "Youth Against Drug Abuse",
    caption: "Drug Abuse Prevention",
    href: "/events/youth-against-drug-abuse-2025"
  }
];
