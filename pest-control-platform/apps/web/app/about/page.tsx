import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { siteConfig } from "@/config/site.config";

const STATS = [
  { value: `${siteConfig.rating}★`, label: "Google Rating" },
  { value: `${siteConfig.reviewCount}+`, label: "Happy Customers" },
  { value: "10+", label: "Years Experience" },
  { value: "30", label: "Day Warranty" },
];

const CERTIFICATIONS = [
  { icon: "🏛️", title: "Govt. Certified", desc: "Licensed by UP & Delhi pest control authorities" },
  { icon: "🧪", title: "WHO-Approved Chemicals", desc: "Only safe, approved pesticides with MSDS sheets" },
  { icon: "🛡️", title: "Fully Insured", desc: "Liability insurance on every job" },
  { icon: "📋", title: "Audit-Ready Docs", desc: "Treatment certificates for restaurants, hospitals & offices" },
];

const VALUES = [
  { icon: "🤝", title: "Honest Pricing", desc: "You get a quote before we start. No surprises after." },
  { icon: "🔬", title: "Science-Backed", desc: "We use the right chemical for the right pest — not a one-size spray." },
  { icon: "👨‍👩‍👧", title: "Family Safe", desc: "All treatments follow re-entry times. We brief you before we leave." },
  { icon: "🔁", title: "We Stand Behind Our Work", desc: "If pests return within 30 days, we come back. Free." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050d1a]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-5">
          <div className="max-w-4xl mx-auto">
            <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Delhi NCR&apos;s Most Trusted<br />Pest Control Service
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              {siteConfig.name} has been protecting homes and businesses across {siteConfig.cities.join(", ")} for over a decade.
              We started with one mission: pest control that is safe for your family, honest in pricing, and actually works.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="px-5 pb-16">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map(stat => (
              <div key={stat.label} className="glass rounded-2xl p-5 text-center">
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-white/40 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="px-5 pb-20">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-white/60 text-sm leading-relaxed">
              <p>
                We started as a small operation in Ghaziabad, serving residential customers in Govindpuram and Shatabdi Puram.
                Word spread — not because of marketing, but because we showed up on time, explained what we were doing, and the pests didn&apos;t come back.
              </p>
              <p>
                Today we serve all of Delhi NCR — Delhi, Noida, and Ghaziabad — with the same values: no shortcuts, no upselling, no fine print on warranties.
                Every technician is trained in-house, background verified, and equipped with WHO-approved chemicals.
              </p>
              <p>
                With {siteConfig.reviewCount}+ Google reviews at {siteConfig.rating}★, we let our customers do the talking.
              </p>
            </div>
            <div className="glass rounded-3xl p-8 space-y-4">
              <div className="text-white font-bold mb-2">Why customers choose us</div>
              {VALUES.map(v => (
                <div key={v.title} className="flex gap-3">
                  <span className="text-xl shrink-0">{v.icon}</span>
                  <div>
                    <div className="text-white text-sm font-semibold">{v.title}</div>
                    <div className="text-white/50 text-xs mt-0.5">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white/3 border-y border-white/5 py-16 px-5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-3">Licensed &amp; Certified</p>
              <h2 className="text-2xl font-extrabold text-white">You&apos;re in safe hands</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map(cert => (
                <div key={cert.title} className="glass rounded-2xl p-5 flex gap-4">
                  <span className="text-2xl shrink-0">{cert.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm">{cert.title}</div>
                    <div className="text-white/50 text-xs mt-1">{cert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-5 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Ready to get pest-free?</h2>
          <p className="text-white/50 text-sm mb-8">Free inspection. No pressure. Confirmation in 30 minutes.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/booking"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full cta-glow transition-all text-sm">
              📅 Book Free Inspection
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="glass text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all text-sm">
              💬 WhatsApp Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
