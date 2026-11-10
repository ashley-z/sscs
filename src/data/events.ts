export interface Event {
  id: string;
  title: string;
  date?: string; // ISO 8601: "2025-07-01"
  dateDisplay?: string; // Custom display e.g. "Rolling Applications"
  time?: string;
  location?: string;
  description: string;
  image: string; // path to image in public/images/events/
  galleryFolder?: string; // name of the folder inside public/images/events/ containing all photos
  category: 'Health & Fitness' | 'Cultural' | 'Education' | 'Advocacy' | 'Social';
  status: 'upcoming' | 'past';
  sponsor?: string;
  sponsorLogo?: string;
}

export const events: Event[] = [
  // Upcoming
  /* 
  {
    id: "food-safety-course-2026",
    title: "Food Safety Certification Course",
    dateDisplay: "Rolling Registration",
    time: "Saturdays, 10:00 AM - 3:00 PM",
    location: "Second Step Community Services (In-Person & Self-Study Options Available)",
    description: "Earn an Ontario Ministry of Health-recognized Food Safety Certificate! Taught by an experienced Public Health Inspector with 16 years of expertise, this course prepares food handlers and supervisors to meet Ontario Regulation 493/17 requirements. Available as an in-person Saturday workshop or flexible self-study exam.\n\nImportant Registration Details:\n1. Pay by cash or e-transfer to lilyliu@outlook.com. Registration will be completed once payment received.\n2. Start date is dependent on the number of people who register (rolling registration). We will contact you for further information regarding the start date.",
    image: "/images/events/food-safety/FoodsafetyCertificate.jpg",
    galleryFolder: "food-safety",
    category: "Education",
    status: "upcoming"
  },
  */
  // Past
  {
    id: "flu-season-prevention-2026",
    title: "Cold and Flu Season Prevention and Preparation",
    date: "2026-11-06",
    time: "6:00 PM - 7:00 PM",
    location: "Bur Oak High School, 933 Bur Oak Ave, Markham, ON L6E 1G4",
    description: "An informative health seminar on cold and flu season prevention and preparation, led by infection prevention and control specialist Ling Huang. Topics covered respiratory viruses (Flu, COVID-19, RSV), gastrointestinal infections, seasonal and adult vaccines (shingles, pneumococcal), peak season precautions, and practical protective measures.",
    image: "/images/events/flu-season-prevention/流感讲座11062026English.jpeg",
    galleryFolder: "flu-season-prevention",
    category: "Health & Fitness",
    status: "past"
  },
  {
    id: "nhsp-senior-abuse-prevention-yi-hu-2026",
    title: "Senior Abuse and Fraud Prevention Workshop with Officer Yi Hu",
    date: "2026-10-30",
    time: "1:30 PM - 2:30 PM",
    location: "King Square Shopping Centre, Unit 327, 9390 Woodbine Ave, Markham, ON L6C 0M5",
    description: "Sponsored by Service Canada through the New Horizons for Seniors Program (NHSP), this interactive safety workshop was presented by Officer Yi Hu. It provided vital guidance on identifying different types of senior abuse and neglect, detecting fraudulent scams targeting older adults, and connecting with local community protection resources.",
    image: "/images/events/new-horizon-senior/senior-abuse-fraud-prevention/20261030 - Officer Yi Hu/NHSP10302026English.jpeg",
    galleryFolder: "new-horizon-senior/senior-abuse-fraud-prevention/20261030 - Officer Yi Hu",
    category: "Advocacy",
    status: "past",
    sponsor: "Funded by the Government of Canada's New Horizons for Seniors Program (Service Canada)",
    sponsorLogo: "/images/events/new-horizon-senior/nhsp-canada-logo.png"
  },
  {
    id: "nhsp-senior-abuse-prevention-mo-chong-2026",
    title: "Senior Abuse and Fraud Prevention Workshop",
    date: "2026-09-16",
    time: "11:00 AM - 1:00 PM",
    location: "Vedic Cultural Centre, 4345 14th Avenue, Markham, ON",
    description: "Funded by the Government of Canada's New Horizons for Seniors Program (Service Canada), this educational workshop featured guest speaker Officer Mo Chong. The session focused on recognizing signs of senior abuse (physical, emotional, neglect), staying alert to fraud, and knowing how to report suspected abuse to protect senior well-being.",
    image: "/images/events/new-horizon-senior/senior-abuse-fraud-prevention/20260916 - Office Mo Chong/invitation of the workshop on Sept16.jpeg",
    galleryFolder: "new-horizon-senior/senior-abuse-fraud-prevention/20260916 - Office Mo Chong",
    category: "Advocacy",
    status: "past",
    sponsor: "Funded by the Government of Canada's New Horizons for Seniors Program (Service Canada)",
    sponsorLogo: "/images/events/new-horizon-senior/nhsp-canada-logo.png"
  },
  {
    id: "nhsp-senior-volunteers-training-2026",
    title: "Senior Volunteers Training (New Horizons Senior Program)",
    date: "2026-09-09",
    time: "10:00 AM - 12:00 PM",
    location: "Second Step Community Services, Markham, ON",
    description: "As part of the New Horizons for Seniors Program sponsored by Service Canada, this volunteer training workshop brought together senior community members to build volunteer skills, share leadership experiences, and foster mutual community support.",
    image: "/images/events/new-horizon-senior/senior-training/WechatIMG54.jpg",
    galleryFolder: "new-horizon-senior/senior-training",
    category: "Social",
    status: "past",
    sponsor: "Funded by the Government of Canada's New Horizons for Seniors Program (Service Canada)",
    sponsorLogo: "/images/events/new-horizon-senior/nhsp-canada-logo.png"
  },
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
    image: "/images/events/youth-against-drug-abuse/Youthposters.jpg",
    galleryFolder: "youth-against-drug-abuse/20250122",
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
