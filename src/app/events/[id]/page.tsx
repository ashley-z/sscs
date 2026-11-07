import { events } from "@/data/events";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import fs from 'fs';
import path from 'path';
import ImageGallery from "@/components/ImageGallery";

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const event = events.find(e => e.id === resolvedParams.id);

  if (!event) {
    notFound();
  }

  const fullDate = event.dateDisplay || (event.date
    ? new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
    : 'Rolling Registration');

  let galleryImages: string[] = [];
  if (event.galleryFolder) {
    const galleryPath = path.join(process.cwd(), 'public', 'images', 'events', event.galleryFolder);
    try {
      if (fs.existsSync(galleryPath)) {
        const files = fs.readdirSync(galleryPath);
        galleryImages = files
          .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
          .map(file => `/images/events/${event.galleryFolder}/${file}`);
      }
    } catch (e) {
      console.error("Error reading gallery directory:", e);
    }
  }

  return (
    <main className="flex-1 bg-cream pb-16">
      {/* Header Banner */}
      <div
        className="relative h-[300px] md:h-[400px] w-full bg-gradient-to-br from-charcoal to-primary-dark"
        style={event.image ? { backgroundImage: `url("${encodeURI(event.image)}")`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="absolute inset-0 bg-charcoal/60 flex flex-col justify-end pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <span className="bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white rounded-full w-fit mb-4">
            {event.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2 max-w-3xl leading-tight drop-shadow-md">
            {event.title}
          </h1>
          <p className="text-white/90 font-medium text-lg drop-shadow-md">{fullDate}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-xl border border-border shadow-sm p-6 md:p-10">
          <Link href="/events" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          {(event.time || event.location) && (
            <div className="mb-8 p-4 rounded-lg bg-cream/50 border border-border flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 text-mid text-sm md:text-base">
              {event.time && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-charcoal">{event.time}</span>
                </div>
              )}
              {event.location && (
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-charcoal">{event.location}</span>
                </div>
              )}
            </div>
          )}

          <div className="prose max-w-none text-charcoal">
            <p className="text-lg leading-relaxed whitespace-pre-line">{event.description}</p>

            {event.sponsorLogo && (
              <div className="my-8 p-5 rounded-xl bg-gray-50 border border-border flex flex-col sm:flex-row items-center gap-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.sponsorLogo}
                  alt={event.sponsor || "Program Sponsor"}
                  className="h-10 md:h-12 w-auto object-contain shrink-0"
                />
                {event.sponsor && (
                  <p className="text-sm md:text-base text-mid font-medium m-0">{event.sponsor}</p>
                )}
              </div>
            )}

            <p className="mt-6 text-mid leading-relaxed">
              This event is open to all community members. Programs at Second Step Community Services are delivered bilingually in English and Chinese to ensure everyone feels welcome and included. Please contact us for registration details or if you have any questions about accessibility.
            </p>
          </div>

          {galleryImages.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-display font-bold text-2xl text-charcoal mb-6">Event Photos</h3>
              <ImageGallery images={galleryImages} eventTitle={event.title} />
            </div>
          )}

          {event.status === 'upcoming' && (
            <div className="mt-10 pt-8 border-t border-border">
              <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-primary-dark transition-colors">
                Register / Inquire
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
