import { BoardMember } from "@/data/boardMembers";
import Image from "next/image";

export default function BoardMemberCard({ member }: { member: BoardMember }) {
  const isPlaceholder = !member.image || member.image.includes("placeholder");
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200 mb-4 border-4 border-white shadow-md relative">
        {isPlaceholder ? (
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-mid flex items-center justify-center text-white/50 text-sm">
            No Photo
          </div>
        ) : (
          <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 128px, 160px" />
        )}
      </div>
      <h4 className="font-bold text-lg text-charcoal">{member.name}</h4>
      <p className="text-primary text-sm">{member.role}</p>
    </div>
  );
}
