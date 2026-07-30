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
  },
  {
    id: "lunar-new-year-2024",
    title: "Happy Lunar New Year 2024",
    date: "2024-02-18",
    time: "10:00 AM - 12:00 PM",
    location: "141 John Button Blvd",
    description: "Come celebrate the 2024 Lunar New Year (Year of the Dragon) with family and friends at our Happy Lunar New Year festival. There were performances, activities, and celebrations organized by multiple community associations.",
    image: "/images/events/lunar-new-year-2024/lunar-new-year-2024.jpg",
    galleryFolder: "lunar-new-year-2024",
    category: "Cultural",
    status: "past"
  },
  {
    id: "safety-seminar-2024",
    title: "Tips for Living and Study Safety in Toronto",
    date: "2024-03-29",
    time: "1:00 PM - 3:00 PM",
    location: "Zoom Online Meeting",
    description: "In response to increasing incidents of crime in the Greater Toronto Area, this online safety seminar featured a Toronto police officer (Officer Hu) who provided practical tips on how to protect your personal safety and property while living and studying in Toronto.",
    image: "/images/events/safety-seminar-2024/safety-seminar-2024.jpg",
    galleryFolder: "safety-seminar-2024",
    category: "Education",
    status: "past"
  },
  {
    id: "christmas-new-year-2023",
    title: "Christmas & Happy New Year Party Event",
    date: "2023-12-23",
    time: "10:00 AM - 2:00 PM",
    location: "Castlemore Public School, 256 Ridgecrest Rd, Markham, ON L6C 2R5",
    description: "We hosted a festive Christmas and Happy New Year Party Event with holiday celebrations, performances, and exciting on-site lucky draws. This event was co-hosted with Markham Tai Chi Senior Club and Optimistic Me To We Cultural Organization.",
    image: "/images/events/christmas-new-year-2023/christmas-new-year-2023.jpg",
    galleryFolder: "christmas-new-year-2023",
    category: "Cultural",
    status: "past"
  },
  {
    id: "mid-autumn-national-day-2023",
    title: "Mid-Autumn Festival & National Day Celebration",
    date: "2023-09-20",
    time: "10:00 AM",
    location: "Berczy Park North",
    description: "A grand outdoor celebration for the Mid-Autumn Festival and National Day. The day was filled with community spirit, performances, badminton games, and lucky draws at Berczy Park North, co-hosted by multiple community organizations.",
    image: "/images/events/mid-autumn-national-day-2023/mid-autumn-national-day-2023.jpg",
    galleryFolder: "mid-autumn-national-day-2023",
    category: "Cultural",
    status: "past"
  },
  {
    id: "lunar-new-year-lantern-2024",
    title: "Happy Lunar New Year & Lantern Festival",
    date: "2024-02-23",
    time: "6:30 PM - 9:00 PM",
    location: "Bur Oak High School, 933 Bur Oak Ave., Markham",
    description: "We hosted a wonderful Lunar New Year and Lantern Festival celebration. The event featured evening performances, cultural activities, and a community gathering, co-organized with multiple local associations.",
    image: "/images/events/lunar-new-year-lantern-2024/lunar-new-year-lantern-2024.jpg",
    galleryFolder: "lunar-new-year-lantern-2024",
    category: "Cultural",
    status: "past"
  },
  {
    id: "family-education-seminar-2024",
    title: "Integration of Chinese and Western Family Education Seminar",
    date: "2024-01-26",
    time: "9:30 AM",
    location: "60 Riviera Dr., Markham",
    description: "An insightful seminar discussing the integration of Chinese and Western approaches to family education. The talk featured a special presentation by Professor Geng Zhongping, retired professor of humanities from Tongji University.",
    image: "/images/events/family-education-seminar-2024/family-education-seminar-2024.jpg",
    galleryFolder: "family-education-seminar-2024",
    category: "Education",
    status: "past"
  },
  {
    id: "mid-autumn-festival-2023",
    title: "NCCC Mid-Autumn Festival Celebration",
    date: "2023-09-30",
    time: "1:00 PM - 5:00 PM",
    location: "Pierre Elliott Trudeau High School, 90 Bur Oak Ave, Markham",
    description: "A grand Mid-Autumn Festival celebration held in partnership with the New Canadian Community Centre (NCCC) and other local organizations. The afternoon was filled with festive cheer, traditional performances, and community bonding.",
    image: "/images/events/mid-autumn-festival-2023/mid-autumn-festival-2023.jpg",
    galleryFolder: "mid-autumn-festival-2023",
    category: "Cultural",
    status: "past"
  }
];
