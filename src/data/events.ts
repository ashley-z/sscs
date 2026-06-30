export interface Event {
  id: string;
  title: string;
  date: string; // ISO 8601: "2025-07-01"
  time?: string;
  location?: string;
  description: string;
  image: string; // path to image in public/images/events/
  galleryFolder?: string; // name of the folder inside public/images/events/ containing all photos
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
  },
  {
    id: "tai-chi-2025",
    title: "Tai Chi Playing",
    date: "2025-03-16",
    time: "3:00 PM - 5:00 PM",
    location: "Karma Tekchen Zabsal Ling (Toronto Thrangu Tibetan Buddhist Centre) 13900 Leslie St, Aurora, ON L4G 7C8",
    description: "Help youth release stress and regulate emotions through its combination of movement, mindfulness, and breathing.",
    image: "/images/events/taichi/496195284_122128499474748851_1979154277724585147_n.jpg",
    galleryFolder: "taichi",
    category: "Health & Fitness",
    status: "past"
  },
  {
    id: "meditation-2025",
    title: "Meditation",
    date: "2025-03-09",
    time: "3:00 PM - 5:00 PM",
    location: "Karma Tekchen Zabsal Ling (Toronto Thrangu Tibetan Buddhist Centre) 13900 Leslie St, Aurora, ON L4G 7C8",
    description: "Guided youth through meditation practices aimed at emotional regulation, enhancing self-awareness, and building respect for parents, ultimately contributing to improved mental health.",
    image: "/images/events/meditation/496008808_122128500350748851_8864496141167064508_n.jpg",
    galleryFolder: "meditation",
    category: "Health & Fitness",
    status: "past"
  },
  {
    id: "youth-table-tennis-2025",
    title: "Youth Table Tennis Practicing",
    date: "2025-02-22",
    time: "4:30 PM - 6:00 PM",
    location: "Ontario Table Tennis School, 1181 Denison Street, Markham, ON",
    description: "Ontario Table Tennis School provided professional coaching and structured physical activity through table tennis. This dynamic and inclusive environment encouraged teamwork, broke down communication barriers, and supported mental wellness through active engagement.",
    image: "/images/events/table-tennis-practice/480231838_122110553774748851_5093916244672171717_n.jpg",
    galleryFolder: "table-tennis-practice",
    category: "Health & Fitness",
    status: "past"
  },
  {
    id: "youth-against-drug-abuse-2025",
    title: "Youth Against Drug Abuse",
    date: "2025-01-11",
    time: "10:00 AM - 11:30 AM",
    location: "Unit 14, 10950 Woodbine Avenue, Markham, ON",
    description: "A resident-led initiative funded through the Community Violence Prevention Fund. This event aims to raise awareness about drug prevention and its impact on our youth. Officer Kelly Firanski from York Region Police is the guest speaker.",
    image: "/images/events/youth-against-drug-abuse/480063736_122110548116748851_4025287503927649435_n.jpg",
    galleryFolder: "youth-against-drug-abuse",
    category: "Education",
    status: "past"
  }
];
