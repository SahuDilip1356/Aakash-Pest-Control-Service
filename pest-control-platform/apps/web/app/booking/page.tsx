"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BookingSteps from "@/components/booking/BookingSteps";
import { trackBookingStarted } from "@/lib/analytics";

const PEST_TYPES = ["🪳 Cockroach", "🐛 Termite / Dimak", "🛏️ Bedbug", "🦟 Mosquito", "🐀 Rodent", "Other"];
const PROPERTY_TYPES = ["1 BHK", "2 BHK", "3 BHK", "Office / Shop", "Restaurant", "Society / RWA"];

export default function BookingPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", mobile: "", pestType: "", propertyType: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    trackBookingStarted(form.pestType);
    const params = new URLSearchParams(form);
    router.push(`/booking/schedule?${params.toString()}`);
  }

  return (
    <main className="min-h-screen bg-[#050d1a] flex flex-col items-center pt-24 pb-16 px-5">
      <div className="w-full max-w-xl">
        <a href="/" className="text-white/30 text-xs hover:text-white/60 transition-colors mb-8 inline-block">← Back to home</a>
        <BookingSteps current={1} />
        <div className="mt-8 glass rounded-3xl p-8">
          <h1 className="text-2xl font-extrabold text-white mb-1">Select Your Service</h1>
          <p className="text-white/40 text-sm mb-6">Fill in the details and we&apos;ll show available slots next</p>
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
            <select
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/70 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
              value={form.pestType}
              onChange={e => setForm({ ...form, pestType: e.target.value })}
              required
            >
              <option value="" className="bg-gray-900">Select Pest Type</option>
              {PEST_TYPES.map(p => <option key={p} className="bg-gray-900">{p}</option>)}
            </select>
            <select
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/70 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
              value={form.propertyType}
              onChange={e => setForm({ ...form, propertyType: e.target.value })}
              required
            >
              <option value="" className="bg-gray-900">Property Type</option>
              {PROPERTY_TYPES.map(p => <option key={p} className="bg-gray-900">{p}</option>)}
            </select>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl cta-glow transition-all text-base"
            >
              Choose Date &amp; Time →
            </button>
            <p className="text-center text-white/25 text-xs">No payment needed. Confirmation via WhatsApp in 30 min.</p>
          </form>
        </div>
      </div>
    </main>
  );
}
