import { Metadata } from "next";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";

export const metadata: Metadata = {
  title: 'Events | SSCS',
  description: 'Upcoming and past community events hosted by Second Step Community Services.',
};

export default function EventsPage() {
  const upcomingEvents = events.filter(e => e.status === 'upcoming').sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastEvents = events.filter(e => e.status === 'past').sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="flex-1">
      {/* Header */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">Join us for upcoming workshops, community gatherings, and cultural celebrations.</p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="font-display text-2xl font-bold text-charcoal whitespace-nowrap">Upcoming Events</h2>
              <div className="h-px bg-border flex-1 ml-4"></div>
            </div>
            <div className="flex flex-col gap-4">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <div className="flex items-center mb-8">
              <h2 className="font-display text-2xl font-bold text-charcoal whitespace-nowrap">Past Events</h2>
              <div className="h-px bg-border flex-1 ml-4"></div>
            </div>
            <div className="flex flex-col gap-4">
              {pastEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

      </section>
    </main>
  );
}
