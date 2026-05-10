"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Book" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050d1a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between gap-3">
        <a href="/" className="flex items-center gap-2.5 min-w-0 shrink">
          <img src={siteConfig.logo.icon} alt={`${siteConfig.name} logo`} width={32} height={32} className="w-8 h-8 shrink-0" />
          <span className="text-white font-bold text-sm sm:text-lg leading-tight truncate">{siteConfig.name}</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="hover:text-green-400 transition-colors">{link.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a href={`tel:${siteConfig.phone}`}
            className="bg-green-500 hover:bg-green-400 text-white text-xs sm:text-sm font-bold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full cta-glow transition-all whitespace-nowrap">
            <span className="sm:hidden">📞 Call</span>
            <span className="hidden sm:inline">📞 Call Now</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-[#050d1a]/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-5 py-2 flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3.5 text-white font-medium hover:text-green-400 transition-colors ${i < NAV_LINKS.length - 1 ? "border-b border-white/5" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
