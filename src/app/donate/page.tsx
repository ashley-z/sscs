import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Donate | SSCS',
  description: 'Support bilingual community programs for seniors, youth, and newcomers. Every dollar makes a difference.',
};

export default function DonatePage() {
  return (
    <main className="flex-1 bg-cream pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        
        {/* Hero Donation Section */}
        <section className="bg-charcoal text-white rounded-2xl p-8 md:p-16 text-center shadow-lg relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-dark"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Help us take the next step</h2>
            <p className="text-lg opacity-75 mb-10 leading-relaxed">
              Every dollar supports bilingual programs, mental wellness workshops, and activities that connect seniors, youth, and newcomers across Markham.
            </p>
            
            {/* Visual Amount Pills (Decorative) */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['$25', '$50', '$100', 'Other'].map((amount) => (
                <div key={amount} className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm font-medium">
                  {amount}
                </div>
              ))}
            </div>

            <a 
              href="https://www.zeffy.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-primary-dark hover:-translate-y-1 transition-all shadow-md hover:shadow-xl"
            >
              Donate Now
            </a>
            
            <p className="mt-8 text-xs opacity-50 max-w-md mx-auto">
              Second Step Community Services is a registered non-profit. Tax receipts are issued for eligible donations. (Registration number pending)
            </p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Your Impact</span>
            <div className="w-8 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-border flex items-start gap-4">
              <div className="font-display text-3xl text-primary font-bold shrink-0">$25</div>
              <p className="text-mid mt-1">Sponsors one senior&apos;s Tai Chi session for a month.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-border flex items-start gap-4">
              <div className="font-display text-3xl text-primary font-bold shrink-0">$50</div>
              <p className="text-mid mt-1">Funds one digital literacy workshop for newcomers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-border flex items-start gap-4">
              <div className="font-display text-3xl text-primary font-bold shrink-0">$100</div>
              <p className="text-mid mt-1">Covers materials for a mental wellness workshop.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-border flex items-start gap-4">
              <div className="font-display text-3xl text-primary font-bold shrink-0">$200</div>
              <p className="text-mid mt-1">Helps underwrite a full community cultural celebration.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
