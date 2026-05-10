import { services } from "@/data/services";

export default function PestSelector() {
  return (
    <section className="bg-[#070f1e] py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">What&apos;s bothering you?</p>
          <h2 className="text-4xl font-extrabold text-white">Select Your Pest Problem</h2>
          <p className="text-white/40 mt-3 max-w-md mx-auto">We&apos;ll show you the exact treatment, cost, and timeline — instantly.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {services.map(s => (
            <a key={s.slug} href={`/services/${s.slug}`}
              className="group glass rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:bg-green-500/10 hover:border-green-500/30 transition-all cursor-pointer">
              <span className="text-5xl group-hover:scale-110 transition-transform duration-200">{s.icon}</span>
              <span className="text-white font-semibold text-sm">{s.name}</span>
              <span className="text-white/40 text-xs leading-relaxed">{s.description.split(".")[0]}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
