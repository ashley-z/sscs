export interface Event {
  id: string;
  title: string;
  date: string; // ISO 8601: "2025-07-01"
  description: string;
  image: string; // path to image in public/images/events/
  category: 'Health & Fitness' | 'Cultural' | 'Education' | 'Advocacy' | 'Social';
  status: 'upcoming' | 'past';
}

export const events: Event[] = [
  // Upcoming
  {
    id: "summer-tai-chi-2025",
    title: "Summer Tai Chi Morning",
    date: "2025-06-14",
    description: "Start your morning with our relaxing outdoor Tai Chi session for all skill levels.",
    image: "/images/events/summer-tai-chi-2025.jpg",
    category: "Health & Fitness",
    status: "upcoming"
  },
  {
    id: "canada-day-2025",
    title: "Canada Day Community Celebration",
    date: "2025-07-01",
    description: "Join us for an intergenerational celebration of Canada Day with activities and food.",
    image: "/images/events/canada-day-2025.jpg",
    category: "Cultural",
    status: "upcoming"
  },
  {
    id: "digital-literacy-2025",
    title: "Digital Literacy Workshop",
    date: "2025-07-19",
    description: "Learn essential skills for navigating mobile devices and online safety.",
    image: "/images/events/digital-literacy-2025.jpg",
    category: "Education",
    status: "upcoming"
  },
  // Past
  {
    id: "lunar-new-year-2025",
    title: "Lunar New Year Celebration 2025",
    date: "2025-02-10",
    description: "Our community gathered to celebrate the Year of the Snake with traditional performances.",
    image: "/images/events/lunar-new-year-2025.jpg",
    category: "Cultural",
    status: "past"
  },
  {
    id: "fraud-prevention-2025",
    title: "Fraud Prevention Seminar",
    date: "2025-03-22",
    description: "An important workshop equipping seniors with knowledge to protect against scams.",
    image: "/images/events/fraud-prevention-2025.jpg",
    category: "Advocacy",
    status: "past"
  }
];
