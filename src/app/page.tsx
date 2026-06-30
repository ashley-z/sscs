import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";
import PillarCard from "@/components/PillarCard";
import { carouselImages } from "@/data/carousel";
import { HeartHandshake, Activity, Users, Languages } from "lucide-react";

export default function Home() {
  const pillars = [
    {
      icon: HeartHandshake,
      title: "Mental Wellness & Advocacy",
      description: "Workshops on coping strategies, youth mental health resources, and fraud prevention seminars for seniors."
    },
    {
      icon: Activity,
      title: "Health & Lifelong Learning",
      description: "Daily Tai Chi sessions, chronic condition management education, digital literacy training, and our seniors' choir."
    },
    {
      icon: Users,
      title: "Community & Social Integration",
      description: "Intergenerational projects, cultural celebrations (Lunar New Year, Canada Day), and community field trips."
    },
    {
      icon: Languages,
      title: "Bilingual Outreach",
      description: "All programs delivered in both English and Chinese, ensuring newcomers and language-minority members feel at home."
    }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary text-white py-16 md:py-24">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 text-sm font-medium tracking-wide mb-6">
              Serving Markham & GTA
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building bridges between generations
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
              Bilingual programs, mental wellness advocacy, and community connection for seniors, youth, and newcomers in the Markham area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/events" className="bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-primary-light transition-colors text-center">
                Upcoming Events
              </Link>
              <Link href="/donate" className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-colors text-center">
                Support Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 md:py-16 -mt-8 relative z-20">
        <ImageCarousel images={carouselImages} />
      </section>

      {/* What We Do */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">What We Do</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-2">Our core pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, idx) => (
              <PillarCard key={idx} icon={pillar.icon} title={pillar.title} description={pillar.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-charcoal text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            <div className="pt-4 sm:pt-0">
              <p className="font-display text-4xl md:text-5xl font-bold mb-1">4+</p>
              <p className="text-sm text-white/60 uppercase tracking-widest">Programs</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <p className="font-display text-4xl md:text-5xl font-bold mb-1">2</p>
              <p className="text-sm text-white/60 uppercase tracking-widest">Languages</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <p className="font-display text-4xl md:text-5xl font-bold mb-1">3</p>
              <p className="text-sm text-white/60 uppercase tracking-widest">Target Groups</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-primary text-white py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Ready to get involved?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/events" className="bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-primary-light transition-colors">
              View Events
            </Link>
            <Link href="/contact" className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
