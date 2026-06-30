import { events } from "@/data/events";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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

  const dateObj = new Date(event.date);
  const fullDate = dateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

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
        style={event.image ? { backgroundImage: `url(${event.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
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
          
          <div className="prose max-w-none text-charcoal">
            <p className="text-lg leading-relaxed">{event.description}</p>
            
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
