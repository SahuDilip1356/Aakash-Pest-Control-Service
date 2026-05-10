import { siteConfig } from "@/config/site.config";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050d1a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <img src={siteConfig.logo.icon} alt={`${siteConfig.name} logo`} width={32} height={32} className="w-8 h-8" />
          <span className="text-white font-bold text-lg leading-tight">{siteConfig.name}</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70">
          <a href="/services" className="hover:text-green-400 transition-colors">Services</a>
          <a href="#book" className="hover:text-green-400 transition-colors">Book</a>
          <a href="/about" className="hover:text-green-400 transition-colors">About</a>
          <a href="/contact" className="hover:text-green-400 transition-colors">Contact</a>
        </nav>
        <a href={`tel:${siteConfig.phone}`}
          className="relative bg-green-500 hover:bg-green-400 text-white text-sm font-bold px-5 py-2.5 rounded-full cta-glow transition-all">
          📞 Call Now
        </a>
      </div>
    </header>
  );
}
