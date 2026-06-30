import { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Services | SSCS',
  description: 'Free and low-cost bilingual programs for seniors, youth, and newcomers in Markham.',
};

export default function ServicesPage() {
  const services = [
    {
      title: "Mental Wellness",
      description: "Workshops and peer support for emotional well-being at every age.",
      bullets: [
        "Senior emotional health workshops",
        "Youth mental health resources",
        "Fraud & abuse prevention seminars"
      ]
    },
    {
      title: "Health & Active Living",
      description: "Physical wellness programs to keep our community moving and thriving.",
      bullets: [
        "Tai Chi sessions",
        "Chronic condition management",
        "Seniors' choir & arts programs"
      ]
    },
    {
      title: "Digital Literacy",
      description: "Technology training so no one gets left behind in a connected world.",
      bullets: [
        "Mobile device training",
        "Zoom & video calling",
        "Online safety basics"
      ]
    },
    {
      title: "Community & Cultural Programs",
      description: "Events and activities that celebrate who we are and bring us together.",
      bullets: [
        "Intergenerational meetups",
        "Lunar New Year & Canada Day celebrations",
        "Field trips & social outings"
      ]
    }
  ];

  return (
    <main className="flex-1 bg-cream pb-16">
      {/* Header */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">Programs and supports for our community</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 max-w-3xl mx-auto px-4 text-center">
        <p className="text-lg text-charcoal leading-relaxed">
          Second Step Community Services offers a range of free and low-cost bilingual programs designed to support seniors, youth, and newcomers in Markham and GTA. From mental wellness workshops and Tai Chi to digital literacy training and cultural celebrations, our programs are built around the belief that strong communities grow when generations connect.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              description={service.description}
              bullets={service.bullets}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-light py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-xl font-medium text-charcoal mb-6">
            Interested in joining a program? Get in touch and we&apos;ll help you find the right fit.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-primary-dark transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
