import { siteConfig } from "@/config/site.config";
import SmartQuote from "@/components/ai/SmartQuote";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050d1a] flex items-center overflow-hidden pt-20">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            AI-Powered Pest Control · Same-Day Available
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            Pest-Free Homes<br />
            <span className="gradient-text">Guaranteed.</span>
          </h1>

          <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
            Delhi NCR&apos;s most trusted pest control. {siteConfig.reviewCount}+ happy customers.
            AI-powered identification, transparent treatment, 30-day warranty.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="/booking"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full cta-glow transition-all text-sm"
            >
              📅 Book Free Inspection
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all text-sm"
            >
              💬 WhatsApp Us
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-white">{siteConfig.rating}★</div>
              <div className="text-xs text-white/40">Google Rating</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-white">{siteConfig.reviewCount}+</div>
              <div className="text-xs text-white/40">Happy Customers</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-white">30</div>
              <div className="text-xs text-white/40">Day Warranty</div>
            </div>
          </div>
        </div>

        {/* Right: Smart Quote card */}
        <div className="float">
          <div className="glass rounded-3xl p-8">
            <SmartQuote />
          </div>
        </div>
      </div>
    </section>
  );
}
