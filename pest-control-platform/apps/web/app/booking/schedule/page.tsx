"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BookingSteps from "@/components/booking/BookingSteps";
import CalendarPicker from "@/components/booking/CalendarPicker";
import TimeSlotGrid from "@/components/booking/TimeSlotGrid";

function ScheduleContent() {
  const router = useRouter();
  const params = useSearchParams();
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  async function handleDateSelect(d: string) {
    setDate(d);
    setSlots([]);
    setLoadingSlots(true);
    const res = await fetch(`/api/calendar?date=${d}`);
    const data = await res.json();
    setSlots(data.slots ?? []);
    setLoadingSlots(false);
  }

  function handleSlotSelect(slot: string) {
    const next = new URLSearchParams(params.toString());
    next.set("date", date);
    next.set("slot", slot);
    router.push(`/booking/confirm?${next.toString()}`);
  }

  return (
    <main className="min-h-screen bg-[#050d1a] flex flex-col items-center pt-24 pb-16 px-5">
      <div className="w-full max-w-xl">
        <a href="/booking" className="text-white/30 text-xs hover:text-white/60 transition-colors mb-8 inline-block">← Back</a>
        <BookingSteps current={2} />
        <div className="mt-8 glass rounded-3xl p-8">
          <h1 className="text-2xl font-extrabold text-white mb-1">Choose Date &amp; Time</h1>
          <p className="text-white/40 text-sm mb-6">Pick a date to see available slots</p>
          <CalendarPicker onSelect={handleDateSelect} />
          {loadingSlots && (
            <p className="text-white/40 text-sm mt-6">Loading available slots...</p>
          )}
          {!loadingSlots && date && (
            <div className="mt-6">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Available Slots</p>
              <TimeSlotGrid slots={slots} onSelect={handleSlotSelect} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function SchedulePage() {
  return (
    <Suspense>
      <ScheduleContent />
    </Suspense>
  );
}
