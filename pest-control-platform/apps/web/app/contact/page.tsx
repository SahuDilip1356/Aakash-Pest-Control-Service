"use client";
import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { siteConfig } from "@/config/site.config";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", mobile: "", message: "" });
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Pre-fill a WhatsApp message with the form details
    const text = encodeURIComponent(`Hi, I'm ${form.name} (${form.mobile}).\n\n${form.message}`);
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050d1a]">
        {/* Hero */}
        <section className="pt-32 pb-12 px-5 text-center">
          <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Call, WhatsApp, or fill the form — we respond within 30 minutes.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-5 pb-20 grid md:grid-cols-2 gap-8">
          {/* Contact details */}
          <div className="space-y-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-green-500/20 border border-white/5 transition-all group"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">📞</div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Call Us</div>
                <div className="text-white font-bold text-lg group-hover:text-green-400 transition-colors">{siteConfig.phone}</div>
                <div className="text-white/30 text-xs">Mon–Sun, 8 AM – 8 PM</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I need pest control help`}
              target="_blank" rel="noopener noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-green-500/20 border border-white/5 transition-all group"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">💬</div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">WhatsApp</div>
                <div className="text-white font-bold text-lg group-hover:text-green-400 transition-colors">Chat with us</div>
                <div className="text-white/30 text-xs">Fastest response — usually under 10 min</div>
              </div>
            </a>

            <a
              href={siteConfig.mapsUrl}
              target="_blank" rel="noopener noreferrer"
              className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-green-500/20 border border-white/5 transition-all group"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0 mt-0.5">📍</div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Address</div>
                <div className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors leading-relaxed">{siteConfig.address}</div>
                <div className="text-white/30 text-xs mt-1">Open in Google Maps →</div>
              </div>
            </a>

            <div className="glass rounded-2xl p-5 flex items-center gap-4 border border-white/5">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">🗺️</div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Service Areas</div>
                <div className="text-white font-semibold text-sm">{siteConfig.cities.join(" · ")}</div>
                <div className="text-white/30 text-xs mt-0.5">Same-day available in most areas</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass rounded-3xl p-7">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-8">
                <div className="text-5xl">💬</div>
                <h3 className="text-white font-bold text-lg">Opening WhatsApp...</h3>
                <p className="text-white/50 text-sm">Your message has been pre-filled. Just hit Send in WhatsApp.</p>
                <button onClick={() => setSent(false)} className="text-white/30 text-xs hover:text-white/60 transition-colors mt-2">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-white font-bold text-lg mb-1">Send us a message</h2>
                <p className="text-white/40 text-xs mb-6">We&apos;ll reply on WhatsApp within 30 minutes</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-green-500/50 transition-colors"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-green-500/50 transition-colors"
                    placeholder="Mobile Number"
                    value={form.mobile}
                    onChange={e => setForm({ ...form, mobile: e.target.value })}
                    required
                  />
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                    placeholder="Tell us about your pest problem, area, and preferred time..."
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl cta-glow transition-all text-sm"
                  >
                    Send via WhatsApp →
                  </button>
                  <p className="text-center text-white/25 text-xs">Opens WhatsApp with your message pre-filled</p>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
