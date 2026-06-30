"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white border-b-2 border-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="SSCS Logo" width={44} height={44} className="h-10 w-10 md:h-11 md:w-11 object-contain" />
            <span className="font-display font-bold text-lg md:text-xl text-charcoal">
              Second Step Community Services
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[16px] font-medium transition-colors border-b-2 ${isActive ? "text-primary border-primary" : "text-mid border-transparent hover:text-primary hover:border-primary-light"
                    } py-1 mt-1`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/donate"
              className="bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors ml-2"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border shadow-md absolute w-full">
          <div className="flex flex-col px-4 pt-2 pb-6 gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium px-4 py-3 rounded-md ${isActive ? "bg-primary-light text-primary" : "text-charcoal hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white px-4 py-3 rounded-md font-medium text-center mt-2"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
