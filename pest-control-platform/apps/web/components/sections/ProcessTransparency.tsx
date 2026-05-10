const steps = [
  { num: "01", icon: "📅", title: "Book in 60 Seconds", desc: "Choose date and time online. WhatsApp confirmation within 30 minutes." },
  { num: "02", icon: "🧑‍🔬", title: "Technician Arrives", desc: "Verified tech arrives on time with ID card and all equipment." },
  { num: "03", icon: "🧪", title: "Safe Treatment", desc: "WHO-approved chemicals applied. Safe for children and pets after 2–4 hours." },
  { num: "04", icon: "🛡️", title: "30-Day Warranty", desc: "Pests return? We re-treat free of charge. No questions asked." },
];

export default function ProcessTransparency() {
  return (
    <section className="bg-[#070f1e] py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Transparency</p>
          <h2 className="text-4xl font-extrabold text-white">How It Works</h2>
          <p className="text-white/40 mt-3">No surprises. You know exactly what happens at every step.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className="relative glass rounded-2xl p-7">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 text-white/10 text-2xl">→</div>
              )}
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="text-green-400 font-mono text-xs font-bold mb-2">{s.num}</div>
              <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Chemical safety strip */}
        <div className="mt-10 glass rounded-2xl p-6 flex flex-wrap gap-6 items-center justify-between">
          <div>
            <p className="text-white font-semibold mb-1">Chemicals We Use</p>
            <p className="text-white/40 text-sm">WHO Class II certified · Safe after ventilation · Full disclosure on request</p>
          </div>
          <div className="flex gap-4">
            {["👶 Child Safe", "🐾 Pet Safe", "🌿 Low Odour"].map(badge => (
              <span key={badge} className="bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
