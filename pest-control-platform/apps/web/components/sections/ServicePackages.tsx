import { packages } from "@/data/packages";

export default function ServicePackages() {
  return (
    <section className="bg-[#050d1a] py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl font-extrabold text-white">Simple, Transparent Packages</h2>
          <p className="text-white/40 mt-3">No hidden charges. Price confirmed before we arrive.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map(pkg => (
            <div key={pkg.id}
              className={`relative rounded-2xl p-7 border transition-all ${pkg.popular
                ? "bg-green-500/10 border-green-500/40 shadow-[0_0_40px_rgba(34,197,94,0.12)]"
                : "glass border-white/10 hover:border-white/20"}`}>
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-white font-bold text-xl mb-1">{pkg.name}</h3>
              <p className="text-white/40 text-sm mb-5">{pkg.description}</p>
              <p className="text-3xl font-extrabold text-green-400 mb-6">{pkg.price}</p>
              <ul className="text-white/50 text-xs space-y-1.5 mb-6">
                <li>✓ Certified technician</li>
                <li>✓ WHO-approved chemicals</li>
                <li>✓ 30-day warranty</li>
                <li>✓ Same-day available</li>
              </ul>
              <a href="/booking"
                className={`block text-center font-semibold py-3 rounded-xl text-sm transition-all ${pkg.popular
                  ? "bg-green-500 hover:bg-green-400 text-white cta-glow"
                  : "border border-white/20 text-white hover:bg-white/5"}`}>
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
