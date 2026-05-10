"use client";
import { useState } from "react";
import { trackBookingStarted } from "@/lib/analytics";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", mobile: "", location: "", pestType: "", propertyType: "", date: "" });
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    trackBookingStarted(form.pestType);
    await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSubmitted(true);
  }

  return (
    <section className="bg-[#050d1a] py-24 px-5" id="book">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Book Now</p>
          <h2 className="text-4xl font-extrabold text-white">Free Inspection in 60 Seconds</h2>
          <p className="text-white/40 mt-3">We confirm within 30 minutes via WhatsApp</p>
        </div>

        {submitted ? (
          <div className="glass rounded-3xl p-12 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-white text-2xl font-bold mb-2">Booking Received!</h3>
            <p className="text-white/50">We&apos;ll WhatsApp you a confirmation within 30 minutes.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-green-500/50 transition-colors"
              placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
            <input
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-green-500/50 transition-colors"
              placeholder="Mobile Number" value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} required />
            <input
              className="sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-green-500/50 transition-colors"
              placeholder="Your Area / Location (e.g. Govindpuram, Noida Sec 18)" value={form.location} onChange={e => setForm({...form, location: e.target.value})} required />
            <select
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/70 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
              value={form.pestType} onChange={e => setForm({...form, pestType: e.target.value})} required>
              <option value="" className="bg-gray-900">Select Pest Type</option>
              <option className="bg-gray-900">🪳 Cockroach</option>
              <option className="bg-gray-900">🐛 Termite / Dimak</option>
              <option className="bg-gray-900">🛏️ Bedbug</option>
              <option className="bg-gray-900">🦟 Mosquito</option>
              <option className="bg-gray-900">🐀 Rodent</option>
              <option className="bg-gray-900">Other</option>
            </select>
            <select
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/70 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
              value={form.propertyType} onChange={e => setForm({...form, propertyType: e.target.value})} required>
              <option value="" className="bg-gray-900">Property Type</option>
              <option className="bg-gray-900">1 BHK</option>
              <option className="bg-gray-900">2 BHK</option>
              <option className="bg-gray-900">3 BHK</option>
              <option className="bg-gray-900">Office / Shop</option>
              <option className="bg-gray-900">Restaurant</option>
              <option className="bg-gray-900">Society / RWA</option>
            </select>
            <input type="date"
              className="sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/70 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
              value={form.date} min={new Date().toISOString().split("T")[0]} onChange={e => setForm({...form, date: e.target.value})} required />
            <button type="submit"
              className="sm:col-span-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl cta-glow transition-all text-base">
              Book Free Inspection →
            </button>
            <p className="sm:col-span-2 text-center text-white/25 text-xs">No payment needed. Confirmation via WhatsApp in 30 min.</p>
          </form>
        )}
      </div>
    </section>
  );
}
