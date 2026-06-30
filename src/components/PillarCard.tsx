import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function PillarCard({ icon: Icon, title, description }: PillarCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl border-[0.5px] border-border border-t-[3px] border-t-primary shadow-sm flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mb-6 text-primary">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="font-display font-bold text-xl text-charcoal mb-3">{title}</h3>
      <p className="text-mid leading-relaxed text-sm">{description}</p>
    </div>
  );
}
