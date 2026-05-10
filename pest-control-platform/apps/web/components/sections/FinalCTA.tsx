import { siteConfig } from "@/config/site.config";

export default function FinalCTA() {
  return (
    <section className="bg-green-600 py-20 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-green-100/70 text-xs font-semibold uppercase tracking-widest mb-5">
          Pest-Free Home, Guaranteed
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          Done with pests?<br />Book your free inspection.
        </h2>
        <p className="text-green-100/70 text-lg mb-10 max-w-xl mx-auto">
          {siteConfig.reviewCount}+ happy customers across {siteConfig.cities.join(", ")}.
          Same-day available. 30-day warranty on every service.
        </p>
        <a
          href="/booking"
          className="inline-block bg-white text-green-700 font-extrabold px-10 py-4 rounded-full text-base shadow-2xl hover:bg-green-50 transition-all"
        >
          📅 Book Free Inspection →
        </a>
        <p className="text-green-100/40 text-xs mt-5">
          No payment needed · Confirmation within 30 minutes
        </p>
      </div>
    </section>
  );
}
