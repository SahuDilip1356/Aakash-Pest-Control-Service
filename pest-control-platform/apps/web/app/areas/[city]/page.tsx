import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site.config";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicePackages from "@/components/sections/ServicePackages";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return areas.map(a => ({ city: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const area = areas.find(a => a.slug === city);
  if (!area) return { title: "Area Not Found" };
  return {
    title: `${area.headline} | ${siteConfig.name}`,
    description: area.description,
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const area = areas.find(a => a.slug === city);
  if (!area) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="relative bg-[#050d1a] pt-32 pb-20 px-5 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">📍 Service Area</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Pest Control in<br />
              <span className="gradient-text">{area.city}</span>
            </h1>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{area.description}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="/booking" className="bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full cta-glow transition-all text-sm">
                📅 Book Free Inspection
              </a>
              <a href={`tel:${siteConfig.phone}`}
                className="glass text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all text-sm">
                📞 {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="bg-[#070f1e] py-20 px-5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Services Available</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Pest Control Services in {area.city}</h2>
              <p className="text-white/40 mt-3">All services available across {area.city} with same-day inspection</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {services.map(s => (
                <a key={s.slug} href={`/services/${s.slug}`}
                  className="group glass rounded-2xl p-5 flex flex-col items-center gap-2 text-center hover:bg-green-500/10 hover:border-green-500/30 transition-all">
                  <span className="text-4xl group-hover:scale-110 transition-transform">{s.icon}</span>
                  <span className="text-white font-semibold text-sm">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <ServicePackages />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
