"use client";

import { useState } from "react";
import { MapPin, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      topic: formData.get('topic'),
      message: formData.get('message'),
    };

    // Scaffolding for EmailJS or similar service
    // For now, we simulate a successful submission and use mailto as a fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Mailto fallback
      const subject = encodeURIComponent(`SSCS Website Inquiry: ${data.topic}`);
      const body = encodeURIComponent(`Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nTopic: ${data.topic}\n\nMessage:\n${data.message}`);
      window.location.href = `mailto:secondstepcs@gmail.com?subject=${subject}&body=${body}`;
      
      // Reset form (optional)
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main className="flex-1 bg-cream py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">Contact Us</h1>
          <p className="text-lg text-mid max-w-2xl mx-auto">We&apos;d love to hear from you. Reach out with any questions about our programs, volunteering, or partnerships.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          
          {/* Left Panel - Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">Get in touch</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-charcoal">Location</h4>
                    <p className="text-mid">Markham, Ontario<br/>Greater Toronto Area</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-charcoal">Email</h4>
                    <a href="mailto:secondstepcs@gmail.com" className="text-primary hover:underline">secondstepcs@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-charcoal">WeChat</h4>
                    <p className="text-mid select-all">lilyliu_toronto</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="font-bold text-charcoal mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61572465541465" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <div className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-colors cursor-help" aria-label="WeChat" title="WeChat: lilyliu_toronto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"></path><path d="M10 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-border">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-charcoal">First name</label>
                  <input required type="text" id="firstName" name="firstName" className="border border-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-charcoal">Last name</label>
                  <input required type="text" id="lastName" name="lastName" className="border border-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-charcoal">Email</label>
                <input required type="email" id="email" name="email" className="border border-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="topic" className="text-sm font-bold text-charcoal">Topic</label>
                <select required id="topic" name="topic" className="border border-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white appearance-none">
                  <option value="">Select a topic...</option>
                  <option value="General inquiry">General inquiry</option>
                  <option value="Program registration">Program registration</option>
                  <option value="Volunteer interest">Volunteer interest</option>
                  <option value="Donation">Donation</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-charcoal">Message</label>
                <textarea required id="message" name="message" rows={5} className="border border-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-800 p-4 rounded-md text-sm border border-green-200">
                  Thank you! Your email client should now open. If not, please email us directly at secondstepcs@gmail.com.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-800 p-4 rounded-md text-sm border border-red-200">
                  Something went wrong. Please email us directly at secondstepcs@gmail.com.
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-primary text-white py-3 rounded-md font-bold hover:bg-primary-dark transition-colors disabled:opacity-70 mt-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
