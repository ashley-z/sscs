import { Event } from "@/data/events";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

export default function EventCard({ event }: { event: Event }) {
  const isPast = event.status === 'past';
  const dateObj = new Date(event.date);
  const monthStr = dateObj.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }).toUpperCase();
  const dayStr = dateObj.toLocaleString('en-US', { day: 'numeric', timeZone: 'UTC' });

  return (
    <Link href={`/events/${event.id}`} className={`block group ${isPast ? 'opacity-70' : ''}`}>
      <div className={`bg-white rounded-xl border-[0.5px] border-border overflow-hidden flex flex-row shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-1 ${isPast ? 'group-hover:border-mid' : 'group-hover:border-primary-light'}`}>
        
        {/* Date Block */}
        <div className={`w-24 md:w-32 flex flex-col items-center justify-center border-r-[0.5px] border-border shrink-0 ${isPast ? 'bg-gray-100 text-mid' : 'bg-primary-light text-primary'}`}>
          <span className="text-sm font-bold tracking-widest">{monthStr}</span>
          <span className="font-display text-3xl md:text-4xl font-bold">{dayStr}</span>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded-full border ${isPast ? 'border-mid text-mid' : 'border-primary/30 text-primary bg-primary/5'}`}>
              {event.category}
            </span>
          </div>
          <h3 className="font-display font-bold text-lg md:text-xl text-charcoal mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
          
          {(event.time || event.location) && (
            <div className="flex flex-col gap-1 mb-3 text-sm text-mid">
              {event.time && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>{event.time}</span>
                </div>
              )}
              {event.location && (
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{event.location}</span>
                </div>
              )}
            </div>
          )}

          <p className="text-mid text-sm line-clamp-2 md:line-clamp-none">{event.description}</p>
        </div>
      </div>
    </Link>
  );
}
