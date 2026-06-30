interface ServiceCardProps {
  title: string;
  description: string;
  bullets: string[];
}

export default function ServiceCard({ title, description, bullets }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl border-[0.5px] border-border shadow-sm flex flex-col">
      <h3 className="font-display font-bold text-xl md:text-2xl text-charcoal mb-3">{title}</h3>
      <p className="text-mid mb-6 text-sm">{description}</p>
      
      <div className="mt-auto pt-4 border-t border-border/50">
        <ul className="flex flex-col gap-3">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-charcoal">
              <span className="text-primary mt-0.5">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
