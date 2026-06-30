import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-12 pb-6 border-t-[0.5px] border-charcoal mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          
          {/* Column 1: About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-xl">SSCS</span>
            </div>
            <p className="text-sm opacity-80 max-w-sm">
              &quot;Journey of a thousand miles starts with the first step&quot;
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=61572465541465" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* WeChat icon (no link) */}
              <div aria-label="WeChat" title="WeChat: lilyliu_toronto" className="hover:opacity-80 transition-opacity cursor-help">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"></path><path d="M10 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path></svg>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-lg mb-2">Quick Links</h4>
            <Link href="/" className="text-sm opacity-80 hover:opacity-100 hover:text-primary-light transition-colors w-fit">Home</Link>
            <Link href="/events" className="text-sm opacity-80 hover:opacity-100 hover:text-primary-light transition-colors w-fit">Events</Link>
            <Link href="/services" className="text-sm opacity-80 hover:opacity-100 hover:text-primary-light transition-colors w-fit">Services</Link>
            <Link href="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-primary-light transition-colors w-fit">About</Link>
            <Link href="/donate" className="text-sm opacity-80 hover:opacity-100 hover:text-primary-light transition-colors w-fit">Donate</Link>
            <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-primary-light transition-colors w-fit">Contact</Link>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-lg mb-2">Contact</h4>
            <p className="text-sm opacity-80 flex items-center gap-2">
               secondstepcs@gmail.com
            </p>
            <p className="text-sm opacity-80 flex items-center gap-2">
               WeChat: lilyliu_toronto
            </p>
            <p className="text-sm opacity-80 flex items-center gap-2 mt-2">
               Markham, Ontario<br />Greater Toronto Area
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60 text-center">
          <p>© {new Date().getFullYear()} Second Step Community Services. All rights reserved.</p>
          {/* TODO: Add CRA charity registration number once available */}
          <p>Registered non-profit. Tax receipts issued for eligible donations.</p>
        </div>
      </div>
    </footer>
  );
}
