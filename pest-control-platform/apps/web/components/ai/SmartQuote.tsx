"use client";
import { useState } from "react";

export default function SmartQuote() {
  const [quote, setQuote] = useState<{ priceRange: string; inclusions: string[]; duration: string } | null>(null);
  const [form, setForm] = useState({ propertyType: "", pestType: "", city: "" });
  const [loading, setLoading] = useState(false);

  async function getQuote() {
    if (!form.propertyType || !form.pestType) return;
    setLoading(true);
    try {
      const res = await fetch("/api/ai/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setQuote(await res.json());
    } finally {
      setLoading(false);
    }
  }

  if (quote) {
    return (
      <div className="space-y-3">
        <div className="text-white/80 font-semibold text-sm">Your Instant Estimate</div>
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
          <div className="text-2xl font-extrabold text-white">{quote.priceRange}</div>
          <div className="text-white/50 text-xs mt-0.5">Duration: {quote.duration}</div>
        </div>
        <ul className="space-y-1">
          {quote.inclusions.map(inc => (
            <li key={inc} className="text-white/60 text-xs flex items-center gap-2">
              <span className="text-green-400">✓</span> {inc}
            </li>
          ))}
        </ul>
        <a
          href="/booking"
          className="block w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3.5 rounded-xl cta-glow transition-all text-sm text-center"
        >
          Book Now →
        </a>
        <button
          onClick={() => setQuote(null)}
          className="block w-full text-white/30 text-xs hover:text-white/50 transition-colors text-center"
        >
          ← Get a different quote
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="text-white/80 font-semibold text-sm mb-1">Get Instant Quote</div>
      <select
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
        value={form.propertyType}
        onChange={e => setForm({ ...form, propertyType: e.target.value })}
      >
        <option value="" className="bg-gray-900">Property type</option>
        <option className="bg-gray-900">1 BHK</option>
        <option className="bg-gray-900">2 BHK</option>
        <option className="bg-gray-900">3 BHK</option>
        <option className="bg-gray-900">Office / Commercial</option>
      </select>
      <select
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
        value={form.pestType}
        onChange={e => setForm({ ...form, pestType: e.target.value })}
      >
        <option value="" className="bg-gray-900">Select pest problem</option>
        <option className="bg-gray-900">🪳 Cockroach</option>
        <option className="bg-gray-900">🐛 Termite</option>
        <option className="bg-gray-900">🛏️ Bedbug</option>
        <option className="bg-gray-900">🦟 Mosquito</option>
        <option className="bg-gray-900">🐀 Rodent</option>
      </select>
      <button
        onClick={getQuote}
        disabled={loading || !form.propertyType || !form.pestType}
        className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl cta-glow transition-all text-sm"
      >
        {loading ? "Getting Quote..." : "Get Instant Quote →"}
      </button>
      <p className="text-center text-white/30 text-xs">No spam. We confirm in 30 minutes.</p>
    </div>
  );
}
