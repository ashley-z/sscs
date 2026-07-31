export interface BoardMember {
  name: string;
  role: string;
  image: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: "Daniel Chen",
    role: "President",
    image: "/images/board/placeholder.jpg"
  },
  {
    name: "Yash Kapur",
    role: "Vice President",
    image: "/images/board/yash-kapur.jpg"
  },
  {
    name: "Hannah Zheng",
    role: "Director",
    image: "/images/board/hannah-zheng.jpeg"
  },
  {
    name: "Li Liu",
    role: "Secretary",
    image: "/images/board/li-liu.jpg"
  }
];
