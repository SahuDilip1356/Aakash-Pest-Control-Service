"use client";
import { useState } from "react";

interface TimeSlotGridProps {
  slots: string[];
  onSelect: (slot: string) => void;
}

export default function TimeSlotGrid({ slots, onSelect }: TimeSlotGridProps) {
  const [selected, setSelected] = useState("");

  if (slots.length === 0) {
    return <p className="text-white/40 text-sm">No slots available. Please choose another date.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {slots.map(slot => (
        <button
          key={slot}
          onClick={() => { setSelected(slot); onSelect(slot); }}
          className={`py-2.5 rounded-xl text-sm font-medium transition-all border
            ${selected === slot
              ? "bg-green-500 border-green-500 text-white"
              : "bg-white/5 border-white/10 text-white/70 hover:border-green-500/50 hover:text-white"
            }`}
        >
          {slot}
        </button>
      ))}
    </div>
  );
}
