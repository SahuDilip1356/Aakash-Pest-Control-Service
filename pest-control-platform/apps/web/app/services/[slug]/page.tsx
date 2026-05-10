import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site.config";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ServicePackages from "@/components/sections/ServicePackages";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.name} Control in ${siteConfig.cities[0]} | ${siteConfig.name}`,
    description: `${service.name} control in ${siteConfig.cities.join(", ")}. ${service.description} ${siteConfig.rating}★ on Google. 30-day warranty.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="relative bg-[#050d1a] pt-32 pb-20 px-5 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="text-7xl mb-6">{service.icon}</div>
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">{service.name} Control</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              {service.name} Control in<br />
              <span className="gradient-text">{siteConfig.cities.join(" · ")}</span>
            </h1>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {service.description} {siteConfig.reviewCount}+ happy customers. AI-powered identification.
              30-day warranty on every treatment.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="/booking" className="bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full cta-glow transition-all text-sm">
                📅 Book Free Inspection
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="glass text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all text-sm">
                💬 Get Quote on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#070f1e] py-20 px-5">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-white font-bold text-lg mb-2">Free Inspection</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Trained technician assesses the infestation and confirms scope before any work begins.
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-white font-bold text-lg mb-2">Safe Treatment</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                WHO-approved chemicals, safe for children and pets after 2–4 hours of ventilation.
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-white font-bold text-lg mb-2">30-Day Warranty</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                If pests return within 30 days, we re-treat free of charge. No questions asked.
              </p>
            </div>
          </div>
        </section>

        <ServicePackages />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
