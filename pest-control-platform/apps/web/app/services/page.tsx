import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import { siteConfig } from "@/config/site.config";

const SERVICE_DETAILS: Record<string, { what: string; how: string; warranty: string }> = {
  "cockroach-control": {
    what: "Gel bait applied in cracks, crevices, and kitchen cabinets. Odourless spray for heavy infestations.",
    how: "Technician visits once. Safe to use kitchen same day.",
    warranty: "30-day re-treatment warranty",
  },
  "termite-control": {
    what: "Pre-construction anti-termite treatment or post-construction drilling & chemical injection.",
    how: "2–4 hour treatment. Minimal disruption. Documentation provided.",
    warranty: "1-year warranty on post-construction treatment",
  },
  "bedbug-control": {
    what: "Heat treatment combined with residual chemical spray to break the bedbug lifecycle.",
    how: "2 visits included — initial treatment + follow-up after 10 days.",
    warranty: "30-day warranty with 2 visits",
  },
  "mosquito-control": {
    what: "ULV fogging + larvicide treatment to eliminate breeding sites.",
    how: "Indoor + outdoor treatment. Safe for children and pets after 2 hours.",
    warranty: "15-day re-treatment warranty",
  },
  "rodent-control": {
    what: "Bait stations, glue traps, and entry-point sealing to eliminate and prevent rodents.",
    how: "Initial visit + follow-up after 7 days to check traps.",
    warranty: "Monthly AMC plans available",
  },
  "lizard-control": {
    what: "Safe repellent spray along walls, ceilings, and entry points.",
    how: "Single visit. No harm to pets or children.",
    warranty: "15-day re-treatment warranty",
  },
  "ant-control": {
    what: "Targeted gel bait treatment to eliminate ant colonies at the source.",
    how: "Single visit. Gel works within 3–5 days.",
    warranty: "15-day re-treatment warranty",
  },
  "commercial-pest": {
    what: "Comprehensive pest management for restaurants, offices, warehouses, and societies.",
    how: "Monthly or quarterly AMC contracts with documentation for audits.",
    warranty: "AMC contract — unlimited visits",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050d1a]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-5 text-center">
          <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-3">What We Treat</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            All Pest Control Services
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Safe, certified treatments for homes, offices, and societies across {siteConfig.cities.join(", ")}.
          </p>
        </section>

        {/* Services grid */}
        <section className="max-w-6xl mx-auto px-5 pb-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map(service => {
            const detail = SERVICE_DETAILS[service.slug];
            return (
              <div key={service.slug} className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-green-500/20 transition-all border border-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg">{service.name} Control</h2>
                    <p className="text-white/50 text-sm mt-0.5">{service.description}</p>
                  </div>
                </div>
                {detail && (
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <div className="flex gap-2 text-sm">
                      <span className="text-green-400 shrink-0">▸</span>
                      <span className="text-white/60">{detail.what}</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-green-400 shrink-0">▸</span>
                      <span className="text-white/60">{detail.how}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full mt-1">
                      🛡️ {detail.warranty}
                    </div>
                  </div>
                )}
                <a
                  href={`/booking?pestType=${encodeURIComponent(service.icon + " " + service.name)}`}
                  className="mt-auto block text-center bg-white/5 hover:bg-green-500 border border-white/10 hover:border-green-500 text-white/70 hover:text-white font-semibold py-2.5 rounded-xl text-sm transition-all"
                >
                  Book {service.name} Treatment →
                </a>
              </div>
            );
          })}
        </section>

        {/* Pricing strip */}
        <section className="bg-white/3 border-y border-white/5 py-16 px-5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-3">Transparent Pricing</p>
              <h2 className="text-3xl font-extrabold text-white">Rates by Property Size</h2>
              <p className="text-white/40 text-sm mt-2">All prices include materials, labour, and warranty. No hidden charges.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {packages.map(pkg => (
                <div key={pkg.id} className={`rounded-2xl p-4 text-center border transition-all ${pkg.popular ? "bg-green-500/10 border-green-500/30" : "glass border-white/5"}`}>
                  {pkg.popular && (
                    <div className="text-green-400 text-xs font-semibold mb-2">Most Popular</div>
                  )}
                  <div className="text-white font-bold text-sm mb-1">{pkg.name}</div>
                  <div className="text-white/40 text-xs mb-3">{pkg.description}</div>
                  <div className="text-green-400 font-extrabold text-sm">{pkg.price}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-white/30 text-xs mt-6">
              Final price depends on pest type and infestation level. Use the Smart Quote on the homepage for an instant estimate.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-5 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-4">Not sure which service you need?</h2>
          <p className="text-white/50 text-sm mb-8">Our technician will assess your home and recommend the right treatment — free of charge.</p>
          <a href="/booking"
            className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full cta-glow transition-all text-sm">
            Book Free Inspection →
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
