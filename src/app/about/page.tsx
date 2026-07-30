import { Metadata } from "next";
import { boardMembers } from "@/data/boardMembers";
import BoardMemberCard from "@/components/BoardMemberCard";
import { Users, Heart, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: 'About Us | SSCS',
  description: 'Learn about Second Step Community Services — our vision, mission, and the team behind our programs.',
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-cream pb-20">
      {/* Header */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        </div>
      </section>

      {/* Intro Blurb */}
      <section className="py-12 max-w-3xl mx-auto px-4 text-center">
        <p className="text-xl text-charcoal leading-relaxed font-medium">
          Second Step Community Services is a non-profit based in Markham, Ontario. We are dedicated to improving the quality of life for seniors, youth, and newcomers through bilingual programming and meaningful community connection.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-border border-t-[4px] border-t-primary">
            <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">Vision</span>
            <p className="text-lg text-charcoal leading-relaxed font-display">
              &quot;To create a safe, inclusive, and multi-generational environment where both seniors and youth can learn, connect, and thrive, ensuring a resilient and socially connected community in the Markham area.&quot;
            </p>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-border border-t-[4px] border-t-primary">
            <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">Mission</span>
            <p className="text-lg text-charcoal leading-relaxed font-display">
              &quot;To improve the quality of life for residents—specifically seniors, youth, and newcomers—by providing bilingual educational programs, mental wellness advocacy, and social activities that bridge generational gaps and encourage active community participation.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mb-4">
              <Users size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-charcoal">Inclusivity</h3>
            <p className="text-mid">Every voice belongs, in English and Chinese.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mb-4">
              <Heart size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-charcoal">Connection</h3>
            <p className="text-mid">We believe community is built one relationship at a time.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mb-4">
              <Lightbulb size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-charcoal">Empowerment</h3>
            <p className="text-mid">We equip people with skills to lead and contribute.</p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Board of Directors</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {boardMembers.map((member, idx) => (
            <BoardMemberCard key={idx} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
