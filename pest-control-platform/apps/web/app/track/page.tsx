"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type BookingStatus = {
  bookingId: string;
  status: string;
  pestType: string;
  technicianName: string;
  eta: string;
};

function getMockStatus(id: string): BookingStatus {
  return {
    bookingId: id,
    status: "Confirmed",
    pestType: "General Pest Control",
    technicianName: "Ravi Kumar",
    eta: "Technician will WhatsApp you 30 minutes before arrival",
  };
}

const STATUS_COLORS: Record<string, string> = {
  Confirmed: "text-green-400",
  "En Route": "text-yellow-400",
  Completed: "text-blue-400",
  Pending: "text-white/50",
};

function TrackContent() {
  const params = useSearchParams();
  const [bookingId, setBookingId] = useState(params.get("id") ?? "");
  const [result, setResult] = useState<BookingStatus | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const id = params.get("id");
    if (id) lookup(id.toUpperCase());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function lookup(id: string) {
    if (!id.startsWith("APC-")) {
      setNotFound(true);
      setResult(null);
      return;
    }
    setNotFound(false);
    setResult(getMockStatus(id));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    lookup(bookingId.trim().toUpperCase());
  }

  return (
    <main className="min-h-screen bg-[#050d1a] flex flex-col items-center pt-24 pb-16 px-5">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-2">Booking Tracker</p>
          <h1 className="text-3xl font-extrabold text-white">Track Your Service</h1>
          <p className="text-white/40 text-sm mt-2">Enter your booking ID (from your confirmation)</p>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-2xl p-4 flex gap-3">
          <input
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-green-500/50 uppercase tracking-wider"
            placeholder="e.g. APC-20260509-1234"
            value={bookingId}
            onChange={e => setBookingId(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-400 text-white font-bold px-5 rounded-xl text-sm transition-all"
          >
            Track →
          </button>
        </form>

        {notFound && (
          <div className="mt-6 glass rounded-2xl p-5 text-center">
            <p className="text-white/50 text-sm mb-1">
              No booking found for <span className="text-white font-semibold">{bookingId}</span>
            </p>
            <p className="text-white/30 text-xs">Booking IDs start with APC- — check your WhatsApp confirmation</p>
          </div>
        )}

        {result && (
          <div className="mt-6 glass rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white/40 text-xs uppercase tracking-widest">Booking ID</span>
              <span className="text-white font-bold text-sm">{result.bookingId}</span>
            </div>
            <div className="h-px bg-white/5" />
            <div className="flex items-center justify-between">
              <span className="text-white/40 text-xs uppercase tracking-widest">Status</span>
              <span className={`font-bold text-sm ${STATUS_COLORS[result.status] ?? "text-white"}`}>
                ● {result.status}
              </span>
            </div>
            <div className="h-px bg-white/5" />
            <div className="flex items-center justify-between">
              <span className="text-white/40 text-xs uppercase tracking-widest">Service</span>
              <span className="text-white text-sm">{result.pestType}</span>
            </div>
            <div className="h-px bg-white/5" />
            <div className="flex items-center justify-between">
              <span className="text-white/40 text-xs uppercase tracking-widest">Technician</span>
              <span className="text-white text-sm">{result.technicianName}</span>
            </div>
            <div className="h-px bg-white/5" />
            <p className="text-white/40 text-xs pt-1">{result.eta}</p>
          </div>
        )}

        <p className="text-center mt-8 text-white/20 text-xs">
          Need help?{" "}
          <a href="https://wa.me/919971859615" className="text-green-400 hover:underline">
            WhatsApp us →
          </a>
        </p>
      </div>
    </main>
  );
}

export default function TrackPage() {
  return (
    <Suspense>
      <TrackContent />
    </Suspense>
  );
}
