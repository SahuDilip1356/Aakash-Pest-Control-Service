import { siteConfig } from "@/config/site.config";

const trust = [
  { icon: "🧑‍🔬", label: "Certified Technicians" },
  { icon: "✅", label: "WHO-Approved Chemicals" },
  { icon: "🛡️", label: "30-Day Warranty" },
  { icon: "⚡", label: "Same-Day Service" },
  { icon: "⭐", label: `${siteConfig.rating}★ on Google` },
  { icon: "🤖", label: "AI-Powered ID" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#070f1e] border-y border-white/5 py-5">
      <div className="max-w-6xl mx-auto px-5 flex flex-wrap justify-center gap-8">
        {trust.map(item => (
          <div key={item.label} className="flex items-center gap-2.5 text-white/60 text-sm font-medium">
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
